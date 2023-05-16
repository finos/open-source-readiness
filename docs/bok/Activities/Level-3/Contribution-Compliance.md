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

The open source contribution policy won't be able to _contradict_ any pre-existing policy.  After all, most of the pre-existing policies (such as bank communications policy) will be in place to comply with law.  Nevertheless, many organisations have found ways to accommodate open source contribution within their existing compliance framework.  

**Note:** The [Making The Case for Contribution](Making-The-Case) article argues for allowing open source contribution as _controlling the risk profile_ of the organisation.   In this article we are focusing on how **policy** for open source contribution can be made to dovetail with existing banking policies enshrined in law.

<BoxOut title="Warning" image="/img/bok/warning.png">

Creating new policy is likely to take a long time since it involves significant cross-business agreement.

If you are embarking on building a contribution policy, consider the advice in [Creating-An-OSPO](../Level-2/Creating-An-OSPO) around building a "coalition of the willing".   You can go one step beyond this and rotate people from out of the compliance team to work with you on setting up the policy.  People familiar with the existing policies and ways of working will be an advantage to making progress.

Don't simply dismiss the list below as unimportant: you _will_ need to consider the stakeholders of these policies at some point.

</BoxOut>

## Organisational Structure

As described in [Making The Case](Making-The-Case), it can be easier to create an open source policy that affects a single part of a larger organisation.  The first consideration for a new policy should therefore be:

 - To what part of the organisation is this policy relevant?
 - Who "owns" the policy (e.g. [CTO](../../Roles/CTO))
 
## Organisational Roles

Your policy will outline the organisational structure set up to risk-manage open source contribution.  [Developers](../../Roles/Developer) or other staff engaged in open source will need to understand and operate within this structure, so it's important to train them on it.  Roles they might need to be aware of include:

- **Open Source Program Office**: See [OSPO](../../Roles/OSPO) and [Creating-An-OSPO](../Level-2/Creating-An-OSPO).

- **Foundation Points-of-Contact (POC)**:  staff within the organisation responsible for handling [Foundation Membership](../Level-4/Foundations).  This might be important for project creation or administration, [CLA administration](../../Artifacts/CLAs-And-DCOs) or attending events.

- **Open Source Project Administrators**: where the organisation is [Contributing its own Projects](../Level-4/Contributing-A-Project) or otherwise acting in a leadership role on a project, there will be someone in the firm in this role.   

- **Open Source Project Sponsors**:  in the majority of cases, the firm will have a business need to engage in an open source project.  Therefore, contributions of time or money will need to be _sponsored_ by some part of the business.  It's important that contributors are aware of who is sponsoring their contribution.

- **Contributors**: people _contributing_ code, documentation to open source projects. 

- **Reviewers**: are people who check the contributions to make sure they meet quality requirements and don't expose the firm to unnecessary risks (see below). 

- **Maintainers**: these are **contributors** on open source projects who have an elevated level of control and can gate-keep which contributions are accepted.
 
## Key Terms

