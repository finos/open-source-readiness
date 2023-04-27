---
title: Making The Case For Contribution
tags: 
  - Data Loss (Risk)
  - Placeholder
  - OSPO (Role)
  - Level 3 (OSMM)
sidebar_position: 2
sidebar_label: Making The Case
---

Organisational change can be very hard to achieve since organisations are naturally protective of themselves and the status quo.  Setting up an OSPO and beginning an open source journey will seem like a risky and dangerous proposition for many parts of an organisation.  

If you want to change an organisation you will need to convince people that what you are presenting:

 - Considers the risks and benefits to _all stakeholders / departments_
 - Provides an approach to mitigating the risks
 - Presents a _preferable risk profile_ to the status quo

## Education

There is a strong component of _education_ here:  once you have performed this risk analysis, you will need to explain it to the various stakeholders.  

Since the risk profile changes for various different departments, senior leaders will need convincing since the departments will have to accept a new way of working and a new approach to the risks involved.

## Proving It

Open source contribution is something that firms can adopt in a piecemeal, pilot way.  _This is also a risk reduction strategy_.   By starting out with a limited amount of contribution on certain key projects, you get to discover what _hidden risks_ were not covered in the risk analysis.   
 
## Improved Risk Position

This section outlines the main ways in which contributing to open source helps mitigate existing risks within the organisation.

<BoxOut title="Strategic Risk" image="/img/bok/risks/strategic-risk.png" link="../../Risks/Strategic-Risk" linkText="Strategic Risk Details">

## Strategy

 - "Commoditizing your complement"
 
## Pace of Change

 - Using open source helps you go faster (peloton example)

</BoxOut>

<BoxOut title="Dependency Risk" image="/img/bok/risks/dependency-risk.png" link="../../Risks/Dependency-Risk" linkText="Dependency Risk Details">

There are examples of open source tools (e.g. Prometheus) that are widely used but not optimised for the finance industry.  Therefore, having engineers working on improving these tools to work better for finance makes a lot more sense than going down the route of using vendor solutions that you have little control over.
 
**See Also:** 

 - [Sustainability](../../Risks/Dependency-Risk#sustainability) - many open source projects get abandoned and become maintainerless.
 - [Vulnerability](../../Risks/Dependency-Risk#vulnerability) - caused by poor-quality software (whether open source or not).

</BoxOut>

<BoxOut title="Staff-Risk" image="/img/bok/risks/staff-risk.png" link="../../Risks/Staff-Risk" linkText="Staff Risk Details">

### Talent Retention

 - Finance organisations are great at _attracting_ talent by simply paying very high wages.  The problem is attrition.  
 - It's important to understand that lots of open source is developed for _non-financial rewards_.   
 - If you hire a key engineer who is a top contributor to an open source project and then prevent them from contributing further then they will likely leave.
 - Even if you allow them to continue contributing, if the workflow is onerous (e.g. MD-level reviews of their code) they will also get fed up and leave.
 - To _retain_ these high-performing staff, you have to give them the right tools to carry on contributing effectively.
 - Also: GitHub is _becoming a CV_.  
 
### Talent Attraction

 - Open source can act as a force multiplier for recruiting developers.  Developers care about the technical environment they work in and a positive open source culture is a strong signal of a organisational technical competence.

</BoxOut>
 
<BoxOut title="Codebase-Risk" image="/img/bok/risks/codebase-risk.png" link="../../Risks/Codebase-Risk" linkText="Codebase Risk Details"> 

### Internal Forks

 - The [Code Duplication](code-duplication) article already describes the maintainance costs associated with internal forks of projects, and in passing discusses how this also presents a security risk.
 - It is hard but perhaps not impossible to get a view of how big a problem this is in your organsisation by looking at the internal repository (e.g. Artifactory) and looking for versions of open source libraries that are _not_ coming from the original external source.
 - An argument _for_ internal forks is that this mitigates the cyber risk of trojan code from an external environment.  However this is specious since 99% of the code running in the organisation is open source anyway: bad actors can exist both inside and outside the bank and this is no substitute for scanning tools.
 - For example, consider a  _bad actor_ performing a [Solar Winds Trojan](https://www.cisecurity.org/solarwinds)-style attack.  This is a consumption risk that _already exists_.  Allowing developers to contribute to open source doesn't worsen or improve this situation.   

</BoxOut>

<BoxOut title="Reputational Risk" image="/img/bok/risks/reputational-risk.png"  link="../../Risks/Reputational-Risk" linkText="Reputational Risk Details">

### Reputation

 - contributing to open source can improve reputation of an organisation
 
tbd.

</BoxOut>

## Introduced Risks

This section addresses the _actual_ and _perceived_ risks of contributing to open source.

<BoxOut title="Data Leakage Risk" image="/img/bok/risks/data-leakage-risk.png"  link="../../Risks/Data-Leakage-Risk" linkText="Data Leakage Risk Details">

All technology organisations need to worry about Intellectual Property Risk, but arguably, risks are _greater_ in finance because of the penalties that regulators may apply.

### Social Media

Historically, use of social media / sharing sites has been prohibited by many firms to mitigate data leakage.  **GitHub is arguably a form of social media.** 

But you have to balance the data leakage risk against the above benefits. 

### Controls

- **See:** [DLP Software](../Artifacts/DLP-Software)
- [Training](Contribution-Training)

 -   Therefore:   can employees use a site like GitHub (where uploading data is commonplace) but have controls in place to mitigate the data-leakage aspect?
 - Tools such as [GitProxy](http://github.com/finos/Git-Proxy), personal machines, ephemeral desktops etc. help to mitigate this.  
 - _Training_ of open source developers within the organisation is an important step.  Do developers understand the rules?  Can you be explicit about what is and isn't included in a commit?  For example:  _non-code contributions_ such as test data might be outside the policy.  It's easier to have a blanket policy that this isn't allowed.  Test data needs to be generated by the tests as they run instead.
 - A _governance process_ needs to be in place for supervising contributions and observing what leaves the organisation.
 - Tools like [GitHub Enterprise](https://github.com/enterprise) also aim to help with Data Leakage Prevention.
 - _Evidence_ may need to be provided that data hasn't been leaked (according to regulations).

</BoxOut>


<BoxOut title="Operational Risk" image="/img/bok/risks/operational-risk.png"  link="../../Risks/Operational-Risk" linkText="Operational Risk Details">

## Conflict of Interest

 - Certain types of open source contribution might represent a conflict of interest.  E.g. a trader contributing to an open source trading platform.  Many of the regulations in place in finance are especially designed to stop this kind of abuse.  

</BoxOut>

