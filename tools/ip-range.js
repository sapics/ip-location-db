const fs	= require('fs');
const path	= require('path');
const readline = require('node:readline');

const projectPath = path.resolve(__dirname, '..');
async function run(){
	var dirs = fs.readdirSync(projectPath)
	for(var dir of dirs){
		var v4 = path.join(projectPath, dir, dir + '-ipv4-num.csv')
		var v6 = path.join(projectPath, dir, dir + '-ipv6-num.csv')
		if(fs.existsSync(v4)){
			await getSize(v4)
			await getSize(v6)
		}
	}
}

async function getSize(numFilePath){
	return new Promise((resolve, reject) => {
		var size = BigInt(0)
		readline.createInterface({input: fs.createReadStream(numFilePath)}).on('line', function(line){
			var parts = line.split(',')
			var start = BigInt(parts[0])
			var end = BigInt(parts[1])
			size += end - start + BigInt(1)
		}).on('close', function(){
			console.log(path.basename(numFilePath).replace('-num.csv', ''), size.toString())
			resolve()
		})
	})
}

run()
