---
title: License Compliance Management
tags: 
  - CIO (Role)
  - Developer (Role)
  - Compliance (Role)
  - Legal (Role)
  - Legal Risk
  - Level 2 (OSMM)
  - License (Artifact)
sidebar_position: 2
sidebar_label: License Management
---

There are several key points that a large enterprise should consider to ensure compliance with open-source license obligations:

1. **License identification**: The first step is to identify the open-source licenses used in your products and understand the terms and conditions associated with each license.
2. **License compatibility**: It is important to ensure that the licenses of the open-source components used in your products are compatible with each other and with your own licenses.
3. **License obligations**: Each open-source license has its own obligations, such as the requirement to distribute source code, include a copyright notice, or provide a copy of the license.
4. **Legal review**: It is important to have a qualified legal professional review the open-source licenses and obligations to ensure compliance.
5. **Employee education**: The enterprise should educate its employees on the importance of compliance with open-source licenses and the obligations associated with each license.

_See Also: [Licenses](../../Artifacts/Licenses) describes what software licenses are._

## 1. License Identification

<BoxOut image="/img/bok/roles/developer.png" link="../../Roles/Developer" title="For Individual Software Projects" linkText="Developer Role Details">
Individual software projects often include direct and transitive dependencies on other pieces of open source software.  There are plenty of tools for cataloguing licenses being used:

