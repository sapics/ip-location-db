# Changelog

We could not keep the git histories because of the github limitation as [#4](https://github.com/sapics/ip-location-db/issues/4).<br>
Therefore, instead of git history, please refer to this CHANGELOG.

## Major Updates (2026-06-18)
- Migrated data distribution to [GitHub Releases](https://github.com/sapics/ip-location-db/releases/tag/latest) to bypass git file size limitations
- Rewrote the database generation program from scratch
- Stopped extracting IP, location, and country information from Whois databases to comply with RIR Acceptable Use Policies
- Changed license to CDLA-Permissive-2.0 to provide AS-IS protection for unclear licensed data like geofeeds, while maintaining attribution-free usage

## Legacy Updates
- 2026-04-26: Added functionality to correct or remove inaccurate geofeed data
- 2026-04-19: Introduced a cache database internally for source data to improve build stability
- 2026-01-16: Remove iplocate-country and iplocate-asn database from daily-update list [#58](https://github.com/sapics/ip-location-db/issues/58)
- 2025-04-08: Added iplocate-country and iplocate-asn database [#45](https://github.com/sapics/ip-location-db/issues/45)
- 2024-10-05: Added new geofeed providers (about 200)
- 2024-09-13: Fixed country codes of geofeed providers which added at 2024-09-10 ZN, UK, FL [#36](https://github.com/sapics/ip-location-db/issues/36) (geo-asn-country and geo-whois-asn-country)
- 2024-09-10: Added new geofeed providers (about 1500)
- 2024-08-20: Added geolite2-geo-whois-asn-country and dbip-geo-whois-asn-country
- 2024-08-20: Added links to mmdb files to main readme [#34](https://github.com/sapics/ip-location-db/issues/34)
- 2024-08-14: Added generation of mmdb files [#34](https://github.com/sapics/ip-location-db/issues/34)
- 2023-05-17: Fixed overlapping ip ranges [#17](https://github.com/sapics/ip-location-db/issues/17)
- 2023-02-23: Added asn types: asn, iptoasn-asn, dbip-asn, geolite2-asn [#14](https://github.com/sapics/ip-location-db/issues/14)
- 2022-07-19: Added 7z compression type for city database [#9](https://github.com/sapics/ip-location-db/issues/9)
- 2019-09-23: Project start
