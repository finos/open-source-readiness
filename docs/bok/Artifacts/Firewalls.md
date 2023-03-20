---
title: Firewalls
tags: 
  - Developer (Role)
  - OSPO (Role)
  - Legal (Role)
  - CIO/CTO (Role)
---

This article provides some basic framing around the use of firewalls within a bank, and how these impact open source consumption and contribution.  It is not a complete reference for the subject of firewalls generally, but should act as a starting point for understanding the issues involved.

## How Firewalls Work

> In computing, a firewall is a network security system that monitors and controls incoming and outgoing network traffic based on predetermined security rules. A firewall typically establishes a barrier between a trusted network and an untrusted network, such as the Internet.  - [Firewall, _Wikipedia_](https://en.wikipedia.org/wiki/Firewall_(computing))

![Overview of a Firewall](/img/bok/firewall.png)

In a corporate environment such as a bank, there are usually firewalls placed on both _incoming_ and _outgoing_ traffic.  The firewall scans incoming and outgoing data and attempts to set rules about what is and isn't allowed as traffic, much as a security guard can allow or prevent people from entering a building.

_Incoming_ requests from external clients to an organisation's servers (such as requests for web pages, or for delivery of email) are usually routed to machines in the DMZ (or demilitarized zone).   Meanwhile, the _intranet_ 



 

General architecture:  https://phoenixnap.com/blog/wp-content/uploads/2022/12/how-firewalls-work.jpg
http://1.bp.blogspot.com/_cbXvML3JELc/TCRH6WvlEvI/AAAAAAAAAGg/7xsnkGmBqo0/s1600/111.gif

From: 
https://phoenixnap.com/blog/types-of-firewalls

1. Packet-Filtering

Destination and origination IP addresses.
Packet type.
Port number.
Network protocols.



2. Circuit-level Gateway

This simplistic firewall type quickly approves or denies traffic without consuming a lot of resources. However, these systems do not inspect packets, so even malware-infected requests get access if there's a proper TCP handshake.

Only process requested transactions and reject all other traffic.
Simple to set up and manage.
Resource and cost-efficient.
Strong protection against address exposure.
Minimum impact on end-user experience.






3. Stateful inspection

4. Proxy

Proxy firewalls operate at the app layer, the highest level of the OSI model. These systems have deep packet inspection (DPI) capabilities that check both payloads and headers of incoming traffic.

When a client sends a request to access a network, the message first goes to the proxy server. The firewall checks the following:

Previous communications between the client and devices behind the firewall (if any).
Header info.
The content itself.

DPI that checks both packet headers and payloads.
Add an extra layer of separation between clients and your network.
Conceal internal IP addresses from potential threat actors.
Detect and block attacks invisible at the OSI model network layer.
Fine-grained security controls over network traffic.
Unlock geolocational restrictions.


5. Next-Generation

Next-gen firewalls also include additional network security measures, such as:

IDSes and IPSes.
Malware scanning and filtering.
Advanced threat intelligence (pattern matching, protocol-based detections, reputation-based malware detection, anomaly-based detections, etc.)
Antivirus programs.
Network Address Translation (NAT).
Quality of service (QoS) features.
Secure Shell (SSH) inspection.
NGFWs are a common choice in heavily regulated industries, such as healthcare or finance. Companies that must adhere to HIPAA and PCI are the usual adopters.

Pros of next-generation firewalls:

Combine traditional firewall features with advanced cybersecurity capabilities.
Inspect network traffic from the data link layer to the app layer (layers 2-7 in the OSI model).
Substantive logging capabilities.
Cons of next-generation firewalls:

More expensive than other firewalls.
A massive single point of failure.
Slow deployment time.
Require a high degree of expertise to set up and run.
Hindered network performance.

### Deep packet inspection

https://en.wikipedia.org/wiki/Deep_packet_inspection


## Main Vendors:

Cisco: Cisco provides a range of security solutions including proxy firewalls. Their solutions include the Cisco Adaptive Security Appliance (ASA) and the Cisco Firepower Next-Generation Firewall.
Palo Alto Networks: Palo Alto Networks is a leading provider of next-generation firewalls and offers a range of proxy firewall solutions. Their solutions include the Palo Alto Networks Next-Generation Firewall and the Palo Alto Networks Threat Prevention service.
Fortinet: Fortinet offers a range of security solutions including proxy firewalls. Their solutions include the FortiGate Next-Generation Firewall and the FortiWeb Web Application Firewall.
Sophos: Sophos provides a range of security solutions including proxy firewalls. Their solutions include the Sophos XG Firewall and the Sophos UTM Firewall.
Barracuda Networks: Barracuda Networks offers a range of security solutions including proxy firewalls. Their solutions include the Barracuda CloudGen Firewall and the Barracuda Web Application Firewall.

## How Firewalls Interfere With Open Source Consumption





> Security analysts get fed up with having to manually chase large numbers of false positive incidents that require deep and time-consuming investigations. To combat this situation, advanced machine learning is the present and the future of data protection because it makes data identification more accurate and simplifies detection.  [Mediocre DLP Solutions Fall Short on Data Detection, _Palo Alto Networks_](https://www.paloaltonetworks.com/blog/network-security/mediocre-dlp_solutions-fall-short-on-data-detection/)

## DLP-Aware Firewalls

https://www.paloaltonetworks.com/blog/network-security/a-reliable-data-protection-strategy-hinges-upon-highly-accurate-data-detection/

> In addition, it should leverage Exact Data Matching (EDM) to detect and monitor specific sensitive data, and protect it from malicious exfiltration or loss. Designed to scale to very large data sets, EDM fingerprints an entire database of known personally identifiable information (PII), like bank account numbers, credit card numbers, addresses, medical record numbers and other personal information stored in a structured data source, such as a database, a directory server, or a structured data file such as CSV or spreadsheet. This data is then detected across the entire enterprise, as it traverses the network edge or it is transferred by employees from remote locations.

## Operating Outside the Firewall

- Use of own machines
- 



