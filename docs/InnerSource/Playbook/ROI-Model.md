---
title: InnerSource ROI model
sidebar_label: ROI model
sidebar_position: 4
authors:
  - name: "Chamindra de Silva"
  - name: "Daniel Izquierdo"
---

import ReactPlayer from 'react-player';

InnerSource practices offer significant value to organizations by fostering software reuse, improving collaboration, and eliminating duplicated effort, but that value is easy to under-sell if it stays anecdotal. Quantifying it in dollar terms is what secures continued investment and keeps an InnerSource initiative funded past its first year. This page summarizes a framework for measuring that impact, drawn from the FINOS/InnerSource Commons whitepaper [*InnerSource Value Metrics*](https://www.finos.org/innersource-value-metrics-white-paper), and points to the fuller resources behind it.

## Four key value areas

The whitepaper groups InnerSource's financial impact into four value areas, which fall under two beneficiaries: savings the wider organization captures, and savings the specific product team building the shared component captures.

![Four key value areas of InnerSource: Development Cost Savings and Reduced Cost of Ownership under Organizational Saving; Time-to-Market Gains under Business Benefit; Development Cost Saved under Product Team Benefit](/img/InnerSource/playbook/innersource-value-areas.svg)

- **Development Cost Savings (Reuse)** — avoiding duplicate work by reusing an internal component instead of every team building its own.
- **Reduced Cost of Ownership** — a centralized fix or update benefits every consumer at once, instead of each downstream team patching separately.
- **Time-to-Market Gains** — products and features ship faster by leveraging existing, proven components.
- **Development Cost Saved** — the core team's own development cost is offset by features other teams contribute back.

## Conceptual model

An InnerSource project is made up of multiple potentially reusable components. Downstream projects reuse some of those components as-is, enhance others and contribute the improvement back, and occasionally contribute entirely new components upstream for the benefit of shared maintenance. Value gets created in both directions: reuse flowing down to downstream projects, and contributions flowing back up to the InnerSource project.

![Conceptual model of InnerSource components flowing between the InnerSource project and a downstream project, via reuse and contribution](/img/InnerSource/playbook/innersource-conceptual-model.svg)

## Calculating the value

Each of the four value areas has a simple underlying formula. None of these require exotic data, they can all be estimated from a mix of surveys, ticketing/PM tool data, and code analysis; see the whitepaper for the full set of data-gathering strategies and tool options per metric.

**Development Cost Savings from Reuse**

Avoiding rebuilding a component every time it's needed. Summed across a project's *n* reusable components:

> `Cost Saved = Σ (Times Adopted − 1) × (Cost of Development − Cost of Adoption)`

Commonly measured via SBoM/dependency analysis (e.g. Snyk, Maven/Gradle dependency graphs) for adoption counts, and lines-of-code-based cost models (COCOMO II, Caper Jones) or internal PM data for development cost.

**Improved Time-to-Market (TTM)**

Time saved in product delivery by adopting an existing component instead of building it from scratch:

> `Time Saved on TTM = Σ (Time for Development from Scratch − Time for Adoption)`

Commonly measured via person-hours tracked in project management tools, or developer surveys on adoption time.

**Reduced Total Cost of Ownership (maintenance)**

Centralizing the patching of vulnerabilities and dependency upgrades avoids every downstream team repeating that work independently:

> `Reduced TCO = Σ Times Adopted × (Cost of Vulnerabilities + Upgrades)`

Commonly measured via ticketing-system effort data (Jira/GitHub API aggregated with a tool like GrimoireLab) or industry cost-of-bug-fix references (ISBSG, Caper Jones data).

**Development Cost Saved from external contributions**

When other teams contribute enhancements back through InnerSource, the receiving team avoids building those features itself:

> `Dev Cost Saved = Σ (Dev Cost of Contribution − Dev Cost of Core Team Support)`

Commonly measured the same way as development cost above: lines-of-code-based models, or effort/hours tracked in the ticketing system multiplied by developer cost.

## Presenting ROI to senior stakeholders

When taking this to leadership, the whitepaper recommends framing the numbers around:

- **Strategic imperative** — InnerSource as an enabler of innovation, faster delivery, and cost optimization, not an engineering-only concern.
- **Quantifiable financial benefits** — make the savings concrete. For example, centralizing $20M of duplicated effort across 10 similar projects into one InnerSource project could reduce that cost to roughly $2M plus adoption overhead; even doubling the estimated InnerSource cost still nets around $16M in savings.
- **Time-to-market** — faster delivery from reuse translates directly into competitive advantage.
- **Reduced Total Cost of Ownership** — centralized maintenance eliminates repetitive patching effort and lowers risk.
- **A collaborative ecosystem** — InnerSource lets other business units contribute directly, so the core team stops being a bottleneck for new features.
- **A data-driven approach** — the numbers come from automated tools and ongoing measurement, not one-off estimates, which makes the case repeatable and auditable.

## Further resources

- **Whitepaper** — the full framework, including the complete metric tables, data-gathering strategies, and recommended tooling per metric: [*InnerSource Value Metrics*](https://www.finos.org/innersource-value-metrics-white-paper) (FINOS and InnerSource Commons), also available as a [direct PDF download](https://2419532.hs-sites.com/hubfs/Case%20Studies/InnerSource%20Value%20Metrics%20FINAL2.pdf?hsCtaAttrib=199578461847).
- **Talk** — Chamindra de Silva and Daniel Izquierdo presenting this framework at [InnerSource Summit 2024](https://innersourcecommons.org/events/isc-2024/):

<ReactPlayer playing={false} controls width="100%" height="400px" url="https://www.youtube.com/watch?v=QlVA9bvnbyM" />

- **Peer-reviewed paper** — a version of this work was also published at MSR 2025: [*InnerSource Value Metrics*](https://www.computer.org/csdl/proceedings-article/msr/2025/018300a439/27vTwMf8aDS), International Conference on Mining Software Repositories, 2025.
