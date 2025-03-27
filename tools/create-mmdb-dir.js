const fs = require('fs')
const path = require('path')

var topDir = path.resolve(__dirname, '..')
var dirs = fs.readdirSync(topDir)
for(var dir of dirs){
	if(dir.endsWith('-city') || dir.endsWith('asn') || dir.endsWith('-country')){
		if(!dir.startsWith('webnet')){
			fs.mkdirSync(path.join(topDir, dir + '-mmdb'))
		}
	}
}
