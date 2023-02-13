---
id: project-access
title: Working with DLP Limitations to Open Source Access
sidebar_label: DLP and Open Source
---
Companies in financial services and other highly regulated industries often face difficulties accessing and contributing to open source projects. The websites or online services that host these projects may be entirely disallowed by the firm's [Data Loss Prevention](https://en.wikipedia.org/wiki/Data_loss_prevention_software) (DLP) software, which runs counter to consuming and contributing to projects hosted on public websites such as GitHub and GitLab.

## The Problem

Financial institutions run the risk of accidental or deliberate data exfiltration via public websites.  For example, an employee could use [Google Drive](https://drive.google.com) to upload a list of account holders, or leak internal software onto a public archive such as [GitHub](https://github.com) or [DropBox](https://dropbox.com).  Alternatively, secrets such as passwords, keys or other details of internal infrastructure could be accidentally exposed as part of an GitHub commit.

Historically, the way the institutions have dealt with this risk is via a deny list operated at the firewall/proxy level of the network.  This usually means that sites like [Facebook](https://facebook.com) or [Twitter](https://twitter.com) are not visible from the institution's network.

Sometimes, resources are made available in a read-only form.  That is, HTTP POST is disallowed while HTTP GET is allowed.  Obviously, this makes the configuration of the proxy more complex and so it is easier to just have a blanket rule to deny all requests to a particular hostname/ip address.  

Since configuring these rules is hard and the list of websites changes daily, some financial institutions use third-party software/rule-sets to configure their proxies and deny lists.

Sadly, a side-effect of this is that lots of well-meaning open-source contributions will be caught in the net and won't be permitted to leave the organisation.

## Allowing Access / Consumption

Accessing sites like [GitHub](https://github.com) or [StackOverflow](https://stackoverflow.com) makes a material difference to the productivity of developers within an organisation, so it's common for the IT and/or security teams to provide an exception mechanism.   Check to see whether this is possible in your firm and petition for such to be made available if it isn't.  

## Approaches To Allowing Contribution

Allowing staff to contribute to Open-Source projects is a big step and requires a level of trust in employees rather than simply using proxy rules to limit behaviour.   In particular, the institution will likely want to retain DLP checks for outgoing code.

There are a number of different ways this is handled at the moment:

### Internal and External Git Clones

- In this model, developers have an internal version of the external repository.
- They commit and push changes to the internal version.
- A DLP check is made before the changes are syncrhonized with the external version (usually via pull request)
- Changes made to the external repository by the open-source community are pulled back to the internal one.

#### Advantages

- The integrity of the firewall is preserved - developers are not pushing externally on their own.
- It is easy for the OSPO to track which projects are being worked on and contributed to.

#### Disadvantages

- The usual PR / Review process only shows the _latest_ versions of files.  It's possible to include some confidential data in one commit, delete it in a later commit and for the DLP reviewer (and the developers) to not have sight of this as it is reviewed.  Nevertheless, the data is _still_ exfiltrated to the external repository and available on the Internet.
- The process is slowed down by the need to have a DLP review.  The DLP reviewer takes a lot of responsibility and doesn't really see much benefit for their work.  In fact, they are usually slowing down the progress of the project.
- Organising this process involves work to set up scripts and rules to allow incoming and outgoing synchronization (partially ameliorated by tools like GitProxy described below)

#### git-proxy

[git-proxy](https://github.com/finos/git-proxy) is a FINOS project that provides a proxy between software developers in your firm and upstream open source projects. It's a highly extensible proxy that can flex to support the specific compliance policies of your firm. This allows developers to use and contribute to upstream open source projects and IT/security to maintain compliance to DLP and other policies, minimizing overhead for all parties.

### Use Of Personal Machines

- Developers use their personal machines for writing and releasing the open source code _in public_.
- Changes / releases to the open-source software are then brought into the institution to use in the institution's software via the usual open-source channels (e.g. Artifactory)

#### Advantages

- Depending upon the situation, the only solution to the open source access problem may be to use a personal laptop or computer to access the necessary projects. 
- Since the employee's personal laptop doesn't contain firm-confidential information, there should be nearly zero chance of an accidental data-loss event.

#### Disadvantages

- It may be hard to track the productivity of employees working on external projects in this manner.  
- Although it is unlikely that client data is leaked inadvertently, it is possible that _operational specifics_ are exposed in open-source projects this way.  For example, if the institution had a particular process for dealing with a certain business situation and this process was codified in an open-source project, it would essentially be made public.   Tight boundaries around what is industry-public vs. firm-private need to be drawn.
- Coding in this manner might be in voilation of an employee's contract.  Make sure approvals are obtained to avoid this scenario.
- Developers are required to have their own devices (since COVID, this is almost a given)

### Ephemeral Desktops

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

#### Some Example Tools

- Try pressing the `.` key when viewing a GitHub repo.  You'll be taken into an online VS-Code instance where you can edit all of the project's files.  This is a simple example of a GitHub ephemeral environment - they support a more involved paid-model version which might be appropriate for your organisation.
- See also: [GitPod](https://www.gitpod.io) and [CodeAnywhere](https://codeanywhere.com)
- For Java developers, [EclipseChe](https://www.eclipse.org/che/)
- [Microsoft DevBox](https://azure.microsoft.com/en-us/services/dev-box/)

### Internal Fork

- The developers take an existing external open-source project and then clone it internally.
- They make changes and perform releases on their own internal fork.
- This is supported and maintained forever going forward by the staff of the projects depending on it.
- If improvements are made to the external project that are required internally, a big effort is required to re-merge the external codebase.

#### Advantages

- Minimal DLP risk - no software leaves the bank
- Will work with existing firewall rules, so long as developers are able to download the existing source-code.

#### Disadvantages

- Ongoing support and maintenance effort.
- Often, the same projects will be forked in this manner in different parts of the organisation.  This will lead to the organisation owning and supporting the same codebase multiple times over.
- Merging changes from the external repo is likely to be nearly impossible in most cases.
- Security vulnerabilities will mount up:  these are likely to be fixed on the external, open-source version of the code but hang around unfixed on the internal versions.

## Enabling Contribution

The OSPO is likely to need to work with the institution's networking and security teams to allow contributions back to Open-Source repositories in most of these cases.  When applying for an exception to proxy rules in order to access open source projects, it's helpful to have the following information readily available:

* List of projects to which you need access and direct links to each
* The type of access needed for each (download, read-only, read-write if you need to contribute back)
    * If you'd like to contribute back to one or more projects, concrete examples of the sort of contributions you'd make can be very helpful
* Links to the security policies for each project or the service that hosts it
* Links to the licenses for each project
* Duration of the access exception (one-time? specific duration? ongoing?)
* Benefits of access for the firm (how will it allow you to perform your job?)

Depending upon the needs of you and your team, it may be possible to acquire a blanket exception (for instance, for all of GitHub or GitLab), or have a per-employee exception policy for approved staff.

Check with your IT and security teams to see whether this makes more sense than a continual series of one-off exception applications.

## Correct attribution after acquiring an exception

_Make your employees commit code using their work email address_

Once you've acquired approval to access upstream open source projects and IT has processed the exception, you still need to ensure that all work performed upstream has appropriate attribution.

As work you're performing on behalf of the firm, these open source contributions are the intellectual property of the firm. To aid in tracking that work and intellectual property, these contributions should be made using your work email address.

Most open source source code forges such as GitHub and GitLab allow users to set up multiple email addresses for use on a single account (for example, [here's the GitHub documentation for setting that up](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/adding-an-email-address-to-your-github-account)). You can then select which email address to associate with your git commits on each contribution. Alternatively, you can [set up your git config on your work computer](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address#setting-your-commit-email-address-in-git) to use your work email address for all commits you make on that device.