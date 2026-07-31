---
title: InnerSource Blueprint
sidebar_label: InnerSource Blueprint
sidebar_position: 6
authors:
  - name: "Pooi Ling Cheong"
---


A common blocker to InnerSource adoption is the gap between understanding the concept and knowing how to implement it. While teams may support the idea of open collaboration, many struggle to answer practical questions such as:
- What does an InnerSource-ready project look like?
- What documentation is required?
- How should external contributions be managed?
- Who is responsible for governance and decision-making?
- How can contributors discover and engage with the project?

Without clear guidance, teams are often left to define their own approaches. This can lead to inconsistent practices, increased onboarding effort, and a fragmented contributor experience—ultimately slowing adoption.

The InnerSource Blueprint is a practical solution to this adoption challenge.

Rather than expecting every team to design its own InnerSource model, the blueprint provides a predefined path that helps teams establish projects in a way that is consistent, discoverable, and easy to contribute to.

## Minimum Requirements for an InnerSource Project
To reduce barriers to contribution and create a consistent experience across projects, every InnerSource project should meet a minimum set of requirements before it is promoted to the wider engineering community.

Drawing on [established InnerSource practices](https://patterns.innersourcecommons.org/p/base-documentation), every project should make the following information readily available.

- **Project Purpose:** Contributors should be able to understand what the project does, who it is intended for, and why it exists. This information is typically provided in a README
- **Contribution Process:** Contributors should have clear guidance on how they can participate in the project such as how to submit contributions. This is typically documented in a CONTRIBUTING guide
- **Communication and Support:** Users and contributors should know who maintains the project and how to engage with the community. This information may be included within the README or maintained separately. The key requirement is that it is visible and easy to find
- **Discoverability:** An InnerSource project cannot attract contributors if people cannot find it. Projects should therefore be published on a platform that is familiar and accessible to the engineering community, such as an engineering portal, software catalogue, or internal developer platform. Projects should also be clearly identified as InnerSource through agreed metadata, tags, or classifications.

## Blueprint Structure
The following six stages guide teams from initial alignment through to a formal InnerSource launch. While implementation details will vary between organisations—particularly where tooling environments are constrained or platform choices are governed by organisational policy—the stages provide a consistent framework that can be adapted accordingly.

**1. Align Stakeholders and Objectives**

Before opening a project to wider collaboration, teams should align on the purpose of InnerSourcing the project and ensure key stakeholders understand the commitment involved.
Key considerations include:
- Why is the project being InnerSourced?
- What outcomes are expected?
- Who are the target users and contributors?

For organisations new to InnerSource, this stage may include engagement with an InnerSource or Open Source Program Office, or community of practice to assess readiness and identify gaps.

**2. Establish Project Foundation**

Provide teams with the assets, standards, and guidance needed to create an InnerSource-ready project.

Typical activities include:
- Configuring repository visibility and access controls, protected branches, and merge controls in line with the organisation's platform governance model
- Providing documentation templates (for example, README and CONTRIBUTING guides)
- Guidance on making project discoverable (for example, registering the project on the organisation's software catalogue using agreed InnerSource tags)

The goal is to make it straightforward for teams to set up projects consistently while meeting organisational expectations.

**3. Define Ownership and Governance**

Successful InnerSource projects have clear ownership and decision-making structures.

The blueprint should guide teams to establish an ownership model that defines how the project is maintained, how decisions are made, and who is responsible for reviewing and approving contributions. Depending on the maturity and objectives of the project, [different ownership models](https://patterns.innersourcecommons.org/p/governance-levels#known-instances) may be appropriate. For example, a Trusted Committer model where a small group of experienced contributors hold merge rights and guide the project's direction, or a more distributed model as the contributor community matures. The chosen ownership model will often influence the project's governance approach, contribution workflow, and contributor experience.

**4. Establish the Contribution Operating Model**

Contributors should understand how changes move from proposal to implementation.

The blueprint should encourage teams to define:
- How contributions are submitted
- Review and approval expectations
- Review service level objectives (SLOs)
- How contribution decisions are communicated

Review SLOs should be published alongside the CONTRIBUTING guide—not just defined internally. Transparency about response times is one of the most effective ways to build contributor trust and encourage sustained participation.

**5. Create Communication Channels**

InnerSource is as much about community as it is about code. Projects should establish clear communication channels and document them prominently. Examples include:
- Issues and discussion forums
- Chat or collaboration platforms
- Community meetings

Contributors should be able to easily determine where to ask questions, provide feedback, and engage with the core team.

**6. Launch and Promote the Project (Recommended)**

Once the project meets the organisation's InnerSource requirements, teams should consider formally introducing it to the wider engineering community.

Typical launch activities may include:
- Reviewing whether the minimum InnerSource requirements have been met
- Confirming documentation, ownership, and governance arrangements are in place
- Announcing the project through engineering communication channels
- Highlighting contribution opportunities and ways to get involved

A formal launch creates visibility, signals organisational support, and helps establish momentum for community participation.


