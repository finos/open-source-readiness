---
title: Software Inventory
tags: 
  - CIO (Role)
  - CTO (Role)
  - Developer (Role)
  - Level 2 (OSMM)
  - Placeholder
  - Codebase Risk
  - Dependency Risk
  - CVE (Artifact)
  - Repository (Artifact)
sidebar_position: 1
list_image: /img/bok/page-types/activity.png
---

Software inventory is a precondition to most of the activities involved in OSMM level 2.  The first step to licence compliance or supply chain security is _to understand what software is in your estate_.

> "Any open source dependency should have the same kind of scrutiny as in-house code, from a security standpoint." - GitHub OSPO.

## Conceptual Model:  Pipeline

Before we do this, let's first lay out a simple conceptual model for _how software gets to production_ which will allow us to identify the venues for performing a software inventory.

![Build Release Pipeline](/img/bok/build-release-pipeline.png)

The above diagram shows an idealized pipeline of how software can get to production.   Circles represent _processes_ whilst squares represent _destinations_ where software can rest or be held in some form before being pushed right to the next stage.

## Shift Left vs Shift Right

Potentially, a software inventory could be performed at any stage on this pipeline, however:

- The most important inventory to get correct is at the _right hand side_ since this is the software you are actually using.
- By [shifting left](https://www.dynatrace.com/news/blog/what-is-shift-left-and-what-is-shift-right/) with inventory you can discover problems sooner and potentially reduce costs.

It's not necessarily the case that you should pick a single place for inventory management.  This is an _idealized pipeline_ and there are plenty of ways the theory gets broken:

1.  For projects being actively developed, the code on the left of the pipeline will be in an advanced version to the code on the right.
2.  Builds often fail (or in new projects, won't have been set up), meaning the code in the source control will be a later version to that in the artifact repository. 
3.  Legacy builds might not place code into the Artifact Repository - they might deploy straight into testing/production environments.
4.  3rd party proprietary code might not have source available, or might not be in the Artifact Repository at all. 
5.  The deploy processes that move code between different environments might introduce differences in the code in UAT vs Production.
6.  Sometimes servers are [Monkey Patched](https://en.wikipedia.org/wiki/Monkey_patch) with new code in emergencies, skipping all the intermediate steps on the pipeline to put software into production.
7.  Compiled vs Source code licenses could be different.  For example, Microsoft's [VSCode](https://code.visualstudio.com) licenses for [source](https://github.com/microsoft/vscode) and [binaries](https://code.visualstudio.com/license) are different.

An advanced approach to software inventory would be "joined up" across multiple points in the pipeline.

## Hierarchy of Dependencies

It is important to understand that modern software is composed of smaller units (which themselves can be composed of other units and so on).   This means that the inventory of a single _project_ or _executable_ could potentially be a list of hundreds of dependencies.   Recently, this "hierarchy of dependencies" has become known as a ["Software Bill of Materials", or SBOM](../../Artifacts/SBOMs)

## Tools

Let's work from left to right in the pipeline and examine what tools are available to help with each stage.

<BoxOut image="/img/bok/destinations/source-repository.png" title="Source Control"  link="../../Artifacts/Repository#source-repository" linkText="Main Article on Source Repositories">

#### Dependabot

GitHub's OSPO uses [Dependabot](https://github.com/dependabot) to review code in the many organisations and repos within their estate.  It has sufficient understanding of the different build tools for each programming language to analyse the source code and build the Software Bill of Materials in order that it can then perform [Software Composition Analysis](Supply-Chain-Security#software-composition-analysis).

#### FINOS Security Scanning

[FINOS Security Scanning](https://github.com/finos/security-scanning) contains GitHub actions and recipes for best practices around performing CI-based scanning of projects for vulnerabilities and license violations.  It recommends best-of-breed tools such as [AuditJS for NodeJS](https://www.npmjs.com/package/auditjs), [Safety for Python](https://pyup.io/safety/) and [OWASP Dependency Checking](https://github.com/jeremylong/DependencyCheck)

</BoxOut>


<BoxOut image="/img/bok/destinations/artifact-repository.png" title="Artifact Repository" link="../../Artifacts/Repository#artifact-repository" linkText="Main Article on Artifact Repositories">

Here are some tools popular with teams involved in the body of knowledge for inventorying activities:

| Tool                        | Key Features                                                                                                   |
|-----------------------------|----------------------------------------------------------------------------------------------------------------|
| [JFrog Artifactory](https://jfrog.com/artifactory/)                 | Binary repository management, build integration, Xray integration, replication support, access control         |
| [Sonatype Nexus](https://www.sonatype.com/products/nexus-repository)                      | Binary repository management, component intelligence, build integration, role-based access control             |
| [JFrog Xray](https://jfrog.com/solution-sheet/jfrog-xray/)                        | Security vulnerability detection, license compliance, continuous monitoring, integration with Artifactory      |
| [Nexus Lifecycle](https://www.sonatype.com/products/open-source-security-dependency-management)             | Security vulnerability detection, policy enforcement, continuous monitoring, integration with Nexus Repository |
| [Synopsis' BlackDuck](https://www.synopsys.com/software-integrity/security-testing/software-composition-analysis.html)                   | Open source risk management, security vulnerability detection, license compliance, operational risk insights   |
| [Mend](https://mend.io) (formerly WhiteSource) | Open source security and license compliance, continuous monitoring, inventory reports, policy enforcement      |

</BoxOut>

<BoxOut image="/img/bok/destinations/runtime.png" title="Runtime Environments">

Here are some tools marketed as handling runtime software inventory.  We are interested to get feedback on whether these are useful:

| Tool Name   | Key Features |
|:------------|:-------------|
| Tanium      | Tanium provides a unified endpoint management and security platform for IT operations and security teams. Key features include real-time data collection and remediation, flexible endpoint management, vulnerability assessment, threat detection, incident response, and compliance support. |
| AutoCloud.io | AutoCloud.io is a cloud-based configuration management database tool that provides real-time visibility into your IT landscape. It offers automated discovery of your entire IT environment, relationship mapping, risk assessment, change tracking, and integration with IT service management tools. |
| Nexpose (Rapid7) | Nexpose is a vulnerability management tool that provides live monitoring of changes in the environment, adapts to new threats with fresh data, and remediates vulnerabilities faster. Key features include live dashboards and reports, remediation workflows, risk scoring, and integrations with incident response and automation tools. |
| Qualys Cloud Platform | The Qualys Cloud Platform is a cloud-based tool for IT, security, and compliance. Key features include asset discovery, network security, threat protection, web application security, security configuration assessment, and end-of-life tracking for all your global IT assets. |
| Tenable.io | Tenable.io is a vulnerability management tool that provides actionable insight into your security risks. Key features include a unified view of your assets and vulnerabilities, automated network scanning, web application scanning, container security, and integrations with IT operations and DevOps tools. |


</BoxOut>
