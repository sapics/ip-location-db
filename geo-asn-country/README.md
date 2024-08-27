# [ip-location-db](https://github.com/sapics/ip-location-db)/geo-asn-country

## Download

| Database | Type | License | Updated | IPv4 | IPv6 | IPv4-num | IPv6-num |
|---|---|---|---|---|---|---|---|
| [GeoFeed + ASN](https://github.com/sapics/ip-location-db/tree/main/geo-asn-country/)<br><br>[![npm version](https://img.shields.io/npm/v/@ip-location-db/geo-asn-country?color=success&style=flat-square&label=CSV)](https://www.npmjs.com/package/@ip-location-db/geo-asn-country)<br>[![npm version](https://img.shields.io/npm/v/@ip-location-db/geo-asn-country-mmdb?color=success&style=flat-square&label=MMDB)](https://www.npmjs.com/package/@ip-location-db/geo-asn-country-mmdb) | Country | [CC0](https://creativecommons.org/publicdomain/zero/1.0/deed) | Daily | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/geo-asn-country/geo-asn-country-ipv4.csv)<br>[MMDB](https://cdn.jsdelivr.net/npm/@ip-location-db/geo-asn-country-mmdb/geo-asn-country-ipv4.mmdb) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/geo-asn-country/geo-asn-country-ipv6.csv)<br>[MMDB](https://cdn.jsdelivr.net/npm/@ip-location-db/geo-asn-country-mmdb/geo-asn-country-ipv6.mmdb) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/geo-asn-country/geo-asn-country-ipv4-num.csv) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/geo-asn-country/geo-asn-country-ipv6-num.csv) |


## CSV Format

```CSV
ip_range_start, ip_range_end, country_code
```
`ip_range_start` and `ip_range_end` are either IP addresses, or IP addresses in numeric format *(depending upon which files you choose)* and these two fields represent an **inclusive** range of IP addresses for that data row.

For example, in the `-ipv4.csv` files, the CSV line: `1.0.0.0,1.0.0.255,AU` would mean that any IP addresses between `1.0.0.0` and `1.0.0.255` *(inclusive)* are `AU`. In `-ipv4-num.csv` files, the equivalent line would be: `16777216,16777471,AU`.

For example, in the `-ipv6.csv` files, the CSV line: `2001:200::,2001:200:ffff:ffff:ffff:ffff:ffff:ffff,JP` would mean that any IP addresses between `2001:200::` and `2001:200:ffff:ffff:ffff:ffff:ffff:ffff` *(inclusive)* are `JP`. In `-ipv6-num.csv` files, the equivalent line would be: `42540528726795050063891204319802818560,42540528806023212578155541913346768895,JP`.

Please be careful when using IPv6 and IPv6-num files in your program, the numerical value exceeds 32bit unsigned integers, and you would need to use a 128bit unsigned integer.


### country_code

`country_code` is the two-letter code defined in [ISO 3166-1 alpha-2](https://wikipedia.org/wiki/ISO_3166-1_alpha-2).
You can get the `country name, capital, continent, currency, languages, etc.` from the `country_code` by [Countries Database](https://github.com/annexare/Countries) in JSON, CSV, SQL format.


## Referenced Database



### GeoFeed database [Update: Daily]

Created by merging GeoFeed database from [OpenGeoFeed](https://opengeofeed.org/).



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


## License

These files are subject to the Creative Commons Zero ([CC0](https://creativecommons.org/publicdomain/zero/1.0/deed)) license. You may use these databases without attribution for any purpose.
