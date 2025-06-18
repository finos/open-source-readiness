---
title: Paid Support Relationships
tags:
  - OSPO (Role)
  - Legal (Role)
  - Developer (Role)
sidebar_label: Paid Support Relationships
list_image: /img/bok/page-types/artifact.png
---

:::note

This article is based on discussion at the 7th August 2024 OSR Meeting

:::

Paid support relationships in open source software provide organizations with professional assistance, maintenance, and expertise for critical open source components. These relationships can take various forms and serve multiple purposes, from risk mitigation to project sustainability.

## Types of Support Relationships

### Commercial Support Providers

- **Primary Developers**: Support provided directly by the project's core developers (e.g., RedHat, Canonical, SUSE)
- **Third-Party Providers**: Independent companies offering support services (e.g., Accenture's JavaScript support)
- **Database Support**: Companies like MongoDB, MySQL, and Redis offering enterprise support
- **Aggregated Support**: Services like Tidelift that provide cross-project support and security improvements

### Business Source License Models

A notable trend in the open source ecosystem is the adoption of Business Source Licenses (BSL). This model represents a shift from traditional open source licensing, requiring payment for source code access. Prominent examples include HashiCorp's Terraform (now OpenTofu) and Elastic's licensing changes. These changes often emerge as strategic responses to cloud provider competition, where companies seek to protect their commercial interests while maintaining some aspects of open source development.

## Benefits and Rationale

### Risk Mitigation

Paid support relationships serve as a crucial risk management tool for organizations, addressing several key areas of concern:

- **[Operational Risk](/bok/Risks/Operational-Risk)**: Acts as insurance against system failures and downtime, providing immediate access to expertise when issues arise
- **[Security Risk](/bok/Risks/Security-Risk)**: Incentivizes developers to address security vulnerabilities, as their revenue depends on maintaining robust and secure software
- **[Strategic Risk](/bok/Risks/Strategic-Risk)**: Helps fund project development and maintenance, ensuring the long-term viability of critical open source components
- **[Dependency Risk](/bok/Risks/Dependency-Risk)**: Reduces the risk associated with relying on external open source dependencies by ensuring professional support is available

### Business Advantages

- Combines benefits of open source with commercial support
- Provides predictable response times and service levels
- Enables enterprise-grade support for critical systems

## Implementation Considerations

### Contractual Elements

Successful paid support relationships require careful consideration of contractual elements. Service Level Agreements (SLAs) should clearly define response time commitments, on-site support availability, and maintenance schedules. These agreements serve as the foundation for the relationship, setting expectations for both the support provider and the organization.

### Return on Investment (ROI)

- Moving to a new, open source alternative when migrating from a piece of commercial software
- Can be done by comparing to the cost of a commercial alternative
- Looking at the amount of downtime (or cost of potential downtime) and wanting to minimise this.

### Organizational Requirements

Support requirements for software vary significantly across organizations. Some mandate support contracts for production use.

:::info
Those present argued that these requirements were particularly for organizations with lower open source maturity.
:::

## Alternative Support Models

### Direct Project Support

- Financial contributions to maintainers
- Sponsorship of development efforts
- Hiring the maintainers. (Legally tricky: as you want to ensure they can continue to maintain and there might be Anti-Trust concerns around monopolising the open. source project).
- Developing an internal expert.

### Security-Focused Support

Security concerns have given rise to specialized support models. Bug bounty programs, security audit funding, and vulnerability disclosure programs represent proactive approaches to improving software security. These initiatives not only enhance security but also demonstrate organizational commitment to the open source ecosystem.

### Community Support

Community engagement through [hackathons](/bok/Activities/Level-3/Culture#4-public-engagement) and other initiatives represents another valuable form of support.
