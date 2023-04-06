---
title: Compliant Open Source Consumption
tags: 
  - Placeholder
  - Level 2 (OSMM)
  - Risk-Compliance (Role)
  - Legal Risk
sidebar_position: 6
sidebar_label: Compliance
---

Using open source within regulated organisations must be done in accordance with the policies and procedures in place to control risks and adhere to regulation.  In this article we will look at:

- The three lines of defence model
- The purpose of the compliance department
- Understanding the risk and control framework within regulated organisations
- Which policies and laws affect open source consumption
- How the open source consumption policy works in a typical regulated organisation

### Three Lines of Defence (3LOD) Model

The three lines of defence is a risk management model commonly used in the banking industry to establish an effective and efficient risk management framework. The three lines are:

- **1st Line: Risk Owners.** This line of defence consists of the business units or front-line operations responsible for managing risks on a day-to-day basis. This includes the employees who execute operational tasks and processes, such as loan officers or traders. 

- **2nd Line: Oversight** This line of defence consists of risk management functions that are responsible for providing oversight and guidance to the first line of defence. This includes the risk management and compliance functions. The second line of defence monitors the effectiveness of the first line's risk management activities and provides guidance and support as needed. This includes periodic reviews, audits, or use of automated tools to monitor risk and control activities. 

- **3rd Line: Independent Assurance:** This includes internal auditors.  The third line of defence provides independent assurance on the effectiveness of the overall risk management framework and ensures that any deficiencies or gaps are addressed. This includes periodic audits, required disclosures and annual financial reporting. 

- **External auditors/regulators:**  External auditors can play an important role through their considerations of the governance and control structure where this is relevant to financial reporting.  For regulated entities,  governance and risk management requirements (see below for examples) are often set by regulators.