1. [Scancode](https://github.com/nexB/scancode-toolkit), recommended here: https://softwarerecs.stackexchange.com/questions/40068/tools-to-scan-code-for-open-source-licenses-and-copyrights

2. [License Checker](https://www.npmjs.com/package/license-checker) which is an NPM module you can use in node projects to list the licenses used by the project.

3. [FINOS' Security Scanning](https://github.com/finos/security-scanning#License-reporting-and-scanning) project provides GitHub Actions which will report licenses on Java (Maven), Node and Python projects via the use of [license-maven-plugin](https://www.mojohaus.org/license-maven-plugin/), [node-license-validator](https://www.npmjs.com/package/node-license-validator) and [pip-licenses](https://pypi.org/project/pip-licenses/) respectively.
	
It is expected that developers would set up these tools to run on the CI/CD pipeline of their projects and generate license reports every time a build is run.
</BoxOut>

<BoxOut image="/img/bok/roles/ospo.png" title="Across an Estate" link="../../Roles/OSPO" linkText="OSPO Role Details">

Where an organisation is running and managing many projects at once, setting up license scanning on a per-project basis isn't really effective.  Part of the problem is that all the tools listed above have their own output formats.  

Instead, you need tools that will scan open source projects wherever they come from and produce a report in a standard format.  This is called a [Software Bill of Materials (SBOM)](../../Artifacts/SBOMs).  There are various tools you can use to identify licenses across an estate of projects such as:

- [OSS Review Toolkit (ORT)](https://github.com/oss-review-toolkit/ort).  An open source Linux Foundation project for automating many parts of open source project review.  
- [FOSSA](https://fossa.com) is an open-source license compliance and vulnerability management platform.
- [Mend](https://www.mend.io) is a security-focused open-source scanning tool that helps developers detect and remediate vulnerabilities in their code using machine learning.
- [Snyk](https://snyk.io) is a cloud-based platform that helps developers and security teams manage open-source dependencies by identifying and fixing vulnerabilities in real-time

</BoxOut>

### License Identifiers

As described in the [License](../../Artifacts/Licenses) article, most open source software is licensed under one of a limited number of common licenses, such as the [Apache 2.0 License](https://apache.org/licenses/LICENSE-2.0), [MIT License](https://mit-license.org) and [BSD License](https://opensource.org/license/bsd-2-clause/).

Each of these de-facto standard licenses has an associated [SPDX Identifier](https://spdx.org/licenses/). For example, the SPDX identifier "Apache-2.0" refers to the [Apache 2.0 License](https://apache.org/licenses/LICENSE-2.0).

## 2. License Compatibility

Determining the compatibility of licenses involves evaluating the terms and conditions of the licenses used in your software to determine whether they are compatible with each other and with your organization's open-source policy.

There are several factors to consider when determining the compatibility of licenses, including:

1. **License conditions:** Some licenses have conditions, such as [copyleft](../../Artifacts/Licenses#3--copyleft-licenses) or patent retaliation clauses, that must be followed in order for the license to be considered compatible.
2. **License compatibility:** Some licenses are designed to be compatible with each other, while others are not. For example, the GPL license is considered to be incompatible with many other licenses, while the Apache license is considered to be more compatible.
3. **Corporate open-source policy:** Your organization may have its own open-source policy that specifies which licenses are acceptable for use in your software.
4. **Legal considerations:** Some licenses may have legal implications for your organization, such as the potential for patent infringement or the requirement to provide source code.

By evaluating these factors, you can determine the compatibility of the licenses used in your software and establish a policy for compatible and incompatible licenses. It's important to seek the advice of a legal expert if you are unsure about the compatibility of a particular license.

## 3. License Obligations

Please review the [License](../../Artifacts/Licenses) article in particular the section on [License Obligations](../../Artifacts/Licenses#license-obligations).

## 4. Legal Review / License Policy

Having established which licenses are used by your organisation and the obligations of those licenses, you need to _categorize_ these licenses to account for when and where (if at all) they should be used.

It's important to document the findings of the legal review, including any recommendations for using or avoiding the software based on its license. This documentation can be used to inform decision-making and to ensure that your organization remains in compliance with open source licenses.

<BoxOut title="Categorizing Licenses" image="/img/bok/roles/legal.png">

Legally reviewing an open source license involves evaluating the terms and conditions of the license to determine its legal implications for your organization. 

Open source licenses may have legal implications for your organization, such as potential liability for patent infringement, the requirement to make source code available, or the potential for intellectual property disputes. During the review process, it's important to consider any legal implications of the license and to seek the advice of a legal expert if necessary.

</BoxOut>

### Context

**Note:** what consitutes an acceptable license depends on the software, the license and the context it is used in.  You might need to set up different categories for use in different places.  For example:

 - Allowed for internal development
 - Allowed for distribution within proprietary products (e.g. public websites)
 - Allowed for internal publication 
 - Allowed for external publication

### FINOS Categories

As an example of the license categorization exercise, the FINOS Foundation creates [3 categories of license](https://community.finos.org/docs/governance/software-projects/license-categories/):

#### **Category A**:  _Public Domain Licenses_

> "Code licensed under the following licenses (and public domain dedications) may be included in Foundation contributions. If the license requires attribution or other notices, these should be included in the project's NOTICE file."

This category contains many of the common permissive open source licenses, such as [MIT](https://opensource.org/license/mit/), [Apache 2.0](https://opensource.org/license/apache-2-0/) and [BSD](https://opensource.org/license/bsd-3-clause/).
 
#### **Category B**: _Allowed, but Restrictive_

> "Third-party code licensed under the following licenses may be included in Foundation projects. However, because these licenses contain certain restrictions on downstream users (such as a reciprocal licensing requirement), a notice must be included in the project's CONTRIBUTING file if the third-party code appears directly in the project's repository."

This category is more nuanced and contains things like [Mozilla Public License](https://opensource.org/license/mpl-2-0/) and [Eclipse Public License](https://opensource.org/license/epl-2-0/).

#### **Category X**: _Excluded_

> "Category X dependencies are excluded either because their licenses would not permit the Foundation project to be licensed under the Apache License, or because they contain other problematic terms. Category X licenses include any proprietary license or EULA, as well as many free and open source software licenses with reciprocal licensing requirements and other restrictions."

This includes [CopyLeft](../../Artifacts/Licenses#3-copyleft-licenses) licenses like [GPL](https://opensource.org/license/gpl-3-0/) and [AGPL](https://opensource.org/license/agpl-v3/).

## 5. Employee Education

Using the correct licenses will form part of License Policy and it will be necessary to ensure developers in your organisation are aware of the limitations around the use of open source.  Although these limitations will vary from firm-to-firm, the Linux Foundation provides several training courses suitable for orienting developers on their responsibilities relating to open source licensing:

<BokTagList tag="License Compliance Management (Activity)" filter="Training" />

## Final Points to Consider

* The enterprise should have a _process_ in place for tracking open-source components, monitoring license changes, and ensuring compliance with all license obligations.  That is, it is important that license management is performed continually:  dependencies can change license, projects can take on new dependencies, risk appetite can change. 
* Cataloguing the usage of third-party open source software should be done as part of [Software Composition Analysis](./Supply-Chain-Security#Software-Composition-Analysis) and so license usage should be considered part of this analysis.

## Further Reading

- **[TLDR Legal](https://www.tldrlegal.com)**:  a web resource that provides plain-English summaries of various software licenses, helping developers and project managers understand the legal terms without having to interpret dense legal language. 

- **[OpenChain License Compliance](../Artifacts/OpenChain-LicenseCompliance)**:  an ISO standard for open source license compliance, developed and hosted by the Linux Foundation. It provides a set of requirements to create effective open source management systems, helping companies to minimize legal risks related to open source software use and improve efficiency and trust in the software supply chain.

- **[Open Source Initiative License Browser](https://opensource.org/licenses)**

- **[Why Open Source License Management Matters (Mend)](https://www.mend.io/resources/blog/why-open-source-license-management-matters/)**. Vendor article on why enterprises should resource license management. Duplicated [here](https://www.linkedin.com/pulse/why-open-source-license-management-matters-mend-io).

- **[The 8 Best Free and Open Source License Management Software](https://www.goodfirms.co/license-management-software/blog/best-free-open-source-license-management-software)**. Opinionated discussion of what to look for in license management tooling.

- **[The Legal Side of Open Source](https://opensource.guide/legal/)**. A very basic introduction on why open source software needs a license.  

- **[Open Source Software: A Legal Guide](https://www.legal.io/articles/5170736/Open-Source-Software-a-legal-guide)**. Documentation aimed at legal teams to explain their responsibilities towards open source.

- **[A Developer's Guide To Open Source Licenses](https://www.toptal.com/open-source/developers-guide-to-open-source-licenses)**.  Delves into the details of what developers need to know about licenses.

- **[FINOS License Categories](https://community.finos.org/docs/governance/Software-Projects/license-categories)**.  How licenses are categorized for the FINOS Foundation.

