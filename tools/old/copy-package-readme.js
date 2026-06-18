const fs = require('fs')
const path = require('path')

var topDir = path.resolve(__dirname, '..')
fs.readdir(topDir, function(err, dirs){
	if(err) return console.error(err);
//	var text = fs.readFileSync(path.join(topDir, 'README.md'), {encoding: "utf8"});
	for(var dir of dirs){
		if(dir.endsWith('-mmdb')){
//			fs.writeFileSync(path.join(topDir, dir, 'README.md'), text.replace(/^#\s*ip-location-db/, '# ip-location-db/' + dir), {encoding: "utf8"})
			var json = JSON.parse(fs.readFileSync(path.join(topDir, dir.replace('-mmdb', ''), 'package.json'), {encoding: "utf8"}))
			json.name += '-mmdb'
			json.keywords.push('mmdb')
			fs.writeFileSync(path.join(topDir, dir, 'package.json'), JSON.stringify(json, null, 2), {encoding: "utf8"})
		}
	}
})
