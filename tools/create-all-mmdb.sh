while read -d $'\0' file; do
	test/mmdbmeld/cmd/mmdbmeld/mmdbmeld $file
done < <(find tools/conf -name '*.yml' -print0)
