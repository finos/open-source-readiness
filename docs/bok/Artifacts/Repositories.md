---
title: Repositories
tags: 
  - Developer (Role)
  - OSPO (Role)
  - CIO/CTO (Role)
  - Security Expert (Role)
  - Dependency Risk
  - Operational Risk
sidebar_label: Repositories
image: /img/bok/page-types/artifact.png
---

Article covering source and artifact repositories.

## Artifact Repository

For a financial services firm, the importance of hosting an artifact repository manager such as [JFrog Artifactory](https://jfrog.com/artifactory/) or [Sonatype's Nexus](https://www.sonatype.com/products/nexus-repository) inside the firm's firewall cannot be overstated. 

These tools serve as critical components in the firm's software development lifecycle, enabling secure, efficient management and storage of binary artifacts, dependencies, and build artifacts. 

By situating these repositories internally, the firm significantly enhances its [cybersecurity posture](../Activities/Level-2/Supply-Chain-Security).

Having an internal repository:

 - **Accelerates development workflows** - the repository acts as a local cache for dependencies.
 - **Reduces external dependencies** - code can be built entirely within the firm's network.
 - **Minimizes downtime** - as developers are not relying on third-party infrastructure such as [npmjs.com](https://www.npmjs.com/) or [Maven Central](https://central.sonatype.com/).
 
## Source Repository

In a financial services organization developing software, source control is essential.  Here are some reasons why:

- **Tracks Changes**: Keeps a record of who changed what and when in the software, making it easier to find and fix mistakes.
- **Improves Teamwork**: Allows many developers to work on the same project without messing up each other's work.
- **Reduces Errors**: Helps prevent mix-ups in the code that can cause big problems, saving time and money.
- **Keeps Data Safe**: Protects the code from accidental loss or damage, important for keeping the business running smoothly.
- **Meets Audit Requirements**: Helps meet legal and industry rules by keeping a clear history of all changes, which is important for audits.
- **Quick Recovery**: Makes it easier to fix things if something goes wrong, like if a new update causes a problem.
- **Enables CI/CD Pipelines**: Usually, the source repository is the first step in a build pipeline.

Popular source control tools include [GitHub Enterprise](https://github.com/pricing#feature-comparison) [GitLab Enterprise](https://about.gitlab.com/enterprise/) and [BitBucket](https://bitbucket.org/product/).

## Related Activities

<BokTagList tag="Repository (Artifact)" filter="Activities" />