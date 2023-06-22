---
title: Dependency Risk
tags:
  - Dependency Risk
  - Developer (Role)
  - Policy
---

<BoxOut title="Software Dependency Risk" image="/img/bok/risks/dependency-risk.png">

Software dependency risk refers to the potential negative consequences of relying on external software components that can compromise the security, performance, quality or functionality of an organization's software systems.

Open source software may depend on a small number of volunteers who may lose interest, motivation, or resources over time. Users and contributors need to ensure that the projects they rely on or contribute to have a healthy and active community, or be prepared to step in and provide alternatives if a project is losing momentum.

## Quality

Open source software may vary in quality, reliability, and performance depending on the skills and experience of the contributors. Users and contributors need to evaluate the quality of the code, documentation, testing, and reviews before using or contributing to a project. There are vendor tooling and suggested self administered maturity surveys to develop the scoring methods.

## Sustainability

Open source _sustainability_ refers to the long-term viability and health of open-source software projects.  Key issues in sustainability include [Key Person Risk](Staff-Risk) (including burn-out from key maintainers) and lack of funding.

### Are Open Source Projects More Sustainable Than Internal Ones?

Open Source projects by definition have a wider pool of users and contributors to draw from than internal projects.   [Deutsche Bank Open Sourced the Spring-Bot project](https://springbot.finos.org) and donated it to FINOS as this was seen to be more likely to result in the long-term viability of the project than maintaining it in-house.

## Vulnerability

A software vulnerability is a flaw or weakness in a software program's design, implementation, or operation that, if exploited, can compromise the security, functionality, or data integrity of a system.  This can result in [Data Leakage](Data-Leakage-Risk) or [Legal Action](Legal-Risk).

</BoxOut>

**Example:** In 2017, credit reporting agency Equifax [suffered a massive data breach](https://en.wikipedia.org/wiki/2017_Equifax_data_breach) that exposed the personal information of approximately 143 million Americans. The breach included names, birthdates, social security numbers, and other sensitive information. The breach led to a drop in the company's stock price and widespread public outrage.  This was caused by an open source vulnerability:

> A key security patch for [Apache Struts](https://en.wikipedia.org/wiki/2017_Equifax_data_breach) was released on March 7, 2017 after a security exploit was found and all users of the framework were urged to update immediately.  Security experts found an unknown hacking group trying to find websites that had failed to update Struts as early as March 10, 2017 as to find a system to exploit. - [2017 Equifax data breach](https://en.wikipedia.org/wiki/2017_Equifax_data_breach)

**Example:** In 2014, a critical security vulnerability called the Heartbleed bug was discovered in the widely used OpenSSL encryption library. This bug allowed attackers to access sensitive information, including passwords and encryption keys, from systems that relied on the affected version of OpenSSL.  See [CVE-2014-0160](https://www.cve.org/CVERecord?id=CVE-2014-0160)

**Example: **In 2016, a popular JavaScript library called "left-pad" was removed from the [npm repository](https://en.wikipedia.org/wiki/Npm_(software)), causing widespread disruption for developers and organizations that relied on this library. The incident highlighted the risks of relying on external dependencies, as well as the importance of having contingency plans in place to manage dependency risks.

**See Also:**

- [Dependency Hell](https://en.wikipedia.org/wiki/Dependency_hell)- Wikipedia article explaining a variation of dependency risk.
- [Top 10 Open Source Software Risks](https://www.endorlabs.com/blog/introducing-the-top-10-open-source-software-oss-risks) Endor Labs Station 9 research team report.

## Risk Management Activities

<BokTagList tag="Dependency Risk" filter="Activities" />

## Further Reading

- [Resilient Software Supply Chain](https://www.linkedin.com/posts/resilientcyber_software-supplychain-infosec-activity-7037427310441988096-7z_X?utm_source=share&utm_medium=member_ios)

- [CoreJS Maintainer Complains Open Source is Broken](https://www.theregister.com/2023/02/15/corejs_russia_open_source/)
