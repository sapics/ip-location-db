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
	const written = []
	var templateContent = '';
	templates.push(path.resolve(__dirname, 'README.tpl.md'));
	for (const templatePath of templates) {
		console.log(templatePath)
		if(templatePath.endsWith('.md')){
			templateContent = fs.readFileSync(templatePath, { encoding: 'utf8' });
		} else {
			var info = templatePath.split('-')
			templateContent = '# [ip-location-db](https://github.com/sapics/ip-location-db)/' + path.basename(templatePath) + '\n\n'
			var type = info[info.length - 1]
			var isMmdb = false
			if(type === 'mmdb'){
				isMmdb = true
				type = info[info.length - 2]
			}
			
			templateContent += '## Download\n\n'
			templateContent += '${download-table-header}\n'
			templateContent += '${download-table-' + templatePath.replace('-mmdb', '').replace('-7z', '') + '}\n'
			if(!isMmdb){
				templateContent += '\n\n## CSV Format\n\n'
				templateContent += '${format-' + type + '-csv}\n'
				templateContent += '${format-explanation-ip-range}\n'
			} else {
				templateContent += '\n\n## MMDB Format\n\n'
				templateContent += '${format-' + type + '-mmdb}\n'
			}
			if(type === 'asn'){
				templateContent += '\n\n${field-explanation-asn}\n'
			} else {
				templateContent += '\n\n${field-explanation-country_code}\n'
			}

			var isCC0 = false, isPDDL = false

			if(templatePath.startsWith('iptoasn')){
				isPDDL = true
			} else if(templatePath.startsWith('geo-') || templatePath.startsWith('asn-country')){
				isCC0 = true
			}

			if(isCC0 || isPDDL){
				templateContent += '\n\n## Referenced Database\n\n'
			} else {
				templateContent += '\n\n## Referenced Database and License\n\n'
			}
			var isMulti = true
			for(var i = 0; i < info.length; i++){
				var key = info[i]
				if(key === type) {
					if(i === 1) isMulti = false
					break;
				}
				templateContent += '\n\n${explanation-db-'+key+'}\n\n'
			}
			if(templatePath === 'asn' || templatePath === 'asn-mmdb'){
				templateContent += '\n${explanation-db-routeviews}\n\n'
				templateContent += '\n${explanation-db-asn}\n\n'
				templateContent += '\n${explanation-db-dbip}\n\n'
			}

			if(isMulti){
				templateContent += '${merge-db}\n'
			}

			if(isCC0){
				templateContent += '\n\n${license-cc0}\n'
			} else if(isPDDL){
				templateContent += '\n\n${license-pddl}\n'
			}
		}

		for (let [variable, value] of Object.entries(vars)) {
			templateContent = templateContent.replaceAll('${' + variable + '}', value);
		}

		var outputPath = templatePath.replace('.tpl', '').replace('tools/', '').replace('tools\\', '')
		if(!templatePath.endsWith('.md')){
			outputPath = path.join(projectPath, path.basename(templatePath), 'README.md')
		}
		fs.writeFileSync(outputPath, templateContent);
		written.push(outputPath);
	}

	return written;
}

function findTemplates() {
	const allPaths = fs.readdirSync(projectPath), reg = /asn|country|city/
	return allPaths.filter(dir => reg.test(dir))
}

function parseData() {
	const text = fs.readFileSync(path.join(__dirname, 'DATA.md'), { encoding: 'utf8' });

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
