---
title: Common Vulnerabilities and Exposures (CVEs)
tags: 
  - OSPO (Role)
  - Developer (Role)
  - Security Expert (Role)
sidebar_label: CVEs
image: /img/bok/page-types/artifact.png
---

CVEs (Common Vulnerabilities and Exposures) are standardized identifiers for publicly known cybersecurity vulnerabilities which can be leveraged in exploits. The [MITRE Corporation](https://www.mitre.org) manages the CVE program, which receives funding from the U.S. Department of Homeland Security (DHS) and the Cybersecurity and Infrastructure Security Agency (CISA).

## Identifiers

Each CVE has a unique [identifier](https://en.wikipedia.org/wiki/Common_Vulnerabilities_and_Exposures#CVE_identifiers).  For example: [CVE-2022-22965](https://nvd.nist.gov/vuln/detail/cve-2022-22965) which is the Spring4Shell vulnerability from 2022:

> "A Spring MVC or Spring WebFlux application running on JDK 9+ may be vulnerable to remote code execution (RCE) via data binding. The specific exploit requires the application to run on Tomcat as a WAR deployment. If the application is deployed as a Spring Boot executable jar, i.e. the default, it is not vulnerable to the exploit. However, the nature of the vulnerability is more general, and there may be other ways to exploit it." - [CVE-2022-22965, NIST](https://nvd.nist.gov/vuln/detail/cve-2022-22965)

## Severity (CVSS)

The [Common Vulnerability Scoring System (CVSS)](https://en.wikipedia.org/wiki/Common_Vulnerability_Scoring_System) is a score assigned to each vulnerability, in the range 0-10.  [CVE-2022-22965](https://nvd.nist.gov/vuln/detail/cve-2022-22965) received a base score of 9.8 (critical).  

## Weakness Enumeration (CWE)

CWE (Common Weakness Enumeration) is a community-driven taxonomy that categorizes and describes software weaknesses and vulnerabilities.  [CVE-2022-22965](https://nvd.nist.gov/vuln/detail/cve-2022-22965) is in the category of "code injection", and is assigned [CWE-94](https://cwe.mitre.org/data/definitions/94.html):

> CWE-94: Improper Control of Generation of Code ('Code Injection').  The product constructs all or part of a code segment using externally-influenced input from an upstream component, but it does not neutralize or incorrectly neutralizes special elements that could modify the syntax or behavior of the intended code segment. - [CWE-94, Mitre.org](https://cwe.mitre.org/data/definitions/94.html)

## Categories

CWEs are further aggregated into categories.  For example CWE-94 belongs in the category ["Data Neutralisation Issues"](https://cwe.mitre.org/data/definitions/137.html).  

In order to bring AppSec issues to the attention of developers, security experts and administrators, [OWASP](https://owasp.org) produces an annual "Top-10" list of the most important categories to consider.  For example [A03:2021 - Injection](https://owasp.org/Top10/A03_2021-Injection/) includes CWE-94 from above, but also issues like [SQL injection](https://en.wikipedia.org/wiki/SQL_injection) and [cross-site scripting](https://en.wikipedia.org/wiki/Cross-site_scripting).

## Related Activities

<BokTagList tag="CVE (Artifact)" filter="Activities" />

## Further Reading

- [99 of the most popular cybersecurity vulnerabilities & exploits (CVEs) from 2022](https://www.hackthebox.com/blog/most-popular-cybersecurity-vulnerabilities-and-exploits-from-2022) - article from HackTheBox

- [OWASP Top 10](https://owasp.org/Top10/) - 2021 report on the top categories of CWEs.

- [Common Vulnerabilities and Exposures](https://en.wikipedia.org/wiki/Common_Vulnerabilities_and_Exposures) - Wikipedia Article on this topic.
