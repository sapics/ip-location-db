# [ip-location-db](https://github.com/sapics/ip-location-db)/iplocate-country-mmdb

## Download

| Database | Type | License | Updated | IPv4 | IPv6 | IPv4+IPV6 | IPv4-num | IPv6-num |
|---|---|---|---|---|---|---|---|---|
| [IPLocate](https://github.com/sapics/ip-location-db/tree/main/iplocate-country/)<br><br>[![npm version](https://img.shields.io/npm/v/@ip-location-db/iplocate-country?color=success&style=flat-square&label=CSV)](https://www.npmjs.com/package/@ip-location-db/iplocate-country)<br>[![npm version](https://img.shields.io/npm/v/@ip-location-db/iplocate-country-mmdb?color=success&style=flat-square&label=MMDB)](https://www.npmjs.com/package/@ip-location-db/iplocate-country-mmdb) | Country | [CC BY SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) by [IPLocate](https://www.iplocate.io/) | Daily | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/iplocate-country/iplocate-country-ipv4.csv)<br>[MMDB](https://cdn.jsdelivr.net/npm/@ip-location-db/iplocate-country-mmdb/iplocate-country-ipv4.mmdb) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/iplocate-country/iplocate-country-ipv6.csv)<br>[MMDB](https://cdn.jsdelivr.net/npm/@ip-location-db/iplocate-country-mmdb/iplocate-country-ipv6.mmdb) | [MMDB](https://cdn.jsdelivr.net/npm/@ip-location-db/iplocate-country-mmdb/iplocate-country.mmdb) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/iplocate-country/iplocate-country-ipv4-num.csv) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/iplocate-country/iplocate-country-ipv6-num.csv) |


## MMDB Format

```
country_code
```


### country_code

`country_code` is the two-letter code defined in [ISO 3166-1 alpha-2](https://wikipedia.org/wiki/ISO_3166-1_alpha-2).
You can get the `country name, capital, continent, currency, languages, etc.` from the `country_code` by [Countries Database](https://github.com/annexare/Countries) in JSON, CSV, SQL format.


## Referenced Database and License



### [IPLocate](https://www.iplocate.io/) database [Update: Daily]

You can download the original databases and read license from github repository [iplocate/ip-address-databases](https://github.com/iplocate/ip-address-databases).

These databases are licensed under a [CC BY SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/), so **you must give appropriate credit by providing a link to [IPLocate.io](https://www.iplocate.io/) on your application, product, or website where the data is used**.

If you need more detailed information (ex. City Name/Latitude/Longitude/etc.), please use the [premium databases](https://www.iplocate.io/products/downloadable-databases).

