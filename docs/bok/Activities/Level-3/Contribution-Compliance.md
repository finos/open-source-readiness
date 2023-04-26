---
title: Ensuring Open Source Compliance For Contribution
tags: 
  - OSPO (Role)
  - Placeholder
  - Risk-Compliance (Role)
  - Security Expert (Role)
  - Level 3 (OSMM)
  - CIO/CTO (Role)
  - Legal (Role)
  - Legal Risk
  - Reputational Risk
draft: true
sidebar_position: 2.5
sidebar_label: Compliance
---


## Intersection with Open Source Contribution

Compliance with data protection and security policies is essential to ensure that the organization's data is protected and secure.  See [Data Leakage Prevention](DLP).


## Downstream Liability

- Starting with low-risk projects.  
- Pushing to founations

## Data Leakage Prevention

 - [DLP](../../Artifacts/DLP-Softare), but then: GitProxy..
 - Tools such as [GitProxy](http://github.com/finos/Git-Proxy) - a secure way to push data over the firewall, via controls.
 - personal machines - (working outside the firewall)
 - ephemeral desktops etc - like personal machines, but a vm within your desktop that can access _nothing inside the firewall_.
 - GitHub Enterprise / Cloud 


## Reducing Code Duplication

 - The [Code Duplication](../../playbook/code-duplication) article already describes the maintainance costs associated with internal forks of projects, and in passing discusses how this also presents a security risk.
 - It is hard but perhaps not impossible to get a view of how big a problem this is in your organsisation by looking at the internal repository (e.g. Artifactory) and looking for versions of open source libraries that are _not_ coming from the original external source.
 - An argument _for_ internal forks is that actually this mitigates the cyber risk of trojan code from an external environment.  However this is specious since 99% of the code running in the organisation is open source anyway: bad actors can exist both inside and outside the bank and this is no substitute for scanning tools.
 - For example, consider a  _bad actor_ performing a [Solar Winds Trojan](https://www.cisecurity.org/solarwinds)-style attack.  This is a consumption risk that _already exists_.  Allowing developers to contribute to open source doesn't worsen or improve this situation.   
   
 
 License Choice
 
 
 Risk Management
 
 - Review everything in [Risk BAsed View](https://osr.finos.org/docs/playbook/risk-based-view)
 
 
 
## Working With Compliance


1.

- Controls/tools built around protection (PCI/PPI/proprietary code).  
- All these controls written from this perspective.

2.  What does "production" mean?

- Putting something into an environment accessible to a customer.
- Not the same for OSS:

   -What happens with vulns?
   -What does the licence mean WRT liability/brand damage.
   
3.  Avoiding leaking proprietary code.

- architecture, code review, business review

controls need to vary with proximity to core banking.  e.g. backstage, react.

Don't want to apply a heavyweight review process to every area of code.

PatH:

- Start small with a small contribution outside of the main core activities. No one cares about this small stuff.
- Collaborating across industry with competitors much harder.
- INternal code -> Open SOurce, much harder.

@andybs
 
 
 




Coming soon

- [SBOMs](../../Artifacts/SBOMs)
- What cloud providers does it run on?
- Graph of linkages around who developed it, where it can be used etc.

 
### Amol's Notes

- Tempates for PRs/Issues.  ( reviewed by communications policy) 
- This might be checked automatically by reviewing what the user is doing.
- This requires the user to have a firm-specific GitHub ID.
- They might only be approved to contribute on certain projects.
- They would need to request approval for a given project.
- Tooling is pretty important for this
 
