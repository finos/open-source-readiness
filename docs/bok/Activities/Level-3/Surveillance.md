---
title: Surveillance Processes
tags: 
  - Data Leakage Risk
  - OSPO (Role)
  - Level 3 (OSMM)
sidebar_position: 5
sidebar_label: Surveillance
---

This article looks at the best practices around  surveillance (of communications) to enable open source contribution.

<BoxOut title="Communications" image="/img/bok/regs/communications.png" link="../../Regulations/Communication" title="Communications Regulation" linkText="Communication Regulation Details">

Electronic surveillance (ECOM) conducted by banks involves the monitoring and analysis of their employees' electronic communications, including emails, chat messages, and social media interactions, to ensure compliance with regulatory obligations, protect sensitive information, and mitigate potential legal, operational, and reputational risks.


Historically, use of social media / sharing sites has been [prohibited by many firms](../../Artifacts/DLP-Software) to mitigate [data leakage](../../Risks/Data-Leakage-Risk) and comply with [Communications Regulation](../../Regulations/Communication).  

But you have to balance the data leakage risk against the benefits of contribution.  

</BoxOut>

<BoxOut title="What Constitutes 'A Contribution'?" image="/img/bok/warning.png">

Open source development is inherently a social activity.  It isn't just code being pushed to external repositories.  "Contributing" will be a mix of the following:

- Committing Code
- Raising / Processing Pull Requests
- Raising / Commenting on Issues
- "Star"ing a GitHub/GitLab repo 
- Code Reviews

**Therefore:** staff engaging in open source development will need direct access to GitHub / GitLab.  Can employees use a site like GitHub but have controls in place to meet electronic communications requirements?


**See:**
 
  - [Open Source Development in a Public Repository](Public-Development)

</BoxOut>

## Is Open Source Development Firm Business?

[Communications Regulation](../../Regulations/Communication) typically applies to what is termed "firm business".  In the context of communication regulation in finance firms, the term "firm business" refers to the official activities, operations, and transactions conducted by the financial firm itself. It includes any communication related to the firm's products, services, investments, financial advice, or other business-related matters.

For this reason, _most_ firms don't feel the need to surveil personal social media communications although when personal devices are used for firm  business fines have been issued.  

There are three schools of thought about whether open source contribution is firm business:

### 1. Open Source Contribution is Not Firm Business

This is the least popular position on open source.  Under this definition, firms _should not be contributing to open source_ as it is not "firm business" and contributions in working time shouldn't be permitted.

This position is obviously incompatible with [Level 3 Maturity](../../OSMM/Level-3), but also is contradictory to most firms' positions on [Intellectual Property](../../Regulations/IP), since ordinarily a firm will assert ownership of copyrights of all materials produced by employees.

It is also incompatible with [Labour Law](../../Regulations/Labour) in some jurisdictions.

### 2.  All Open Source Contribution is Firm Business

With this stance, a firm is at least consistent with asserting ownership of [Intellectual Property](../../Regulations/IP).  An argument _for_ this position is that an open source project is _like a political rally_:  if an employee is attending the rally (or contributing to a project) then to some extent they are doing this _on behalf of the company_, and therefore this activity becomes firm business and should be surveilled.

However, the question then becomes - why is the firm publishing intellectual property _in public places like GitHub_?  

Employees would need to get permission (via an [Outside Business Interest (OBI) declaration](https://www.lawinsider.com/dictionary/outside-business-interests)) to engage with the project.  This is quite an overhead for employees merely playing around with tools like GitHub, but can be made to work.

In this case, **surveillance of GitHub / GitLab activity is required** (see below).

### 3.  Firm Business Decided on a Per-Project Basis

A third stance is to evaluate each project in turn for whether or not it is "firm business", asserting ownership of employee IP where it decides "firm business" interests coincide with the purposes of the open source project.

**Tip:** One approach to keeping track of "firm business" projects is to maintain a GitHub fork of the project inside the firm's [GitHub Organisation](https://docs.github.com/en/get-started/learning-about-github/types-of-github-accounts#organization-accounts)

In this case, **surveillance of GitHub / GitLab activity is required** (see below).
 
## Approaches to Surveillance

Broadly, surveillance needs to work like this:

1.  Build a list of all employee's GitHub/GitLab IDs (see below).
2.  Use GitHub/GitLab APIs (or tools that make use of them) to track all contributions (as described above). 
3.  Then either record **in full**, or **per-project** based on the firm-business rules as with other [Regulated Communications](../../Regulations/Communication)
 
## GitHub/GitLab IDs

Opinion varies on the best way to approach this:

### 1. Firm-specific & Personal GitHub/GitLab IDs

This is where the user has separate IDs for their own contributions and firm ones.  The user's firm email address is associated with one ID, whereas their personal address is associated with another.  

_In theory_ this allows the firm to segregate firm and non-firm business.  However there are several problems with this approach:

1. It is questionable whether the firm should be doing this.  The part of the point of open source is that people can continue contributing despite _not working for the firm_.

2. GitHub's [Terms of Service](https://help.github.com/en/github/site-policy/github-terms-of-service) expressly forbid multiple accounts per person:

 > "One person or legal entity may maintain no more than one free Account (if you choose to control a machine account as well, that's fine, but it can only be used for running a machine)." - [Terms of Service, _GitHub_](https://docs.github.com/en/site-policy/github-terms/github-terms-of-service)
 
3. IDs are property of the employee, not the firm.  Since the employee knows the password for their account, they will be able to continue to use it in other contexts irrespective of the firm's wishes.

### 2. Single GitHub/GitLab ID

The user associates their personal _and_ firm email addresses with the same ID.  

As mentioned above, from some points of view, _any_ contribution by the user whilst employed at the firm is firm business (see: [ownership of IP](../../Artifacts/CLAs-And-DCOs#Understanding-Copyright)), so there is no point in having a separate ID.  _All contributions should be surveilled anyway_.

### 3. Different Email Addresses, same ID

Although _commits_ can be signed with a given email address to denote where the work is being done (e.g. using the firm email address whilst conducting firm business) other GitHub activity such as **commenting on issues, raising PRs** etc. are not tied to a given email address but to a GitHub/GitLab ID.  

This essentially makes it impossible to disambiguate firm- and non-firm-related activity by email address so we recommend recording this on a per-project basis. 

## Templates

 - Some firms argue for Pull Request / Commit Message / Source File _templates_ to contain firm-specific legal disclaimers.

## Tool Requirements

At the moment, this is an area of active investigation.  

 - Tools like [GitHub Enterprise](https://github.com/enterprise) support auditing activity and GitHub itself has a [GraphQL Endpoint](https://docs.github.com/en/graphql) where detailed information about activity can be gathered.
 - [island.io](https://island.io) is a browser with built in enterprise tools for monitoring activity,
 - Tools such as [Proof Point](https://www.proofpoint.com/uk/solutions/social-media-protection-and-compliance) allow monitoring, hack prevention, [DLP](../../Artifacts/DLP-Software) for social media.  
 - [Symphony](https://symphony.com) has a tool to allow staff to use WhatsApp while being surveilled.

### Blocking Tools

 - Tools like [Slack](https://slack.comro) don't support surveillance.  Sometimes exemptions are granted to the broader communication policy for [Interacting with Foundations](../Level-4/Foundations) or working groups and other special cases.
 
 
 