# [ip-location-db](https://github.com/sapics/ip-location-db)/geolite2-country-mmdb

## Download

| Database | Type | License | Updated | IPv4 | IPv6 | IPv4+IPV6 | IPv4-num | IPv6-num |
|---|---|---|---|---|---|---|---|---|
| [GeoLite2](https://github.com/sapics/ip-location-db/tree/main/geolite2-country/)<br><br>[![npm version](https://img.shields.io/npm/v/@ip-location-db/geolite2-country?color=success&style=flat-square&label=CSV)](https://www.npmjs.com/package/@ip-location-db/geolite2-country)<br>[![npm version](https://img.shields.io/npm/v/@ip-location-db/geolite2-country-mmdb?color=success&style=flat-square&label=MMDB)](https://www.npmjs.com/package/@ip-location-db/geolite2-country-mmdb) | Country | GeoLite2 License by [MaxMind](https://www.maxmind.com/) | Twice weekly | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/geolite2-country/geolite2-country-ipv4.csv)<br>[MMDB](https://cdn.jsdelivr.net/npm/@ip-location-db/geolite2-country-mmdb/geolite2-country-ipv4.mmdb) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/geolite2-country/geolite2-country-ipv6.csv)<br>[MMDB](https://cdn.jsdelivr.net/npm/@ip-location-db/geolite2-country-mmdb/geolite2-country-ipv6.mmdb) | — | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/geolite2-country/geolite2-country-ipv4-num.csv) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/geolite2-country/geolite2-country-ipv6-num.csv) |


## MMDB Format

```
country_code
```


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

