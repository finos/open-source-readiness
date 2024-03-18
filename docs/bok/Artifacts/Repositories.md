---
title: Artifact Repository
tags: 
  - Developer (Role)
  - OSPO (Role)
  - CIO/CTO (Role)
  - Security Expert (Role)
  - Dependency Risk
  - Operational Risk
sidebar_label: Artifact Repository
image: /img/bok/page-types/artifact.png
---

For a financial services firm, the importance of hosting an artifact repository manager such as [JFrog Artifactory](https://jfrog.com/artifactory/) or [Sonatype's Nexus](https://www.sonatype.com/products/nexus-repository) inside the firm's firewall cannot be overstated. 

These tools serve as critical components in the firm's software development lifecycle, enabling secure, efficient management and storage of binary artifacts, dependencies, and build artifacts. 

By situating these repositories internally, the firm significantly enhances its [cybersecurity posture](../Activities/Level-2/Supply-Chain-Security).

Having an internal repository:

 - **Accelerates development workflows** - the repository acts as a local cache for dependencies.
 - **Reduces external dependencies** - code can be built entirely within the firm's network.
 - **Minimizes downtime** - as developers are not relying on third-party infrastructure such as [npmjs.com](https://www.npmjs.com/) or [Maven Central](https://central.sonatype.com/).
 
## Related Activities

<BokTagList tag="Repository (Artifact)" filter="Activities" />