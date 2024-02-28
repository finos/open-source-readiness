---
title: Cross-Border Obligations
tags: 
  - Legal (Role)
  - CIO/CTO (Role)
  - Legal Risk
  - Placeholder
  - Contribution
  - Policy
image: /img/bok/regs/cross-border.png 
---

<BoxOut title="Cross Border Obligations" image="/img/bok/regs/cross-border.png">

Many organisations are bound by what is allowed to cross their borders.  For example:  in Swiss banks, there are strong controls in place to make sure no data leaves Switzerland.   This is a consideration for code too, as code _contributed to GitHub_ is data leaving the organisation and there may be requirements around these obligations.
  
</BoxOut>

## Intersection With Open Source

- **Cross Border Data Clearance (CBDC)**:  Only really applies to data.  Not source code.   Public source doesn't apply.  Working groups don't apply.  Use of data classified as [public](../Artifacts/IP#information-classification).  Not banning data, but asking "is this public?".  

### Controls

- Screen out (via [Code Review](../Activities/Level-3/Publication)) contributions containing _data_ (including what might be regarded as "test data") and only allow code-only. This is another example of why preventing contributions with "test data" in them may be good policy.

- [Publication Code Review Training](../Activities/Level-3/Contribution-Training#publication-review) 

## Further Reading

- [Digital Cross-Border Compliance: The Definitive Guide](https://www.apiax.com/resources/guides/digital-cross-border-compliance/) - Written by Apiax.
