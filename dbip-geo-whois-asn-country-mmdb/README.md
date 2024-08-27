# [ip-location-db](https://github.com/sapics/ip-location-db)/dbip-geo-whois-asn-country-mmdb

## Download

| Database | Type | License | Updated | IPv4 | IPv6 | IPv4-num | IPv6-num |
|---|---|---|---|---|---|---|---|
| [DB-IP Lite + GeoFeed + Whois + ASN](https://github.com/sapics/ip-location-db/tree/main/dbip-geo-whois-asn-country/)<br><br>[![npm version](https://img.shields.io/npm/v/@ip-location-db/dbip-geo-whois-asn-country?color=success&style=flat-square&label=CSV)](https://www.npmjs.com/package/@ip-location-db/dbip-geo-whois-asn-country)| Country | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) <br> by [DB-IP](https://db-ip.com/) | Monthly | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/dbip-geo-whois-asn-country/dbip-geo-whois-asn-country-ipv4.csv)<br>[MMDB](https://cdn.jsdelivr.net/npm/@ip-location-db/dbip-geo-whois-asn-country-mmdb/dbip-geo-whois-asn-country-ipv4.mmdb) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/dbip-geo-whois-asn-country/dbip-geo-whois-asn-country-ipv6.csv)<br>[MMDB](https://cdn.jsdelivr.net/npm/@ip-location-db/dbip-geo-whois-asn-country-mmdb/dbip-geo-whois-asn-country-ipv6.mmdb) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/dbip-geo-whois-asn-country/dbip-geo-whois-asn-country-ipv4-num.csv) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/dbip-geo-whois-asn-country/dbip-geo-whois-asn-country-ipv6-num.csv) |


## MMDB Format

```
country_code
```


### country_code

`country_code` is the two-letter code defined in [ISO 3166-1 alpha-2](https://wikipedia.org/wiki/ISO_3166-1_alpha-2).
You can get the `country name, capital, continent, currency, languages, etc.` from the `country_code` by [Countries Database](https://github.com/annexare/Countries) in JSON, CSV, SQL format.


## Referenced Database and License



### [DB-IP](https://db-ip.com/) database [Update: Monthly]

You could download and read the license from [ip-to-asn-lite](https://db-ip.com/db/download/ip-to-asn-lite) or [ip-to-country-lite](https://db-ip.com/db/download/ip-to-country-lite) or [ip-to-city-lite](https://db-ip.com/db/download/ip-to-city-lite).
Most of the AS Organization name used in [asn](https://www.npmjs.com/package/@ip-location-db/asn) uses [ip-to-asn-lite](https://db-ip.com/db/download/ip-to-asn-lite) database.
We also use [ip-to-asn-lite](https://db-ip.com/db/download/ip-to-asn-lite) to get AS Number from ip address as a supplemental.

These database are licensed under a [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), so, **you must create attribution to [DB-IP.com](https://db-ip.com/) for using DB-IP database**.<br>
In the case of a web application, you must include a link back to DB-IP.com on pages that display or use results from the database. You may do it by pasting the HTML code snippet into your code: `<a href='https://db-ip.com/'>IP Geolocation by DB-IP</a>`.<br>
If you need better accuracy or no attribution or daily updates, please use the [Commercial Version of db-ip](https://db-ip.com/db/ip-to-country).



### GeoFeed database [Update: Daily]

Created by merging GeoFeed database from [OpenGeoFeed](https://opengeofeed.org/).



### Whois dastabase [Update: Daily]

Created by merging 5 RIP ([afrinic](https://afrinic.net), [apnic](https://www.apnic.net), [arin](https://www.arin.net), [lacnic](https://www.lacnic.net), [ripe ncc](https://www.ripe.net)) provided [WHOIS](https://en.wikipedia.org/wiki/WHOIS) database.



### ASN database [Update: Daily]

Created by merging 5 RIP ([afrinic](https://afrinic.net), [apnic](https://www.apnic.net), [arin](https://www.arin.net), [lacnic](https://www.lacnic.net), [ripe ncc](https://www.ripe.net)) IP-ASN-Country database.
[ASN (Autonomous System Number)](https://wikipedia.org/wiki/Autonomous_system_(Internet)) is a unique number assigned to an Autonomous System (AS) by the [IANA](https://www.iana.org/).

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
