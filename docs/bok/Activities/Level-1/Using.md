---
title: Using Open Source Software
tags: 
  - Developer (Role)
  - Data Leakage Risk
  - Codebase Risk
  - Placeholder
  - License (Artifact)
  - Level 1 (OSMM)
  - Consuming (Activity)
  - Repository (Artifact)
image: /img/bok/page-types/activity.png
sidebar_position: 0
---

Using open source software within a financial services organisation can be problematic.  This article outlines some of the pitfalls in getting started.

## Making the Argument Over Proprietary Software

An organisation may have some fixed ideas about what is useful for developers to use.  For example, a firm might be "A Microsoft shop", where they have paid for an expensive licence for the Micrsoft product suite and therefore expect everyone to use Visual Basic, C#, PowerBuilder etc.  Although these are powerful tools, are well-supported and have a third party supervising their integrity against vulnerabilities, a single firm can't compete with the extraordinary diversity of the entire open source ecosystem.

 - The first barrier to open source might be in convincing the organisation's tech team that there is a need for using open source software over and above what has been provided.

 - In order to do this, you might need to assemble a group of like-minded individuals who _also_ need to use open source.  
 
 - "Famous" open source tools like Python or R might be a convincing use-case.

 - You want to avoid creating a headache for an infrastructure team.  Make sure they don't get the burden of extra support as a result.
 
 - Sometimes, the argument for proprietary software is about "support".  But, is support that important?  It can be argued that it's better to have a large _ecosystem_ rather than support (e.g. Java, Python, fungibility of developers/experts).
 
 - Finally, an argument against commercial software (and especially a single vendor) is that it creates a monopoly.  [Commercial software licenses can change, often for the worse](https://www.supportrevolution.com/oracle-support-price-rises/).
 
## Opening the Firewall

Often it is impossible to download software from the Internet when working at a regulated firm.  Either, download sites are blocked or particular types of traffic are restricted.  This is to protect internal systems against malware or trojan-style attacks.  However, it is another barrier to consuming open source.  There are two approaches to solving this:

1. You can try to get dispensation to access certain public repositories where open source software is held (e.g [npmjs.com](https://www.npmjs.com/) or [Maven Central](https://central.sonatype.com/)).   However, your firm might rightly point out that this is a potential malware vector.   This might be acceptable if your software is running only on your own PC and not entering "production" (i.e. more sensitive parts of the bank's network, or being made available on the internet).

2. You can get the infrastructure team to run an [Artifact Repository](../../Artifacts/Repositories#artifact-repository) from which open source software can be downloaded.  This is the recommended approach as it sets you on the right path for tackling [License Compliance](../Level-2/License-Management) and [Software Inventory](../Level-2/Software-Inventory) later in your open source journey.

## Accessing GitHub / GitLab

In order to prevent [Data Leakage](../../Risks/Data-Leakage-Risk) many "social media" websites (or sites generally that support uploading of data) are blocked.  However, this often prevents access from within the firm to sites like [GitHub](https://github.com) and [GitLab](https://gitlab.com).

Often, the instructions for _using_ open source software is on these sites, whether in the form of a README file or in the answers to issues raised and solved on the open source projects.   Further, for some projects in compiled languages, this will be the only place where you can view the source code of the projects.  If you have an issue using open source, _viewing the source code_ can sometimes be a helpful way to solve it. 

So, without access to the project's open source home page, your effectiveness is limited.  There are two potential approaches here:

1.  You can petition for an exception for access to one of these sites.  This is typically allowed by many financial services so long as there is good reason and approval is given.

2.  You can _view_ the site using your own hardware (e.g. mobile phone).  However, this is much less effective and you need to be careful to abide by firm rules.  

## Choosing Open Source Components

Choosing good open source dependencies is crucial for the success and security of your projects. As well the considerations mentioned so far here are some further hints to help you make informed decisions:

* **Popularity and Community Support: **Look for open source dependencies with a large and active community.  Consider also the pedigree of the developers and foundation (if any) that the software originates from.
* **Documentation and Code Quality:** Ensure that the chosen dependency has clear and comprehensive documentation. 
* **Security and Vulnerability Management: **Consider the security track record of the dependency. Look for any reported security vulnerabilities and assess the project's response time in fixing them. 
* **Type of License: **it’s worth considering the specific license clauses beyond whether or not it is allowed by your firm and whether this fits the specific needs of your project.  
* **Available Versions: **are up-to-date versions of the dependency available in your approved repository for you to use?  
* **Contribution Potential: **consider whether the project is one that your firm is currently contributing to.  If you think contributions may be necessary to make the most of this dependency, you should raise this ahead of time with your OSPO or line manager.

_(This section taken from [LFD137](../../Training/LFD137-Contribution-In-Finance))_

## Sharing Techniques

If you want to get the most out of open source within your organisation, consider setting up a user group.  There will undoubtedly be many firm-specific issues, restrictions and solutions.  Even if you can find colleagues with the same issues you have, this generates a consensus around solving them.  

## Learning Outside Your Firm

One final point: open source isn't just something you need to do at work.  Have your own open source profile [e.g. on GitHub](https://github.com/robmoffat) and develop in personal repositories.  Experiment with open source [contribution](../Level-3/Contribution-Training) outside of work if it isn't allowed internally.

## Training Materials

<BokTagList tag="Consuming (Activity)" filter="Training" />