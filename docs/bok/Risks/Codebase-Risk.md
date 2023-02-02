---
title: Codebase Risk
tags: 
  - Developer (Role)
  - CIO/CTO (Role)
---

Codebase Risk is 

## Reducing Code Duplication

 - The [Code Duplication](code-duplication) article already describes the maintainance costs associated with internal forks of projects, and in passing discusses how this also presents a security risk.
 - It is hard but perhaps not impossible to get a view of how big a problem this is in your organsisation by looking at the internal repository (e.g. Artifactory) and looking for versions of open source libraries that are _not_ coming from the original external source.
 - An argument _for_ internal forks is that actually this mitigates the cyber risk of trojan code from an external environment.  However this is specious since 99% of the code running in the organisation is open source anyway: bad actors can exist both inside and outside the bank and this is no substitute for scanning tools.
 - For example, consider a  _bad actor_ performing a [Solar Winds Trojan](https://www.cisecurity.org/solarwinds)-style attack.  This is a consumption risk that _already exists_.  Allowing developers to contribute to open source doesn't worsen or improve this situation.   