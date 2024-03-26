---
title: Publication Processes
tags: 
  - Data Leakage Risk
  - OSPO (Role)
  - Level 3 (OSMM)
sidebar_position: 6
sidebar_label: Publication
list_image: /img/bok/page-types/activity.png
---

This article looks at the best practices around publication (of code) to enable open source contribution.

<BoxOut title="Data Leakage Risk" image="/img/bok/risks/data-leakage-risk.png" image="/img/bok/risks/data-leakage-risk.png"  link="../../Risks/Data-Leakage-Risk" linkText="Data Leakage Risk Details">

This article discusses controls that can be put in place to mitigate [Data Leakage Risks](../../Risks/Data-Leakage-Risk), which are almost certainly required for an effective [Open Source Contribution Policy](Contribution-Compliance).

Financial firms are _technology organisations_. All such organisations need to worry about [Intellectual Property Risk](../../Risks/Data-Leakage-Risk).  IP Leakage can happen anywhere.   Arguably, risks are _greater_ in finance because of the penalties that regulators may apply.

**See:** [DLP Software](../../Artifacts/DLP-Software) for a discussion on the common ways in which regulated firms use DLP _software_, and how this isn't appropriate for open source contributions.

</BoxOut>

## Publishing Code

<BoxOut image="/img/bok/roles/developer.png" link="../../Roles/Developer" title="Publishing the Right Way" linkText="Developer Role Details">

There is a right way and a wrong way to publish code to the Internet from within a regulated firm.  

Specifically, publication must observe the controls that have been set up to guard against accidental leakage of of intellectual property or secrets.  That is, data published to an open source project should be [classified as public](../../Artifacts/IP).

**Warning:** Publishing open source by simply pasting it online or emailing it is likely to result in disciplinary procedure.

</BoxOut>  

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

Risk owners are likely to want to know that the [OSPO](../../Roles/OSPO) has a control around which developers are able to contribute to which projects, and historical evidence to show what has been contributed. 
 
**See:**

 - [GitProxy](https://github.com/finos)
 - [GitHub Enterprise](https://github.com/enterprise)
 - Many firms have internal proprietary solutions to this.
 

#### Advantages

- The integrity of the firewall is preserved - developers are not pushing externally on their own.
- It is easy for the OSPO to track which projects are being worked on and contributed to.

#### Disadvantages

- The usual PR / Review process only shows the _latest_ versions of files.  It's possible to include some confidential data in one commit, delete it in a later commit and for the DLP reviewer (and the developers) to not have sight of this as it is reviewed.  Nevertheless, the data is _still_ exfiltrated to the external repository and available on the Internet.
- The process is slowed down by the need to have a DLP review.  The DLP reviewer takes a lot of responsibility and doesn't really see much benefit for their work.  In fact, they are usually slowing down the progress of the project.
- Organising this process involves work to set up scripts and rules to allow incoming and outgoing synchronization (partially ameliorated by tools like GitProxy described below)
 
### 2. Personal Machines

Contribution from _outside the firewall_ using personal machines might make sense since the user may not be exposed to confidential information on their personal machines.  

This approach could prevent _accidental_ leakage of IP.  However, from a risk perspective this means that the firm has less purview over what is being released publically.

**Note:** In some senses, this is a "default" approach, since some staff working at the firm are almost certainly contributing to open source in this way during their own time.

#### Advantages

- Depending upon the situation, the only solution to the open source access problem may be to use a personal laptop or computer to access the necessary projects. 
- Since the employee's personal laptop doesn't contain firm-confidential information, there should be nearly zero chance of an accidental data-loss event.

#### Disadvantages

- It may be hard to track the productivity of employees working on external projects in this manner.  
- Although it is unlikely that client data is leaked inadvertently, it is possible that _operational specifics_ are exposed in open-source projects this way.  For example, if the institution had a particular process for dealing with a certain business situation and this process was codified in an open-source project, it would essentially be made public.   Tight boundaries around what is industry-public vs. firm-private need to be drawn.
- Coding in this manner might be in voilation of an employee's contract.  Make sure approvals are obtained to avoid this scenario.
- Developers are required to have their own devices (since COVID, this is almost a given)

### 3. Ephemeral Desktops

Like personal machines, but a vm within your desktop that can access _nothing inside the firewall_.  

- Developers work on the firm's hardware as with developing internal software
- However, when working on Open-Source code, they are able to construct an [Ephemeral Environment](https://ephemeralenvironments.io) in a virtual machine.  
- They develop the code in the environment, destroying it again when they are finished.
- Changes to open-source code and releases are made _in public_
- Changes / releases to the open-source software are then brought into the institution to use in the institution's software via the usual open-source channels (e.g. Artifactory)

#### Advantages

- Developers are still working on the institutions' hardware.
- It should be possible for the institutions to control and monitor ephemeral environments.
- Developers don't need to worry about accidental data exfiltration - the ephemeral environment contains no data from the institution itself.
- Often, ephemeral environments can be congfigured with the tools the developer needs, reducing set-up time.

#### Disadvantages

- This is an area undergoing significant evolution right now and therefore tools are in their infancy.
- It is still possible for developers to _deliberately_ exfiltrate data this way.  
- Depending on the tool and the way it interacts with the user's PC, copy-paste accidental exfiltration might also still be possible.

#### Some Example Tools

- Try pressing the `.` key when viewing a GitHub repo.  You'll be taken into an online VS-Code instance where you can edit all of the project's files.  This is a simple example of a GitHub ephemeral environment - they support a more involved paid-model version which might be appropriate for your organisation.
- See also: [GitPod](https://www.gitpod.io) and [CodeAnywhere](https://codeanywhere.com)
- For Java developers, [EclipseChe](https://www.eclipse.org/che/)
- [Microsoft DevBox](https://azure.microsoft.com/en-us/services/dev-box/)
