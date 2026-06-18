# Data Sources and Attributions

This project (`ip-location-db`) is built by aggregating, analyzing, and compiling raw, publicly available network data and geolocation feeds from the global internet community. 

To ensure this dataset can be safely distributed and utilized under the **CDLA-Permissive-2.0** license—which allows for free use without attribution—we primarily rely on raw bulk data archives, public statistical reports, and open protocol records for our data collection. We intentionally avoid including APIs or third-party datasets that impose commercial use restrictions or prohibit bulk redistribution.

We would like to acknowledge and deeply thank the following organizations, projects, and the broader internet community for providing the foundational data:

## 1. Regional Internet Registries (RIRs) & NRO
We utilize public statistical data (e.g., delegated statistics) and other bulk archives collaboratively maintained and provided by the five Regional Internet Registries (AFRINIC, APNIC, ARIN, LACNIC, RIPE NCC) and the Number Resource Organization (NRO).
* **Source:** Public FTP and statistical archives from the RIRs.
* **License/Terms:** Data from public bulk archives is utilized subject to the [NRO License](https://www.nro.net/about/nro-policies/) and respective RIR copyright statements.

## 2. Global BGP Routing Archives (Route Views & RIPE RIS)
We leverage global BGP routing data, including RIB (Routing Information Base) dumps and BGP updates, to analyze network visibility, active IP prefixes, and routing states. To ensure maximum global coverage, we aggregate data from the internet's two primary open routing archives:
* **Route Views Project:** Provided by the University of Oregon ([http://www.routeviews.org/](http://www.routeviews.org/))
* **RIPE RIS (Routing Information Service):** Provided by RIPE NCC, including data from various Remote Routing Collectors (RRCs) ([https://ris.ripe.net/](https://ris.ripe.net/))

## 3. Geofeed Providers
This project integrates geolocation data and related network attributes from various `geofeed` published independently by network operators worldwide according to RFC 8805 / RFC 9632.
* **Note:** By their nature, geofeed files are intended for general public use, so we believe there is no issue in utilizing them. However, since many of them lack explicitly defined licenses, we utilize this data "as is" to compile our dataset.

---

## Compliance & Data Handling Policy

To ensure adherence to the Acceptable Use Policies (AUP) of our data providers and to maintain the integrity of our CDLA-Permissive-2.0 license, we explicitly **DO NOT** use RIR WHOIS or IRR database attributes (such as `inetnum`, `route`, `country`, `geoloc`, or physical address fields) to directly map IP addresses to geographic locations. 

Doing so would directly violate the explicit terms of several Regional Internet Registries. For example, the [APNIC Whois Database Acceptable Use Agreement](https://www.apnic.net/manage-ip/using-whois/bulk-access/copyright/) strictly states: *"you cannot use the database to map IP address to geographic location."* By avoiding these restricted datasets and relying strictly on open routing records and voluntarily published geofeeds, we aim to keep this dataset compliant and as safe as possible for public use.
