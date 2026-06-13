#!/bin/bash

TIMESTAMP=$(date +%Y%m%d_%H%M%S)
VERSION_KEY=$(date +%Y%m%d%H%M)
curdir=`pwd`

git config --local user.email "41898282+github-actions[bot]@users.noreply.github.com"
git config --local user.name "github-actions[bot]"

dirs=`find . -type d -name "*-country" -o -name "*-asn"`
for dir in $dirs; do
	cd "$curdir"
	cd "$dir"
	edir=`pwd`
	RES1=`find . -name '*.csv' -size -1000k 2>/dev/null`
	RES2=`find . -name '*.csv.gz' -size -1000k 2>/dev/null`
	if [ -z "${RES1}" ] && [ -z "${RES2}" ]; then
		if ! git diff --quiet HEAD -- *.csv package.json; then
			node -p "var j=require('./package.json');j.version=j.version.split('.').slice(0,-1).join('.')+'.'+process.env.VERSION_KEY;require('fs').writeFileSync('./package.json',JSON.stringify(j,null,2));"
		fi
		if [[ $dir == *city]]; then
			csvFiles=`find *.csv -depth -maxdepth 1 -type f`
			for csvFile in $csvFiles;
			do
				7z a "$csvFile".7z "$csvFile" -sdel -aoa -bd -mx9 -m0=lzma2
			done
		fi
	fi
done

git add *-country/*.csv *-asn/*.csv *-country/package.json *-asn/package.json
git add *-city/package.json
git commit -a -m "${TIMESTAMP} Update"