Further Reading:

 - [Three Lines of Defence Model Explained](https://managingrisktogether.orx.org/insights-resources/three-lines-defence-3lod-model-explained)
 - [Updated 3 Lines of Defence Model](https://www.bdo.co.uk/en-gb/insights/advisory/risk-and-advisory-services/the-three-lines-of-defence-model-has-been-updated-what-does-this-mean-for-heads-of-internal) 
 
## The Compliance Function

The compliance department in a bank is responsible for ensuring that the bank operates in compliance with laws and regulations. This includes developing and implementing policies and procedures to manage compliance risks, conducting risk assessments, providing training and education to employees, monitoring the bank's compliance with laws and regulations, and reporting any non-compliance to senior management and the board of directors. 

The compliance department plays a critical role in maintaining the bank's [reputation](../../Risks/Reputational-Risk) and avoiding financial and [legal](../../Risks/Legal-Risk) penalties that may result from non-compliance.

## Risk And Control:  A Case-Study

All organisations should have some way of controlling for risks.  However, in regulated industries this framework is a significant part of the whole organisation, with multiple departments (e.g. Risk, Compliance, Internal Audit) participating in control processes.

![Risk and Control Framework](/img/bok/risk-and-control.png)

The above diagram breaks down the process of risk and control.   In 2021, the [Log4Shell](https://en.wikipedia.org/wiki/Log4Shell) incident occurred which forced many organisations to re-assess their stance towards open source consumption.  Let's apply the above model to the response to [Log4Shell](https://en.wikipedia.org/wiki/Log4Shell), a recent security vulnerability, to see how organisations respond to new risks and incorporate them into their processes.  

1.  **Identify**:

The Log4Shell vulnerability was reported in November 2021 and received significant media attention:

> Log4Shell ([CVE-2021-44228](https://www.cvedetails.com/cve/CVE-2021-44228)) was a zero-day vulnerability in [Log4j](https://logging.apache.org/log4j/2.x/), a popular Java logging framework, involving arbitrary code execution. The vulnerability had existed unnoticed since 2013 and was privately disclosed to the Apache Software Foundation, of which Log4j is a project, by Chen Zhaojun of Alibaba Cloud's security team on 24 November 2021. - [Log4Shell, _Wikipedia_](https://en.wikipedia.org/wiki/Log4Shell)

2.  **Assess**:

[CVE-2021-44228](https://www.cvedetails.com/cve/CVE-2021-44228) assigned the [CVSS score](https://en.wikipedia.org/wiki/Common_Vulnerability_Scoring_System) (10) which meant that the issue was widespread, easy to exploit and could have severe consequences.  For some organisations (including governments) the attention around this vulnerability led to a realisation that open source supply chains were a new type of risk that would need closer attention.  

From a compliance perspective, this vulnerability posed a significant [Data Leakage Risk](../../Risks/Data-Leakage-Risk), which potentially violates [several laws](../../Risks/Data-Leakage-Risk#personal-information). 

3.  **Response**:

 - For firms, an immediate effort was required to patch all Java systems using affected versions of Log4j that were facing the public internet. 
 - For unprepared organisations, a new focus on [open source Supply Chain Security](Supply-Chain-Security).
  
4.  **Control**:

An good template for software consumption controls is the [NIST Cybersecurity Framework (NIST CSF)](https://en.wikipedia.org/wiki/NIST_Cybersecurity_Framework):

> NIST Cybersecurity Framework is a set of guidelines for mitigating organizational cybersecurity risks, published by the US [National Institute of Standards and Technology (NIST)](https://en.wikipedia.org/wiki/National_Institute_of_Standards_and_Technology) based on existing standards, guidelines, and practices. The framework "provides a high level taxonomy of cybersecurity outcomes and a methodology to assess and manage those outcomes" - [NIST Cybersecurity Framework, _Wikipedia_](https://en.wikipedia.org/wiki/NIST_Cybersecurity_Framework)

A firm would need to adopt a model like this into its security organisation which would codify how to deal with situations like Log4Shell:

 - _Identifying affected software_: Rather than having to check every system to see if it is vulnerable, a [Software Inventory](Software-Inventory) would have given exact details of which systems were affected.  See also [SBOMs](../../Artifacts/SBOM).
 
 - _Detection processes_: Could be used to determine whether attacks are taking place.
 
 - _Response_: the organisation would have a process in place for dealing with the vulnerability (applying patches, communicating with stakeholders, implementing workarounds etc.)
 
New Controls will be described within **Policy Documents** that the compliance department will help to write.  Setting up controls like these might involve significant **training** of staff.

5.  **Monitor**:

**Evidencing** refers to the process of collecting, maintaining, and presenting documentation, records, or other forms of proof that demonstrate an organization's adherence to applicable laws, regulations, and industry standards. 

Evidencing is a crucial aspect of compliance management, as it enables organizations to show that they are fulfilling their compliance obligations, both internally and externally.

Within the Log4Shell case study, the internal auditors might require a quarterly report detailing who is dealing with vulnerabilities, evidence of identification, assessment and control.  Can the security function demonstrate that they have managed the risk effectively?

6.  **Governance**:

The board, external auditors and regulators will want to know that the firm is complying with its duty to the shareholders, financial standards and laws respectively.  

7.  **Feedback / Continuous Improvement**

As the [Data Leakage](../../Risks/Data-Leakage-Risk) article shows, there are significant existing laws around data leakage which would cover the situation where the Log4Shell vulnerability was exploited and data was leaked.  

Nevertheless, as a result of Log4Shell, governments are writing drafting new laws around cybersecurity.  As these become law, they will re-enter the risk-and-control framework and organisations will need to update their controls and policies accordingly.

## Intersection with Open Source Consumption

The case study above shows how the realisation of a new threat (Log4Shell) can lead to the creation of new policy within an organisation to manage the risk.  

There are several banking compliance policies that intersect with the use of software generally within an organization, which apply equally to open source software:

#### Data Leakage Risk

- [Laws around data leakage of personal information](../../Risks/Data-Leakage-Risk).

#### Legal Risks

- [Accountancy regulations](../../Risks/Legal-Risk#accountancy-regulations).
- [Laws around electronic communication in financial markets](../../Risks/Legal-Risk#communication-policies).
- [Cross-border obligations](../../Risks/Legal-Risk#cross-border-obligations-and-sanctions).
- [Anti-Money Laundering (AML)](../../Risks/Legal-Risk#anti-money-laundering).
- [Intellectual Property and Licensing Policies](../../Risks/Legal-Risk#intellectual-property-and-licensing-policies).
- [Sanctions](../../Risks/Legal-Risk#sanctions).
- [Counter-Terrorism Laws](../../Risks/Legal-Risk#counter-terrorism).

#### Operational Risk

- [Operational Risk](../../Risks/Operational-Risk)

#### Dependency Risk

- [Dependency Risk](../../Risks/Dependency-Risk)

#### Reputational Risk

- [Reputational Risk](../../Risks/Reputational-Risk)

## Consumption Policy

The consumption policy for open source will usually be arranged around _meeting controls for the above risks_. 

#### Approval Process for Using A New Open Source Library

Looking at the data implications, licensing requirements and security implications of the library.  Usually, once approved, the library will be usable by others.  This will require review from [Legal](../../Roles/Legal), [CIO](../../Roles/CIO), [CISO/Security](../../Roles/CISO) teams.   

Consideration might be given to the venue where the software is running.  _Internal Cloud_ will have different licensing requirements to _external cloud_.  _Hybrid cloud_ environments might require stricter rules around data security.

#### CI/CD Pipelines

The security team may mandate the use of certain checks within the CI/CD pipeline for checking for vulnerabilities. tbd


See Also:

 - [Creating Policy](Creating-Policy)
 - [FINOS Reference FOSS Policy](../../Artifacts/Reference-FOSS-Policy)
 - [Policy (Artifact)](../../Artifacts/Policy)

## Further Reading

- [Compliant Financial Infrastructure](https://github.com/finos/compliant-financial-infrastructure).  A project that exists to accelerate the development, deployment and adoption of services provided for infrastructure in a way that meets common regulatory and internal security controls.
- [SBOMs](../../Artifacts/SBOMs). _Software Bill of Materials_. 



