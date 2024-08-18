const fs	= require('fs');
const path	= require('path');

const projectPath = path.resolve(__dirname, '..');

const vars		= parseData();
const templates	= findTemplates();
const files		= mergeTemplates(templates, vars);

console.log(`Written ${files.length} files:`);
for (const file of files) {
	console.log(file);
}

function mergeTemplates(templates, vars) {
	const written = [];

	for (const templatePath of templates) {
		let templateContent = fs.readFileSync(templatePath, { encoding: 'utf8' });

		for (let [variable, value] of Object.entries(vars)) {
			templateContent = templateContent.replaceAll('${' + variable + '}', value);
		}

		const outputPath = templatePath.replace('.tpl', '.md', 1);
		fs.writeFileSync(outputPath, templateContent);

		written.push(outputPath);
	}

	return written;
}

function findTemplates() {
	const paths = [];

	const allPaths = getAllFiles(projectPath);
	for (const filePath of allPaths) {
		if (filePath.endsWith('.tpl')) {
			paths.push(filePath);
		}
	}

	return paths;
}

function parseData() {
	const text = fs.readFileSync(path.join(projectPath, 'README.data'), { encoding: 'utf8' });

	const output = {};

	const re1 = new RegExp(/--- \$\{/, 'gi');
	const re2 = new RegExp(/} ---\n/, 'gi');

	const parts = text.split(re1);
	for (const part of parts) {
		const varData	= part.trim().split(re2);
		const key		= varData[0].trim();

		if (key.length) {
			output[key] = varData[1].trim();
		}
	}

	for (let [variable, value] of Object.entries(output)) {
		if (value.indexOf('${') !== -1) {
			for (const [findKey, replaceVal] of Object.entries(output)) {
				if (variable !== findKey) {
					value = value.replaceAll('${' + findKey + '}', replaceVal);
				}
			}
		}

		output[variable] = value;
	}

	return output;
}

function getAllFiles(dirPath, allFiles) {
	allFiles = allFiles || [];
	const files = fs.readdirSync(dirPath);

	for (const file of files) {
		if (fs.statSync(path.join(dirPath, file)).isDirectory()) {
			allFiles = getAllFiles(path.join(dirPath, file), allFiles);
		} else {
			allFiles.push(path.join(dirPath, file));
		}
	}

	return allFiles;
}