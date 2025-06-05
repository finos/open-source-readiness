---
title: Cyber Resilience Act (CRA)
sidebar_label: CRA 
author: Eddie Knight
sidebar_position: 20
tags:
 - Presentation
 - Strategy
 - Legal (Risk)
list_image: /img/bok/page-types/presentation.png  
---

<Bio name="Eddie Knight" image="/img/people/eddie-knight.jpeg" organisation="Sonatype">
Discussion led by Eddie Knight for FINOS OSR SIG on June 4 2025. 
</Bio>

As global reliance on digital technology grows, so do efforts to secure its ecosystem. One such legislative move is the European Union's Cyber Resilience Act (CRA), which is poised to reshape how organizations—particularly those in technology, consumer electronics, and financial services—approach cybersecurity and compliance.

A recent industry discussion explored the CRA’s scope, impact, and implications for both proprietary and open source development.

## What Is the CRA?

At its core, the Cyber Resilience Act is EU legislation that mandates cybersecurity requirements for products with "digital elements"—meaning any hardware or software that can connect to a network. The CRA's goal is to ensure these products are secure both before being introduced to the market and throughout their lifecycle, particularly if they receive updates.

## Products in Scope

The CRA primarily targets physical consumer products with digital features—examples include connected toys, smart fridges, or mobile apps. However, it does not directly regulate the services these products connect to (e.g., banking systems behind a mobile banking app). The focus is on what enters the user's home or personal space, and what could potentially compromise their security from within.

## CRA vs. Other Frameworks

While the CRA handles consumer-facing devices and applications, other regulations like DORA (Digital Operational Resilience Act) cover institutional and financial service systems. This means a banking app itself may fall under CRA, but the backend service it connects to is likely under DORA or another regime.

## Legal and Operational Impact

The CRA introduces significant legal risks. Companies that release regulated products to market could face severe penalties—including market bans—if they fail to comply. The act brings a new category of business risk, particularly because of the legal accountability involved.

Responsibility lies with the entity that brings a product to market—not digital intermediaries like app stores. This ensures that manufacturers and developers are held accountable for the software components and third-party dependencies they use.

## Open Source and the CRA

A major concern is the CRA’s impact on open source software (OSS). Projects not directly tied to commercial activity are generally exempt, but if OSS is included in a commercial product, the integrating party assumes the compliance burden. As such, maintainers may begin seeing increased scrutiny and requests for documentation or security guarantees—particularly if their work is widely used in commercial products.

To address this, some foundations are considering establishing minimum security baselines for hosted projects to proactively align with regulatory expectations.

## CRA's Broader Significance

The CRA can be seen as both a challenge and an opportunity. On one hand, it adds regulatory overhead. On the other, it catalyzes serious, long-overdue conversations around software supply chain security. Organizations must recognize that open source risk is business risk, and shift from viewing open source as “freeware” to treating it as critical infrastructure.

## What Should Organizations Do?

1. **Map Your Products**: Identify which offerings may fall under the CRA's definition of products with digital elements.
2. **Audit Supply Chains**: Understand and secure the software components used in your digital products.
3. **Engage Legal Counsel**: Clarify your obligations and exposures under the CRA.
4. **Support Open Source Sustainably**: Invest in the projects your products depend on, and be ready to engage with their maintainers respectfully.

## Final Thoughts

The CRA signals a new era in digital regulation—one that holds companies accountable not just for what they build, but for how they build it. It underscores the need for organizations to embrace secure-by-design principles, robust supply chain hygiene, and deeper collaboration with the open source community.