Often legal documents spend much effort on _defining terms_.  Because there are likely to be many stakeholders from different areas of the firm, an open source policy will also need to do this up-front work.  You should consider coming up with definitions for terms such as:

 - Initiative, Program, Project - how internal terms relate to widely used terms in open source like "Repo" or "Organisation".
 - [Categories of Project](Making-The-Case#project-categorization), e.g. "Staff Personal Projects", "Firm Moderated Projects" etc.
 - "Bank Business" vs "Non-Bank Business"
 - Staff, Contractors, Consultants, what roles they play.
 - Bank Network, Outside Bank Network
 
## Acceptable Tools

Many of the controls below hinge on the ability of software tools to enforce them.  The policy will need to define:

- which tools are acceptable for the [Publication process](Publication) 
- which open source repositories are in scope (e.g. [GitHub](https://github.com) / [GitLab](https://gitlab.com))
- which tools to use for security reviews, if needed.


## Mandatory Training

Your policy is likely to want to mandate staff training so that staff are aware of the correct processes and tools and any other behaviour expected of them for contribution.

**See:** Main article on [Contribution Training](Contribution-Training) 

## By Regulation

In this section we look at some regulations that an open source policy will need to consider, and suggest appropriate controls for complying with each (and _evidencing_ compliance after the fact).

<BoxOut title="Accounting" image="/img/bok/regs/accounting.png" link="../../Regulations/Accounting" linkText="Accounting Regulations">

### Accounting

<DocExcerpt src="/Regulations/Accounting" />

#### Controls

 - Product Owners will need to accept the accounting write-down on the value of their software if they want to distribute it for free as open source.  

</BoxOut>

<BoxOut title="Anti-Money Laundering" image="/img/bok/regs/aml.png" link="../../Regulations/AML" linkText="AML Regulations">

### Anti-Money Laundering

<DocExcerpt src="/Regulations/AML" />

#### Controls

- [Training](Contribution-Training) (and recording participation)
- [Publication Process](Publication)

</BoxOut>

<BoxOut title="Communications" image="/img/bok/regs/communications.png" link="../../Regulations/Communication" linkText="Communication Regulations">

### Communications

<DocExcerpt src="/Regulations/Communication" />

#### Controls

##### Blocked Software Tools

Banking regulations around electronic communications are mainly aimed at broker-dealer relationships, preventing collusion and enforcing "chinese walls" to prevent conflicts-of-interest.  
 
They normally apply to tools like Zoom, Slack, Symphony, Email etc. and cover retention periods, supervision etc.

Clearly, an open source contribution needs to adhere to these rules, even if it is not really the subject of them.

- At the moment, this is an area of active investigation.  Tools like [GitHub Enterprise](https://github.com/enterprise) may help,  or something like [island.io](https://island.io). 

##### Social Media

- [Social Media Training](Contribution-Training#social-media) 
- Tools such as [Proof Point](https://www.proofpoint.com/uk/solutions/social-media-protection-and-compliance) allow monitoring, hack prevention, [DLP](../../Artifacts/DLP-Software) for social media.  

</BoxOut>

<BoxOut title="Counter-Terrorism" image="/img/bok/regs/counter-terrorism.png" link="../../Regulations/Counter-Terrorism" linkText="Counter-Terrorism Regulations">

### Counter-Terrorism

<DocExcerpt src="/Regulations/Counter-Terrorism" />

#### Controls

- [Publication Code Review Training](Contribution-Training#publication-review) 

</BoxOut>

<BoxOut title="Cross-Border Obligations" image="/img/bok/regs/cross-border.png" link="../../Regulations/Cross-Border" linkText="Cross-Border Regulations">

### Cross-Border Obligations

<DocExcerpt src="/Regulations/Cross-Border" />

#### Controls

- **Cross Border Data Clearance (CBDC)**:  Only really applies to data. Not source code.   Public source doesn't apply.  Working groups don't apply.  Use of data classified as public.  Not banning data, but asking "is this public?".  

- Screen out (via [Code Review](Publication)) contributions containing _data_ (including what might be regarded as "test data") and only allow code-only. This is another example of why preventing contributions with "test data" in them may be good policy.

- [Publication Code Review Training](Contribution-Training#publication-review) 

</BoxOut>

<BoxOut title="Intellectual Property" image="/img/bok/regs/ip.png" link="../../Regulations/IP" linkText="IP Regulations">

### Intellectual Property

<DocExcerpt src="/Regulations/IP" />

When you contribute to an existing open source project, you need to be _in compliance [with the license](../../Artifacts/Licenses) of that project_.  This creates a further area for legal involvement, since at [Level 2 of the OSMM](../Level-2/License-Management) we only considered licenses from the point of view of consumption. 

**Note:** Some unusual open source licenses have expectations around warranty and liability or even providing on-going support for the work contributed.

#### Controls

  - All data and documentation within a bank must be given a classification.  E.g. public, confidential, etc.  
  - Part of the [Publication process](Publication) should be to make sure that only _public_ information is allowed to be contributed.
  - Integrate firm Identity and Access Management (IAM) with the [Publication process](Publication).
  - Ensure the [Publication process](Publication) only allows contribution to firm-approved repositories.

</BoxOut>

<BoxOut title="Personal Information" image="/img/bok/regs/pi.png" link="../../Regulations/PI" linkText="PI Regulations">

### Personal Information

<DocExcerpt src="/Regulations/PI" />

#### Controls

- **See:** [Publication Activity](Publication).  Specifically: don't allow publication of _data_ in open source contributions.
- **See:** [Training](Contribution-Training)

</BoxOut>


<BoxOut title="Sanctions" image="/img/bok/regs/sanctions.png" link="../../Regulations/Sanctions" linkText="Sanctions Regulations">


### Sanctions

<DocExcerpt src="/Regulations/Sanctions" />

 - Is open source contribution encompassed in "selling"?  
- using russian open source software?
- core-js

#### Controls

- **See:** [Training](Contribution-Training)

</BoxOut>

<BoxOut title="Export" image="/img/bok/regs/export.png" link="../../Regulations/Export" linkText="Export Regulations">

### Export 

<DocExcerpt src="/Regulations/Export" />

#### Controls

 - Your policy will have to make a clear distiction between "exporting" and "contributing into an open source repository".

</BoxOut>
