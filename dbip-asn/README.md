# [ip-location-db](https://github.com/sapics/ip-location-db)/dbip-asn

## Download

| Database | Type | License | Updated | IPv4 | IPv6 | IPv4-num | IPv6-num |
|---|---|---|---|---|---|---|---|
| [DB-IP Lite](https://github.com/sapics/ip-location-db/tree/main/dbip-asn/)<br><br>[![npm version](https://img.shields.io/npm/v/@ip-location-db/dbip-asn?color=success&style=flat-square&label=CSV)](https://www.npmjs.com/package/@ip-location-db/dbip-asn)<br>[![npm version](https://img.shields.io/npm/v/@ip-location-db/dbip-asn-mmdb?color=success&style=flat-square&label=MMDB)](https://www.npmjs.com/package/@ip-location-db/dbip-asn-mmdb) | ASN | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)<br> by [DB-IP](https://db-ip.com/) | Monthly | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/dbip-asn/dbip-asn-ipv4.csv)<br>[MMDB](https://cdn.jsdelivr.net/npm/@ip-location-db/dbip-asn-mmdb/dbip-asn-ipv4.mmdb) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/dbip-asn/dbip-asn-ipv6.csv)<br>[MMDB](https://cdn.jsdelivr.net/npm/@ip-location-db/dbip-asn-mmdb/dbip-asn-ipv6.mmdb) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/dbip-asn/dbip-asn-ipv4-num.csv) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/dbip-asn/dbip-asn-ipv6-num.csv) |


## CSV Format

```CSV
ip_range_start, ip_range_end, autonomous_system_number, autonomous_system_organization
```
`ip_range_start` and `ip_range_end` are either IP addresses, or IP addresses in numeric format *(depending upon which files you choose)* and these two fields represent an **inclusive** range of IP addresses for that data row.

For example, in the `-ipv4.csv` files, the CSV line: `1.0.0.0,1.0.0.255,AU` would mean that any IP addresses between `1.0.0.0` and `1.0.0.255` *(inclusive)* are `AU`. In `-ipv4-num.csv` files, the equivalent line would be: `16777216,16777471,AU`.

For example, in the `-ipv6.csv` files, the CSV line: `2001:200::,2001:200:ffff:ffff:ffff:ffff:ffff:ffff,JP` would mean that any IP addresses between `2001:200::` and `2001:200:ffff:ffff:ffff:ffff:ffff:ffff` *(inclusive)* are `JP`. In `-ipv6-num.csv` files, the equivalent line would be: `42540528726795050063891204319802818560,42540528806023212578155541913346768895,JP`.

Please be careful when using IPv6 and IPv6-num files in your program, the numerical value exceeds 32bit unsigned integers, and you would need to use a 128bit unsigned integer.


### autonomous_system_number

`autonomous_system_number` is a unique number assigned to an Autonomous System (AS) by the [IANA](https://www.iana.org/). [wiki](https://wikipedia.org/wiki/Autonomous_system_(Internet)).


## Referenced Database and License



### [DB-IP](https://db-ip.com/) database [Update: Monthly]

You could download and read the license from [ip-to-asn-lite](https://db-ip.com/db/download/ip-to-asn-lite) or [ip-to-country-lite](https://db-ip.com/db/download/ip-to-country-lite) or [ip-to-city-lite](https://db-ip.com/db/download/ip-to-city-lite).
Most of the AS Organization name used in [asn](https://www.npmjs.com/package/@ip-location-db/asn) uses [ip-to-asn-lite](https://db-ip.com/db/download/ip-to-asn-lite) database.
We also use [ip-to-asn-lite](https://db-ip.com/db/download/ip-to-asn-lite) to get AS Number from ip address as a supplemental.

These database are licensed under a [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), so, **you must create attribution to [DB-IP.com](https://db-ip.com/) for using DB-IP database**.<br>
In the case of a web application, you must include a link back to DB-IP.com on pages that display or use results from the database. You may do it by pasting the HTML code snippet into your code: `<a href='https://db-ip.com/'>IP Geolocation by DB-IP</a>`.<br>
If you need better accuracy or no attribution or daily updates, please use the [Commercial Version of db-ip](https://db-ip.com/db/ip-to-country).

