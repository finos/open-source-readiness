---
title: Intellectual Property
tags: 
  - Legal (Role)
  - CIO/CTO (Role)
  - Legal Risk
  - Placeholder
  - Data Leakage Risk
  - Contribution
  - Policy
list_image: /img/bok/regs/ip.png 
---

<BoxOut title="Intellectual Property" image="/img/bok/regs/ip.png">

Open source software is typically distributed under specific [licensing terms](../Artifacts/Licenses) and conditions that may affect how the software can be used, modified, and distributed. Compliance with these licensing requirements is essential to ensure that the organization does not infringe on the intellectual property rights of the software developers or violate the terms of the license.

- Deployment has an impact on the choice of licenses.  e.g. free-for-use machine learning packages, running on specific Nvidia chips.  Nvidia license says you shouldn't develop on the software unless you run on Nvidia hardware.  

- SGX Confidential Computing Consortium (more a hardware issue)

_Open source development on top of prioprietary codebase_
 
</BoxOut>

## Intersection With Open Source

- When you contribute to an existing open source project, you need to be _in compliance [with the license](../Artifacts/Licenses) of that project_.  This creates a further area for legal involvement, since at [Level 2 of the OSMM](../Activities/Level-2/License-Management) we only considered licenses from the point of view of consumption. 

**Note:** Some unusual open source licenses have expectations around warranty and liability or even providing on-going support for the work contributed.

### Controls

  - All data and documentation within a bank must be given an information classification.  E.g. public, confidential, etc.  
  - Part of the [Publication process](../Activities/Level-3/Publication) should be to make sure that only _public_ information is allowed to be contributed.
  - Integrate firm Identity and Access Management (IAM) with the [Publication process](../Activities/Level-3/Publication).
  - Ensure the [Publication process](../Activities/Level-3/Publication) only allows contribution to firm-approved repositories.

## Further Reading

 - [Patents & Trademarks](../Artifacts/IP) 
 - [License Compliance Management](../Activities/Level-2/License-Management.md)
 - [Training](../Activities/Level-3/Contribution-Training)
 
 