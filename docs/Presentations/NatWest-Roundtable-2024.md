---
title: NatWest Group Hosted Roundtable - How to Measure InnerSource, Open Source and Enterprise Projects
sidebar_label: NatWest 2024
sidebar_position: 11
slug: /bok/osr-resources/NatWest-Roundtable-2024
tags:
 - Presentation
 - OSMM
 - InnerSource
 - CHAOSS
list_image: /img/bok/page-types/presentation.png
---

<link href="/css/presentation/web.css" rel="stylesheet"></link>

NatWest Group hosted this FINOS Open Source Readiness roundtable to explore how banks can measure InnerSource, open source, and enterprise software projects. The session took place on Tuesday 18th June 2024 and followed on from [Open Source Readiness #274](https://github.com/finos/open-source-readiness/issues/274), moving the discussion toward practical implementation and next steps for FINOS member banks.

The roundtable was held under the Chatham House Rule for FINOS members and invited guests, with attendance available virtually over Zoom and in person at NatWest in London.

## Event Links

- [CHAOSS](https://chaoss.community/)
- [CHAOSS Software](https://chaoss.community/software/)
- [8Knot](https://eightknot.osci.io/info)

## Meeting Minutes

### Participants

- 20 FINOS members and external open source guests attended the event.

### Agenda

- Overview of the CHAOSS project and its tools, including Augur and GrimoireLab.
- Discussion on metrics for open source and InnerSource projects.
- Feedback from participants on their experiences and needs related to metrics.
- Tactical implementations of CHAOSS metrics using the GraphQL API.
- Challenges and considerations in implementing metrics.
- Next steps for integrating CHAOSS tools with internal banking systems.
- Closing remarks and future plans for similar discussions.

## Key Presentation - CHAOSS Project

- CHAOSS was presented as a community health analytics initiative for open source software.
- The focus was on overall project health rather than code contributions alone.
- Augur and GrimoireLab were highlighted as primary tools for gathering and analysing metrics.
- The Practitioner Guide Series was mentioned as a way to interpret metrics more effectively.
- Speakers emphasised the importance of looking at both contribution and consumption metrics.
- Participants were encouraged to take a strategic, goal-focused approach to selecting metrics.

## FINOS Member Bank Metrics System

- Metrics in use included DORA metrics, flow metrics, and engineering capability metrics.
- Participants noted that building organisational consensus around metrics takes time.
- These metrics were reported upward to CIOs and executive stakeholders.

## InnerSource vs. Open Source Metrics

- The group discussed whether InnerSource and open source metrics can be treated interchangeably.
- InnerSource metrics were described as including community engagement, reuse, and contribution.
- Participants noted significant overlap between engineering success metrics and community engagement metrics.

## Feedback from Participants

- Reusable components and developer happiness were called out as important indicators.
- Qualitative measures, including storytelling and lightweight starter metrics, were recommended for teams beginning their metrics journey.
- One FINOS member bank described a broad internal metrics system used to support strategic decisions.

## Tactical Implementations

- A team was already working on implementing CHAOSS-style metrics through a GraphQL API approach.
- Participants agreed that the full CHAOSS toolchain can be complex, and that beginning with a simpler GraphQL-based implementation is more practical.
- The initial focus was on community metrics that are feasible within a banking environment.
- Weekly sprints and retrospectives were suggested to refine the approach iteratively.

## Challenges and Considerations

- The complexity of the CHAOSS toolset reinforced the need to start small and build incrementally.
- The meeting stressed the need to balance qualitative and quantitative data.
- Trust and clear communication were identified as essential when collecting survey data and organisational metrics.

## Metrics Discussed

### Contribution Metrics

- Number of merge requests
- Number of commits
- Number of contributors

### Consumption Metrics

- Number of forks
- Number of stars, where applicable
- Usage statistics
- Libyear, to measure how far a project lags behind the mainline and to help mitigate risk

### Engagement Metrics

- Number of issues opened and closed
- Response time to issues and pull requests
- Number of comments on issues and pull requests

### Quality Metrics

- Code review times
- Test coverage
- Frequency of code refactoring
- Number of bugs reported and fixed

### Reuse Metrics

- Number of teams using the InnerSource project
- Number of reusable components or modules
- Instances of code reuse across projects

### Community Health Metrics

- Developer satisfaction and feedback through surveys
- Net promoter score for the InnerSource initiative
- Onboarding time for new contributors

The meeting emphasised the importance of balancing qualitative and quantitative measures, and of ensuring that survey programmes are trusted so that the resulting data is both accepted and interpreted correctly.

## Next Steps

- Explore integration of CHAOSS tools with internal banking systems.
- Take an iterative approach to implementing and refining metrics.
- Review data lake and contribution model examples.
- Connect with CHAOSS Africa for broader community engagement.

## Conclusion

Participants responded positively to the roundtable format and the quality of discussion. The session reinforced the importance of community, collaboration, and careful metric selection in helping financial institutions succeed with InnerSource and open source programmes.
