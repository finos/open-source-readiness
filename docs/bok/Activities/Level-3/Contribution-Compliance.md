---
title: Ensuring Open Source Compliance For Contribution
tags: 
  - OSPO (Role)
  - Level 3 (OSMM)
  - CIO/CTO (Role)
  - Compliance (Role)
  - AML Regulation
  - Accounting Regulation
  - Communication Regulation
  - Counter-Terrorism Regulation
  - Cross-Border Regulation
  - IP Regulation
  - PI Regulation
  - Sanctions Regulation
  - Export Regulation
sidebar_position: 3
sidebar_label: Compliance
---

Contributing to an open source project from within a regulated firm is likely to contravene one or more _policies_.   Staff who contribute to open source as part of their jobs are likely to be in breach of their terms of employment or likely to get disciplined.   For this reason, in order to enable open source contribution, new policy needs to be written which creates space within the compliance landscape.

The open source contribution policy won't be able to _contradict_ any pre-existing policy.  After all, most of the pre-existing policies (such as bank communications policy) will be in place to comply with law).  Nevertheless, many organisations have found ways to accommodate open source contribution within their existing compliance framework.  

**Note:** The [Making The Case for Contribution](Making-The-Case) article argues for allowing open source contribution as _controlling the risk profile_ of the organisation.   In this article we are focusing on how **policy** for open source contribution can be made to dovetail with existing banking policies enshrined in law.


<BoxOut title="Accountancy" image="/img/bok/regs/accounting.png" link="../../Regulations/Accounting" linkText="Accounting Regulations">

### Overview

<DocExcerpt src="/Regulations/Accounting" />

### Controls

 - Product Owners will need to accept the accounting write-down on the value of their software if they want to distribute it for free as open source.  

</BoxOut>

<BoxOut title="Anti-Money Laundering" image="/img/bok/regs/aml.png" link="../../Regulations/AML" linkText="AML Regulations">

### Overview

<DocExcerpt src="/Regulations/AML" />

### Controls

</BoxOut>

<BoxOut title="Communications" image="/img/bok/regs/communications.png" link="../../Regulations/Communication" linkText="Communication Regulations">

### Overview

<DocExcerpt src="/Regulations/Communication" />

### Controls

 - Banking regulations around electronic communications are mainly aimed at broker-dealer relationships, preventing collusion and enforcing "chinese walls" to prevent conflicts-of-interest.  
 - They normally apply to tools like Zoom, Slack, Symphony, Email etc. and cover retention periods, supervision etc.
 - Clearly, an open source contribution needs to adhere to these rules, even if it is not really the subject of them.
 - At the moment, this is an area of active investigation.  Tools like [GitHub Enterprise](https://github.com/enterprise) may help,  or something like [island.io](https://island.io).

</BoxOut>

<BoxOut title="Counter-Terrorism" image="/img/bok/regs/counter-terrorism.png" link="../../Regulations/Counter-Terrorism" linkText="Counter-Terrorism Regulations">

### Overview

<DocExcerpt src="/Regulations/Counter-Terrorism" />

### Controls

</BoxOut>

<BoxOut title="Cross-Border Obligations" image="/img/bok/regs/cross-border.png" link="../../Regulations/Cross-Border" linkText="Cross-Border Regulations">

### Overview

<DocExcerpt src="/Regulations/Cross-Border" />

### Controls

- **Cross Border Data Clearance (CBDC)**:  Only really applies to data. Not source code.   Public source doesn't apply.  Working groups don't apply.  Use of data classified as public.  Not banning data, but asking "is this public?".  

- In GitProxy, this might be: does this contain data?    If so, a second level review might be required.

- Screen out (via [DLP](../../Artifacts/DLP-Software)) contributions containing _data_ (including what might be regarded as "test data") and only allow code-only.

- This is another example of why preventing contributions with "test data" in them may be good policy.

</BoxOut>

<BoxOut title="Intellectual Property" image="/img/bok/regs/ip.png" link="../../Regulations/IP" linkText="IP Regulations">

### Overview

<DocExcerpt src="/Regulations/IP" />

### Controls

  - All data and documentation within a bank must be given a classification.  E.g. public, confidential, etc.  
  - Part of the DLP process should be to make sure that only _public_ information is allowed to be contributed.

</BoxOut>

<BoxOut title="Personal Information" image="/img/bok/regs/pi.png" link="../../Regulations/PI" linkText="PI Regulations">

### Overview

<DocExcerpt src="/Regulations/PI" />

### Controls

 - Financial firms are _technology organisations_. All such organisations need to worry about Intellectual Property Risk.  IP Leakage can happen anywhere.  
 - Arguably, risks are _greater_ in finance because of the penalties that regulators may apply.
 - Historically, use of social media / sharing sites has been prohibited by many firms to mitigate data leakage.   
 - But you have to balance the data leakage risk against the benefits (outlined above).  Therefore:   can employees use a site like GitHub (where uploading data is commonplace) but have controls in place to mitigate the data-leakage aspect?
 - Tools such as [GitProxy](http://github.com/finos/Git-Proxy), personal machines, ephemeral desktops etc. help to mitigate this.  
 - _Training_ of open source developers within the organisation is an important step.  Do developers understand the rules?  Can you be explicit about what is and isn't included in a commit?  For example:  _non-code contributions_ such as test data might be outside the policy.  It's easier to have a blanket policy that this isn't allowed, since it could be hard to tell the difference between fake and real data.  Test data therefore needs to be generated by the tests as they run instead.
 - A _governance process_ needs to be in place for supervising contributions and observing what leaves the organisation.
 - Tools like [GitHub Enterprise](https://github.com/enterprise) also aim to help with Data Leakage Prevention.
 - _Evidence_ (in the form of records) may need to be provided that data hasn't been leaked (according to regulations).


</BoxOut>


<BoxOut title="Sanctions" image="/img/bok/regs/sanctions.png" link="../../Regulations/Sanctions" linkText="Sanctions Regulations">


### Overview

<DocExcerpt src="/Regulations/Sanctions" />

### Controls

 - Is open source contribution encompassed in "selling"?  
- using russian open source software?
- core-js

</BoxOut>

<BoxOut title="Export" image="/img/bok/regs/export.png" link="../../Regulations/Export" linkText="Export Regulations">

### Overview 

<DocExcerpt src="/Regulations/Export" />

### Controls

 - Your policy will have to make a clear distiction between "exporting" and "contributing into an open source repository".


</BoxOut>






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
 
