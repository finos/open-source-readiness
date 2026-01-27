---
title: Open Source Contribution
tags:
  - Level 3 (OSMM)
  - OSPO (Role)
  - OSFF 2025
sidebar_position: 0
list_image: /img/bok/page-types/activity.png
---

A quick reference guide for organisations embarking on open source contribution at Level 3 maturity.  

**See:** [Developing In The Open](Public-Development) for more on what open source contribution is.

## 1. Winning The Argument

Before you can enable open source contribution, you need to convince stakeholders that the _benefits outweigh the risks_.

**See:** [Making The Case For Contribution](Making-The-Case) for the full argument, which includes: Commodification, Pace of Change, Direction, Avoid Lock-In, Sustainability, Talent Retention, Talent Attraction, Avoid Internal Forks.

**See:** [The Hidden Risks of Not Contributing](https://www.finos.org/hidden-risks-of-not-contributing-case-study) whitepaper on how internal forks drive duplication, technical debt, and security risk.

**See:** [Code Duplication Metrics](../../Measurements/Code-Duplication) for how to measure this problem in your organisation.

---

## 2. Setting The Policy

### Why You Need A Policy

Existing firm policies (communications, data handling, IP) may not yet account for open source contribution. A dedicated policy creates clarity and enables contribution within the compliance framework.

**See:** [Reference FOSS Policy](../../Artifacts/Reference-FOSS-Policy) as a reference template for your own policy, open-sourced from Citi's policy.

**See:** [Contribution Compliance](Contribution-Compliance) for organisational roles, key terms, acceptable tools, CLA/DCO management, and regulatory intersections.

---

## 3. Processes & Tooling

You need tooling to track contributors, review publications, enforce policy, and measure success.

[GitProxy](https://git-proxy.finos.org) is a key FINOS project for enabling compliant contribution. It acts as a gateway for outbound git pushes, allowing you to deploy custom push protections: license enforcement, secrets detection, data file blocking, and author email validation. If a push violates policy, it's blocked before leaving the network—providing both data leakage prevention and a full audit trail.

**See:** [Jamie Slome's GitProxy Presentation](/docs/bok/osr-resources/GitProxy) for an introduction to how it works.

**See:** [Surveillance Processes](Surveillance) for tracking GitHub/GitLab IDs, project registries, contribution logs, and CCLA management. (You need to track what your staff are contributing to, and where they have been granted permission.)

**See:** [Publication](Publication) for the review process before code leaves the organisation. (You need to make sure you don't leak sensitive data while contributing.)

**See:** [Contribution Compliance](Contribution-Compliance) for acceptable tools and policy enforcement.

**See:** [Organisation Metrics](../../Measurements/Organisation) for measuring active contributors, PRs merged, and program health.

---

## 4. Training

Staff contributing to open source need to understand firm policy, the publication review process, data handling rules, and how to represent the firm appropriately in external communities.

**See:** [Contribution Training](Contribution-Training) for curriculum guidance on firm policy, data handling, and community etiquette.

**See:** [OSR Training and Certification](/docs/osr-resources/Training) for the LFD137 course and FSOSD certification from the Linux Foundation.

**See:** [FSOSD Certification](../../Certifications/FSOSD) for the FINOS Financial Services Open Source Developer certification, validating understanding of open source contribution in a regulated environment..

---

## 5. Cultural Change

Enabling contribution is not just about policy and tooling—it requires a shift in organisational culture. Staff need to feel empowered to work in the open, managers need to value external collaboration, and the organisation needs to see open source as a talent strategy. This can be challenging in financial services, where working in public, sharing code externally, and collaborating with competitors runs counter to traditional norms.

**See:** [Building an Open Source Culture](Culture) for organisational development, building awareness, public engagement, InnerSource, and embedding open source in process.

**See:** [Managing Open Source Talent](Talent) for attracting, nurturing, and retaining developers through open source engagement.

**See:** [Fostering Community Engagement](Community-Engagement) for building relationships with external contributors and promoting your projects.

---

## 6. Return On Investment (ROI)

To sustain investment in an OSPO and contribution program, you need to demonstrate value. Key ROI sources include: cost avoidance (not maintaining internal forks), talent retention, influence over critical dependencies, reputation, and faster security patching.

**See:** [Frank Nagle on the $9T Value of Open Source](/docs/Presentations/Value-Of-Open-Source) for research showing that even small upstream contributions can double productivity benefits versus consumption alone.

**See:** [Tosha Ellison on Open Source ROI](/docs/Presentations/Open-Source-ROI) for practical guidance on measuring and communicating the value of open source contribution.

**See:** [The Hidden Risks of Not Contributing](https://www.finos.org/hidden-risks-of-not-contributing-case-study) whitepaper for quantifying the cost of internal forks and the value of contributing upstream.

**See:** [Measurements](../../Measurements/Introduction) for metrics on organisation health, project quality, process efficiency, and code duplication.

**See:** GitProxy ROI measures (TBD)