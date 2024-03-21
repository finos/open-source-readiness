---
title: Open Source Contribution Training
tags:
  - Placeholder
  - Level 3 (OSMM)
  - OSPO (Role)
  - Data Leakage Risk
  - Reputational Risk
  - Operational Risk
sidebar_position: 4
sidebar_label: Training
list_image: /img/bok/page-types/activity.png
---

It is generally preferable if an [Open Source Contribution Policy](Contribution-Compliance) can be enforced via tooling (so called _policy as code_).  However, often policy will refer to behaviours and expectations of staff which cannot be controlled through systems.  In these cases, training courses will be needed to help promote desired behaviours.

This article focuses on the training required at [Level 3 Maturity](../../OSMM/Level-3) and makes the assumption that the training for the previous levels [has been taken care of already](../Level-2/Consumption-Training).  So your training course may want to lay the ground work and explain some of the general details of open source, or alternatively you might fall back on the [Linux Foundation Training Courses](../../training/Introduction) or other internal training courses around the safe, compliant consumption of open source.

This article covers the main requirements of _contribution_ training:

1. **Understanding how the firm handles open source activity**.  The reasons for allowing contribution, types of contribution, how projects are categorised and the different roles staff play in the contribution process.

2. **Process Controls around Publication**. How the process of publishing open source code works and what is expected from staff in the review process.

3. **Contribution Policy**.  As well as understanding their part in the process, employees are likely to need a thorough understanding of the [Contribution Policy](Contribution-Compliance) and how it intersects with other banking policies that they receive training on, such as conflicts of interest and what to do in the event of a breach of some kind.  They will need to be aware of the [Key Risks](Making-The-Case) involved in open source contribution.

4. **Community Involvement**.  It is necessary to make sure staff understand that they _represent their firm_ in open source activities and should behave appropriately.  They should be trained on how to follow the correct controls around social media, participating at events and whether or not to accept community gifts (e.g. "swag", entertainment etc.) at those events.

## 1. Firm Categorization of Open Source Activity

### Reasons To Allow Contribution

Your [Contribution Compliance Policy](Contribution-Compliance) will explain exactly why the firm is engaging in open source.  This should form part of the training course, making it clear to employees.  This is important since they will need to use their judgement to understand _when_ it is appropriate to make code or other materials public.

**Tip**: Include a link to the [Contribution Policy](../../Artifacts/Policy) for trainees to refer to.

**See:** [Making the Case for Contribution](Making-The-Case).

### Types of Contribution

It might be helpful to explain exactly what _contribution_ means in an open source context,  if these different types of contribution are handled differently in the policy:

- **Technical** contributions include fixing and raising issues or raising pull requests.   
- **Non-technical** contributions might be documentation, answering questions, drafting training materials or speaking at events. 

Additionally your policy might make a distinction between _code_ and _data_:

- **Code**: e.g. source code, algorithms, web pages etc. written in a programming language.  
- **Data**: e.g. training data, test data (used in test cases), client data, personal data, secrets etc.

_Information classification_ within a bank involves categorizing data based on its sensitivity and the level of security required to protect it, typically divided into categories such as **public**, **internal use only**, **confidential**, and **highly confidential**, to ensure appropriate handling, access control, and safeguarding measures.

Clearly, contribution should only be allowed for code that is considered **public** classification (if indeed code is classified as information).

### Project Categorization

