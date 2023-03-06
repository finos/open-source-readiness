---
title: CLAs And DCOs
tags: 
  - Developer (Role)
  - OSPO (Role)
sidebar_position: 2
---

This article explains the concept of the **Contributor License Agreement (CLA)** and **Developer Certificate of Origin (DCO)** and the practical implications of these for organisations consuming and contributing to open source.

It first explores why these are necessary as a means of transferring _rights_ to a software project before examining in detail the different types of CLA, the problems of CLAs and the rationale behind the newer DCO.

## Understanding Copyright

The article on [Licenses](Licenses) explains _copyright_ in the following way:

> By default, in many jurisdictions (e.g. the US) the author of software holds the _copyright_ to it, granting them exclusive rights to the work. [Wikipedia](https://en.wikipedia.org/wiki/Copyright) describes copyright as follows:

## Contributions to Open Source

![CLA and DCO vs Licenses](/img/bok/cla-dco.png)

Open source software is often the result of the combined efforts of many contributors who each have copyright over their own contributions.  The CLA / DCO works in a similar way to a software license in order to grant rights from the copyright holder to another entity:

- A [software license](Licenses) is issued by the **maintainer** of some software, granting an **end user** some rights over a piece of software (such as allowing them to use it).

- Similarly, the CLA or DCO is issued by the **contributor** of some code, granting the **maintainer** the right to license this code as part of the main software project.

> The purpose of a CLA is to ensure that the guardian of a project's outputs has the necessary ownership or grants of rights over all contributions to allow them to distribute under the chosen license, often by granting an irrevocable license to allow the project maintainer to use the contribution - [Contributor License Agreement, _Wikipedia_](https://en.wikipedia.org/wiki/Contributor_License_Agreement)

## Popular CLA Management Tools

Many open source projects on [GitHub](https://github.com) have built-in workflows to enforce CLA signing for new contributors, often using one of the following tools:

- [CLA assistant](https://cla-assistant.io): CLA assistant is a tool that helps organizations automate their CLA signing process. It integrates with GitHub and other code hosting platforms.

- [EasyCLA](https://easycla.lfx.linuxfoundation.org): EasyCLA is a tool developed by the Linux Foundation. It provides a web-based interface for managing CLAs and allows contributors to sign the CLA electronically.

- [Gerrit](https://www.gerritcodereview.com): Gerrit is a popular code review tool that also includes CLA management features. 

## Two Types of CLA

- Where a contribution is coming from an _individual_ (such as a hobbyist developer) the CLA is considered as an Individual Contributor License Agreement (ICLA).  In this case, the _individual_ owns the copyright to their contribution and is able to sign the ICLA.

- Where a contribution is made from a corporation (such as a developer working within a financial institution) the CLA needed is a Corporate Contributor License Agreement (CCLA).  In this case, the copyright is owned by the _corporation_ and the entity must assign a **CLA Manager** to sign off CCLAs on behalf of the corporation.  The CLA Manager will need to maintain the list of all the employees in the organisation covered by CCLAs, likely on a per-project basis.

### Issues Arising For CCLAs

1.  Since individuals join and leave organisations, it becomes necessary for either the project or the CLA tool to keep track of who is or isn't under a CLA at the time of contributing.  For example, if an individual makes a _corporate_ contribution (with signed CCLA) one day, then leaves the organisation and makes an _individual_ contribution the next day, the CCLA will no longer be in force for this contribution and technically the individual may be able to assert copyright over the latter contribution.  It is therefore important that the CLA Manager is kept up-to-date with employees leaving the organisation.

2.  Individuals may make contributions on behalf of their corporate employers or on their own behalf.  It might not be clear which.   Some organisations deal with this issue by asking their employees to have separate GitHub accounts for their different activities.

3.  Because CCLAs are a legal document, the organisation's legal team will likely need to be involved in the sign off process.  As the terms in each CCLA might be different, this might place a burden on the legal team where multiple projects are involved.

## Developer Certificate of Origin

Developer Certificate of Origin (DCO) was invented as a way to give credit and ownership to developers for their contributions to open source projects while also clarifying the intellectual property rights and licensing of those contributions.

The DCO was created by [the Linux Foundation](https://linuxfoundation.org), as a way to ensure that all contributions to the Linux kernel were properly licensed and that there was a clear record of who had contributed to the project. The DCO requires developers to [sign off each of their commits](https://developercertificate.org), indicating that they have the right to contribute the code and that they are licensing their contribution under the project's chosen open source license.

## DCO Tooling

 - [GitHub's DCO App](https://github.com/apps/dco). This app enforces the DCO on Pull Requests. It requires all commit messages to contain the `Signed-off-by` line with an email address that matches the commit author.
 
 - [Git's Sign-off Feature](https://git-scm.com/docs/git-commit#Documentation/git-commit.txt---signoff). Allows developers to sign their commits.

## Further Reading

- [CLA vs DCO - What's The Difference?](https://opensource.com/article/18/3/cla-vs-dco-whats-difference)

- [Developer Certificate of Origin v1.1](https://developercertificate.org)

