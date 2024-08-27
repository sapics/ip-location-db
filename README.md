# ip-location-db

This project provides IP to location databases in CSV and MMDB formats.

There are 3 types of IP database in this repository: `country`, `city` and `asn` files. All have their own standard format.

### Country

```CSV
ip_range_start, ip_range_end, country_code
```

| Database | Type | License | Updated | IPv4 | IPv6 | IPv4-num | IPv6-num |
|---|---|---|---|---|---|---|---|
| [ASN](https://github.com/sapics/ip-location-db/tree/main/asn-country/)<br><br>[![npm version](https://img.shields.io/npm/v/@ip-location-db/asn-country?color=success&style=flat-square&label=CSV)](https://www.npmjs.com/package/@ip-location-db/asn-country)<br>[![npm version](https://img.shields.io/npm/v/@ip-location-db/asn-country-mmdb?color=success&style=flat-square&label=MMDB)](https://www.npmjs.com/package/@ip-location-db/asn-country-mmdb) | Country | [CC0](https://creativecommons.org/publicdomain/zero/1.0/deed) | Daily | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/asn-country/asn-country-ipv4.csv)<br>[MMDB](https://cdn.jsdelivr.net/npm/@ip-location-db/asn-country-mmdb/asn-country-ipv4.mmdb) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/asn-country/asn-country-ipv6.csv)<br>[MMDB](https://cdn.jsdelivr.net/npm/@ip-location-db/asn-country-mmdb/asn-country-ipv6.mmdb) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/asn-country/asn-country-ipv4-num.csv) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/asn-country/asn-country-ipv6-num.csv) |
| [GeoFeed + ASN](https://github.com/sapics/ip-location-db/tree/main/geo-asn-country/)<br><br>[![npm version](https://img.shields.io/npm/v/@ip-location-db/geo-asn-country?color=success&style=flat-square&label=CSV)](https://www.npmjs.com/package/@ip-location-db/geo-asn-country)<br>[![npm version](https://img.shields.io/npm/v/@ip-location-db/geo-asn-country-mmdb?color=success&style=flat-square&label=MMDB)](https://www.npmjs.com/package/@ip-location-db/geo-asn-country-mmdb) | Country | [CC0](https://creativecommons.org/publicdomain/zero/1.0/deed) | Daily | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/geo-asn-country/geo-asn-country-ipv4.csv)<br>[MMDB](https://cdn.jsdelivr.net/npm/@ip-location-db/geo-asn-country-mmdb/geo-asn-country-ipv4.mmdb) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/geo-asn-country/geo-asn-country-ipv6.csv)<br>[MMDB](https://cdn.jsdelivr.net/npm/@ip-location-db/geo-asn-country-mmdb/geo-asn-country-ipv6.mmdb) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/geo-asn-country/geo-asn-country-ipv4-num.csv) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/geo-asn-country/geo-asn-country-ipv6-num.csv) |
| [GeoFeed + Whois + ASN](https://github.com/sapics/ip-location-db/tree/main/geo-whois-asn-country/)<br><br>[![npm version](https://img.shields.io/npm/v/@ip-location-db/geo-whois-asn-country?color=success&style=flat-square&label=CSV)](https://www.npmjs.com/package/@ip-location-db/geo-whois-asn-country)<br>[![npm version](https://img.shields.io/npm/v/@ip-location-db/geo-whois-asn-country-mmdb?color=success&style=flat-square&label=MMDB)](https://www.npmjs.com/package/@ip-location-db/geo-whois-asn-country-mmdb) | Country | [CC0](https://creativecommons.org/publicdomain/zero/1.0/deed) | Daily | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/geo-whois-asn-country/geo-whois-asn-country-ipv4.csv)<br>[MMDB](https://cdn.jsdelivr.net/npm/@ip-location-db/geo-whois-asn-country-mmdb/geo-whois-asn-country-ipv4.mmdb) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/geo-whois-asn-country/geo-whois-asn-country-ipv6.csv)<br>[MMDB](https://cdn.jsdelivr.net/npm/@ip-location-db/geo-whois-asn-country-mmdb/geo-whois-asn-country-ipv6.mmdb) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/geo-whois-asn-country/geo-whois-asn-country-ipv4-num.csv) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/geo-whois-asn-country/geo-whois-asn-country-ipv6-num.csv) |
| [IPtoASN](https://github.com/sapics/ip-location-db/tree/main/iptoasn-country/)<br><br>[![npm version](https://img.shields.io/npm/v/@ip-location-db/iptoasn-country?color=success&style=flat-square&label=CSV)](https://www.npmjs.com/package/@ip-location-db/iptoasn-country)<br>[![npm version](https://img.shields.io/npm/v/@ip-location-db/iptoasn-country-mmdb?color=success&style=flat-square&label=MMDB)](https://www.npmjs.com/package/@ip-location-db/iptoasn-country-mmdb) | Country | [PDDL](https://opendatacommons.org/licenses/pddl/1.0/) by [IPtoASN](https://iptoasn.com/) | Daily | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/iptoasn-country/iptoasn-country-ipv4.csv)<br>[MMDB](https://cdn.jsdelivr.net/npm/@ip-location-db/iptoasn-country-mmdb/iptoasn-country-ipv4.mmdb) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/iptoasn-country/iptoasn-country-ipv6.csv)<br>[MMDB](https://cdn.jsdelivr.net/npm/@ip-location-db/iptoasn-country-mmdb/iptoasn-country-ipv6.mmdb) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/iptoasn-country/iptoasn-country-ipv4-num.csv) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/iptoasn-country/iptoasn-country-ipv6-num.csv) |
| [DB-IP Lite](https://github.com/sapics/ip-location-db/tree/main/dbip-country/)<br><br>[![npm version](https://img.shields.io/npm/v/@ip-location-db/dbip-country?color=success&style=flat-square&label=CSV)](https://www.npmjs.com/package/@ip-location-db/dbip-country)| Country | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) <br> by [DB-IP](https://db-ip.com/) | Monthly | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/dbip-country/dbip-country-ipv4.csv)<br>[MMDB](https://cdn.jsdelivr.net/npm/@ip-location-db/dbip-country-mmdb/dbip-country-ipv4.mmdb) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/dbip-country/dbip-country-ipv6.csv)<br>[MMDB](https://cdn.jsdelivr.net/npm/@ip-location-db/dbip-country-mmdb/dbip-country-ipv6.mmdb) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/dbip-country/dbip-country-ipv4-num.csv) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/dbip-country/dbip-country-ipv6-num.csv) |
| [DB-IP Lite + GeoFeed + Whois + ASN](https://github.com/sapics/ip-location-db/tree/main/dbip-geo-whois-asn-country/)<br><br>[![npm version](https://img.shields.io/npm/v/@ip-location-db/dbip-geo-whois-asn-country?color=success&style=flat-square&label=CSV)](https://www.npmjs.com/package/@ip-location-db/dbip-geo-whois-asn-country)| Country | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) <br> by [DB-IP](https://db-ip.com/) | Monthly | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/dbip-geo-whois-asn-country/dbip-geo-whois-asn-country-ipv4.csv)<br>[MMDB](https://cdn.jsdelivr.net/npm/@ip-location-db/dbip-geo-whois-asn-country-mmdb/dbip-geo-whois-asn-country-ipv4.mmdb) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/dbip-geo-whois-asn-country/dbip-geo-whois-asn-country-ipv6.csv)<br>[MMDB](https://cdn.jsdelivr.net/npm/@ip-location-db/dbip-geo-whois-asn-country-mmdb/dbip-geo-whois-asn-country-ipv6.mmdb) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/dbip-geo-whois-asn-country/dbip-geo-whois-asn-country-ipv4-num.csv) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/dbip-geo-whois-asn-country/dbip-geo-whois-asn-country-ipv6-num.csv) |
| [GeoLite2](https://github.com/sapics/ip-location-db/tree/main/geolite2-country/)<br><br>[![npm version](https://img.shields.io/npm/v/@ip-location-db/geolite2-country?color=success&style=flat-square&label=CSV)](https://www.npmjs.com/package/@ip-location-db/geolite2-country)<br>[![npm version](https://img.shields.io/npm/v/@ip-location-db/geolite2-country-mmdb?color=success&style=flat-square&label=MMDB)](https://www.npmjs.com/package/@ip-location-db/geolite2-country-mmdb) | Country | GeoLite2 License by [MaxMind](https://www.maxmind.com/) | Twice weekly | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/geolite2-country/geolite2-country-ipv4.csv)<br>[MMDB](https://cdn.jsdelivr.net/npm/@ip-location-db/geolite2-country-mmdb/geolite2-country-ipv4.mmdb) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/geolite2-country/geolite2-country-ipv6.csv)<br>[MMDB](https://cdn.jsdelivr.net/npm/@ip-location-db/geolite2-country-mmdb/geolite2-country-ipv6.mmdb) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/geolite2-country/geolite2-country-ipv4-num.csv) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/geolite2-country/geolite2-country-ipv6-num.csv) |
| [GeoLite2 + GeoFeed + Whois + ASN](https://github.com/sapics/ip-location-db/tree/main/geolite2-geo-whois-asn-country/)<br><br>[![npm version](https://img.shields.io/npm/v/@ip-location-db/geolite2-geo-whois-asn-country?color=success&style=flat-square&label=CSV)](https://www.npmjs.com/package/@ip-location-db/geolite2-geo-whois-asn-country)<br>[![npm version](https://img.shields.io/npm/v/@ip-location-db/geolite2-geo-whois-asn-country-mmdb?color=success&style=flat-square&label=MMDB)](https://www.npmjs.com/package/@ip-location-db/geolite2-geo-whois-asn-country-mmdb) | Country | GeoLite2 License by [MaxMind](https://www.maxmind.com/) | Daily | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/geolite2-geo-whois-asn-country/geolite2-geo-whois-asn-country-ipv4.csv)<br>[MMDB](https://cdn.jsdelivr.net/npm/@ip-location-db/geolite2-geo-whois-asn-country-mmdb/geolite2-geo-whois-asn-country-ipv4.mmdb) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/geolite2-geo-whois-asn-country/geolite2-geo-whois-asn-country-ipv6.csv)<br>[MMDB](https://cdn.jsdelivr.net/npm/@ip-location-db/geolite2-geo-whois-asn-country-mmdb/geolite2-geo-whois-asn-country-ipv6.mmdb) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/geolite2-geo-whois-asn-country/geolite2-geo-whois-asn-country-ipv4-num.csv) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/geolite2-geo-whois-asn-country/geolite2-geo-whois-asn-country-ipv6-num.csv) |

### City

```CSV
ip_range_start, ip_range_end, country_code, city, state1, state2, latitude, longitude, postcode, timezone
```

| Database | Type | License | Updated | IPv4 | IPv6 | IPv4-num | IPv6-num |
|---|---|---|---|---|---|---|---|
| [DB-IP Lite](https://github.com/sapics/ip-location-db/tree/main/dbip-city/)<br><br>[![npm version](https://img.shields.io/npm/v/@ip-location-db/dbip-city?color=success&style=flat-square&label=GZ)](https://www.npmjs.com/package/@ip-location-db/dbip-city)<br>[![npm version](https://img.shields.io/npm/v/@ip-location-db/dbip-city-7z?color=success&style=flat-square&label=7z)](https://www.npmjs.com/package/@ip-location-db/dbip-city-7z)<br>[![npm version](https://img.shields.io/npm/v/@ip-location-db/dbip-city-mmdb?color=success&style=flat-square&label=MMDB)](https://www.npmjs.com/package/@ip-location-db/dbip-city-mmdb) | City | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) <br> by [DB-IP](https://db-ip.com/) | Monthly | [CSV.gz](https://unpkg.com/@ip-location-db/dbip-city/dbip-city-ipv4.csv.gz)<br>[CSV.7z](https://cdn.jsdelivr.net/npm/@ip-location-db/dbip-city-7z/dbip-city-ipv4.csv.7z)<br>[MMDB](https://cdn.jsdelivr.net/npm/@ip-location-db/dbip-city-mmdb/dbip-city-ipv4.mmdb) | [CSV.gz](https://unpkg.com/@ip-location-db/dbip-city/dbip-city-ipv6.csv.gz)<br>[CSV.7z](https://cdn.jsdelivr.net/npm/@ip-location-db/dbip-city-7z/dbip-city-ipv6.csv.7z)<br>[MMDB](https://cdn.jsdelivr.net/npm/@ip-location-db/dbip-city-mmdb/dbip-city-ipv6.mmdb) | [CSV.gz](https://unpkg.com/@ip-location-db/dbip-city/dbip-city-ipv4-num.csv.gz)<br>[CSV.7z](https://cdn.jsdelivr.net/npm/@ip-location-db/dbip-city-7z/dbip-city-ipv4-num.csv.7z) | [CSV.gz](https://unpkg.com/@ip-location-db/dbip-city/dbip-city-ipv6-num.csv.gz)<br>[CSV.7z](https://cdn.jsdelivr.net/npm/@ip-location-db/dbip-city-7z/dbip-city-ipv6-num.csv.7z) |
| [GeoLite2](https://github.com/sapics/ip-location-db/tree/main/geolite2-city/)<br><br>[![npm version](https://img.shields.io/npm/v/@ip-location-db/geolite2-city?color=success&style=flat-square&label=GZ)](https://www.npmjs.com/package/@ip-location-db/geolite2-city)<br>[![npm version](https://img.shields.io/npm/v/@ip-location-db/geolite2-city-7z?color=success&style=flat-square&label=7z)](https://www.npmjs.com/package/@ip-location-db/geolite2-city-7z)<br>[![npm version](https://img.shields.io/npm/v/@ip-location-db/geolite2-city-mmdb?color=success&style=flat-square&label=MMDB)](https://www.npmjs.com/package/@ip-location-db/geolite2-city-mmdb) | City | GeoLite2 License by [MaxMind](https://www.maxmind.com/) | Twice weekly | [CSV.gz](https://cdn.jsdelivr.net/npm/@ip-location-db/geolite2-city/geolite2-city-ipv4.csv.gz)<br>[CSV.7z](https://cdn.jsdelivr.net/npm/@ip-location-db/geolite2-city-7z/geolite2-city-ipv4.csv.7z)<br>[MMDB](https://cdn.jsdelivr.net/npm/@ip-location-db/geolite2-city-mmdb/geolite2-city-ipv4.mmdb) | [CSV.gz](https://cdn.jsdelivr.net/npm/@ip-location-db/geolite2-city/geolite2-city-ipv6.csv.gz)<br>[CSV.7z](https://cdn.jsdelivr.net/npm/@ip-location-db/geolite2-city-7z/geolite2-city-ipv6.csv.7z)<br>[MMDB](https://cdn.jsdelivr.net/npm/@ip-location-db/geolite2-city-mmdb/geolite2-city-ipv6.mmdb) | [CSV.gz](https://cdn.jsdelivr.net/npm/@ip-location-db/geolite2-city/geolite2-city-ipv4-num.csv.gz)<br>[CSV.7z](https://cdn.jsdelivr.net/npm/@ip-location-db/geolite2-city-7z/geolite2-city-ipv4-num.csv.7z) | [CSV.gz](https://cdn.jsdelivr.net/npm/@ip-location-db/geolite2-city/geolite2-city-ipv6-num.csv.gz)<br>[CSV.7z](https://cdn.jsdelivr.net/npm/@ip-location-db/geolite2-city-7z/geolite2-city-ipv6-num.csv.7z) |


### ASN

```CSV
ip_range_start, ip_range_end, autonomous_system_number, autonomous_system_organization
```

| Database | Type | License | Updated | IPv4 | IPv6 | IPv4-num | IPv6-num |
|---|---|---|---|---|---|---|---|
| [RouteViews + ASN + DB-IP](https://github.com/sapics/ip-location-db/tree/main/asn/)<br><br>[![npm version](https://img.shields.io/npm/v/@ip-location-db/asn?color=success&style=flat-square&label=CSV)](https://www.npmjs.com/package/@ip-location-db/asn)<br>[![npm version](https://img.shields.io/npm/v/@ip-location-db/asn-mmdb?color=success&style=flat-square&label=MMDB)](https://www.npmjs.com/package/@ip-location-db/asn-mmdb) | ASN | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) by [RouteViews](https://www.routeviews.org/routeviews/) and [DB-IP](https://db-ip.com/) | Daily | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/asn/asn-ipv4.csv)<br>[MMDB](https://cdn.jsdelivr.net/npm/@ip-location-db/asn-mmdb/asn-ipv4.mmdb) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/asn/asn-ipv6.csv)<br>[MMDB](https://cdn.jsdelivr.net/npm/@ip-location-db/asn-mmdb/asn-ipv6.mmdb) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/asn/asn-ipv4-num.csv) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/asn/asn-ipv6-num.csv) |
| [IPtoASN](https://github.com/sapics/ip-location-db/tree/main/iptoasn-asn/)<br><br>[![npm version](https://img.shields.io/npm/v/@ip-location-db/iptoasn-asn?color=success&style=flat-square&label=CSV)](https://www.npmjs.com/package/@ip-location-db/iptoasn-asn)<br>[![npm version](https://img.shields.io/npm/v/@ip-location-db/iptoasn-asn-mmdb?color=success&style=flat-square&label=MMDB)](https://www.npmjs.com/package/@ip-location-db/iptoasn-asn-mmdb) | ASN | [PDDL](https://opendatacommons.org/licenses/pddl/1.0/) by [IPtoASN](https://iptoasn.com/) | Daily | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/iptoasn-asn/iptoasn-asn-ipv4.csv)<br>[MMDB](https://cdn.jsdelivr.net/npm/@ip-location-db/iptoasn-asn-mmdb/iptoasn-asn-ipv4.mmdb) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/iptoasn-asn/iptoasn-asn-ipv6.csv)<br>[MMDB](https://cdn.jsdelivr.net/npm/@ip-location-db/iptoasn-asn-mmdb/iptoasn-asn-ipv6.mmdb) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/iptoasn-asn/iptoasn-asn-ipv4-num.csv) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/iptoasn-asn/iptoasn-asn-ipv6-num.csv) |
| [DB-IP Lite](https://github.com/sapics/ip-location-db/tree/main/dbip-asn/)<br><br>[![npm version](https://img.shields.io/npm/v/@ip-location-db/dbip-asn?color=success&style=flat-square&label=CSV)](https://www.npmjs.com/package/@ip-location-db/dbip-asn)<br>[![npm version](https://img.shields.io/npm/v/@ip-location-db/dbip-asn-mmdb?color=success&style=flat-square&label=MMDB)](https://www.npmjs.com/package/@ip-location-db/dbip-asn-mmdb) | ASN | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)<br> by [DB-IP](https://db-ip.com/) | Monthly | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/dbip-asn/dbip-asn-ipv4.csv)<br>[MMDB](https://cdn.jsdelivr.net/npm/@ip-location-db/dbip-asn-mmdb/dbip-asn-ipv4.mmdb) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/dbip-asn/dbip-asn-ipv6.csv)<br>[MMDB](https://cdn.jsdelivr.net/npm/@ip-location-db/dbip-asn-mmdb/dbip-asn-ipv6.mmdb) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/dbip-asn/dbip-asn-ipv4-num.csv) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/dbip-asn/dbip-asn-ipv6-num.csv) |
| [GeoLite2](https://github.com/sapics/ip-location-db/tree/main/geolite2-asn/)<br><br>[![npm version](https://img.shields.io/npm/v/@ip-location-db/geolite2-asn?color=success&style=flat-square&label=CSV)](https://www.npmjs.com/package/@ip-location-db/geolite2-asn)<br>[![npm version](https://img.shields.io/npm/v/@ip-location-db/geolite2-asn-mmdb?color=success&style=flat-square&label=MMDB)](https://www.npmjs.com/package/@ip-location-db/geolite2-asn-mmdb) | ASN | GeoLite2 License by [MaxMind](https://www.maxmind.com/) | Twice weekly | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/geolite2-asn/geolite2-asn-ipv4.csv)<br>[MMDB](https://cdn.jsdelivr.net/npm/@ip-location-db/geolite2-asn-mmdb/geolite2-asn-ipv4.mmdb) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/geolite2-asn/geolite2-asn-ipv6.csv)<br>[MMDB](https://cdn.jsdelivr.net/npm/@ip-location-db/geolite2-asn-mmdb/geolite2-asn-ipv6.mmdb) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/geolite2-asn/geolite2-asn-ipv4-num.csv) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/geolite2-asn/geolite2-asn-ipv6-num.csv) |


## File formats

An explanation of each file format is provided in its own directory.

All files of a given type share the same file format; for example, you could swap one `asn` file for any other `asn` file.


## Databases referenced in this project

### ASN database [Update: Daily]

Created by merging 5 RIP ([afrinic](https://afrinic.net), [apnic](https://www.apnic.net), [arin](https://www.arin.net), [lacnic](https://www.lacnic.net), [ripe ncc](https://www.ripe.net)) IP-ASN-Country database.
[ASN (Autonomous System Number)](https://wikipedia.org/wiki/Autonomous_system_(Internet)) is a unique number assigned to an Autonomous System (AS) by the [IANA](https://www.iana.org/).

### Whois dastabase [Update: Daily]

Created by merging 5 RIP ([afrinic](https://afrinic.net), [apnic](https://www.apnic.net), [arin](https://www.arin.net), [lacnic](https://www.lacnic.net), [ripe ncc](https://www.ripe.net)) provided [WHOIS](https://en.wikipedia.org/wiki/WHOIS) database.

### GeoFeed database [Update: Daily]

Created by merging GeoFeed database from [OpenGeoFeed](https://opengeofeed.org/).

### [RouteViews](https://www.routeviews.org/routeviews/) database [Update: every 2 hours]

We are using this database to get AS number from ipv4 address for [asn](https://www.npmjs.com/package/@ip-location-db/asn).
This is licensed under a [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), so, **you must create attribution to [RouteViews](https://www.routeviews.org/routeviews/) for using asn database**.

### [IPtoASN](https://iptoasn.com/) database [Update: Hourly]

You can download hourly updated database in tsv format from [original site](https://iptoasn.com/).
This is licensed under a [Public Domain Dedication and License v1.0](https://opendatacommons.org/licenses/pddl/1.0/).
There are some differences from above `ASN` database.

### [DB-IP](https://db-ip.com/) database [Update: Monthly]

You could download and read the license from [ip-to-asn-lite](https://db-ip.com/db/download/ip-to-asn-lite) or [ip-to-country-lite](https://db-ip.com/db/download/ip-to-country-lite) or [ip-to-city-lite](https://db-ip.com/db/download/ip-to-city-lite).
Most of the AS Organization name used in [asn](https://www.npmjs.com/package/@ip-location-db/asn) uses [ip-to-asn-lite](https://db-ip.com/db/download/ip-to-asn-lite) database.
We also use [ip-to-asn-lite](https://db-ip.com/db/download/ip-to-asn-lite) to get AS Number from ip address as a supplemental.

These database are licensed under a [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), so, **you must create attribution to [DB-IP.com](https://db-ip.com/) for using DB-IP database**.<br>
In the case of a web application, you must include a link back to DB-IP.com on pages that display or use results from the database. You may do it by pasting the HTML code snippet into your code: `<a href='https://db-ip.com/'>IP Geolocation by DB-IP</a>`.<br>
If you need better accuracy or no attribution or daily updates, please use the [Commercial Version of db-ip](https://db-ip.com/db/ip-to-country).

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
