---
title: Organisation Metrics
tags: 
  - OSPO (Role)
  - CTO/CIO (Role)
  - Developer
  - Placeholder
  - Organisational-Measurement
sidebar_label: Organisation
---

For an organisation engaged in open source (or inner source), consider measuring the strength of contribution, security posture and legal compliance.

## What To Measure

<BoxOut title="Committer Strength" image="/img/bok/metric.png">

Ideally, you want some measure of the pervasiveness of open source contribution within the organisation.  Consider:

- Number of individual internal staff committing to open source / inner source projects
- Number of pull-requests merged from internal staff (either on all projects or key strategic projects)
- Number of inner source / open source projects being maintained.
- Number of commits

</BoxOut>

<BoxOut title="License Compliance" image="/img/bok/metric.png">

Assuming your [Legal Team](../Roles/Legal) have created a [license allow list](../Activities/Level-2/License-Management), consider scanning internal projects and producing metrics around the number of license violations. 

The [FINOS Security Scanning project](https://github.com/finos/security-scanning) shows how this can be done on a per-project basis but you are likely to want to run this across your organisation's estate.    Consider applying one of the tools from the [Software Inventory](../Activities/Level-2/Software-Inventory) article.

Consider measuring:

- Violations overall, or per-project.
- Main offenders (i.e. which dependencies cause the most violations)
- Mean time to fix

**See:** the article on [License Management](../Activities/Level-2/License-Management) for more details.


</BoxOut>


<BoxOut title="Vulnerability Exposure" image="/img/bok/metric.png">

Metrics around Common Vulnerabilities and Exposure (CVE) measurements in an in-house software estate.

> The Common Vulnerabilities and Exposures (CVE) system provides a reference method for publicly known information-security vulnerabilities and exposures. - [Common Vulnerabilities and Exposures, _Wikipedia_](https://en.wikipedia.org/wiki/Common_Vulnerabilities_and_Exposures)

Consider measuring: 

- Criticality of the CVEs (Using [CVSS Scoring](https://en.wikipedia.org/wiki/Common_Vulnerability_Scoring_System))
- Time taken from reporting to patching in firm software
- Quantity of CVEs
- Amount of software being scanned vs. not scanned.

**See:** the article on [Supply Chain Security](../Activities/Level-2/Supply-Chain-Security) for more details.

</BoxOut>

<BoxOut title="Return On Investment (ROI)" image="/img/bok/metric.png">

How can you measure the ROI of open source within the organisation, both consumption and contribution? _(open question - tbd)_

</BoxOut>
