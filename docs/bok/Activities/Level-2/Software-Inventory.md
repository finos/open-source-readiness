---
title: Software Inventory
tags: 
  - CIO (Role)
  - CTO (Role)
  - Developer (Role)
  - Level 2 (OSMM)
  - Placeholder
draft: true
sidebar_position: 1
---

Software inventory is a precondition to most of the activities involved in OSMM level 2.  The first step to licence compliance or supply chain security is _to understand what software is in your estate_.

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

It is important to understand that modern software is composed of smaller units (which themselves can be composed of other units and so on).   This means that the inventory of a single _project_ or _executable_ could potentially be a list of hundreds of dependencies.   Recently, this "hierarchy of dependencies" has become known as a ["Software Bill of Materials", or SBOM](../Artifacts/SBOMs)

## Tools

Let's work from left to right in the pipeline and examine what tools are available to help with each stage.

<BoxOut image="/img/bok/destinations/source-repository.png" title="Source Control">

#### Dependabot

GitHub's OSPO uses [Dependabot](https://github.com/dependabot) to review code in the many organisations and repos within their estate.  It has sufficient understanding of the different build tools for each programming language to analyse the source code and build the Software Bill of Materials in order that it can then perform [Software Composition Analysis](Supply-Chain-Security#software-composition-analysis).

</BoxOut>


<BoxOut image="/img/bok/destinations/artifact-repository.png" title="Artifact Repository">

#### Artifactory / Nexus

[Sonatype's Nexus Repository](https://www.sonatype.com/products/nexus-repository) and [JFrog's Artifactory](https://jfrog.com/artifactory/) are universal artifact repository managers that supports multiple package formats and repositories, including Maven, npm, and Docker. 

#### JFrog XRay / Nexus Lifecycle

[JFrog Xray](https://jfrog.com/solution-sheet/jfrog-xray/) and [Sonatype's Nexus Lifecycle](https://www.sonatype.com/products/open-source-security-dependency-management) are tools for software inventory scanning, especially for managing open source software. They scan your repositories to identify all the artifacts and dependencies in your software packages, including open source software. 

They can then identify [security vulnerabilities](Supply-Chain-Security#software-composition-analysis), [license compliance issues](License-Management) and produce [SBOMs](../Artifacts/SBOMs). 

#### Black Duck

#### Mend

</BoxOut>

<BoxOut image="/img/bok/destinations/runtime.png" title="Runtime Environments">

### JFrog Connect

</BoxOut>