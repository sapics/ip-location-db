# [ip-location-db](https://github.com/sapics/ip-location-db)/geolite2-city

## Download

| Database | Type | License | Updated | IPv4 | IPv6 | IPv4+IPV6 | IPv4-num | IPv6-num |
|---|---|---|---|---|---|---|---|---|
| [GeoLite2](https://github.com/sapics/ip-location-db/tree/main/geolite2-city/)<br><br>[![npm version](https://img.shields.io/npm/v/@ip-location-db/geolite2-city?color=success&style=flat-square&label=GZ)](https://www.npmjs.com/package/@ip-location-db/geolite2-city)<br>[![npm version](https://img.shields.io/npm/v/@ip-location-db/geolite2-city-7z?color=success&style=flat-square&label=7z)](https://www.npmjs.com/package/@ip-location-db/geolite2-city-7z)<br>[![npm version](https://img.shields.io/npm/v/@ip-location-db/geolite2-city-mmdb?color=success&style=flat-square&label=MMDB)](https://www.npmjs.com/package/@ip-location-db/geolite2-city-mmdb) | City | GeoLite2 License by [MaxMind](https://www.maxmind.com/) | Twice weekly | [CSV.gz](https://cdn.jsdelivr.net/npm/@ip-location-db/geolite2-city/geolite2-city-ipv4.csv.gz)<br>[CSV.7z](https://cdn.jsdelivr.net/npm/@ip-location-db/geolite2-city-7z/geolite2-city-ipv4.csv.7z)<br>[MMDB](https://cdn.jsdelivr.net/npm/@ip-location-db/geolite2-city-mmdb/geolite2-city-ipv4.mmdb) | [CSV.gz](https://cdn.jsdelivr.net/npm/@ip-location-db/geolite2-city/geolite2-city-ipv6.csv.gz)<br>[CSV.7z](https://cdn.jsdelivr.net/npm/@ip-location-db/geolite2-city-7z/geolite2-city-ipv6.csv.7z)<br>[MMDB](https://cdn.jsdelivr.net/npm/@ip-location-db/geolite2-city-mmdb/geolite2-city-ipv6.mmdb) | — | [CSV.gz](https://cdn.jsdelivr.net/npm/@ip-location-db/geolite2-city/geolite2-city-ipv4-num.csv.gz)<br>[CSV.7z](https://cdn.jsdelivr.net/npm/@ip-location-db/geolite2-city-7z/geolite2-city-ipv4-num.csv.7z) | [CSV.gz](https://cdn.jsdelivr.net/npm/@ip-location-db/geolite2-city/geolite2-city-ipv6-num.csv.gz)<br>[CSV.7z](https://cdn.jsdelivr.net/npm/@ip-location-db/geolite2-city-7z/geolite2-city-ipv6-num.csv.7z) |


## CSV Format

```CSV
ip_range_start, ip_range_end, country_code, city, state1, state2, postcode, latitude, longitude, timezone
```
`ip_range_start` and `ip_range_end` are either IP addresses, or IP addresses in numeric format *(depending upon which files you choose)* and these two fields represent an **inclusive** range of IP addresses for that data row.

For example, in the `-ipv4.csv` files, the CSV line: `1.0.0.0,1.0.0.255,AU` would mean that any IP addresses between `1.0.0.0` and `1.0.0.255` *(inclusive)* are `AU`. In `-ipv4-num.csv` files, the equivalent line would be: `16777216,16777471,AU`.

For example, in the `-ipv6.csv` files, the CSV line: `2001:200::,2001:200:ffff:ffff:ffff:ffff:ffff:ffff,JP` would mean that any IP addresses between `2001:200::` and `2001:200:ffff:ffff:ffff:ffff:ffff:ffff` *(inclusive)* are `JP`. In `-ipv6-num.csv` files, the equivalent line would be: `42540528726795050063891204319802818560,42540528806023212578155541913346768895,JP`.

Please be careful when using IPv6 and IPv6-num files in your program, the numerical value exceeds 32bit unsigned integers, and you would need to use a 128bit unsigned integer.


### country_code

`country_code` is the two-letter code defined in [ISO 3166-1 alpha-2](https://wikipedia.org/wiki/ISO_3166-1_alpha-2).
You can get the `country name, capital, continent, currency, languages, etc.` from the `country_code` by [Countries Database](https://github.com/annexare/Countries) in JSON, CSV, SQL format.


## Referenced Database and License



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

