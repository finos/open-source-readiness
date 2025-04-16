---
title: Ensuring Open Source Compliance For Contribution
tags:
  - OSPO (Role)
  - Level 3 (OSMM)
  - CIO/CTO (Role)
  - Compliance (Role)
sidebar_position: 3
sidebar_label: Compliance
checklist:
  - title: Policy
    description: The organisation has policies to govern contribution to open source ecosystems
  - title: Tracking Contribution
    description: The organisation tracks employee open source contributions irrespective of the classification of the project
  - title: Contribution Risk Management
    description: Enterprise risk management processes include open source contribution risks
  - title: Contribution Risk Appetite
    description: The balance of open source contribution risks are understood by stakeholders
  - title: Contribution Efficiency
    description: Organisational tools and processes don't restrict open source contribution
  - title: CCLA Management
    description: There is a clear process around onboarding new CCLAs and managing their membership
list_image: /img/bok/page-types/activity.png
---

Contributing to an open source project from within a regulated firm is likely to contravene one or more _policies_. Staff who contribute to open source as part of their jobs are likely to be in breach of their terms of employment or likely to get disciplined. For this reason, in order to enable open source contribution, new policy needs to be written which creates space within the compliance landscape.

The open source contribution policy won't be able to _contradict_ any pre-existing policy. After all, most of the pre-existing policies (such as bank communications policy) will be in place to comply with law. Nevertheless, many organisations have found ways to accommodate open source contribution within their existing compliance framework.

**Note:** The [Making The Case for Contribution](Making-The-Case) article argues for allowing open source contribution as _controlling the risk profile_ of the organisation. In this article we are focusing on how **policy** for open source contribution can be made to dovetail with existing banking policies enshrined in law.

<BoxOut title="Warning" image="/img/bok/warning.png">

Creating new policy is likely to take a long time since it involves significant cross-business agreement.

If you are embarking on building a contribution policy, consider the advice in [Creating-An-OSPO](../Level-2/Creating-An-OSPO) around building a "coalition of the willing". You can go one step beyond this and rotate people from out of the compliance team to work with you on setting up the policy. People familiar with the existing policies and ways of working will be an advantage to making progress.

Don't simply dismiss the list below as unimportant: you _will_ need to consider the stakeholders of these policies at some point.

</BoxOut>

## Organisational Structure

As described in [Making The Case](Making-The-Case), it can be easier to create an open source policy that affects a single part of a larger organisation. The first consideration for a new policy should therefore be:

- To what part of the organisation is this policy relevant?
- Who "owns" the policy (e.g. [CTO](../../Roles/CTO))

## Organisational Roles

Your policy will outline the organisational structure set up to risk-manage open source contribution. [Developers](../../Roles/Developer) or other staff engaged in open source will need to understand and operate within this structure, so it's important to train them on it. Roles they might need to be aware of include:

- **Open Source Program Office**: See [OSPO](../../Roles/OSPO) and [Creating-An-OSPO](../Level-2/Creating-An-OSPO).

- **Foundation Points-of-Contact (POC)**: staff within the organisation responsible for handling [Foundation Membership](../Level-4/Foundations). This might be important for project creation or administration, [CLA administration](../../Artifacts/CLAs-And-DCOs) or attending events.

- **Open Source Project Administrators**: where the organisation is [Contributing its own Projects](../Level-4/Open-Sourcing-A-Project) or otherwise acting in a leadership role on a project, there will be someone in the firm in this role.

- **Open Source Project Sponsors**: in the majority of cases, the firm will have a business need to engage in an open source project. Therefore, contributions of time or money will need to be _sponsored_ by some part of the business. It's important that contributors are aware of who is sponsoring their contribution.

- **Contributors**: people _contributing_ code, documentation to open source projects.

- **Reviewers**: are people who check the contributions to make sure they meet quality requirements and don't expose the firm to unnecessary risks (see below).

- **Maintainers**: these are **contributors** on open source projects who have an elevated level of control and can gate-keep which contributions are accepted.

## Key Terms

Often legal documents spend much effort on _defining terms_. Because there are likely to be many stakeholders from different areas of the firm, an open source policy will also need to do this up-front work. You should consider coming up with definitions for terms such as:

- Initiative, Program, Project - how internal terms relate to widely used terms in open source like "Repo" or "Organisation".
- [Categories of Project](Making-The-Case#project-categorization), e.g. "Staff Personal Projects", "Firm Moderated Projects" etc.
- "Bank Business" vs "Non-Bank Business"
- Staff, Contractors, Consultants, what roles they play.
- Bank Network, Outside Bank Network

## Acceptable Tools

Many of the controls below hinge on the ability of software tools to enforce them. The policy will need to define:

- which tools are acceptable for the [Publication process](Publication)
- which open source repositories are in scope (e.g. [GitHub](https://github.com) / [GitLab](https://gitlab.com))
- which tools to use for security reviews, if needed.

## Mandatory Training

Your policy is likely to want to mandate staff training so that staff are aware of the correct processes and tools and any other behaviour expected of them for contribution.

**See:** Main article on [Contribution Training](Contribution-Training)

## Contributor License Agreement (CLA) and Developer Certificate of Origin (DCO) Management

Managing [CLAs and DCOs](../Artifacts/CLAs-And-DCOs) presents several challenges for organizations:

### Key Considerations

1. **Work Time Definition**

   - The distinction between corporate and personal contributions [isn't always clear](Surveillance)
   - Organizations need clear policies on what constitutes work time for contributions

2. **Identity Management**

   - Distinguishing between [corporate and personal identities](Surveillance) can be complex
   - Organizations must establish clear guidelines for identity usage in contributions

3. **Foundation Projects**
   - Contributing to Linux Foundation (LF) or FINOS projects is often simpler
   - These organizations have established CLA processes and infrastructure

### Legal Review Process

- Legal teams review and approve licenses and CLAs
- Organizations maintain approved license lists
- Contributors must verify against approved licenses before contributing

### DCO as Minimum Standard

- Many organizations consider DCO sign-off as the minimum requirement
- Projects without CLAs may face intellectual property risks
- Contributors could potentially claim ownership of project elements

### Implementation Challenges

1. **Operational Issues**

   - CLA and DCO procedures can create friction in the contribution process
   - Signature collection and verification can delay commits
   - Managing CCLA (Corporate CLA) groups across different platforms can be complex

2. **Best Practices**

   - Always require DCO sign-off as a minimum standard
   - Avoid individual CLAs (ICLAs) when corporate CLAs (CCLAs) are available
   - Maintain clear documentation of contribution requirements

3. **OSPO Responsibilities**

   - Manage membership in CCLA groups
   - Coordinate with different platforms' group management systems
   - Ensure compliance with contribution requirements

4. **Onboarding Journey for New CCLAs**

   - Evaluate contribution processes when selecting projects / foundations
   - Consider platforms with streamlined CLA processes (e.g., FINOS with EasyCLA)
   - Complex onboarding processes can deter potential contributors

## By Regulation

In this section we look at some regulations that an open source policy will need to consider, and suggest appropriate controls for complying with each (and _evidencing_ compliance after the fact).

<BokTagList tag="Contribution" filter="Regulations" />

## Maturity Checklist

<ArticleChecklist checklist={frontMatter.checklist} title={frontMatter.title} />
