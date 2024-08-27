--- ${blurb-asn} ---
Created by combining the [RouteViews](https://www.routeviews.org/routeviews/) database with the [asn](../asn/) database and the [DB-IP](../dbip-asn/) database.
--- ${blurb-asn-country} ---
Created by merging 5 RIP ASN databases: [afrinic](https://afrinic.net), [apnic](https://www.apnic.net), [arin](https://www.arin.net), [lacnic](https://www.lacnic.net), [ripe ncc](https://www.ripe.net).
--- ${blurb-dbip-asn} ---
Created from the DB-IP [ip-to-asn-lite](https://db-ip.com/db/download/ip-to-asn-lite) database.
--- ${blurb-dbip-city} ---
Created from the DB-IP [ip-to-city-lite](https://db-ip.com/db/download/ip-to-city-lite) database.
--- ${blurb-dbip-country} ---
Created from the DB-IP [ip-to-country-lite](https://db-ip.com/db/download/ip-to-country-lite) database.
--- ${blurb-geo-asn-country} ---
Created by merging the GeoFeed database from [OpenGeoFeed](https://opengeofeed.org/) with the [asn](../asn/) database.
--- ${blurb-geo-whois-asn-country} ---
Created by merging 5 RIP provided WHOIS databases with the [geo-asn-country](../geo-asn-country/) database. *(There are some inconsistencies between the 5 RIP databases).*
--- ${blurb-geolite2-country} ---
Created from the [GeoLite2 Free Geolocation Data](https://dev.maxmind.com/geoip/geolite2-free-geolocation-data) by [MaxMind](https://www.maxmind.com).
--- ${blurb-geolite2-asn} ---
Created from the [GeoLite2 Free Geolocation Data](https://dev.maxmind.com/geoip/geolite2-free-geolocation-data) by [MaxMind](https://www.maxmind.com).
--- ${blurb-geolite2-city} ---
Created from the [GeoLite2 Free Geolocation Data](https://dev.maxmind.com/geoip/geolite2-free-geolocation-data) by [MaxMind](https://www.maxmind.com).
--- ${blurb-webnet77-country} ---
Created from the databases provided by [Webnet77](http://software77.net/geo-ip/).
--- ${blurb-iptoasn-asn} ---
Created from the databases provided by [IPtoASN](https://iptoasn.com/).
--- ${blurb-iptoasn-country} ---
Created from the databases provided by [IPtoASN](https://iptoasn.com/).

--- ${field-explanation-asn} ---
### autonomous_system_number

`autonomous_system_number` is a unique number assigned to an Autonomous System (AS) by the [IANA](https://www.iana.org/). [wiki](https://wikipedia.org/wiki/Autonomous_system_(Internet)).

--- ${field-explanation-country_code} ---
### country_code

`country_code` is the two-letter code defined in [ISO 3166-1 alpha-2](https://wikipedia.org/wiki/ISO_3166-1_alpha-2).
You can get the `country name, capital, continent, currency, languages, etc.` from the `country_code` by [Countries Database](https://github.com/annexare/Countries) in JSON, CSV, SQL format.

--- ${format-country-csv} ---
```CSV
ip_range_start, ip_range_end, country_code
```

--- ${format-country-mmdb} ---
```
country_code
```

--- ${format-asn-csv} ---
```CSV
ip_range_start, ip_range_end, autonomous_system_number, autonomous_system_organization
```

--- ${format-asn-mmdb} ---
```
autonomous_system_number, autonomous_system_organization
```

--- ${format-city-csv} ---
```CSV
ip_range_start, ip_range_end, country_code, city, state1, state2, latitude, longitude, postcode, timezone
```

--- ${format-city-mmdb} ---
```
country_code, city, state1, state2, latitude, longitude, postcode, timezone
```

--- ${explanation-country} ---
These databases map IP ranges to country codes.
--- ${explanation-asn} ---
These databases map IP ranges to [Autonomous System Number](https://en.wikipedia.org/wiki/Autonomous_system_%28Internet%29) (ASN) details. An ASN is a unique number assigned to an Autonomous System (AS) by the [IANA](https://www.iana.org/).
--- ${explanation-city} ---
These databases map IP ranges to more fine-grained location information.

--- ${format-explanation-country} ---
### CSV format

${format-explanation-country-csv}

### MMDB format

${format-explanation-country-mmdb}

--- ${format-explanation-country-csv} ---
The `country` CSV files all share the same format:

```CSV
ip_range_start, ip_range_end, country_code
```

#### IP address format

${format-explanation-ip-range}

#### Country code

The `country_code` is the two-letter code defined in [ISO 3166-1 alpha-2](https://wikipedia.org/wiki/ISO_3166-1_alpha-2). You can get additional data such as the `country_name`, `capital`, `continent`, `currency`, `languages`, etc. by joining the `country_code` to the [Countries Database](https://github.com/annexare/Countries) which is available in JSON, CSV, SQL formats.
--- ${format-explanation-country-mmdb} ---
The IP ranges in MMDB files are handled within a special field and so are not included in the field list, but other fields are included in a "flat" structure:

```
country_code
```

--- ${format-explanation-asn} ---
### CSV format

${format-explanation-asn-csv}

### MMDB format

${format-explanation-asn-mmdb}
--- ${format-explanation-asn-csv} ---
The `asn` CSV files all share the same format:

```CSV
ip_range_start, ip_range_end, autonomous_system_number, autonomous_system_organization
```

#### IP address format

${format-explanation-ip-range}

#### Number

The `autonomous_system_number` is the numeric code for the specific Autonomous System.

#### Organisation

The `autonomous_system_organization` is the name for the specific Autonomous System.
--- ${format-explanation-asn-mmdb} ---
The IP ranges in MMDB files are handled within a special field and so are not included in the field list, but other fields are included in a "flat" structure:

```
autonomous_system_number
autonomous_system_organization
```
--- ${format-explanation-city} ---
### CSV format

${format-explanation-city-csv}

### MMDB format

${format-explanation-city-mmdb}
--- ${format-explanation-city-csv} ---
The `city` CSV files all share the same format:

```CSV
ip_range_start, ip_range_end, country_code, state1, state2, city, postcode, latitude, longitude, timezone
```

#### IP address format

${format-explanation-ip-range}

#### Country code

The `country_code` is the two-letter code defined in [ISO 3166-1 alpha-2](https://wikipedia.org/wiki/ISO_3166-1_alpha-2). You can get additional data such as the `country_name`, `capital`, `continent`, `currency`, `languages`, etc. by joining the `country_code` to the [Countries Database](https://github.com/annexare/Countries) which is available in JSON, CSV, SQL formats.
--- ${format-explanation-city-mmdb} ---
The IP ranges in MMDB files are handled within a special field and so are not included in the field list, but other fields are included in a "flat" structure:

```
city
country_code
state1
state2
latitude
longitude
postcode
timezone
```

#### Latitude and longitude

The `longitude` and `latitude` fields are saved as `string` types because the MMDB files do not allow `null` values for `float` types *(and `0,0` are valid coordinates)*.

### Optional fields

Apart from the IP information and the `country_code` field, all other fields are optional and will only be populated if the datasource contained them.

--- ${format-explanation-ip-range} ---
`ip_range_start` and `ip_range_end` are either IP addresses, or IP addresses in numeric format *(depending upon which files you choose)* and these two fields represent an **inclusive** range of IP addresses for that data row.

For example, in the `-ipv4.csv` files, the CSV line: `1.0.0.0,1.0.0.255,AU` would mean that any IP addresses between `1.0.0.0` and `1.0.0.255` *(inclusive)* are `AU`. In `-ipv4-num.csv` files, the equivalent line would be: `16777216,16777471,AU`.

For example, in the `-ipv6.csv` files, the CSV line: `2001:200::,2001:200:ffff:ffff:ffff:ffff:ffff:ffff,JP` would mean that any IP addresses between `2001:200::` and `2001:200:ffff:ffff:ffff:ffff:ffff:ffff` *(inclusive)* are `JP`. In `-ipv6-num.csv` files, the equivalent line would be: `42540528726795050063891204319802818560,42540528806023212578155541913346768895,JP`.

Please be careful when using IPv6 and IPv6-num files in your program, the numerical value exceeds 32bit unsigned integers, and you would need to use a 128bit unsigned integer.


--- ${download-table-header} ---
| Database | Type | License | Updated | IPv4 | IPv6 | IPv4-num | IPv6-num |
|---|---|---|---|---|---|---|---|
--- ${download-table-asn-country} ---
| [ASN](https://github.com/sapics/ip-location-db/tree/main/asn-country/)<br><br>[![npm version](https://img.shields.io/npm/v/@ip-location-db/asn-country?color=success&style=flat-square&label=CSV)](https://www.npmjs.com/package/@ip-location-db/asn-country)<br>[![npm version](https://img.shields.io/npm/v/@ip-location-db/asn-country-mmdb?color=success&style=flat-square&label=MMDB)](https://www.npmjs.com/package/@ip-location-db/asn-country-mmdb) | Country | [CC0](https://creativecommons.org/publicdomain/zero/1.0/deed) | Daily | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/asn-country/asn-country-ipv4.csv)<br>[MMDB](https://cdn.jsdelivr.net/npm/@ip-location-db/asn-country-mmdb/asn-country-ipv4.mmdb) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/asn-country/asn-country-ipv6.csv)<br>[MMDB](https://cdn.jsdelivr.net/npm/@ip-location-db/asn-country-mmdb/asn-country-ipv6.mmdb) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/asn-country/asn-country-ipv4-num.csv) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/asn-country/asn-country-ipv6-num.csv) |
--- ${download-table-geo-asn-country} ---
| [GeoFeed + ASN](https://github.com/sapics/ip-location-db/tree/main/geo-asn-country/)<br><br>[![npm version](https://img.shields.io/npm/v/@ip-location-db/geo-asn-country?color=success&style=flat-square&label=CSV)](https://www.npmjs.com/package/@ip-location-db/geo-asn-country)<br>[![npm version](https://img.shields.io/npm/v/@ip-location-db/geo-asn-country-mmdb?color=success&style=flat-square&label=MMDB)](https://www.npmjs.com/package/@ip-location-db/geo-asn-country-mmdb) | Country | [CC0](https://creativecommons.org/publicdomain/zero/1.0/deed) | Daily | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/geo-asn-country/geo-asn-country-ipv4.csv)<br>[MMDB](https://cdn.jsdelivr.net/npm/@ip-location-db/geo-asn-country-mmdb/geo-asn-country-ipv4.mmdb) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/geo-asn-country/geo-asn-country-ipv6.csv)<br>[MMDB](https://cdn.jsdelivr.net/npm/@ip-location-db/geo-asn-country-mmdb/geo-asn-country-ipv6.mmdb) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/geo-asn-country/geo-asn-country-ipv4-num.csv) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/geo-asn-country/geo-asn-country-ipv6-num.csv) |
--- ${download-table-geo-whois-asn-country} ---
| [GeoFeed + Whois + ASN](https://github.com/sapics/ip-location-db/tree/main/geo-whois-asn-country/)<br><br>[![npm version](https://img.shields.io/npm/v/@ip-location-db/geo-whois-asn-country?color=success&style=flat-square&label=CSV)](https://www.npmjs.com/package/@ip-location-db/geo-whois-asn-country)<br>[![npm version](https://img.shields.io/npm/v/@ip-location-db/geo-whois-asn-country-mmdb?color=success&style=flat-square&label=MMDB)](https://www.npmjs.com/package/@ip-location-db/geo-whois-asn-country-mmdb) | Country | [CC0](https://creativecommons.org/publicdomain/zero/1.0/deed) | Daily | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/geo-whois-asn-country/geo-whois-asn-country-ipv4.csv)<br>[MMDB](https://cdn.jsdelivr.net/npm/@ip-location-db/geo-whois-asn-country-mmdb/geo-whois-asn-country-ipv4.mmdb) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/geo-whois-asn-country/geo-whois-asn-country-ipv6.csv)<br>[MMDB](https://cdn.jsdelivr.net/npm/@ip-location-db/geo-whois-asn-country-mmdb/geo-whois-asn-country-ipv6.mmdb) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/geo-whois-asn-country/geo-whois-asn-country-ipv4-num.csv) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/geo-whois-asn-country/geo-whois-asn-country-ipv6-num.csv) |
--- ${download-table-iptoasn-country} ---
| [IPtoASN](https://github.com/sapics/ip-location-db/tree/main/iptoasn-country/)<br><br>[![npm version](https://img.shields.io/npm/v/@ip-location-db/iptoasn-country?color=success&style=flat-square&label=CSV)](https://www.npmjs.com/package/@ip-location-db/iptoasn-country)<br>[![npm version](https://img.shields.io/npm/v/@ip-location-db/iptoasn-country-mmdb?color=success&style=flat-square&label=MMDB)](https://www.npmjs.com/package/@ip-location-db/iptoasn-country-mmdb) | Country | [PDDL](https://opendatacommons.org/licenses/pddl/1.0/) by [IPtoASN](https://iptoasn.com/) | Daily | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/iptoasn-country/iptoasn-country-ipv4.csv)<br>[MMDB](https://cdn.jsdelivr.net/npm/@ip-location-db/iptoasn-country-mmdb/iptoasn-country-ipv4.mmdb) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/iptoasn-country/iptoasn-country-ipv6.csv)<br>[MMDB](https://cdn.jsdelivr.net/npm/@ip-location-db/iptoasn-country-mmdb/iptoasn-country-ipv6.mmdb) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/iptoasn-country/iptoasn-country-ipv4-num.csv) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/iptoasn-country/iptoasn-country-ipv6-num.csv) |
--- ${download-table-webnet77-country} ---
| [Webnet77](https://github.com/sapics/ip-location-db/tree/main/webnet77-country/)<br><br>[![npm version](https://img.shields.io/npm/v/@ip-location-db/webnet77-country?color=success&style=flat-square&label=CSV)](https://www.npmjs.com/package/@ip-location-db/webnet77-country)<br>[![npm version](https://img.shields.io/npm/v/@ip-location-db/webnet77-country-mmdb?color=success&style=flat-square&label=MMDB)](https://www.npmjs.com/package/@ip-location-db/webnet77-country-mmdb) | Country | [Donationware](http://en.wikipedia.org/wiki/Donationware) by [Webnet77](http://software77.net/geo-ip/) | Daily | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/webnet77-country/webnet77-country-ipv4.csv)<br>[MMDB](https://cdn.jsdelivr.net/npm/@ip-location-db/webnet77-country-mmdb/webnet77-country-ipv4.mmdb) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/webnet77-country/webnet77-country-ipv6.csv)<br>[MMDB](https://cdn.jsdelivr.net/npm/@ip-location-db/webnet77-country-mmdb/webnet77-country-ipv6.mmdb) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/webnet77-country/webnet77-country-ipv4-num.csv) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/webnet77-country/webnet77-country-ipv6-num.csv) |
--- ${download-table-dbip-geo-whois-asn-country} ---
| [DB-IP Lite + GeoFeed + Whois + ASN](https://github.com/sapics/ip-location-db/tree/main/dbip-geo-whois-asn-country/)<br><br>[![npm version](https://img.shields.io/npm/v/@ip-location-db/dbip-geo-whois-asn-country?color=success&style=flat-square&label=CSV)](https://www.npmjs.com/package/@ip-location-db/dbip-geo-whois-asn-country)| Country | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) <br> by [DB-IP](https://db-ip.com/) | Monthly | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/dbip-geo-whois-asn-country/dbip-geo-whois-asn-country-ipv4.csv)<br>[MMDB](https://cdn.jsdelivr.net/npm/@ip-location-db/dbip-geo-whois-asn-country-mmdb/dbip-geo-whois-asn-country-ipv4.mmdb) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/dbip-geo-whois-asn-country/dbip-geo-whois-asn-country-ipv6.csv)<br>[MMDB](https://cdn.jsdelivr.net/npm/@ip-location-db/dbip-geo-whois-asn-country-mmdb/dbip-geo-whois-asn-country-ipv6.mmdb) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/dbip-geo-whois-asn-country/dbip-geo-whois-asn-country-ipv4-num.csv) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/dbip-geo-whois-asn-country/dbip-geo-whois-asn-country-ipv6-num.csv) |
--- ${download-table-dbip-country} ---
| [DB-IP Lite](https://github.com/sapics/ip-location-db/tree/main/dbip-country/)<br><br>[![npm version](https://img.shields.io/npm/v/@ip-location-db/dbip-country?color=success&style=flat-square&label=CSV)](https://www.npmjs.com/package/@ip-location-db/dbip-country)| Country | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) <br> by [DB-IP](https://db-ip.com/) | Monthly | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/dbip-country/dbip-country-ipv4.csv)<br>[MMDB](https://cdn.jsdelivr.net/npm/@ip-location-db/dbip-country-mmdb/dbip-country-ipv4.mmdb) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/dbip-country/dbip-country-ipv6.csv)<br>[MMDB](https://cdn.jsdelivr.net/npm/@ip-location-db/dbip-country-mmdb/dbip-country-ipv6.mmdb) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/dbip-country/dbip-country-ipv4-num.csv) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/dbip-country/dbip-country-ipv6-num.csv) |
--- ${download-table-geolite2-country} ---
| [GeoLite2](https://github.com/sapics/ip-location-db/tree/main/geolite2-country/)<br><br>[![npm version](https://img.shields.io/npm/v/@ip-location-db/geolite2-country?color=success&style=flat-square&label=CSV)](https://www.npmjs.com/package/@ip-location-db/geolite2-country)<br>[![npm version](https://img.shields.io/npm/v/@ip-location-db/geolite2-country-mmdb?color=success&style=flat-square&label=MMDB)](https://www.npmjs.com/package/@ip-location-db/geolite2-country-mmdb) | Country | GeoLite2 License by [MaxMind](https://www.maxmind.com/) | Twice weekly | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/geolite2-country/geolite2-country-ipv4.csv)<br>[MMDB](https://cdn.jsdelivr.net/npm/@ip-location-db/geolite2-country-mmdb/geolite2-country-ipv4.mmdb) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/geolite2-country/geolite2-country-ipv6.csv)<br>[MMDB](https://cdn.jsdelivr.net/npm/@ip-location-db/geolite2-country-mmdb/geolite2-country-ipv6.mmdb) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/geolite2-country/geolite2-country-ipv4-num.csv) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/geolite2-country/geolite2-country-ipv6-num.csv) |
--- ${download-table-geolite2-geo-whois-asn-country} ---
| [GeoLite2 + GeoFeed + Whois + ASN](https://github.com/sapics/ip-location-db/tree/main/geolite2-geo-whois-asn-country/)<br><br>[![npm version](https://img.shields.io/npm/v/@ip-location-db/geolite2-geo-whois-asn-country?color=success&style=flat-square&label=CSV)](https://www.npmjs.com/package/@ip-location-db/geolite2-geo-whois-asn-country)<br>[![npm version](https://img.shields.io/npm/v/@ip-location-db/geolite2-geo-whois-asn-country-mmdb?color=success&style=flat-square&label=MMDB)](https://www.npmjs.com/package/@ip-location-db/geolite2-geo-whois-asn-country-mmdb) | Country | GeoLite2 License by [MaxMind](https://www.maxmind.com/) | Daily | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/geolite2-geo-whois-asn-country/geolite2-geo-whois-asn-country-ipv4.csv)<br>[MMDB](https://cdn.jsdelivr.net/npm/@ip-location-db/geolite2-geo-whois-asn-country-mmdb/geolite2-geo-whois-asn-country-ipv4.mmdb) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/geolite2-geo-whois-asn-country/geolite2-geo-whois-asn-country-ipv6.csv)<br>[MMDB](https://cdn.jsdelivr.net/npm/@ip-location-db/geolite2-geo-whois-asn-country-mmdb/geolite2-geo-whois-asn-country-ipv6.mmdb) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/geolite2-geo-whois-asn-country/geolite2-geo-whois-asn-country-ipv4-num.csv) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/geolite2-geo-whois-asn-country/geolite2-geo-whois-asn-country-ipv6-num.csv) |
--- ${download-table-asn} ---
| [RouteViews + ASN + DB-IP](https://github.com/sapics/ip-location-db/tree/main/asn/)<br><br>[![npm version](https://img.shields.io/npm/v/@ip-location-db/asn?color=success&style=flat-square&label=CSV)](https://www.npmjs.com/package/@ip-location-db/asn)<br>[![npm version](https://img.shields.io/npm/v/@ip-location-db/asn-mmdb?color=success&style=flat-square&label=MMDB)](https://www.npmjs.com/package/@ip-location-db/asn-mmdb) | ASN | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) by [RouteViews](https://www.routeviews.org/routeviews/) and [DB-IP](https://db-ip.com/) | Daily | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/asn/asn-ipv4.csv)<br>[MMDB](https://cdn.jsdelivr.net/npm/@ip-location-db/asn-mmdb/asn-ipv4.mmdb) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/asn/asn-ipv6.csv)<br>[MMDB](https://cdn.jsdelivr.net/npm/@ip-location-db/asn-mmdb/asn-ipv6.mmdb) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/asn/asn-ipv4-num.csv) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/asn/asn-ipv6-num.csv) |
--- ${download-table-iptoasn-asn} ---
| [IPtoASN](https://github.com/sapics/ip-location-db/tree/main/iptoasn-asn/)<br><br>[![npm version](https://img.shields.io/npm/v/@ip-location-db/iptoasn-asn?color=success&style=flat-square&label=CSV)](https://www.npmjs.com/package/@ip-location-db/iptoasn-asn)<br>[![npm version](https://img.shields.io/npm/v/@ip-location-db/iptoasn-asn-mmdb?color=success&style=flat-square&label=MMDB)](https://www.npmjs.com/package/@ip-location-db/iptoasn-asn-mmdb) | ASN | [PDDL](https://opendatacommons.org/licenses/pddl/1.0/) by [IPtoASN](https://iptoasn.com/) | Daily | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/iptoasn-asn/iptoasn-asn-ipv4.csv)<br>[MMDB](https://cdn.jsdelivr.net/npm/@ip-location-db/iptoasn-asn-mmdb/iptoasn-asn-ipv4.mmdb) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/iptoasn-asn/iptoasn-asn-ipv6.csv)<br>[MMDB](https://cdn.jsdelivr.net/npm/@ip-location-db/iptoasn-asn-mmdb/iptoasn-asn-ipv6.mmdb) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/iptoasn-asn/iptoasn-asn-ipv4-num.csv) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/iptoasn-asn/iptoasn-asn-ipv6-num.csv) |
--- ${download-table-dbip-asn} ---
| [DB-IP Lite](https://github.com/sapics/ip-location-db/tree/main/dbip-asn/)<br><br>[![npm version](https://img.shields.io/npm/v/@ip-location-db/dbip-asn?color=success&style=flat-square&label=CSV)](https://www.npmjs.com/package/@ip-location-db/dbip-asn)<br>[![npm version](https://img.shields.io/npm/v/@ip-location-db/dbip-asn-mmdb?color=success&style=flat-square&label=MMDB)](https://www.npmjs.com/package/@ip-location-db/dbip-asn-mmdb) | ASN | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)<br> by [DB-IP](https://db-ip.com/) | Monthly | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/dbip-asn/dbip-asn-ipv4.csv)<br>[MMDB](https://cdn.jsdelivr.net/npm/@ip-location-db/dbip-asn-mmdb/dbip-asn-ipv4.mmdb) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/dbip-asn/dbip-asn-ipv6.csv)<br>[MMDB](https://cdn.jsdelivr.net/npm/@ip-location-db/dbip-asn-mmdb/dbip-asn-ipv6.mmdb) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/dbip-asn/dbip-asn-ipv4-num.csv) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/dbip-asn/dbip-asn-ipv6-num.csv) |
--- ${download-table-geolite2-asn} ---
| [GeoLite2](https://github.com/sapics/ip-location-db/tree/main/geolite2-asn/)<br><br>[![npm version](https://img.shields.io/npm/v/@ip-location-db/geolite2-asn?color=success&style=flat-square&label=CSV)](https://www.npmjs.com/package/@ip-location-db/geolite2-asn)<br>[![npm version](https://img.shields.io/npm/v/@ip-location-db/geolite2-asn-mmdb?color=success&style=flat-square&label=MMDB)](https://www.npmjs.com/package/@ip-location-db/geolite2-asn-mmdb) | ASN | GeoLite2 License by [MaxMind](https://www.maxmind.com/) | Twice weekly | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/geolite2-asn/geolite2-asn-ipv4.csv)<br>[MMDB](https://cdn.jsdelivr.net/npm/@ip-location-db/geolite2-asn-mmdb/geolite2-asn-ipv4.mmdb) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/geolite2-asn/geolite2-asn-ipv6.csv)<br>[MMDB](https://cdn.jsdelivr.net/npm/@ip-location-db/geolite2-asn-mmdb/geolite2-asn-ipv6.mmdb) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/geolite2-asn/geolite2-asn-ipv4-num.csv) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/geolite2-asn/geolite2-asn-ipv6-num.csv) |
--- ${download-table-dbip-city} ---
| [DB-IP Lite](https://github.com/sapics/ip-location-db/tree/main/dbip-city/)<br><br>[![npm version](https://img.shields.io/npm/v/@ip-location-db/dbip-city?color=success&style=flat-square&label=GZ)](https://www.npmjs.com/package/@ip-location-db/dbip-city)<br>[![npm version](https://img.shields.io/npm/v/@ip-location-db/dbip-city-7z?color=success&style=flat-square&label=7z)](https://www.npmjs.com/package/@ip-location-db/dbip-city-7z)<br>[![npm version](https://img.shields.io/npm/v/@ip-location-db/dbip-city-mmdb?color=success&style=flat-square&label=MMDB)](https://www.npmjs.com/package/@ip-location-db/dbip-city-mmdb) | City | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) <br> by [DB-IP](https://db-ip.com/) | Monthly | [CSV.gz](https://unpkg.com/@ip-location-db/dbip-city/dbip-city-ipv4.csv.gz)<br>[CSV.7z](https://cdn.jsdelivr.net/npm/@ip-location-db/dbip-city-7z/dbip-city-ipv4.csv.7z)<br>[MMDB](https://cdn.jsdelivr.net/npm/@ip-location-db/dbip-city-mmdb/dbip-city-ipv4.mmdb) | [CSV.gz](https://unpkg.com/@ip-location-db/dbip-city/dbip-city-ipv6.csv.gz)<br>[CSV.7z](https://cdn.jsdelivr.net/npm/@ip-location-db/dbip-city-7z/dbip-city-ipv6.csv.7z)<br>[MMDB](https://cdn.jsdelivr.net/npm/@ip-location-db/dbip-city-mmdb/dbip-city-ipv6.mmdb) | [CSV.gz](https://unpkg.com/@ip-location-db/dbip-city/dbip-city-ipv4-num.csv.gz)<br>[CSV.7z](https://cdn.jsdelivr.net/npm/@ip-location-db/dbip-city-7z/dbip-city-ipv4-num.csv.7z) | [CSV.gz](https://unpkg.com/@ip-location-db/dbip-city/dbip-city-ipv6-num.csv.gz)<br>[CSV.7z](https://cdn.jsdelivr.net/npm/@ip-location-db/dbip-city-7z/dbip-city-ipv6-num.csv.7z) |
--- ${download-table-geolite2-city} ---
| [GeoLite2](https://github.com/sapics/ip-location-db/tree/main/geolite2-city/)<br><br>[![npm version](https://img.shields.io/npm/v/@ip-location-db/geolite2-city?color=success&style=flat-square&label=GZ)](https://www.npmjs.com/package/@ip-location-db/geolite2-city)<br>[![npm version](https://img.shields.io/npm/v/@ip-location-db/geolite2-city-7z?color=success&style=flat-square&label=7z)](https://www.npmjs.com/package/@ip-location-db/geolite2-city-7z)<br>[![npm version](https://img.shields.io/npm/v/@ip-location-db/geolite2-city-mmdb?color=success&style=flat-square&label=MMDB)](https://www.npmjs.com/package/@ip-location-db/geolite2-city-mmdb) | City | GeoLite2 License by [MaxMind](https://www.maxmind.com/) | Twice weekly | [CSV.gz](https://cdn.jsdelivr.net/npm/@ip-location-db/geolite2-city/geolite2-city-ipv4.csv.gz)<br>[CSV.7z](https://cdn.jsdelivr.net/npm/@ip-location-db/geolite2-city-7z/geolite2-city-ipv4.csv.7z)<br>[MMDB](https://cdn.jsdelivr.net/npm/@ip-location-db/geolite2-city-mmdb/geolite2-city-ipv4.mmdb) | [CSV.gz](https://cdn.jsdelivr.net/npm/@ip-location-db/geolite2-city/geolite2-city-ipv6.csv.gz)<br>[CSV.7z](https://cdn.jsdelivr.net/npm/@ip-location-db/geolite2-city-7z/geolite2-city-ipv6.csv.7z)<br>[MMDB](https://cdn.jsdelivr.net/npm/@ip-location-db/geolite2-city-mmdb/geolite2-city-ipv6.mmdb) | [CSV.gz](https://cdn.jsdelivr.net/npm/@ip-location-db/geolite2-city/geolite2-city-ipv4-num.csv.gz)<br>[CSV.7z](https://cdn.jsdelivr.net/npm/@ip-location-db/geolite2-city-7z/geolite2-city-ipv4-num.csv.7z) | [CSV.gz](https://cdn.jsdelivr.net/npm/@ip-location-db/geolite2-city/geolite2-city-ipv6-num.csv.gz)<br>[CSV.7z](https://cdn.jsdelivr.net/npm/@ip-location-db/geolite2-city-7z/geolite2-city-ipv6-num.csv.7z) |


--- ${applications-table-header} ---
| Application | Language | Description | Types | IPv4 | IPv6 | Auto<br>Updates |
|---|---|---|---|---|---|---|
--- ${applications-1} ---
|[`ip_location_server`](https://github.com/EP-u-NW/ip_location_server) | Java | An in-memory GRPC and HTTP server mapping IP addresses to locations *(requires at least 1.5GB RAM)* | `country`<br>`asn`<br>`city` | ✓ | ✓ | ✓ |
--- ${applications-2} ---
|[`ip-location-api`](https://github.com/paul-norman/ip-location-api) | Go | API server creating / supporting MMDB, PostgreSQL, MySQL / MariaDB and SQLite | `country`<br>`asn`<br>`city` | ✓ | ✓ | ✓ |
--- ${applications-3} ---
|[`Ip-geo-API`](https://github.com/realchandan/Ip-geo-API) | Go | In-memory API server | `country`  | ✓ | ✓ | ✘ |
--- ${applications-4} ---
|[`IPInfoOffline`](https://www.nirsoft.net/utils/ip_country_info_offline.html) | Windows  | Desktop tool showing information about IP addresses *(local data)* | `country`<br>`asn`<br>`city` | ✓ | ✓ | ✘ |


--- ${tools-table-header} ---
| Tool | Description |
|---|---|
--- ${tools-1} ---
|[`ip-location-to-mmdb`](https://github.com/paul-norman/ip-location-to-mmdb) | Basic conversion from CSV files from this database into MMDB files |
--- ${tools-2} ---
|[`mmdbmeld`](https://github.com/safing/mmdbmeld) | Create and customise MMDB files from CSV files in this database |

--- ${explanation-db-asn} ---
### ASN database [Update: Daily]

Created by merging 5 RIP ([afrinic](https://afrinic.net), [apnic](https://www.apnic.net), [arin](https://www.arin.net), [lacnic](https://www.lacnic.net), [ripe ncc](https://www.ripe.net)) IP-ASN-Country database.
[ASN (Autonomous System Number)](https://wikipedia.org/wiki/Autonomous_system_(Internet)) is a unique number assigned to an Autonomous System (AS) by the [IANA](https://www.iana.org/).


--- ${explanation-db-whois} ---
### Whois dastabase [Update: Daily]

Created by merging 5 RIP ([afrinic](https://afrinic.net), [apnic](https://www.apnic.net), [arin](https://www.arin.net), [lacnic](https://www.lacnic.net), [ripe ncc](https://www.ripe.net)) provided [WHOIS](https://en.wikipedia.org/wiki/WHOIS) database.


--- ${explanation-db-geo} ---

### GeoFeed database [Update: Daily]

Created by merging GeoFeed database from [OpenGeoFeed](https://opengeofeed.org/).


--- ${explanation-db-routeviews} ---

### [RouteViews](https://www.routeviews.org/routeviews/) database [Update: every 2 hours]

We are using this database to get AS number from ipv4 address for [asn](https://www.npmjs.com/package/@ip-location-db/asn).
This is licensed under a [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), so, **you must create attribution to [RouteViews](https://www.routeviews.org/routeviews/) for using asn database**.


--- ${explanation-db-iptoasn} ---

### [IPtoASN](https://iptoasn.com/) database [Update: Hourly]

You can download hourly updated database in tsv format from [original site](https://iptoasn.com/).
This is licensed under a [Public Domain Dedication and License v1.0](https://opendatacommons.org/licenses/pddl/1.0/).
There are some differences from above `ASN` database.


--- ${explanation-db-dbip} ---

### [DB-IP](https://db-ip.com/) database [Update: Monthly]

You could download and read the license from [ip-to-asn-lite](https://db-ip.com/db/download/ip-to-asn-lite) or [ip-to-country-lite](https://db-ip.com/db/download/ip-to-country-lite) or [ip-to-city-lite](https://db-ip.com/db/download/ip-to-city-lite).
Most of the AS Organization name used in [asn](https://www.npmjs.com/package/@ip-location-db/asn) uses [ip-to-asn-lite](https://db-ip.com/db/download/ip-to-asn-lite) database.
We also use [ip-to-asn-lite](https://db-ip.com/db/download/ip-to-asn-lite) to get AS Number from ip address as a supplemental.

These database are licensed under a [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), so, **you must create attribution to [DB-IP.com](https://db-ip.com/) for using DB-IP database**.<br>
In the case of a web application, you must include a link back to DB-IP.com on pages that display or use results from the database. You may do it by pasting the HTML code snippet into your code: `<a href='https://db-ip.com/'>IP Geolocation by DB-IP</a>`.<br>
If you need better accuracy or no attribution or daily updates, please use the [Commercial Version of db-ip](https://db-ip.com/db/ip-to-country).


--- ${explanation-db-geolite2} ---

### [GeoLite2](https://dev.maxmind.com/geoip/geoip2/geolite2/) database [Update: Twice weekly]

GeoLite2 is created by [MaxMind](https://www.maxmind.com).
The license of GeoLite2 is written in GEOLITE2_LICENSE and End User License Agreement (EULA) is written in GEOLITE2_EULA.
**Please carefully read the GEOLITE2_LICENSE and GEOLITE2_EULA files, if you use these database.**
This package comes with certain restrictions and obligations, most notably:
- You cannot prevent the library from updating the databases.
- You cannot use the GeoLite2 data:
  - for FCRA purposes,
  - to identify specific households or individuals.

You can read [the latest version of GeoLite2 EULA](https://www.maxmind.com/en/geolite2/eula).
GeoLite2 databse is provided under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) by [MaxMind](https://www.maxmind.com), so, **you must create attribution to [MaxMind](https://www.maxmind.com) for using GeoLite2 database**.
If you need better accuracy, please use the commercial version [GeoIp2](https://www.maxmind.com/en/geoip2-databases).


--- ${merge-db} ---
## Merge rule for multiple database

When merging multiple database, set the front database above back one.
For example, geo-whois-asn-country is created by merging 3 database with GeoFeed > Whois > ASN.
In more detail, the geo-whois-asn database matches the GeoFeed results, for ip ranges not covered by GeoFeed it matches the Whois results, and for ip ranges not covered by either it matches the ASN results.
```
GeoFeed: 1.0.0.0, 2.0.0.0, AU
         3.0.0.1, 4.0.0.0, US
Whois:   1.0.0.0, 2.2.0.0, FR
         2.5.0.1, 4.0.0.0, IN
ASN:     1.0.0.0, 4.0.0.0, JP
```
is converted to
```
GeoFeed-Whois-ASN: 1.0.0.0, 2.0.0.0, AU
                   2.0.0.1, 2.2.0.0, FR
                   2.2.0.1, 2.5.0.0, JP
                   2.5.0.1, 3.0.0.0, IN
                   3.0.0.1, 4.0.0.0, US
```


--- ${license-dbip} ---
DB-IP databases are licensed under a [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) license, so **you must create attribution to [DB-IP.com](https://db-ip.com/) when using this database**. In the case of a web application, you must include a link back to [DB-IP.com](https://db-ip.com/) on pages that display or use results from the database. You may comply with this by including the following HTML code snippet into your code: `<a href="https://db-ip.com/">IP Geolocation by DB-IP</a>`.

If you need better accuracy, no attribution or daily updates, please use the relevant commercial version: [country](https://db-ip.com/db/ip-to-country), [asn](https://db-ip.com/db/ip-to-isp) or [city](https://db-ip.com/db/ip-to-location).
--- ${license-routeviews} ---
RouteViews databases are licensed under a [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) license, so **you must create attribution to [RouteViews](https://www.routeviews.org/routeviews/) when using this database**.
--- ${license-cc0} ---
## License

These files are subject to the Creative Commons Zero ([CC0](https://creativecommons.org/publicdomain/zero/1.0/deed)) license. You may use these databases without attribution for any purpose.
--- ${license-pddl} ---
## License

This files are subject to the [Public Domain Dedication and license v1.0](https://opendatacommons.org/licenses/pddl/1.0/). You may use these databases without attribution for any purpose.
--- ${license-geolite2} ---
These databases are subject to Maxmind's End User License Agreement ([EULA](https://www.maxmind.com/en/geolite2/eula)) which incorporates components of the [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) license, so **you must create attribution to [MaxMind](https://www.maxmind.com) when using GeoLite2 database** in all advertising and documentation mentioning features of or use of GeoLite2 data. You may comply with this by including the following HTML code snippet into your code: `This product includes GeoLite2 data created by MaxMind, available from <a href="https://www.maxmind.com">https://www.maxmind.com</a>.`.

**Please carefully read these licenses if you use these databases.** Most notable restrictions and obligations are:
- You cannot prevent the library from updating the databases.
- You cannot use the GeoLite2 data:
  - for FCRA purposes,
  - to identify specific households or individuals.

If you need better accuracy, no attribution or daily updates, please use the relevant commercial version: [GeoIp®](https://www.maxmind.com/en/geoip-databases).
--- ${license-webnet77} ---
These files are provided as [Donationware](http://en.wikipedia.org/wiki/Donationware) by [Webnet77](http://software77.net/geo-ip/).