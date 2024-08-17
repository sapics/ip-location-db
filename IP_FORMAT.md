# IP address format

`ip_range_start` and `ip_range_end` are either IP addresses, or IP addresses in numeric format *(depending upon which files you choose)* and these two fields represent an **inclusive** range of IP addresses for that data row.

For example, in the `-ipv4.csv` files, the CSV line: `1.0.0.0,1.0.0.255,AU` would mean that any IP addresses between `1.0.0.0` and `1.0.0.255` *(inclusive)* are Australian. In `-ipv4-num.csv` files, the equivalent line would be: `16777216,16777471,AU`.

For example, in the `-ipv6.csv` files, the CSV line: `2001:200::,2001:200:ffff:ffff:ffff:ffff:ffff:ffff,JP` would mean that any IP addresses between `1.0.0.0` and `1.0.0.255` *(inclusive)* are Japanese. In `-ipv6-num.csv` files, the equivalent line would be: `42540528726795050063891204319802818560,42540528806023212578155541913346768895,JP`.

Please be careful when using IPv6 and IPv6-num files in your program, the numerical value exceeds 32bit unsigned integers, and you would need to use a 128bit unsigned integer.
