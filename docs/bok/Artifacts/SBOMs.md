---
title: Software Bill of Materials (SBOM)
tags: 
  - OSPO (Role)
  - Developer (Role)
sidebar_label: SBOM
---

An SBOM, or Software Bill of Materials, is a list of all the components, libraries, and dependencies used in a software project, along with their associated version numbers and license information. There are two different SBOM formats:

1. SPDX (Software Package Data Exchange): SPDX is an open standard for exchanging information about software packages and their licensing information created by the [Linux Foundation](https://spdx.dev/about/). It provides a machine-readable format for SBOMs and is widely supported by the open source community. SPDX is an [ISO-standard format](https://www.iso.org/standard/81870.html), [also here](https://spdx.dev/spdx-specification-is-now-an-iso-standard/).

2. CycloneDX: CycloneDX is an open standard for creating SBOMs that is focused on security-sensitive industries such as automotive, aerospace, and medical devices. It is optimized for use with open source components and provides a compact, XML-based format for SBOMs. Advantages of CycloneDX include its focus on security, which makes it a good choice for projects that need to ensure the security of their dependencies.

SBOMs are typically produced as an artifact from the activity of [Software Composition Analysis](../Activities/Level-2/Supply-Chain-Security#Software-Composition-Analysis)

## SPDX

### Formats

There are some examples of SPDX SBOM files here: <https://github.com/spdx/spdx-examples>.

SPDX SBOMs can be created for various different programming languages and the SPDX can be produced in various different data formats, such as YAML, JSON, XML, RDF, Excel Spreadsheet or flat text files, all of which are both human- and machine-readable.   The same repository contains examples in various different output formats.

### Contents

SPDX is defined here: <https://spdx.dev/specifications/>

The SPDX file is composed of several sections, described [here](https://www.csoonline.com/article/3668530/sbom-formats-spdx-and-cyclonedx-compared.html):

1. **Document creation information** is used for forward and backward compatibility when working with processing tools. This is a required header, which contains the details of the license of the SPDX file itself, version, a unique identifier and information about who created it and when.
2. **Package information** is used to describe different entities, such as products, containers and components and can be used to group related items that share context. A package can be any unit of content that can be associated with a distribution of software, such as a Java library (JAR file).
3. **File information** includes file metadata such as names, checksum licenses and copyright information.
4. **Snippets** are optional and are primarily used when data has been derived from a different original source or tied to another license.
5. SPDX also supports **relationships** for documents, packages, and files.
6. **Annotations** allow a reviewer to include information from their review activities in an SPDX document. 

### An Example: App-BOM-Ination

Java libraries are distributed as files with the .jar suffix.  This file <https://github.com/spdx/spdx-examples/blob/master/example9/spdx/appbomination.spdx.json> contains an example SPDX definition for a Java Library called "App-BOM-ination":

* The start of the file contains the document creation information.  From this, I can determine that the SPDX was created by Gary O'Neall, and has a license of "CC0-1.0", which corresponds to the "[Creative Commons Zero v1.0 Universal](https://spdx.org/licenses/CC0-1.0.html)" License.
* The SPDX defines many packages, but the main one has an id of "SPDXRef-1" and is named "App-BOM-ination".  It has a downloadLocation pointing to a URL on GitHub, a description and a SHA1 checksum.  It's license ID is "Apache 2.0", which corresponds to the "[Apache License 2.0](https://spdx.org/licenses/Apache-2.0.html)" License.
* I can see that it also includes several _files,_ such as a "README.md", "settings.gradle" and a java source file called "InsufficientKarmaException.java".
* I can also see that it relies on several other Java packages which are _dependencies_. That is, the main library will pull in other required libraries when it runs.  These include "commons-lang3-3.4.jar" - a common Apache library, also licensed under "Apache-2.0" license.
* Further, the project also has _test dependencies:_ that is, libraries it requires when the CI/CD pipeline's suite of automated tests is run.  For example junit-4.12.jar, which is provided under the "EPL-1.0" license, which corresponds to "[Eclipse Public License 1.0](https://spdx.org/licenses/EPL-1.0.html)".  Test dependencies are important since when "App-BOM-ination" is built in your organisation, this external code will be in use and therefore represents a potential threat vector.

## Training Materials

<BokTagList tag="SBOMs (Artifacts)" filter="Training" />

