---
title: Information Classification
tags:
  - Developer (Role)
  - OSPO (Role)
  - Legal (Role)
  - CIO/CTO (Role)
  - Contribution
  - Policy
sidebar_position: 4
sidebar_label: Information Classification
list_image: /img/bok/page-types/artifact.png
---

Information classification is the process of assigning a label to information based on how sensitive it is and what controls are needed to handle it safely. In practice, the classification determines who may access the information, where it may be stored, and whether it may be shared outside the organisation.

## How Information Classification Works

Most organisations apply a simple process:

1. **Identify the information** being handled, such as source code, design documents, test data, model outputs, credentials, or customer information.
2. **Assess the risk** of disclosure, modification, or loss, including legal, regulatory, contractual, and intellectual property concerns.
3. **Assign a classification** such as **public**, **internal**, **confidential**, or **restricted**.
4. **Apply handling rules** for each classification, such as approval requirements, storage controls, access controls, encryption, and permitted sharing channels.
5. **Review the classification** when the information changes or is prepared for publication.

The names of the classifications vary between firms, but the pattern is usually the same: the more sensitive the information, the more restrictive the controls.

## Why This Matters For Open Source

Open source contribution is a publication activity. Before code, documentation, or related material is pushed to a public repository, the organisation should confirm that the material is allowed to be treated as **public**.

That review often includes checking that the contribution does not contain:

- customer or employee data;
- secrets, credentials, or internal configuration;
- confidential business logic or unpublished product plans;
- material that should first be reviewed for [Intellectual Property](IP), such as patentable inventions or third-party content.

If a contribution includes non-public information, it should be remediated or withheld from publication.

## Typical Classification Levels

Common examples include:

- **Public**: may be shared externally without restriction.
- **Internal**: intended for staff or approved contractors only.
- **Confidential**: limited to a defined group with a business need to know.
- **Restricted / Secret**: highly sensitive information requiring the strongest controls.

The important point is not the exact label names, but that the organisation documents what each label means and what staff are allowed to do with information in that category.

## Practical Guidance

For open source programs, information classification should be reflected in:

- contributor training;
- publication and code review workflows;
- DLP and repository controls;
- approval paths for exceptional cases.

This is especially important where developers work with a mixture of public source code, internal tooling, confidential documentation, and regulated data.

## Further Reading

- [ISO/IEC 27001](https://www.iso.org/standard/27001) - international standard for information security management systems.
- [ISO/IEC 27002](https://www.iso.org/standard/75652.html) - guidance on information security controls, including classification and handling.
- [Intellectual Property](IP)
- [Data Loss Prevention Software](DLP-Software)
