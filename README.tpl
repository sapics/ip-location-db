# ip-location-db

This project provides IP to location databases in CSV and MMDB formats.

## Available database downloads

There are 3 types of IP database in this repository: `country`, `asn` and `city` files. All have their own standard format. Please use the provided CDN links rather than directly linking to files in this repository.

### Country

${explanation-country}

${download-table-header}
${download-table-asn-country}
${download-table-geo-asn-country}
${download-table-geo-whois-asn-country}
${download-table-iptoasn-country}
${download-table-dbip-country}
${download-table-geolite2-country}

### ASN

${explanation-asn}

${download-table-header}
${download-table-asn}
${download-table-iptoasn-asn}
${download-table-dbip-asn}
${download-table-geolite2-asn}

### City

${explanation-city}

${download-table-header}
${download-table-dbip-city}
${download-table-geolite2-city}

## File formats

An explanation of each file format is provided in its own directory.

All files of a given type share the same file format; for example, you could swap one `asn` file for any other `asn` file.

## Which database should I use?

It depends upon your use-case! We do have some simple recommendations though:

- If you need postcodes or timezones: `geolite2-city`
- If you need city data with a CC-BY Licence: `dbip-city`
- If you need a country database with a Public Domain licence: `geo-whois-asn-country`
- If you need an ASN database: `asn`

## MMDB Libraries

If you would like to integrate MMDB files into an existing project there are several libraries that can help.

### Read MMDB files

Libraries exist in many languages when using the MMDB files. There are official, [Maxmind developed libraries](https://github.com/maxmind) for many popular languages: [.NET](https://github.com/maxmind/MaxMind-DB-Reader-dotnet), [C](https://github.com/maxmind/libmaxminddb), [Java](https://github.com/maxmind/GeoIP2-java), [Node.js](https://github.com/maxmind/GeoIP2-node), [Perl](https://github.com/maxmind/MaxMind-DB-Reader-perl), [PHP](https://github.com/maxmind/MaxMind-DB-Reader-php), [Python](https://github.com/maxmind/MaxMind-DB-Reader-python) and [Ruby](https://github.com/maxmind/MaxMind-DB-Reader-ruby), and third-party readers for others: [Erlang](https://github.com/g-andrade/locus), [Go](https://github.com/oschwald/maxminddb-golang), [Rust](https://github.com/oschwald/maxminddb-rust).

### Write MMDB files

If you wish to create your own MMDB files from the CSV files *(to customise their format)* there are a couple of official libraries: [Go](https://github.com/maxmind/mmdbwriter) and [Perl](https://github.com/maxmind/MaxMind-DB-Writer-perl) *(now archived)*. There are also some third-party options: [Python](https://github.com/VimT/MaxMind-DB-Writer-python) and [Rust](https://github.com/pierd/maxminddb-writer).

## Useful applications

${applications-table-header}
${applications-1}
${applications-2}
${applications-3}
${applications-4}

## Useful tools

${tools-table-header}
${tools-1}
${tools-2}

## Licences

The required licence depends upon the database which you use. **Please carefully read each database licence before use.**

You can use [PDDL](https://opendatacommons.org/licenses/pddl/1.0/) (ODC Public Domain Dedication and Licence) or [CC0](https://creativecommons.org/publicdomain/zero/1.0/deed) (Creative Commons Zero) licensed databases without attribution for any purpose.

## Support

We'd be grateful if you could link back to [sapics/ip-location-db](https://github.com/sapics/ip-location-db), and star this project to help others find it.
