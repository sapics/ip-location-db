const fs = require('fs')
const path = require('path')
const execSync = require('child_process').execSync
const isWin = process.platform === 'win32'
const topDir = path.resolve(__dirname, '..')
const mmdbCmd = path.join(topDir, 'ip-location-to-mmdb-' + (isWin ? 'windows-x64.exe' : 'linux-x64.bin'))

var run = function(){
	var dirs = fs.readdirSync(topDir).filter(v => v.endsWith('-city') || v.endsWith('-country') || v.endsWith('-asn')).filter(v => fs.statSync(path.join(topDir, v)).isDirectory())
	for(var dir of dirs){
		var inputV4 = path.join(topDir, dir, dir + '-ipv4.csv')
		var inputV6 = path.join(topDir, dir, dir + '-ipv6.csv')
		var outputV4 = path.join(topDir, dir, dir + '-ipv4.mmdb')
		var outputV6 = path.join(topDir, dir, dir + '-ipv6.mmdb')
		var outputV46 = path.join(topDir, dir, dir + '.mmdb')
		if(!dir.includes('-city')){
			if(!fs.existsSync(inputV4) || !fs.existsSync(inputV6)){
				continue;
			}
		} else {
			if(!fs.existsSync(inputV4 + '.gz') || !fs.existsSync(inputV6 + '.gz')){
				continue;
			}
		}
		console.log(dir)
		for(var recordSize of [24, 28]){
			if(recordSize === 24 && dir.includes('dbip-city')) continue;
			try{
				if(dir.includes('-city')){
					// uncompress .csv.gz files
					execSync('7z e -aoa -bd -bso0 -bsp0 -o' + path.join(topDir, dir) + ' ' + inputV4 + '.gz')
					execSync('7z e -aoa -bd -bso0 -bsp0 -o' + path.join(topDir, dir) + ' ' + inputV6 + '.gz')
				} else {
					execSync(mmdbCmd + ' -i ' + inputV4 + ' -i ' + inputV6 + ' -o ' + outputV46 + ' -r ' + recordSize)
				}
				execSync(mmdbCmd + ' -i ' + inputV4 + ' -o ' + outputV4 + ' -r ' + recordSize)
				execSync(mmdbCmd + ' -i ' + inputV6 + ' -o ' + outputV6 + ' -r ' + recordSize)
			}catch(e){
				console.warn(e)
				if(dir.includes('-city')){
					continue;
				}
			}
			break;
		}
	}
}

run()
