const fs = require('fs')
const path = require('path')
const execSync = require('child_process').execSync
const isWin = process.platform === 'win32'
const topDir = path.resolve(__dirname, '..')
const mmdbCmd = path.join(topDir, 'ip-location-to-mmdb-' + (isWin ? 'windows-x64.exe' : 'linux-x64.bin'))

var run = function(){
	var cmd = 'git diff --name-only --diff-filter=M'
	var changedFiles = execSync(cmd, {encoding: 'utf-8'}).split(/\r?\n/)
	var packageFiles = changedFiles.filter(p => p.endsWith('package.json') && p.includes('-mmdb'))
	var dirs = packageFiles.map(p => path.dirname(p))
	if(process.argv.includes('--all')){
		dirs = fs.readdirSync(topDir).filter(p => p.includes('-mmdb'))
	}
	for(var dir of dirs){
		var nonMmdbDir = dir.replace('-mmdb', '')
		// var confFile = path.join(__dirname, 'conf', nonMmdbDir + '.yml')
		var inputV4 = path.join(topDir, nonMmdbDir, nonMmdbDir + '-ipv4.csv')
		var inputV6 = path.join(topDir, nonMmdbDir, nonMmdbDir + '-ipv6.csv')
		var outputV4 = path.join(topDir, dir, nonMmdbDir + '-ipv4.mmdb')
		var outputV6 = path.join(topDir, dir, nonMmdbDir + '-ipv6.mmdb')
		console.log(dir)
		for(var recordSize of [24, 28]){
			try{
				if(dir.includes('-city')){
					// uncompress .csv.gz files
					execSync('7z e -aoa -bd -bso0 -bsp0 -o' + path.join(topDir, nonMmdbDir) + ' ' + inputV4 + '.gz')
					execSync('7z e -aoa -bd -bso0 -bsp0 -o' + path.join(topDir, nonMmdbDir) + ' ' + inputV6 + '.gz')
				}
				execSync(mmdbCmd + ' -i ' + inputV4 + ' -o ' + outputV4 + ' -r ' + (dir.includes('dbip-city') ? 28 : recordSize))
				execSync(mmdbCmd + ' -i ' + inputV6 + ' -o ' + outputV6 + ' -r ' + recordSize)
				if(dir.includes('-city')){
					fs.unlinkSync(path.join(topDir, nonMmdbDir, nonMmdbDir + '-ipv4.csv'))
					fs.unlinkSync(path.join(topDir, nonMmdbDir, nonMmdbDir + '-ipv6.csv'))
				}
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
