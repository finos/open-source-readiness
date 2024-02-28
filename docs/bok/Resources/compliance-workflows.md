---
id: compliance-workflows
title: Open Source Compliance Workflows
sidebar_label: Compliance Workflows
slug: /operations/compliance-workflows
tags:
 - Resources
image: /img/bok/page-types/resource.png
---

Below are some high-level workflows for common open source compliance processes. To provide a point of reference for the various steps, the workflows refer to the functional components of an open source compliance toolchain in the diagram below, produced by the Open Source Tooling group of the OpenChain Project.

<img class="max-width" src="https://oss-compliance-tooling.org/img/OSS-Compliance-Toolchain-Big-Picture.jfif"/>

## Continuous compliance via CI/CD (DRAFT)

1. Developer makes commit to product Source Code Repo
2. Catalog open source dependencies
   1. Identify open source dependencies
      1. Continuous Integration initiates automated build via Build Tools, producing product build artifacts
      2. Package dependencies
         1. Dependency Resolver integrates with Build Tools to generate a list of package dependencies to be retrieved from Artifact Repository (including first-order and transitive, i.e. dependencies of dependencies)
         2. Component Inventory for product is updated to include metadata about all dependencies identified
      3. Source dependencies
         1. License & Copyright Scanner is run on product Source Code Repo and generates list of files with apparent open source license or copyright statements
         2. Component Analysis Service is run on product Source Code Repo and generates list of open source components whose code is used within
         3. Component Inventory for product is updated to include metadata about all dependencies identified
      4. Container dependencies
         1. Container Content Resolver is run on any container images among product build artifacts to generate bill of materials for packages within
         2. Component Inventory for product is updated to include metadata about all dependencies identified
      5. Binary dependencies
         1. Binary Analyser is run to inspect any binary artifacts among product build artifacts and scan for open source artifacts within (potentially in conjunction with License & Copyright Scanner, Component Analysis Service and Container Content Resolver) and generates 1) list of open source components identified and 2) list of files with apparent open source license or copyright statements
         2. Component Inventory for product is updated to include metadata about all dependencies identified
   2. Check dependencies against policies
      1. Run Policy Checker to determine whether open source dependencies include any unapproved packages or licenses
      2. Fail build if Policy Checker finds violations
   3. (Asynchronous) Human review of source code and build artifact dependencies
      1. Personnel (e.g. Open Source Review Board) review output of License & Copyright Scanner and Component Analysis Service to determine whether there are any open source dependencies in Source Code Repo or among product build artifacts that were not automatically identified
      2. Newly identified open source dependencies are added manually to Component Inventory (with special attention to any modifications)
3. Produce compliance materials
   1. Collect source code for open source dependencies
      1. Run Source Code Downloader to add source code for any new dependencies to Artifact Repository
      2. For open source dependencies used in modified source code form, add modified source code to Artifact Repository
   2. FOSS Compliance Bundle Generator:
      1. Retrieves license obligations for each open source component from License Obligation Database
      2. Runs Obligation Fulfillment to produce: 1) where possible, compliance artifacts for open source dependencies (i.e. of license text, legal attribution statements, and source code where required) and 2) audit trail flagging any issues or components requiring further review
   3. Compliance Artifact Consistency is run on compliance artifacts to identify any issues
   4. Personnel (e.g. Open Source Review Board) review audit trail and compliance materials and amend or supplement as needed
