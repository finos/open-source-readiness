---
title: CLAs And DCOs
tags: 
  - Developer (Role)
  - OSPO (Role)
  - Legal (Role)
  - Legal Risk
sidebar_position: 2
---

This article explains the concept of the **Contributor License Agreement (CLA)** and **Developer Certificate of Origin (DCO)** and the practical implications of these for organisations consuming and contributing to open source.

It first explores why these are necessary as a means of transferring _rights_ to a software project before examining in detail the different types of CLA, the problems of CLAs and the rationale behind the newer DCO.

## Understanding Copyright

The article on [Licenses](Licenses) explains _copyright_ in the following way:

> By default, in many jurisdictions (e.g. the US) the author of software holds the _copyright_ to it, granting them exclusive rights to the work. [Wikipedia](https://en.wikipedia.org/wiki/Copyright)

![CLA and DCO vs Licenses](/img/bok/cla-dco.png)

Open source software is often the result of the combined efforts of many contributors who each have copyright over their own contributions.  The CLA / DCO works in a similar way to a software license in order to grant rights from the copyright holder to another entity:

- A [software license](Licenses) is issued by the **maintainer** of some software, granting an **end user** some rights over a piece of software (such as allowing them to use it).

- Similarly, the CLA or DCO is issued by the **contributor** of some code, granting the **maintainer** the right to license the contribution as part of the main project.

> The purpose of a CLA is to ensure that the guardian of a project's outputs has the necessary ownership or grants of rights over all contributions to allow them to distribute under the chosen license, often by granting an irrevocable license to allow the project maintainer to use the contribution - [Contributor License Agreement, _Wikipedia_](https://en.wikipedia.org/wiki/Contributor_License_Agreement)

## CLA Rationale

CLAs were introduced as a way to manage the legal issues that arise when software projects accept contributions from external contributors.

Before the widespread use of CLAs, contributors often granted _implicit_ copyright licenses to project maintainers when they submitted their code. This created uncertainty about the ownership and licensing of the code, and made it difficult to incorporate contributions into the project.

By using a CLA, project maintainers can establish clear rules about how contributions will be licensed and can ensure that they have the necessary permissions to use and distribute the code. This can help prevent legal disputes and make it easier for projects to grow and evolve over time.   For example, after signing the [Apache CLA](https://www.apache.org/licenses/icla.pdf) for a project with a matching [Apache License](https://www.apache.org/licenses/LICENSE-2.0) the contributor agrees:

> Unless [the maintainers] explicitly state otherwise, any Contribution intentionally submitted for inclusion in the Work by [the maintainers] to the Licensor shall be under the terms and conditions of this License, without any additional terms or conditions. - [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0) 

Additionally, CLAs can also provide some legal protection to project maintainers by requiring contributors to certify that their contributions do not infringe on anyone else's intellectual property rights. This can help shield the project from liability if a contributor's code turns out to be infringing.  For example, the CLA might have a clause saying: 

> You represent that each of Your Contributions is Your original creation ... include[ing] complete details of any third-party license or other restriction ... of which you are personally aware - [Apache CLA](https://www.apache.org/licenses/icla.pdf)

## Popular CLA Management Tools

Many open source projects on [GitHub](https://github.com) have built-in workflows to enforce CLA signing for new contributors, often using one of the following tools:

- [CLA assistant](https://cla-assistant.io): CLA assistant is a tool that helps organizations automate their CLA signing process. It integrates with GitHub and other code hosting platforms.

- [EasyCLA](https://easycla.lfx.linuxfoundation.org): EasyCLA is a tool developed by the Linux Foundation. It provides a web-based interface for managing CLAs and allows contributors to sign the CLA electronically.

- [Gerrit](https://www.gerritcodereview.com): Gerrit is a popular code review tool that also includes CLA management features. 

## Two Types of CLA


<BoxOut title="Copyright In Corporate Environments" image="/img/bok/roles/developer.png" >

In general, when developers create software or other original works as part of their job duties, _in many jurisdictions_ the copyright ownership typically belongs to the employer rather than the individual developer. 

This means that it is the _employer_ that has the right to use, modify, distribute, and profit from the work, not the developer. 

**Note:** this is not true in every jurisdiction.

</BoxOut>

- Where a contribution is coming from an _individual_ (such as a hobbyist developer) the CLA is considered as an _Individual_ Contributor License Agreement (ICLA).  In this case, the _individual_ owns the copyright to their contribution and is able to sign the ICLA.

- Where a contribution is made from a corporation (such as a developer working within a financial institution) a _Corporate_ Contributor License Agreement (CCLA) is often required.  In this case, the copyright is owned by the _corporation_ and the entity must assign a **CLA Manager** to sign off CCLAs on behalf of the corporation.  The CLA Manager will need to maintain the list (a "Schedule A") of all the employees in the organisation covered by CCLAs, likely on a per-project basis.

## Issues For CLAs

1.  Depending on the wording of the CLA and the license, the CLA usually may grant the project irrevocable copyright to use the contribution.  This has caused controversy with open source projects in the past:

> When a CLA requires a contributor to assign unrestricted republishing rights to the project, contributed code can be relicensed at the discretion of the project, even when the CLA does not assign copyright to the project. Prominent open source advocates regard CLAs as dangerous to open source rights ... In 2019 MongoDB used these rights granted by its CLA to achieve a move to a non-open-source license.  [Contributor License Agreement, _Wikipedia_](https://en.wikipedia.org/wiki/Contributor_License_Agreement#Relicensing_controversy)  

2.  Individuals may make contributions on behalf of their corporate employers or on their own behalf.  It might not be clear which.   Some organisations deal with this issue by asking their employees to have separate GitHub accounts for their different activities.

3.  Since individuals join and leave organisations, it becomes necessary for either the project or the CLA tool to keep track of who is or isn't under a CLA at the time of contributing.  For example, if an individual makes a _corporate_ contribution (with signed CCLA) one day, then leaves the organisation and makes an _individual_ contribution the next day, the CCLA will no longer be in force for this contribution and technically the individual may be able to assert copyright over the latter contribution.  It is therefore important that the CLA Manager is kept up-to-date with employees leaving the organisation.  For this reason, many organisations (such as [Apache Software Foundation](https://www.apache.org)) demand an ICLA for every contributor.  As far as Apache are concerned, the CCLA is for the contributor's own protection.  This may mean contributors have to process both an ICLA and CCLA:

> The CCLA is a backup document that the committer/ICLA signer may use to eliminate all of the ambiguity between conflicting laws, contracts, policies and job assignments. We've never required it. Many committers are confident of their individual representations under the ICLA, many other committers find it reassuring that their company has backed up their own ICLA with this umbrella document.  It is the ICLA signatory's call if it is required, but it isn't exactly an easy call for many committers employed in the IT/Software industry. [Apache CLA FAQ](https://www.apache.org/licenses/cla-faq.html)

4.  Because CCLAs are a legal document, the organisation's legal team will likely need to be involved in the sign off process.  As the terms in each CCLA might be different, this might place a burden on the legal team where multiple projects are involved.

## Developer Certificate of Origin

Developer Certificate of Origin (DCO) was invented as a way to give credit and ownership to developers for their contributions to open source projects while also clarifying the intellectual property rights and licensing of those contributions.

The DCO was created by [the Linux Foundation](https://linuxfoundation.org), as a way to ensure that all contributions to the Linux kernel were properly licensed and that there was a clear record of who had contributed to the project. The DCO requires developers to [sign off each of their commits](https://developercertificate.org), indicating that they have the right to contribute the code and that they are licensing their contribution under the project's chosen open source license.

## DCO Tooling

 - [GitHub's DCO App](https://github.com/apps/dco). This app enforces the DCO on Pull Requests. It requires all commit messages to contain the `Signed-off-by` line with an email address that matches the commit author.
 
 - [Git's Sign-off Feature](https://git-scm.com/docs/git-commit#Documentation/git-commit.txt---signoff). Allows developers to sign their commits.
 
## CLA vs DCO

CLAs are typically used by larger projects and organizations that have more complex legal needs, whereas DCO is a simpler and more lightweight alternative to a CLA. 

The main difference between CLA and DCO is the level of legal formality involved:

- CLAs are more formal and legally binding, while DCOs are more informal and rely on the community's trust and good faith. 
- CLAs require contributors to _sign a legal agreement_, which can be a barrier to entry for some contributors. 
- DCOs, on the other hand, require only a simple _sign-off_ line, which is easier for contributors to understand and comply with. 

So, DCOs are "easier", but they are not without risk: if it turns out a developer in fact did not have permission to contribute (or may just didn't understand what they were signing), and then contributed something they should not have, there could be complex and expensive unwinding of the contribution that would need to occur, that could even lead to litigation. 

Organizations using DCO may want to track which of their developers have made contributions via a DCO for compliance and audit reasons.

Ultimately, the choice between a CLA and a DCO depends on the needs of the project and its contributors. 

## Further Reading

- [Should I Use a Developer’s Certificate of Origin or a Contributor Agreement?](https://www.linkedin.com/pulse/should-i-use-developers-certificate-origin-agreement-vershov-downing/)

- [CLA vs DCO - What's The Difference?](https://opensource.com/article/18/3/cla-vs-dco-whats-difference)

- [Developer Certificate of Origin v1.1](https://developercertificate.org)

- [Apache ICLA v2.2](https://www.apache.org/licenses/icla.pdf) - An example of an ICLA.

- [Apache CCLA](https://www.apache.org/licenses/cla-corporate.txt)

- [Shopify's CCLA](https://cla.shopify.com/corporate-cla) - An example of a CCLA.

