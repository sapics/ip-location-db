`user-country`, `server-country`, and `origin-asn` are published under the [PDDL](https://opendatacommons.org/licenses/pddl/1.0/) (**free use without attribution**).

These datasets are compiled from raw, public network data. We aim to use sources free of commercial or redistribution restrictions to maintain this permissive licensing.

Huge thanks to the following organizations for providing the foundational data:

## 1. Regional Internet Registries (RIRs) & NRO
We use public statistical data (e.g., delegated statistics) from the five Regional Internet Registries (AFRINIC, APNIC, ARIN, LACNIC, RIPE NCC) and the NRO.
* **License:** Subject to the [NRO License](https://www.nro.net/about/nro-policies/) and respective RIR copyright statements.

## 2. Global BGP Routing Archives (Route Views & RIPE RIS)
We aggregate global BGP routing data (RIB dumps and BGP updates) to analyze network visibility and active IP prefixes using the two primary open routing archives:
* **[Route Views](http://www.routeviews.org/)** (University of Oregon)
* **[RIPE RIS](https://ris.ripe.net/)** (RIPE NCC)

## 3. Geofeed Providers
We integrate geolocation data from `geofeeds` published by network operators worldwide (RFC 8805 / RFC 9632).
* **Note:** While geofeeds are intended for public use, many lack explicitly defined licenses. We use this data "as is" to compile our datasets.

---

## Compliance & Data Handling Policy
To comply with data providers' Acceptable Use Policies (AUP) and maintain our PDDL licensing, we **DO NOT** use RIR WHOIS or IRR databases (e.g., `inetnum`, `country`, `geoloc`) for geographic mapping.

Many RIRs strictly prohibit this (e.g., [APNIC's AUP](https://www.apnic.net/manage-ip/using-whois/bulk-access/copyright/) states: *"you cannot use the database to map IP address to geographic location"*). By relying only on open routing records and public geofeeds, we keep our datasets compliant and safe for public use.