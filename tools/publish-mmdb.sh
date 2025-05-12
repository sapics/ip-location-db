
curdir=`pwd`
dirs=`find . -depth -maxdepth 1 -mindepth 1 -type d -name "*mmdb"`
for dir in $dirs;
do
	echo $dir
	cd $curdir
	cd $dir
	bdir=`pwd`
	echo "${bdir}"
	RES1=`find . -name "*.mmdb" -size -1k 2>/dev/null`
	if [ -z "${RES1}" ] ; then
		if ! git diff --quiet HEAD -- *.mmdb; then
			npm publish
			git add .
		elif [ -n "${PUBLISH_ALL_MMDB}" ] ; then
			npm publish
		else
			cd $curdir
			git checkout HEAD -- ${bdir}
		fi
	else
		cd $curdir
		git checkout HEAD -- ${bdir}
	fi
done

cd $curdir
CURDATE=`date +%Y%m%d`
git config --local user.email "41898282+github-actions[bot]@users.noreply.github.com"
git config --local user.name "github-actions[bot]"
git commit -m "v${CURDATE} MMDB Update"
