# ip-location-db

This project provides IP to location databases in CSV and MMDB formats.

There are 3 types of IP database in this repository: `country`, `city` and `asn` files. All have their own standard format.

### Country

${format-country-csv}

${download-table-header}
${download-table-asn-country}
${download-table-geo-asn-country}
${download-table-geo-whois-asn-country}
${download-table-iptoasn-country}
${download-table-dbip-country}
${download-table-dbip-geo-whois-asn-country}
${download-table-geolite2-country}
${download-table-geolite2-geo-whois-asn-country}

### City

${format-city-csv}

${download-table-header}
${download-table-dbip-city}
${download-table-geolite2-city}


### ASN

${format-asn-csv}

${download-table-header}
${download-table-asn}
${download-table-iptoasn-asn}
${download-table-dbip-asn}
${download-table-geolite2-asn}


## File formats

An explanation of each file format is provided in its own directory.

All files of a given type share the same file format; for example, you could swap one `asn` file for any other `asn` file.


## Databases referenced in this project

${explanation-db-asn}

${explanation-db-whois}

${explanation-db-geo}

${explanation-db-routeviews}

${explanation-db-iptoasn}

${explanation-db-dbip}

${explanation-db-geolite2}


## Which database should I use?

It depends upon your use-case! We do have some simple recommendations though:

- If you need postcodes or timezones: `geolite2-city`
- If you need city data with a CC-BY Licence: `dbip-city`
- If you need a country database with a Public Domain Licence: `geo-whois-asn-country`
- If you need a high accuracy and wide IP range country database: `geolite2-geo-whois-asn-country` which is equivalent to `geolite2-country` for `geolite2-country` covered IP range and `geo-whois-asn-country` for the other IP range. (0.10% wider for IPv4 and 2.34% wider for IPv6 than `geolite2-country` at Aug. 2024)
- If you need an ASN database: `asn`

## MMDB Libraries

If you would like to integrate MMDB files into an existing project there are several libraries that can help.

### Read MMDB files

Libraries exist in many languages when using the MMDB files. There are official, [Maxmind developed libraries](https://github.com/maxmind) for many popular languages: [.NET](https://github.com/maxmind/MaxMind-DB-Reader-dotnet), [C](https://github.com/maxmind/libmaxminddb), [Java](https://github.com/maxmind/GeoIP2-java), [Node.js](https://github.com/maxmind/GeoIP2-node), [Perl](https://github.com/maxmind/MaxMind-DB-Reader-perl), [PHP](https://github.com/maxmind/MaxMind-DB-Reader-php), [Python](https://github.com/maxmind/MaxMind-DB-Reader-python) and [Ruby](https://github.com/maxmind/MaxMind-DB-Reader-ruby), and third-party readers for others: [Erlang](https://github.com/g-andrade/locus), [Go](https://github.com/oschwald/maxminddb-golang), [Rust](https://github.com/oschwald/maxminddb-rust).

### Write MMDB files

If you wish to create your own MMDB files from the CSV files *(to customise their format)* there are a couple of official libraries: [Go](https://github.com/maxmind/mmdbwriter) and [Perl](https://github.com/maxmind/MaxMind-DB-Writer-perl) *(now archived)*. There are also some third-party options: [Python](https://github.com/VimT/MaxMind-DB-Writer-python) and [Rust](https://github.com/pierd/maxminddb-writer).


## Useful Libraries

| Library | Language | Description | Types | Auto<br>Updates |
|---|---|---|---|---|
|[geoip-country](https://github.com/sapics/geoip-country) | Node.js | Fast ip to country lookup by using in-memory database. (requires 10MB RAM) | `country` | ✓ |


## Useful applications

| Application | Language | Description | Types | Auto<br>Updates |
|---|---|---|---|---|
|[ip_location_server](https://github.com/EP-u-NW/ip_location_server) | Java | An in-memory GRPC and HTTP server mapping IP addresses to locations *(requires at least 1.5GB RAM)* | `country`<br>`asn`<br>`city` | ✓ |
|[ip-location-api](https://github.com/paul-norman/ip-location-api) | Go | API server creating / supporting MMDB, PostgreSQL, MySQL / MariaDB and SQLite | `country`<br>`asn`<br>`city` | ✓ |
|[Ip-geo-API](https://github.com/realchandan/Ip-geo-API) | Go | In-memory API server | `country` | ✘ |
|[IPInfoOffline](https://www.nirsoft.net/utils/ip_country_info_offline.html) | Windows  | Desktop tool showing information about IP addresses *(local data)* | `country`<br>`asn`<br>`city` | ✘ |


## Useful tools

| Tool | Description |
|---|---|
|[ip-location-to-mmdb](https://github.com/paul-norman/ip-location-to-mmdb) | Basic conversion from CSV files from this database into MMDB files |
|[mmdbmeld](https://github.com/safing/mmdbmeld) | Create and customise MMDB files from CSV files in this database |


## Licences

The required licence depends upon the database which you use. **Please carefully read each database licence before use.**

You can use [PDDL](https://opendatacommons.org/licenses/pddl/1.0/) (ODC Public Domain Dedication and Licence) or [CC0](https://creativecommons.org/publicdomain/zero/1.0/deed) (Creative Commons Zero) licensed databases without attribution for any purpose.


## Support

We'd be grateful if you could link back to [sapics/ip-location-db](https://github.com/sapics/ip-location-db), and star this project to help others find it.
