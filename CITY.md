# `city` files

The `city` files offer more fine-grained location information.

## CSV format

The `city` CSV files all share the same format:

```CSV
ip_range_start, ip_range_end, country_code, state1, state2, city, postcode, latitude, longitude, timezone
```

### IP address format

`ip_range_start` and `ip_range_end` are either IP addresses, or IP addresses in numeric format *(depending upon which files you choose)* and these two fields represent an **inclusive** range of IP addresses for that data row.

Please see the [IP Format File](IP_FORMAT.md) for more information.

### Country code

The `country_code` is the two-letter code defined in [ISO 3166-1 alpha-2](https://wikipedia.org/wiki/ISO_3166-1_alpha-2). You can get additional data such as the `country_name`, `capital`, `continent`, `currency`, `languages`, etc. by joining the `country_code` to the [Countries Database](https://github.com/annexare/Countries) which is available in JSON, CSV, SQL formats.

## MMDB format

The IP ranges in MMDB files are handled within a special field and so are not included in the field list, but other fields are included in a "flat" structure:

```
city
postcode
timezone
country_code
latitude
longitude
state1
state2
```

### Latitude and longitude

The `longitude` and `latitude` fields are saved as `string` types because the MMDB files do not allow `null` values for `float` types *(and `0,0` are valid coordinates)*.

## Optional fields

Apart from the IP information and the `country_code` field, all other fields are optional and will only be populated if the datasource contained them.
