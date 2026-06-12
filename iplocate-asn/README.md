# [ip-location-db](https://github.com/sapics/ip-location-db)/iplocate-asn

## Download

| Database | Type | License | Updated | IPv4 | IPv6 | IPv4+IPV6 | IPv4-num | IPv6-num |
|---|---|---|---|---|---|---|---|---|
| [IPLocate](https://github.com/sapics/ip-location-db/tree/main/iplocate-asn/)<br><br>[![npm version](https://img.shields.io/npm/v/@ip-location-db/iplocate-asn?color=success&style=flat-square&label=CSV)](https://www.npmjs.com/package/@ip-location-db/iplocate-asn)<br>[![npm version](https://img.shields.io/npm/v/@ip-location-db/iplocate-asn-mmdb?color=success&style=flat-square&label=MMDB)](https://www.npmjs.com/package/@ip-location-db/iplocate-asn-mmdb) | ASN | [CC BY SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) by [IPLocate](https://www.iplocate.io/) | Daily | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/iplocate-asn/iplocate-asn-ipv4.csv)<br>[MMDB](https://cdn.jsdelivr.net/npm/@ip-location-db/iplocate-asn-mmdb/iplocate-asn-ipv4.mmdb) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/iplocate-asn/iplocate-asn-ipv6.csv)<br>[MMDB](https://cdn.jsdelivr.net/npm/@ip-location-db/iplocate-asn-mmdb/iplocate-asn-ipv6.mmdb) | [MMDB](https://cdn.jsdelivr.net/npm/@ip-location-db/iplocate-asn-mmdb/iplocate-asn.mmdb) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/iplocate-asn/iplocate-asn-ipv4-num.csv) | [CSV](https://cdn.jsdelivr.net/npm/@ip-location-db/iplocate-asn/iplocate-asn-ipv6-num.csv) |


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



### [IPLocate](https://www.iplocate.io/) database [Update: Daily]

You can download the original databases and read license from github repository [iplocate/ip-address-databases](https://github.com/iplocate/ip-address-databases).

These databases are licensed under a [CC BY SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/), so **you must give appropriate credit by providing a link to [IPLocate.io](https://www.iplocate.io/) on your application, product, or website where the data is used**.

If you need more detailed information (ex. City Name/Latitude/Longitude/etc.), please use the [premium databases](https://www.iplocate.io/products/downloadable-databases).

