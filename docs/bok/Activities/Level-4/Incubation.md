---
title: Incubating With An Open Source Foundation
tags: 
  - Level 4 (OSMM)
  - OSPO (Role)
  - Developer (Role)
sidebar_position: 6
sidebar_label: Incubation
image: /img/bok/page-types/activity.png
checklist:
  - title: Open Sourcing
    description: The organisation has a defined process for open sourcing projects
  - title: Selection
    description: Selection criteria exists for choosing projects to incubate
---

Incubating an open source project within a foundation offers numerous benefits which includes increased visibility, community support, and access to resources that can propel your project to new heights. 

Through following these steps, you will learn how to navigate the process effectively, from defining your project goals to formalizing the incubation process. Whether you're a developer looking to make a meaningful impact or an existing project seeking further growth, this guide will provide you with the knowledge and strategies to successfully leverage a foundation for the incubation of your open-source project. 

## 1. Define your Project Goals

Clearly articulate the goals and objectives of your open-source project.  Identify the problem you aim to solve, target audience, and the unique value proposition of your project. This clarity will help you convey the importance of incubating your project to potential foundation partners.

**See:**
 - [OpenSSF Best Practices Program](https://bestpractices.coreinfrastructure.org/en) which is a good checklist for open source project hygene and includes the above suggestions as part of those best practices.
 - [Open Sourcing A Project](Open-Sourcing-A-Project) further advice from this body of knowledge.

## 2. Research Foundation Options

Explore existing foundations that align with your project's vision and goals. Look for foundations that support projects in your domain and have a track record of successful incubation. Evaluate their governance model, community support, and resources they offer to their incubated projects.

This article focuses on the [FINOS](https://finos.org) and [Apache](https://apache.org) software foundations, but there are many more to choose from.

**See:** 
 - [OSSFoundations List](https://som-research.github.io/OSSFoundations/#/#chart) produced by SOM Research Lab.
 - [Awesome OSS](https://github.com/timecampus/awesome-oss) list of foundations and organisations.

## 3. Engage with the Community

Build an active and engaged community around your open source project. Leverage your community management plan to encourage participation, collaboration and contributions from developers and other potential users. Create a space to have open discussions, mailing lists, and forums to demonstrate the project's potential and attract supporters.

## 4. Develop a Strong Project Governance

Establish a governance model for your project that ensures transparency, inclusivity, and sustainability. Define clear decision-making processes, contribution guidelines, and code of conduct. A well-structured governance model demonstrates maturity and readiness for incubation.  

**Note:**  depending on which foundation you incubate your project with, there might be governance requirements from that foundation.  However, getting your own house in order first is a key signifier of the maturity of your project and a good sign that it is a good candidate for incubation.

## 5. Prepare a Proposal 

Create a comprehensive proposal highlighting your project's goals, achievements, community engagement, and technical roadmap. Include information about the foundation you wish to be incubated under, and how your project aligns with their mission. Emphasize the potential benefits of incubation for your project and the foundation. 

**See:** 
  - [FINOS proposal for contribution](https://community.finos.org/docs/governance/Software-Projects/contribution)
  - [Apache Incubator Proposal Template](https://people.apache.org/~dashorst/incubator/guides/proposal.html#proposal-template)

## 6. Reach Out to the Foundation

Contact the foundation and express your interest in incubation or partner with your open source community manager to start the connection. Share your proposal and request a meeting or discussion with the foundation's representatives or be a part of thier incubation discussions. 

You will need to be prepared to present your project's vision, community engagement and future plans. Also be prepared to answer any questions or concerns the foundation may have and show your commitment to the foundation's values.

The approach to take for outreach varies from foundation to foundation:  
 - For [the Apache Software Foundation](https://apache.org) you will need a _champion_ associated with the Apache organisation already to lead the proposal process.
 - For [FINOS](https://finos.org) only _finos members_ can propose new projects. 

## 7. Formalize the Incubation Process

If the foundation expresses interest in incubating your project, work with them to formalize the process. 

This may involve:

 - Establishing mentorship relationships
 - Meeting any technical requirements (e.g. code quality, build, release procedures etc)
 - Meeting community requirements set by the foundation (e.g. demonstrating community interest, level and diversity of support) 
 - Transferring repos (in [GitHub](https://github.com), say) to a [different ownership](https://docs.github.com/en/repositories/creating-and-managing-repositories/transferring-a-repository).
 - Using a foundation-mandated [license](../../artifacts/Licenses)
 - Using [DCOs or CLAs](../../artifacts/CLAs-And-DCOs) when committing code.
 - Transfer of [copyrights, patents or other IP](../../artifacts/IP) to the foundation.
 - Formalizing governance (e.g. choice of maintainers, meeting structure, decision making processes)
   
Be prepared to collaborate closely with the foundation to ensure a smooth transition into the incubation phase.

The process of incubation may vary depending on the foundation and the specific requirements they have for incubated projects. Be open to feedback, adapt your proposal if needed, and maintain good communication throughout the process. Incubation provides valuable resources and support, helping your open-source project thrive and reach its full potential.

## Maturity Checklist

<ArticleChecklist checklist={frontMatter.checklist} title={frontMatter.title} />