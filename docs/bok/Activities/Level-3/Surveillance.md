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

Electronic surveillance (ECOM) conducted by banks involves the monitoring and analysis of their employees' electronic communications, including emails, chat messages, and social media interactions, to ensure compliance with regulatory obligations, protect sensitive information, and mitigate potential legal, operational, and reputational risks.

Historically, use of social media / sharing sites has been [prohibited by many firms](../../Artifacts/DLP-Software) to mitigate data leakage.   But you have to balance the data leakage risk against the benefits (outlined above).  

**Therefore:**  can employees use a site like GitHub but have controls in place to meet electronic communications requirements?

**See:** 

 - [Communication Regulations](../../Regulations/Communication)
 
<BoxOut title="What Constitutes 'A Contribution'?" image="/img/bok/warning.png">

Open source development is inherently a social activity.  It isn't just code being pushed to external repositories.  "Contributing" will be a mix of the following:

- Committing Code
- Raising / Processing Pull Requests
- Raising / Commenting on Issues
- "Star"ing a GitHub repo 
- Code Reviews

Therefore, staff engaging in open source development will need direct access to GitHub / GitLab.

**See:**
 
  - [Open Source Development in a Public Repository](Public-Development)

</BoxOut>

## Is Open Source Development Firm Business?

**DISCUSS AT SIG: THIS IS PRE-EXISTING TEXT BUT IS WRONG I THINK**

- As by definition the [Open Source work is not considered a firm-related business](../../operations/electronic-communications.md), only the firm-wide communication policies that would be applied to the incoming email notifications from GitHub, would be applicable here.

- Taking into consideration the above, the OSR group would still strongly advise people to audit and confirm with their compliance team the policies applicable.
 
## GitHub IDs

Opinion varies on the best way to approach this:

### 1. Firm-specific & Personal GitHub IDs

This is where the user has a separate GitHub Id for their own contributions vs. firm ones.  The user's firm email address is associated with one id, whereas their personal address is associated with another.  

 - This allows the firm to perform fine-grained access control on the user, and remove the user from firm-related repos.  It is questionable whether for an open source project the firm should be doing this.  The part of the point of open source is that people can continue contributing despite not working for the firm.
 
 - Arguably, this allows them to perform better tracking of the firm's users across GitHub.

### 2. Single GitHub ID

The user associates their personal _and_ firm email addresses with the same GitHub ID.  

 - From some points of view, _any_ contribution by the user whilst employed at the firm is firm business (see: [ownership of IP](../../Artifacts/CLAs-And-DCOs#Understanding-Copyright)), so there is no point in having a separate ID.  _All contributions should be monitored_.
 
 - Although _commits_ can be signed with a given email address to denote where the work is being done (e.g. using the firm email address whilst conducting firm business) other GitHub activity such as commenting on issues, raising PRs etc. are not tied to a given email address but to a GitHub ID.  This essentially makes it impossible to disambiguate firm- and non-firm-related activity. 


## From Policy (tbd)

- Communication Policy: e.g. use of social tools when communicating with foundations like FINOS, working on GitHub.  Exemptions to the broader communication policy to allow open source consumption/contribution.
- Branches vs Forks: which style is allowed.  
- Archival (for communication retention purposs).
- Approach to forks:  are we contributing or maintaining an internal fork?
- Pre-ambles to PRs / Commits / Files

## Tool Requirements

At the moment, this is an area of active investigation.  

 - Tools like [GitHub Enterprise](https://github.com/enterprise) support auditing activity and GitHub itself has a [GraphQL Endpoint](https://docs.github.com/en/graphql) where detailed information about activity can be gathered.
 - [island.io](https://island.io) is a browser with built in enterprise tools for monitoring activity,
 - Tools such as [Proof Point](https://www.proofpoint.com/uk/solutions/social-media-protection-and-compliance) allow monitoring, hack prevention, [DLP](../../Artifacts/DLP-Software) for social media.  

### Blocking Tools

 - Tools like [Slack](https://slack.comro) don't support monitoring - should these therefore _not_ be allowed for open source?  Doesn't this hinge on whether open source is "bank business"?
 
 
 