Depending on your [policy](Contribution-Compliance), projects might be [categorized](Making-The-Case#project-categorization) in some manner.  It is important that contributors understand the categorization of the projects where this has an impact on their behaviour.  

In the [Making The Case](Making-The-Case#project-categorization) article, projects were categorized as **Firm-Moderated Projects**, **Firm Major/Minor Interest Projects** or **Staff Personal Projects**.  It might be advisable that the training course explains this and:

   - Clarifies the firm's rules around categorizing projects as personal.
   - Explains how the firm expects staff to behave on personal projects.
   - Clear up any grey areas around [IP Ownership](../../Artifacts/CLAs-And-DCOs#Two-Types-of-CLA) of personal projects.


### Organisational Roles

Your [Contribution Compliance Policy](Contribution-Compliance#organisational-roles) likely defines the key roles and responsibilities of staff with respect to open source contribution and these will need to be explained in the accompanying training course.

## 2. Process Controls Around Publication

### Publication Review

**See:** Main article on [Publication Process](Publication).

[Code review](https://en.wikipedia.org/wiki/Code_review) is a common quality assurance technique in software development and part of the [pull request](Public-Development#pull-requests) process.  

In a regular code review a reviewer is checking that the code is _readable_, _maintainable_, _idiomatic_ etc.  (See: [Code Review Checklist](https://www.codementor.io/blog/code-review-checklist-76q7ovkaqj) for further details.)

However, within a firm the review should go further as there are more risks to consider.  A code review in this scenario should consider the following.

<BoxOut title="Reputational Risk" image="/img/bok/risks/reputational-risk.png" link="../../Risks/Reputational-Risk" linkText="Reputational Risk Details">

 - Could this pull request be involved in some nefarious activity, such as creating an exploit elsewhere?  This would potentially be a criminal issue for the individual involved, and may cause serious reputational damage.
 
 - Does this pull request reflect the a level of quality that the publishing firm would be happy with?  Publishing _poor code_ or accidentally introducing bugs into open source projects could cause a reputational problem even though the projects are usually licensed "as is" with no warranty.

### Code Review Tooling

It's worth pointing out that tooling exists to _help_ with code review, although this doesn't obviate the need to keep a human in the loop.  Here is a short list of some options, many more are available:

 - [Fortify Static Code Analyzer](https://www.microfocus.com/en-us/cyberres/application-security/static-code-analyzer): This tool scans the source code of an application and identifies potential security vulnerabilities.
 - [Semgrep](https://semgrep.dev): Semgrep is an open-source static analysis tool used for detecting and preventing security vulnerabilities, bugs, and anti-patterns in source code.
 - [ESLint](https://eslint.org): It is a widely used tool for linting JavaScript code. It can be configured to enforce coding standards, identify potential errors, and maintain code consistency.
 - [SonarQube](https://www.sonarsource.com/products/sonarqube/): It is a popular tool for continuous code inspection that covers more than 25 programming languages. 
 - [CodeQL](https://codeql.github.com): a semantic code analysis engine developed by GitHub designed for programming languages such as Java, C++, C#, JavaScript and Python.

</BoxOut>

<BoxOut title="Data Leakage Risk" image="/img/bok/risks/data-leakage-risk.png" link="../../Risks/Data-Leakage-Risk" linkText="Data Leakage Risk Details">

### Personal Information

 - Would the pull request leak any _personal or client data_, or _identiying information_? 
 
 - Does the pull request contain _data_, and is therefore not allowed?

### Controls Around PI Leakage

Since it is hard to differentiate between benign test data and company secret data a **blanket ban** on contributing data might be an effective way to go.

Alternatively, consider the use of [DLP Tools](../../Artifacts/DLP-Software).   

</BoxOut>

<BoxOut title="Sanctions Compliance" image="/img/bok/regs/sanctions.png" link="../../Regulations/Sanctions" linkText="Sanctions Details">

### Non-Standard Cryptography

- Since this is disallowed by US Sanctions law, a code review should ensure requirement is met.

</BoxOut>

<BoxOut title="Intellectual Property" image="/img/bok/regs/ip.png" link="../../Regulations/Sanctions" linkText="Sanctions Details">

### Intellectual Property

 - Does the code contain [Intellectual Property](../../Artifacts/IP) from the firm in question?  

 - Are the _algorithms_ being published _non-specific to the firm's business_?
 
 - Does the code contain _passwords_, _machine / network names_, _private keys_ or any other business-specific data?
 
 - If data is being published, is it classified as **public**?

### Controls Around IP Leakage

**Tip**: Many open source policies forbid publication of any type of _data_ (separating it from code).  This obviates the data classification question.  

</BoxOut>


## 3. Contribution Policy Intersection

As [Contribution Compliance](Contribution-Compliance) describes, open source development must work within the jurisdictional legal framework and therefore the policies the firm has put in place to control for this.   

This has a large impact on the shape of the resulting policy and therefore also likely the behaviours of the staff adhering to that policy.

**See Also**: 

 - [Contribution Compliance](Contribution-Compliance) for more information on the related regulation.
 - [Making the Case](Making-The-Case) for a discussion of the key risks related to open source contribution.

<BoxOut title="Operational Risk" image="/img/bok/risks/operational-risk.png"  link="../../Risks/Operational-Risk" linkText="Operational Risk Details">

### Conflict of Interest

 - Certain types of open source contribution might represent a conflict of interest. 
 
  tbd, traing requirement around this.
  
 - "Donating" code to an open source project (whilst being an employee of a company) is giving up company IP.   
  
 - Contributing to open source _in personal time_ might also need to be declared as an Outside Business Interest (OBI).

</BoxOut>

### Remediation

In the event of an issue with an open source engagement (e.g.  an accidental data leak) what is the process?

 - Stop the activity
 - Make a record of what has happened
 - Discuss with OSPO / Project Administrators or other Risk Controllers. 
 
## 4. Community Involvement

### Etiquette / Ethics

<BoxOut title="Reputational Risk" image="/img/bok/risks/reputational-risk.png"  link="../../Risks/Reputational-Risk" linkText="Reputational Risk Details">

As described in [Making The Case](Making-The-Case#Reputation), contributing to open source can _improve_ or _worsen_ the reputation of an organisation depending on the quality of its contributions and the attitude it takes towards the open source community.  

</BoxOut>

Some training courses around how to behave correctly in an open source project:

<BokTagList tag="Ethics-Training" filter="Training"  />

### Approval for Social Media 

tbd: discussion around what this entails.  currently missing in LF training and firms don't have a clear view. should it be about whether there is bank business being discussed?  How does it affect things that people are on social media _anyway_?

- what about tracking social media interaction?  (via bots/tools)

### Talking About Firm Open Source Projects on Social Media


- Whitelist of folks
- senior staff.
- on demand for when a conference comes up, they do social media training?


### Talking at Conferences

Describe procedures for approvals on this.

### Gifts / Entertainment / Swag

Describe company policy on this.

