---
title: Making The Case For Contribution
tags: 
  - Data Leakage Risk
  - Strategic Risk
  - Dependency Risk
  - Staff Risk
  - Reputational Risk
  - Operational Risk
  - Codebase Risk
  - OSPO (Role)
  - Level 3 (OSMM)
sidebar_position: 2
sidebar_label: Making The Case
image: /img/bok/page-types/activity.png
---

Organisational change can be very hard to achieve since organisations are naturally protective of themselves and the status quo.  Setting up an OSPO and beginning an open source journey will seem like a risky and dangerous proposition for many parts of an organisation.  

If you want to change an organisation you will need to convince people that what you are presenting:

 - Considers the risks and benefits to _all stakeholders / departments_
 - Provides an approach to mitigating the risks
 - Presents a _preferable risk profile_ to the status quo
 
## Balance Of Risk

In this article, we will make the point that _contributing to open source_ changes the risk profile of the organisation.  Some risks are worsened, whilst some are improved.  If you are making the case for open source in your organisation, you need to argue that _on balance_ the risk profile is improved by allowing contribution.  

### Improved Risk Position

- [Strategic Risk](#strategic-risk)    
- [Codebase Risk](#codebase-risk)     
- [Dependency Risk](#dependency-risk)  
- [Staff Risk](#staff-risk) 

### Neutral Risk Position

- [Reputational Risk](#reputational-risk)   

### Worsened Risk Position         

 - [Data Leakage Risk](#data-leakage-risk)
 - [Operational Risk](#operational-risk)   
 
**Note:** In the following article [Ensuring Open Source Compliance for Contribution](Contribution-Compliance) we will consider the intersection of regulation and policy on open source contribution.

## Education

There is a strong component of _education_ here:  once you have performed this risk analysis, you will need to explain it to the various stakeholders.  

Since the risk profile changes for various different departments, senior leaders will need convincing since the departments will have to accept a new way of working and a new approach to the risks involved.

## Proving It (Starting Small/Low Risk)

Open source contribution is something that firms can adopt in a piecemeal, pilot way.  _This is also a risk reduction strategy_.   By starting out with a limited amount of contribution on certain key projects, you get to discover what _hidden risks_ were not covered in the risk analysis.   

**Consider:**

 - Can you divide the estate into different levels of risk? For example, **key production systems** might be high-risk, whereas a website with UI guidelines on it might be much lower risk.  Can you get agreement to work in an open source way at the lower end of the risk spectrum?
 
 - Can you consider open source for _new, experimental projects_ which are small scale and won't cause large amounts of escalation if there are problems?
 
 - Can you look at the impact of a [vulnerability](../../Risks/Dependency-Risk): in what systems would this be a low-risk problem?
 
 - From a [reputational risk](../../Risks/Reputational-Risk) perspective, does [pushing code to foundations](../Level-4/Foundations) make more sense?
 
 - Can you consider projects which have a low-level of firm-specific IP?
 
 - Can you make sure the projects being considered are widely separated from core firm business?
 
 - Can you pick parts of the business with [low compliance overhead](Contribution-Compliance)?
 
 - Can you create a [minimum viable policy](../../Artifacts/Policy) to get started?   Setting a policy for the _whole firm_ is probably harder than a single business unit.
 
 - If all else fails, can you start with [InnerSource](Culture#InnerSource)?
 
## Project Categorization

With the above in mind, you can consider the universe of _all software projects_ to break down into some key categories:

|Firm posture               | Internal         | Managed by Firm (e.g. own GitHub Org)                | Managed in Public                         |
|---------------------------|------------------|------------------------------------------------------|-------------------------------------------|
| Critical / Differentiator | In-House         | **Firm Moderated** OSS Project                       | **Major Interest**: Get involved; sponsor |
| Commodity                 | Consider for OSS | **Firm Moderated** - Consider donating to Foundation | **Minor Interest**: Fix Bugs                        |
| No Involvement            | n/a              | n/a                                                  | **Staff Personal Projects**                     |

By allowing open source as _one particular sourcing option_ you are able to strategically think about _which software projects it makes sense to own_.  In a way, this is very similar to the "Do what you do best and outsource the rest" business advice of [Peter Drucker](https://en.wikipedia.org/wiki/Outsourcing) from the 1990's:

1. **Firm-Moderated Projects**: For projects where the firm has deemed that there is [strategic value](../Level-5/Leveraging-Strategically) in sponsoring the development of a given project. 
 
2. **Firm Major/Minor Interest Projects:** Between the two categories above may lie other categories where the firm is an active consumer of the project, has an interest in sponsoring the development of a project or is the lead maintainer of the project, but otherwise sees the project as _commodity_ in nature.  

3. **Staff Personal Projects:** Projects where the firm has no interest at all.  Many staff in the firm are likely already involved in open source development.  

## Improved Risk Position

This section outlines the main ways in which contributing to open source helps mitigate existing risks within the organisation.

<BoxOut title="Strategic Risk" image="/img/bok/risks/strategic-risk.png" link="../../Risks/Strategic-Risk" linkText="Strategic Risk Details">

### Commodification

Firms like [Google](https://google.com) use open source as a _strategic lever_, specifically by [Commoditizing their complement](https://gwern.net/complement).  That is, where their competitors build a defensible ecosystem (such as [Amazon with AWS](https://aws.amazon.com) or [Apple with iOS](https://www.apple.com/ios) they will create an open-source, commodity version of that ecosystem ([Kubernetes](https://kubernetes.io) and [Android](https://www.android.com) respectively. 

**Tip:** Consider what parts of your business constitute a _strategic advantage_ that could be erased by a competitor choosing to build the _same functionality_ but in an open source form. 

### Pace of Change

In a [cycling peloton](https://en.wikipedia.org/wiki/Peloton), many riders cycle closely together to reduce air resistance.  In effect, the effort of overcoming drag is shared by the group.  Individual riders have to work harder to overcome drag and therefore have to expend greater energy.  

Collaborating on open source projects is a lot like this.  If you can work together with competitors to share code you will reduce effort across the group.
 
### Direction

Continuing the example above, only by _being part of the peloton_ can you reasonably expect to affect the direction it goes in.  Passively consuming open source software means you are at the whim of those in control.  Many organisations are happy to cede _control_ over their own personal software for _influence_ over a shared, better project.

Banks are technology companies which rely on software.  Estimates suggest that upwards of 95% of this is open source.  They are completely beholden to other organisations and individuals for providing it but without an open source presence have no voice in the direction the software takes.  If an organisation's modernisation strategy is predicated on the use of open source, then there is risk in basing that strategy on something you have no control over.

</BoxOut>

<BoxOut title="Dependency Risk" image="/img/bok/risks/dependency-risk.png" link="../../Risks/Dependency-Risk" linkText="Dependency Risk Details">

### Vendor Lock-In

It is quite well established that open standards and open source generally are a way to avoid _vendor lock-in_:

> In economics, vendor lock-in, also known as proprietary lock-in or customer lock-in, makes a customer dependent on a vendor for products, unable to use another vendor without substantial switching costs. - [Vendor Lock-In, _Wikipedia_](https://en.wikipedia.org/wiki/Vendor_lock-in)

**Note:** Companies can use open source as a way to create [competitive advantage](https://en.wikipedia.org/wiki/Vendor_lock-in#Google) and lock customers into a whole "ecosystem".

**See:** 
 - [Should we really be worried about vendor lock-in in 2020?](https://www.protocol.com/manuals/new-enterprise/vendor-lockin-cloud-saas) from Protocol.com which talks about vendor lock-in by _cloud providers_.

### For External Projects

There are examples of open source tools (e.g. Prometheus) that are widely used but not optimised for the finance industry.  Therefore, having engineers working on improving these tools to work better for finance makes a lot more sense than going down the route of using vendor solutions that you have little control over.

By helping maintain open source software you are ensuring its future, which you may well depend on.
 
### For Internal Projects

Where a project is not deemed a strategic asset (see examples below) then an argument can be made that open sourcing the project might reduce dependency risk by attracting other maintainers and users.  

Linus Torvalds (the inventor of Linux operating system) makes the case that for Linux, because the OS is so popular, more bugs get found (and fixed) more quickly.   Increasing the user base of any system should surface rough edges faster. 

> In software development, Linus's law is the assertion that "given enough eyeballs, all bugs are shallow" - [Linus's Law, _Wikipedia_](https://en.wikipedia.org/wiki/Linus%27s_law)

**Examples:** 
 - [LCR Project](https://github.com/finos/open-reg-tech-us-lcr) donated to FINOS by Morgan Stanley.

 
**See Also:** 

 - [Sustainability](../../Risks/Dependency-Risk#sustainability) - many open source projects get abandoned and become maintainerless.
 - [Vulnerability](../../Risks/Dependency-Risk#vulnerability) - caused by poor-quality software (whether open source or not).

</BoxOut>

<BoxOut title="Staff Risk" image="/img/bok/risks/staff-risk.png" link="../../Risks/Staff-Risk" linkText="Staff Risk Details">

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
 
<BoxOut title="Codebase Risk" image="/img/bok/risks/codebase-risk.png" link="../../Risks/Codebase-Risk" linkText="Codebase Risk Details"> 

### Internal Forks

 - The [Code Duplication](../../Measurements/code-Duplication) article already describes the maintainance costs associated with internal forks of projects, and in passing discusses how this also presents a security risk.
 - It is hard but perhaps not impossible to get a view of how big a problem this is in your organsisation by looking at the internal repository (e.g. Artifactory) and looking for versions of open source libraries that are _not_ coming from the original external source.

### Trojan Attack

An argument _for_ keeping internal forks is that this mitigates the cyber risk of trojan code from an external environment.  However this is specious since 99% of the code running in the organisation is open source anyway: bad actors can exist both inside and outside the bank and this is no substitute for scanning tools.

**Example:** consider a  _bad actor_ performing a [Solar Winds Trojan](../Level-2/Supply-Chain-Security#example-solar-winds)-style attack.  This is a consumption risk that _already exists_.  Allowing developers to contribute to open source doesn't worsen or improve this situation.   

</BoxOut>

## Neutral Risk Position

<BoxOut title="Reputational Risk" image="/img/bok/risks/reputational-risk.png"  link="../../Risks/Reputational-Risk" linkText="Reputational Risk Details">

### Reputation

Contributing to open source can _improve_ or _worsen_ the reputation of an organisation depending on the quality of its contributions and the attitude it takes towards the open source community.  

**Positive Examples:**

 - [Red Hat](https://www.redhat.com) has a strong reputation due to its open source leadership and its Linux distribution.  
 - [IBM](https://ibm.com) also benefits from its open source contributions.  Although it makes money through products and consultancy, it has contributed to [Linux](https://www.zdnet.com/article/ibms-linux-contributions/) and the original code for [Eclipse](https://en.wikipedia.org/wiki/Eclipse_(software)). 
 
**Negative Examples:**

 - [Oracle](https://oracle.com) has a complex relationship with open source, surrounding its involvement with [Java](https://www.java.com) and [MySQL](https://www.mysql.com)
 
### Controls

 - See [Communication Policy](Contribution-Compliance#communications-laws)

</BoxOut>

## Worsened Risk Position

This section addresses the _actual_ and _perceived_ risks of contributing to open source.  

**Note:** Where the risks to the business are greater than before, you will need to introduce **controls** and **monitoring** to satisfy risk owners.

<BoxOut title="Data Leakage Risk" image="/img/bok/risks/data-leakage-risk.png"  link="../../Risks/Data-Leakage-Risk" linkText="Data Leakage Risk Details">

All technology organisations need to worry about Intellectual Property Risk, but arguably, risks are _greater_ in finance because of the penalties that regulators may apply.

### Social Media

Historically, use of social media / sharing sites has been prohibited by many firms to mitigate data leakage.  **GitHub is arguably a form of social media.**    -   Therefore:   can employees use a site like GitHub (where uploading data is commonplace) but have controls in place to mitigate the data-leakage aspect?

### Controls

 - [DLP Software](../../Artifacts/DLP-Software)
 - Tools such as [GitProxy](http://github.com/finos/Git-Proxy), personal machines, ephemeral desktops etc. help to mitigate this.  
 - [Training](Contribution-Training) of open source developers within the organisation is an important step.  Do developers understand the rules?  Can you be explicit about what is and isn't included in a commit?  For example:  _non-code contributions_ such as test data might be outside the policy.  It's easier to have a blanket policy that this isn't allowed.  Test data needs to be generated by the tests as they run instead.
 - A [governance process](Contribution-Compliance) needs to be in place for supervising contributions and observing what leaves the organisation.
 - Tools like [GitHub Enterprise](https://github.com/enterprise) also aim to help with Data Leakage Prevention.
 - _Evidence_ may need to be provided that data hasn't been leaked (according to regulations).
 
**See:**  [Main Publication Activity Article](Publication).

</BoxOut>


<BoxOut title="Operational Risk" image="/img/bok/risks/operational-risk.png"  link="../../Risks/Operational-Risk" linkText="Operational Risk Details">

## Conflict of Interest

 - Certain types of open source contribution might represent a conflict of interest.  E.g. a trader contributing to an open source trading platform.  Many of the regulations in place in finance are especially designed to stop this kind of abuse.  

## Funding (Cost)

One argument against [having an OSPO](../Level-2/Creating-An-OSPO) is the cost.  However, OSPOs are able to justify their expense in the following ways:

- **[Licenses](../../Artifacts/Licenses)**: sometimes, OSPOs are started from a position of legal necessity.  Are you using code with appropriate licenses?  Does someone have to adjudicate which licenses are allowed and which aren't?  (See [License Compliance Management](../Level-2/License-Management)

- **[Maintenance Costs](../../measurements/Code-Duplication)**: a lot of times, people need changes to an open-source project.  If you don't allow them to contribute to the original project then they're going to fork the project internally.  If you are a large organisation, you may end up with several different, incompatible forks of some open source project.  This has to be maintained.

- **Sharing Cost**: Working on open source projects should mean that cost is amortised amongst the collaborating organisations.

</BoxOut>

