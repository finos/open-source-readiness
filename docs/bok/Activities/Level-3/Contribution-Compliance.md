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
 - Social Media

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

- Screen out (via [DLP](../../Artifacts/DLP-Software)) contributions containing _data_ (including what might be regarded as "test data") and only allow code-only. This is another example of why preventing contributions with "test data" in them may be good policy.

</BoxOut>

<BoxOut title="Intellectual Property" image="/img/bok/regs/ip.png" link="../../Regulations/IP" linkText="IP Regulations">

### Overview

<DocExcerpt src="/Regulations/IP" />

### Controls

  - All data and documentation within a bank must be given a classification.  E.g. public, confidential, etc.  
  - Part of the [DLP process](../../Artifacts/DLP-Software) should be to make sure that only _public_ information is allowed to be contributed.

</BoxOut>

<BoxOut title="Personal Information" image="/img/bok/regs/pi.png" link="../../Regulations/PI" linkText="PI Regulations">

### Overview

<DocExcerpt src="/Regulations/PI" />

### Controls

- **See:** [DLP Activity](DLP).

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
