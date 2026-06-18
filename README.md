# ip-location-db

This project provides IP to location databases in CSV and MMDB formats since 2019.

There are 3 types of IP database in this repository: `country`, `city` and `asn` files. All have their own standard format.

### Country

```CSV
ip_range_start, ip_range_end, country_code
```

| Database | License | Updated | IPv4 | IPv6 | IPv4+IPV6 | IPv4-num | IPv6-num | IPv4-CIDR | IPv6-CIDR |
|---|---|---|---|---|---|---|---|---|---|
| [user-country](https://github.com/sapics/ip-location-db/tree/main/user-country/) | [CDLA](https://cdla.dev/permissive-2-0/) | Daily | [CSV](https://github.com/sapics/ip-location-db/releases/download/latest/user-country-ipv4.csv)<br>[MMDB](https://github.com/sapics/ip-location-db/releases/download/latest/user-country-ipv4.mmdb) | [CSV](https://github.com/sapics/ip-location-db/releases/download/latest/user-country-ipv6.csv)<br>[MMDB](https://github.com/sapics/ip-location-db/releases/download/latest/user-country-ipv6.mmdb) | [CSV](https://github.com/sapics/ip-location-db/releases/download/latest/user-country.csv)<br>[MMDB](https://github.com/sapics/ip-location-db/releases/download/latest/user-country.mmdb) | [CSV](https://github.com/sapics/ip-location-db/releases/download/latest/user-country-ipv4-num.csv) | [CSV](https://github.com/sapics/ip-location-db/releases/download/latest/user-country-ipv6-num.csv) | [CSV](https://github.com/sapics/ip-location-db/releases/download/latest/user-country-ipv4-cidr.csv) | [CSV](https://github.com/sapics/ip-location-db/releases/download/latest/user-country-ipv6-cidr.csv) |
| [server-country](https://github.com/sapics/ip-location-db/tree/main/server-country/) | [CDLA](https://cdla.dev/permissive-2-0/) | Daily | [CSV](https://github.com/sapics/ip-location-db/releases/download/latest/server-country-ipv4.csv)<br>[MMDB](https://github.com/sapics/ip-location-db/releases/download/latest/server-country-ipv4.mmdb) | [CSV](https://github.com/sapics/ip-location-db/releases/download/latest/server-country-ipv6.csv)<br>[MMDB](https://github.com/sapics/ip-location-db/releases/download/latest/server-country-ipv6.mmdb) | [CSV](https://github.com/sapics/ip-location-db/releases/download/latest/server-country.csv)<br>[MMDB](https://github.com/sapics/ip-location-db/releases/download/latest/server-country.mmdb) | [CSV](https://github.com/sapics/ip-location-db/releases/download/latest/server-country-ipv4-num.csv) | [CSV](https://github.com/sapics/ip-location-db/releases/download/latest/server-country-ipv6-num.csv) | [CSV](https://github.com/sapics/ip-location-db/releases/download/latest/server-country-ipv4-cidr.csv) | [CSV](https://github.com/sapics/ip-location-db/releases/download/latest/server-country-ipv6-cidr.csv) |
| [GeoLite2](https://github.com/sapics/ip-location-db/tree/main/geolite2-country/) | GeoLite2 License by [MaxMind](https://www.maxmind.com/) | Twice weekly | [CSV](https://github.com/sapics/ip-location-db/releases/download/latest/geolite2-country-ipv4.csv)<br>[MMDB](https://github.com/sapics/ip-location-db/releases/download/latest/geolite2-country-ipv4.mmdb) | [CSV](https://github.com/sapics/ip-location-db/releases/download/latest/geolite2-country-ipv6.csv)<br>[MMDB](https://github.com/sapics/ip-location-db/releases/download/latest/geolite2-country-ipv6.mmdb) | [CSV](https://github.com/sapics/ip-location-db/releases/download/latest/geolite2-country.csv)<br>[MMDB](https://github.com/sapics/ip-location-db/releases/download/latest/geolite2-country.mmdb) | [CSV](https://github.com/sapics/ip-location-db/releases/download/latest/geolite2-country-ipv4-num.csv) | [CSV](https://github.com/sapics/ip-location-db/releases/download/latest/geolite2-country-ipv6-num.csv) | [CSV](https://github.com/sapics/ip-location-db/releases/download/latest/geolite2-country-ipv4-cidr.csv) | [CSV](https://github.com/sapics/ip-location-db/releases/download/latest/geolite2-country-ipv6-cidr.csv) |
| [DB-IP Lite](https://github.com/sapics/ip-location-db/tree/main/dbip-country/) | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) <br> by [DB-IP](https://db-ip.com/) | Monthly | [CSV](https://github.com/sapics/ip-location-db/releases/download/latest/dbip-country-ipv4.csv)<br>[MMDB](https://github.com/sapics/ip-location-db/releases/download/latest/dbip-country-ipv4.mmdb) | [CSV](https://github.com/sapics/ip-location-db/releases/download/latest/dbip-country-ipv6.csv)<br>[MMDB](https://github.com/sapics/ip-location-db/releases/download/latest/dbip-country-ipv6.mmdb) | [CSV](https://github.com/sapics/ip-location-db/releases/download/latest/dbip-country.csv)<br>[MMDB](https://github.com/sapics/ip-location-db/releases/download/latest/dbip-country.mmdb) | [CSV](https://github.com/sapics/ip-location-db/releases/download/latest/dbip-country-ipv4-num.csv) | [CSV](https://github.com/sapics/ip-location-db/releases/download/latest/dbip-country-ipv6-num.csv) | [CSV](https://github.com/sapics/ip-location-db/releases/download/latest/dbip-country-ipv4-cidr.csv) | [CSV](https://github.com/sapics/ip-location-db/releases/download/latest/dbip-country-ipv6-cidr.csv) |
| [IPtoASN](https://github.com/sapics/ip-location-db/tree/main/iptoasn-country/) | [PDDL](https://opendatacommons.org/licenses/pddl/1-0/) | Daily | [CSV](https://github.com/sapics/ip-location-db/releases/download/latest/iptoasn-country-ipv4.csv)<br>[MMDB](https://github.com/sapics/ip-location-db/releases/download/latest/iptoasn-country-ipv4.mmdb) | [CSV](https://github.com/sapics/ip-location-db/releases/download/latest/iptoasn-country-ipv6.csv)<br>[MMDB](https://github.com/sapics/ip-location-db/releases/download/latest/iptoasn-country-ipv6.mmdb) | [CSV](https://github.com/sapics/ip-location-db/releases/download/latest/iptoasn-country.csv)<br>[MMDB](https://github.com/sapics/ip-location-db/releases/download/latest/iptoasn-country.mmdb) | [CSV](https://github.com/sapics/ip-location-db/releases/download/latest/iptoasn-country-ipv4-num.csv) | [CSV](https://github.com/sapics/ip-location-db/releases/download/latest/iptoasn-country-ipv6-num.csv) | [CSV](https://github.com/sapics/ip-location-db/releases/download/latest/iptoasn-country-ipv4-cidr.csv) | [CSV](https://github.com/sapics/ip-location-db/releases/download/latest/iptoasn-country-ipv6-cidr.csv) |



### City

```CSV
ip_range_start, ip_range_end, country_code, state1, state2, city, postcode, latitude, longitude, timezone
```

| Database | License | Updated | IPv4 | IPv6 | IPv4-num | IPv6-num |
|---|---|---|---|---|---|---|
| [DB-IP Lite](https://github.com/sapics/ip-location-db/tree/main/dbip-city/) | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)<br>by [DB-IP](https://db-ip.com/) | Monthly | [CSV.gz](https://github.com/sapics/ip-location-db/releases/download/latest/dbip-city-ipv4.gz)<br>[CSV.7z](https://github.com/sapics/ip-location-db/releases/download/latest/dbip-city-ipv4.7z)<br>[MMDB](https://github.com/sapics/ip-location-db/releases/download/latest/dbip-city-ipv4.mmdb) | [CSV.gz](https://github.com/sapics/ip-location-db/releases/download/latest/dbip-city-ipv6.gz)<br>[CSV.7z](https://github.com/sapics/ip-location-db/releases/download/latest/dbip-city-ipv6.7z)<br>[MMDB](https://github.com/sapics/ip-location-db/releases/download/latest/dbip-city-ipv6.mmdb) | [CSV.gz](https://github.com/sapics/ip-location-db/releases/download/latest/dbip-city-ipv4-num.gz)<br>[CSV.7z](https://github.com/sapics/ip-location-db/releases/download/latest/dbip-city-ipv4-num.7z) | [CSV.gz](https://github.com/sapics/ip-location-db/releases/download/latest/dbip-city-ipv6-num.gz)<br>[CSV.7z](https://github.com/sapics/ip-location-db/releases/download/latest/dbip-city-ipv6-num.7z) |
| [GeoLite2](https://github.com/sapics/ip-location-db/tree/main/geolite2-city/) | GeoLite2 License by [MaxMind](https://www.maxmind.com/) | Twice weekly | [CSV.gz](https://github.com/sapics/ip-location-db/releases/download/latest/geolite2-city-ipv4.gz)<br>[CSV.7z](https://github.com/sapics/ip-location-db/releases/download/latest/geolite2-city-ipv4.7z)<br>[MMDB](https://github.com/sapics/ip-location-db/releases/download/latest/geolite2-city-ipv4.mmdb) | [CSV.gz](https://github.com/sapics/ip-location-db/releases/download/latest/geolite2-city-ipv6.gz)<br>[CSV.7z](https://github.com/sapics/ip-location-db/releases/download/latest/geolite2-city-ipv6.7z)<br>[MMDB](https://github.com/sapics/ip-location-db/releases/download/latest/geolite2-city-ipv6.mmdb) | [CSV.gz](https://github.com/sapics/ip-location-db/releases/download/latest/geolite2-city-ipv4-num.gz)<br>[CSV.7z](https://github.com/sapics/ip-location-db/releases/download/latest/geolite2-city-ipv4-num.7z) | [CSV.gz](https://github.com/sapics/ip-location-db/releases/download/latest/geolite2-city-ipv6-num.gz)<br>[CSV.7z](https://github.com/sapics/ip-location-db/releases/download/latest/geolite2-city-ipv6-num.7z) |


### ASN

```CSV
ip_range_start, ip_range_end, autonomous_system_number, autonomous_system_organization
```

| Database | License | Updated | IPv4 | IPv6 | IPv4+IPV6 | IPv4-num | IPv6-num | IPv4-CIDR | IPv6-CIDR |
|---|---|---|---|---|---|---|---|---|---|
| [origin-asn](https://github.com/sapics/ip-location-db/tree/main/origin-asn/) | [CDLA](https://cdla.dev/permissive-2-0/) | Daily | [CSV](https://github.com/sapics/ip-location-db/releases/download/latest/origin-asn-ipv4.csv)<br>[MMDB](https://github.com/sapics/ip-location-db/releases/download/latest/origin-asn-ipv4.mmdb) | [CSV](https://github.com/sapics/ip-location-db/releases/download/latest/origin-asn-ipv6.csv)<br>[MMDB](https://github.com/sapics/ip-location-db/releases/download/latest/origin-asn-ipv6.mmdb) | [CSV](https://github.com/sapics/ip-location-db/releases/download/latest/origin-asn.csv)<br>[MMDB](https://github.com/sapics/ip-location-db/releases/download/latest/origin-asn.mmdb) | [CSV](https://github.com/sapics/ip-location-db/releases/download/latest/origin-asn-ipv4-num.csv) | [CSV](https://github.com/sapics/ip-location-db/releases/download/latest/origin-asn-ipv6-num.csv) | [CSV](https://github.com/sapics/ip-location-db/releases/download/latest/origin-asn-ipv4-cidr.csv) | [CSV](https://github.com/sapics/ip-location-db/releases/download/latest/origin-asn-ipv6-cidr.csv) |
| [GeoLite2](https://github.com/sapics/ip-location-db/tree/main/geolite2-asn/) | GeoLite2 License by [MaxMind](https://www.maxmind.com/) | Twice weekly | [CSV](https://github.com/sapics/ip-location-db/releases/download/latest/geolite2-asn-ipv4.csv)<br>[MMDB](https://github.com/sapics/ip-location-db/releases/download/latest/geolite2-asn-ipv4.mmdb) | [CSV](https://github.com/sapics/ip-location-db/releases/download/latest/geolite2-asn-ipv6.csv)<br>[MMDB](https://github.com/sapics/ip-location-db/releases/download/latest/geolite2-asn-ipv6.mmdb) | [CSV](https://github.com/sapics/ip-location-db/releases/download/latest/geolite2-asn.csv)<br>[MMDB](https://github.com/sapics/ip-location-db/releases/download/latest/geolite2-asn.mmdb) | [CSV](https://github.com/sapics/ip-location-db/releases/download/latest/geolite2-asn-ipv4-num.csv) | [CSV](https://github.com/sapics/ip-location-db/releases/download/latest/geolite2-asn-ipv6-num.csv) | [CSV](https://github.com/sapics/ip-location-db/releases/download/latest/geolite2-asn-ipv4-cidr.csv) | [CSV](https://github.com/sapics/ip-location-db/releases/download/latest/geolite2-asn-ipv6-cidr.csv) |
| [DB-IP Lite](https://github.com/sapics/ip-location-db/tree/main/dbip-asn/) | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) <br> by [DB-IP](https://db-ip.com/) | Monthly | [CSV](https://github.com/sapics/ip-location-db/releases/download/latest/dbip-asn-ipv4.csv)<br>[MMDB](https://github.com/sapics/ip-location-db/releases/download/latest/dbip-asn-ipv4.mmdb) | [CSV](https://github.com/sapics/ip-location-db/releases/download/latest/dbip-asn-ipv6.csv)<br>[MMDB](https://github.com/sapics/ip-location-db/releases/download/latest/dbip-asn-ipv6.mmdb) | [CSV](https://github.com/sapics/ip-location-db/releases/download/latest/dbip-asn.csv)<br>[MMDB](https://github.com/sapics/ip-location-db/releases/download/latest/dbip-asn.mmdb) | [CSV](https://github.com/sapics/ip-location-db/releases/download/latest/dbip-asn-ipv4-num.csv) | [CSV](https://github.com/sapics/ip-location-db/releases/download/latest/dbip-asn-ipv6-num.csv) | [CSV](https://github.com/sapics/ip-location-db/releases/download/latest/dbip-asn-ipv4-cidr.csv) | [CSV](https://github.com/sapics/ip-location-db/releases/download/latest/dbip-asn-ipv6-cidr.csv) |
| [IPtoASN](https://github.com/sapics/ip-location-db/tree/main/iptoasn-asn/) | [PDDL](https://opendatacommons.org/licenses/pddl/1-0/) | Daily | [CSV](https://github.com/sapics/ip-location-db/releases/download/latest/iptoasn-asn-ipv4.csv)<br>[MMDB](https://github.com/sapics/ip-location-db/releases/download/latest/iptoasn-asn-ipv4.mmdb) | [CSV](https://github.com/sapics/ip-location-db/releases/download/latest/iptoasn-asn-ipv6.csv)<br>[MMDB](https://github.com/sapics/ip-location-db/releases/download/latest/iptoasn-asn-ipv6.mmdb) | [CSV](https://github.com/sapics/ip-location-db/releases/download/latest/iptoasn-asn.csv)<br>[MMDB](https://github.com/sapics/ip-location-db/releases/download/latest/iptoasn-asn.mmdb) | [CSV](https://github.com/sapics/ip-location-db/releases/download/latest/iptoasn-asn-ipv4-num.csv) | [CSV](https://github.com/sapics/ip-location-db/releases/download/latest/iptoasn-asn-ipv6-num.csv) | [CSV](https://github.com/sapics/ip-location-db/releases/download/latest/iptoasn-asn-ipv4-cidr.csv) | [CSV](https://github.com/sapics/ip-location-db/releases/download/latest/iptoasn-asn-ipv6-cidr.csv) |


## Databases referenced in this project

### Original Databases [Update: Daily]

All databases licensed under [CDLA Permissive 2.0](https://cdla.dev/permissive-2-0/) are created by this project and updated daily.

These are built by aggregating, analyzing, and compiling raw, publicly available network data and geolocation feeds from the global internet community.

To ensure this dataset can be safely distributed and utilized under the **CDLA-Permissive-2.0** license—which allows for **free use without attribution**—we primarily rely on raw bulk data archives, public statistical reports, and open protocol records for our data collection. We intentionally avoid including APIs or third-party datasets that impose commercial use restrictions or prohibit bulk redistribution.

We would like to acknowledge and deeply thank the following organizations, projects, and the broader internet community for providing the foundational data:

#### 1. Regional Internet Registries (RIRs) & NRO
We utilize public statistical data (e.g., delegated statistics) and other bulk archives collaboratively maintained and provided by the five Regional Internet Registries (AFRINIC, APNIC, ARIN, LACNIC, RIPE NCC) and the Number Resource Organization (NRO).
* **Source:** Public archives from the RIRs.
* **License/Terms:** Data from public bulk archives is utilized subject to the [NRO License](https://www.nro.net/about/nro-policies/) and respective RIR copyright statements.

#### 2. Global BGP Routing Archives (Route Views & RIPE RIS)
We leverage global BGP routing data, including RIB (Routing Information Base) dumps and BGP updates, to analyze network visibility, active IP prefixes, and routing states. To ensure maximum global coverage, we aggregate data from the internet's two primary open routing archives:
* **Route Views Project:** Provided by the University of Oregon ([http://www.routeviews.org/](http://www.routeviews.org/))
* **RIPE RIS (Routing Information Service):** Provided by RIPE NCC, including data from various Remote Routing Collectors (RRCs) ([https://ris.ripe.net/](https://ris.ripe.net/))

#### 3. Geofeed Providers
This project integrates geolocation data and related network attributes from various `geofeeds` published independently by network operators worldwide according to RFC 8805 / RFC 9632.
* **Note:** By their nature, geofeed files are intended for general public use, so we believe there is no issue in utilizing them. However, since many of them lack explicitly defined licenses, we utilize this data "as is" to compile our dataset.

#### Compliance & Data Handling Policy

To ensure adherence to the Acceptable Use Policies (AUP) of our data providers and to maintain the integrity of our CDLA-Permissive-2.0 license, we explicitly **DO NOT** use RIR WHOIS or IRR database attributes (such as `inetnum`, `route`, `country`, `geoloc`, or physical address fields) to directly map IP addresses to geographic locations. 

Doing so would directly violate the explicit terms of several Regional Internet Registries. For example, the [APNIC Whois Database Acceptable Use Agreement](https://www.apnic.net/manage-ip/using-whois/bulk-access/copyright/) strictly states: *"you cannot use the database to map IP address to geographic location."* By avoiding these restricted datasets and relying strictly on open routing records and voluntarily published geofeeds, we aim to keep this dataset compliant and as safe as possible for public use.

#### Differences between `user-country` and `server-country` databases

While both databases utilize the same underlying data sources, they prioritize different geographic points:
* **`user-country`:** Prioritizes the country code of the actual end-user, even when they are routed through VPNs, proxies, or similar services.
* **`server-country`:** Prioritizes the country code of the physical server or relay point.

While both databases return almost identical results in most instances, we highly recommend using `user-country` for most general applications to ensure accuracy when proxies are involved. However, `server-country` may be more appropriate for specific network analysis tasks, such as determining the geographic midpoint or routing location between two IP addresses.



### [IPtoASN](https://iptoasn.com/) database [Update: Hourly]

You can download hourly updated database in tsv format from [original site](https://iptoasn.com/).
This is licensed under a [Public Domain Dedication and License v1.0](https://opendatacommons.org/licenses/pddl/1.0/).


### [DB-IP](https://db-ip.com/) database [Update: Monthly]

You could download and read the license from [ip-to-asn-lite](https://db-ip.com/db/download/ip-to-asn-lite) or [ip-to-country-lite](https://db-ip.com/db/download/ip-to-country-lite) or [ip-to-city-lite](https://db-ip.com/db/download/ip-to-city-lite).

These database are licensed under a [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
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
GeoLite2 databse is provided under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/) by [MaxMind](https://www.maxmind.com).
If you need better accuracy, please use the commercial version [GeoIp2](https://www.maxmind.com/en/geoip2-databases).


## Which database should I use?

It depends upon your use-case! We do have some simple recommendations though:

- If you need postcodes or timezones: `geolite2-city`
- If you need city data with a CC-BY Licence: `dbip-city`
- If you need a country database without attribution: `user-country`
- If you need an ASN database: `origin-asn`


## Accuracy of database

Since there is no definitive information on IP addresses and country_code, it is difficult to discuss the accuracy of our data qualitatively, but it is possible to estimate the approximate accuracy by comparing it with the country information in GeoLite2 and DbIp Lite.
By comparing the database in GeoLite2, which is well known for its high accuracy, with the differences in other databases, we can see that our data accuracy.

| Database | Same | Diff | Empty | Extra |
| ---- | ---- | ---- | ---- | ---- |
| user-country | 97.49% | 2.51% | 0.00% | 0.03% |
| dbip-country | 94.49% | 5.51% | 0.00% | 0.44% |
| iptoasn-country | 78.50% | 5.84% | 15.66% | 0.04% |

Measurements were taken in 14 June 2026.
Because the ipv6 range is too wide, the measurements here are limited to ipv4 results.
"Same" + "Diff" + "Empty" shows the GeoLite2 IP-range, and the GeoLite2 IP-range size is listed as 100%.

- "Same" indicates the percentage of country_codes in Database that are the same as the country_code in GeoLite2.
- "Diff" indicates the percentage of country_codes in Database that are different from GeoLite2 country_code.
- "Empty" shows the percentage of IPs with GeoLite2 country_code but no corresponding country_code in Database.
- "Extra" indicates the percentage of IPs with no GeoLite2 country_code listed that had a country_code listed in the Database.



## MMDB Libraries

If you would like to integrate MMDB files into an existing project there are several libraries that can help.


### Read MMDB files

Libraries exist in many languages when using the MMDB files. There are official, [Maxmind developed libraries](https://github.com/maxmind) for many popular languages: [.NET](https://github.com/maxmind/MaxMind-DB-Reader-dotnet), [C](https://github.com/maxmind/libmaxminddb), [Node.js](https://github.com/maxmind/GeoIP2-node), [Perl](https://github.com/maxmind/MaxMind-DB-Reader-perl), [PHP](https://github.com/maxmind/MaxMind-DB-Reader-php), [Python](https://github.com/maxmind/MaxMind-DB-Reader-python) and [Ruby](https://github.com/maxmind/MaxMind-DB-Reader-ruby), and third-party readers for others: [Erlang](https://github.com/g-andrade/locus), [Go](https://github.com/oschwald/maxminddb-golang), [Rust](https://github.com/oschwald/maxminddb-rust).


### Write MMDB files

If you wish to create your own MMDB files from the CSV files *(to customise their format)* there are a couple of official libraries: [Go](https://github.com/maxmind/mmdbwriter) and [Perl](https://github.com/maxmind/MaxMind-DB-Writer-perl) *(now archived)*. There are also some third-party options: [Python](https://github.com/VimT/MaxMind-DB-Writer-python) and [Rust](https://github.com/pierd/maxminddb-writer).


## Useful Libraries

| Library | Language | Description | Types | Auto<br>Updates |
|---|---|---|---|---|
|[ip-location-api](https://github.com/sapics/ip-location-api) | Node.js | Fast ip to country lookup by using in-memory database (7MB RAM) | `country`<br>`city` | ✓ |
|[country](https://github.com/sapics/ip-location-api/tree/main/browser/country)<br>[country-extra](https://github.com/sapics/ip-location-api/tree/main/browser/country-extra) | Browser js | Ip to country lookup in browser | `country` | ✓ |
|[geocode](https://github.com/sapics/ip-location-api/tree/main/browser/geocode)<br>[geocode-extra](https://github.com/sapics/ip-location-api/tree/main/browser/geocode-extra) | Browser js | Ip to geocode lookup in browser | `country`<br>`latitude`<br>`longitude` | ✓ |


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

You can use [CDLA Permissive 2.0](https://cdla.dev/permissive-2-0/) or [PDDL](https://opendatacommons.org/licenses/pddl/1.0/) (ODC Public Domain Dedication and Licence) licensed databases without attribution for any purpose.


## Support

We'd be grateful if you could link back to [sapics/ip-location-db](https://github.com/sapics/ip-location-db), and star this project to help others find it.
