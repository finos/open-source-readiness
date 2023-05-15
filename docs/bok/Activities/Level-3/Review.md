---
title: Outgoing Code Review
tags: 
  - Data Leakage Risk
  - OSPO (Role)
  - Level 3 (OSMM)
sidebar_position: 5
sidebar_label: Code Review
---

<BoxOut title="Data Leakage Risk" image="/img/bok/risks/data-leakage-risk.png" image="/img/bok/risks/data-leakage-risk.png"  link="../../Risks/Data-Leakage-Risk" linkText="Data Leakage Risk Details">

This article discusses controls that can be put in place to mitigate [Data Leakage Risks](../../Risks/Data-Leakage-Risk), which are almost certainly required for an effective [Open Source Contribution Policy](Contribution-Compliance).

### Considerations

Financial firms are _technology organisations_. All such organisations need to worry about [Intellectual Property Risk](../../Risks/Data-Leakage-Risk).  IP Leakage can happen anywhere.   Arguably, risks are _greater_ in finance because of the penalties that regulators may apply.

Historically, use of social media / sharing sites has been [prohibited by many firms](../../Artifacts/DLP-Software) to mitigate data leakage.   But you have to balance the data leakage risk against the benefits (outlined above).  Therefore:   can employees use a site like GitHub (where uploading data is commonplace) but have controls in place to mitigate the data-leakage aspect?

### Existing DLP Software

**See:** [DLP Software](../../Artifacts/DLP-Software) for a discussion on the common ways in which regulated firms use DLP _software_, and how this isn't appropriate for open source contributions.

</BoxOut>

## Approaches

### 1. Outgoing Control Process

_Developers work inside the firm and contribute Git pull requests via a controlled, monitored process._

 - Tools can be used to apply a DLP workflow to the GitHub / GitLab source control processes.  
 - This is a way to push data over the firewall, but with compliance controls.
 - This can introduce extra friction on contributing open source. 
 - However, these tools may help with _evidencing_ (in the form of records) may need to be provided that data hasn't been leaked (according to regulations).
 - This is usually a key requirement to satisfy [Data Leakage Risk](../../Risks/Data-Leakage-Risk) owners.

#### Commit Squashing

It is very easy to accidentally leak data via Git commits because of Git's append-only nature.  For example, within a single pull-request you could have a commit containing a file being _added_ containing some leaked confidential data and then a second commit _removing_ that same file.  To a reviewer checking only the "diff" of the codebase, _no confidential data has been leaked_.  However, an attacker could review the commits individually.  _Commit Squashing_ fixes this by replacing all the individual commits with a single, final-state commit, at the expense of the historical record of how the project has changed.
 
#### Controlling Access

Risk owners are likely to want to know that the [OSPO](../Level-2/OSPO) has a control around which developers are able to contribute to which projects, and historical evidence to show what has been contributed. 
 
**See:**

 - [GitProxy](https://github.com/finos)
 - [GitHub Enterprise](https://github.com/enterprise)
 - Many firms have internal proprietary solutions to this.
 
### 2. Personal Machines

Contribution from _outside the firewall_ using personal machines might make sense since the user may not be exposed to confidential information on their personal machines.  

This approach could prevent _accidental_ leakage of IP.  However, from a risk perspective this means that the firm has less purview over what is being released publically.

**Note:** In some senses, this is a "default" approach, since some staff working at the firm are almost certainly contributing to open source in this way during their own time.

### 3. Ephemeral Desktops

Like personal machines, but a vm within your desktop that can access _nothing inside the firewall_.  

tbd.  give advantages and disadvantages.

## GitHub IDs

Opinion varies on the best way to approach this:

### 1. Firm-specific & Personal GitHub IDs

This is where the user has a separate GitHub Id for their own contributions vs. firm ones.  The user's firm email address is associated with one id, whereas their personal address is associated with another.  

 - This allows the firm to perform fine-grained access control on the user, and remove the user from firm-related repos.  It is questionable whether for an open source project the firm should be doing this.  The part of the point of open source is that people can continue contributing despite not working for the firm.
 
 - Arguably, this allows them to perform better tracking of the firm's users across GitHub.

### 2. Single GitHub ID

The user associates their personal _and_ firm email addresses with the same GitHub ID.  

 - From some points of view, _any_ contribution by the user whilst employed at the firm is firm business (see: [ownership of IP](../../Artifacts/CLAs-And-DCOs#Understanding-Copyright)), so there is no point in having a separate ID.  _All contributions should be monitored_.

## Training

[Training of open source developers](Contribution-Training) within the organisation is an important step:
 
  - Do developers understand the rules?  
  - Can you be explicit about what is and isn't included in a commit?  **For example:**  _non-code contributions_ such as test data might be outside the policy.  It's easier to have a blanket policy that this isn't allowed, since it could be hard to tell the difference between fake and real data.  Test data therefore needs to be generated by the tests as they run instead.
 - A [governance process](Contribution-Compliance) needs to be in place for supervising contributions and observing what leaves the organisation.

**See:** Main article on [Training for Contribution](Contribution-Training).
