# `asn` files

The `asn` files map IP addresses to [Autonomous System Number](https://en.wikipedia.org/wiki/Autonomous_system_%28Internet%29) information.

## CSV format

The `asn` CSV files all share the same format:

```CSV
ip_range_start, ip_range_end, autonomous_system_number, autonomous_system_organization
```

### IP address format

`ip_range_start` and `ip_range_end` are either IP addresses, or IP addresses in numeric format *(depending upon which files you choose)* and these two fields represent an **inclusive** range of IP addresses for that data row.

Please see the [IP Format File](IP_FORMAT.md) for more information.

### Number

The `autonomous_system_number` is the numeric code for the specific Autonomous System.

### Organisation

The `autonomous_system_organization` is the name for the specific Autonomous System.

## MMDB format

The IP ranges in MMDB files are handled within a special field and so are not included in the field list, but other fields are included in a "flat" structure:

```
autonomous_system_number
autonomous_system_organization
```
