---
title: Identifying InnerSource Project Candidates
sidebar_label: Identifying Projects
sidebar_position: 3
authors:
  - name: "Chamindra de Silva"
---

Once the [ROI model](ROI-Model) tells you *how* to value a candidate project, the next question is *where it should live*: kept proprietary to one team, shared internally through InnerSource, or released as open source. Getting this wrong in either direction has a cost, open sourcing something that's actually a competitive differentiator gives away an edge, while keeping something proprietary that dozens of teams are quietly re-building wastes engineering budget across the bank, this is particularly the case with the new wave of agentic development where replicating work becomes easy but this increases the total cost of ownership to the institution for maintainence, hosting and now token cost.

This article gives a decision tree for sorting a candidate project into one of the three buckets, followed by the individual factors worth weighing.

## The three destinations

- **Proprietary**: owned and used by a single team or business unit; no obligation to make it reusable or presentable to anyone else.
- **InnerSource**: built and consumed like an open source project, but only within the bank's own perimeter (employees, contractors, sometimes trusted affiliates).
- **Open Source**: published publicly, with all the licensing, security disclosure, and community management obligations that come with it.

## Decision tree

![Decision tree for choosing between Proprietary, InnerSource, and Open Source](/img/InnerSource/playbook/best-projects-decision-tree.svg)

1. **Does the code need to stay confidential** for regulatory, competitive, security, or data-sensitivity reasons (e.g. it encodes pricing logic, risk/fraud models, AML rules, or anything that would increase attack surface if its logic were public)?
   - **Yes** → open source is off the table. Go to 2.
   - **No** → go to 3.

2. **Is there reuse potential beyond the team that built it**, meaning do other teams have, or will likely have, the same problem?
   - **Yes** → **InnerSource**. This is the classic case you've already spotted: code that must stay inside the bank but is valuable to more than one team.
   - **No** → **Proprietary**. Confidential and single-use isn't worth the overhead of InnerSource practices (documentation, contribution process, a maintainer role).

3. **Is it a source of competitive differentiation or strategic IP**, even though nothing legally prevents publishing it (e.g. it's not regulated, just valuable)?
   - **Yes** → keep it **InnerSource or Proprietary**. Legal permission to open source isn't the same as it being wise to.
   - **No** → go to 4.

4. **Does it only make sense against internal-only systems** (proprietary connectors, internal APIs, legacy mainframe integrations, internal identity or entitlement systems), such that nobody outside the bank could use it even if they had the code?
   - **Yes** → **InnerSource**. This is your second example: a connector to an internal DevOps/testing system has real reuse value across internal teams, but zero external audience, so open sourcing buys you nothing but overhead.
   - **No** → go to 5.

5. **Does it set a standard you need to control centrally** (a brand, a customer-facing UI/UX framework, a naming or data standard) where accepting external pull requests could dilute, fork, or drift the standard away from what the bank needs?
   - **Yes** → **InnerSource with strong central governance** (a small maintainer group that curates contributions, mandated adoption across internal teams). This is your first example. Note that some banks *do* open source design systems for marketing/brand-recognition reasons, but that's a deliberate exception made after this question, not a default.
   - **No** → go to 6.

6. **Is it a commodity capability** that the wider industry also needs (generic tooling, non-differentiating infrastructure, common file formats/parsers), **and** does the bank have or want the capacity to run it as a public project (security disclosure process, legal review of external PRs, community management)?
   - **Yes** → **Open Source** candidate. Check first whether an existing industry initiative (e.g. a FINOS project) already covers it; contributing there is usually cheaper than starting a new project.
   - **No** → **InnerSource** for now, and revisit once the bank has the capacity or the industry has consolidated around a home for it.

## Factor matrix

| Factor | Proprietary | InnerSource | Open Source |
|---|---|---|---|
| Must stay confidential (regulatory/competitive/security) | ✓ if single-team | ✓ if multi-team | ✗ |
| Competitive differentiator / strategic IP | possible | ✓ | ✗ |
| Depends on internal-only systems, connectors, or data with no external meaning | possible | ✓ | ✗ |
| Sets a brand/UX/data standard that needs centralized control | ✗ | ✓ | possible, as a deliberate exception |
| Commodity/non-differentiating, industry also needs it | ✗ | possible (interim) | ✓ |
| No reuse beyond originating team | ✓ | ✗ | ✗ |

## Examples of good InnerSource candidates

The two examples referenced in the [decision tree](#decision-tree) above are patterns that recur across financial institutions. A few more, with the question in the tree they typically turn on:

| Example | Why it's InnerSource, not Proprietary or Open Source | Decision tree question |
|---|---|---|
| Standards-based UI/design system that enforces one look-and-feel across internal applications | High reuse value, but external contributors could drift the components away from the required standard | Q5: sets a brand/UX standard needing central control |
| Internal application framework for building trading and risk desk applications (blotters, order entry screens, position dashboards), with built-in plumbing for market data, order routing, and entitlements | Desks get a head start building screens instead of re-implementing the same plumbing, but the framework only makes sense wired into the bank's own trading infrastructure | Q4: depends on internal-only systems |
| Test engine with enterprise-specific connectors into internal systems under test | The harness itself is generic, but the connectors have no meaning outside the bank's own systems | Q4: depends on internal-only systems |
| Reconciliation/data-quality framework built around internal data formats | The diff/match engine is broadly reusable internally, but tied to internal-only schemas with no external audience | Q4: depends on internal-only systems |
| Client library/SDK for an internal identity or entitlement system | Real reuse across teams integrating with the same internal system, but meaningless to anyone outside it | Q4: depends on internal-only systems |
| Naming or data-standard registry used to keep systems interoperable internally | Needs consistent, centrally governed adoption; external contributions could fragment the standard | Q5: sets a data standard needing central control |
| Shared compliance/audit logging library tied to internal regulatory requirements | Must stay confidential for regulatory reasons, but multiple teams have the same obligation | Q1 → Q2: confidential, with reuse potential beyond one team |
| Pricing/risk calculation library wired to internal, proprietary market data feeds | The calculation approach is reusable across desks, but the data dependencies keep it confidential | Q1 → Q2: confidential, with reuse potential beyond one team |
| Standardised DevOps pipeline template used across engineering teams to implement CI/CD, testing, security scanning, and deployment controls | Used by many teams and benefits from contributions across the organisation, but typically embeds internal engineering practices, platform integrations, security controls, and compliance requirements that are specific to the organisation | Q5: sets a data standard needing central control |
| Enterprise API standards and tooling | Encourages teams to collaborate on shared API standards, templates, governance, and supporting tools. Contributions improve consistency and reuse across the organisation while maintaining alignment with internal architecture and compliance requirements | Q5: sets a data standard needing central control |

## Other factors worth weighing

- **Embedded sensitive data.** Test fixtures, config, or sample data with production-like PII or credentials is a common reason code that's otherwise a fine OSS candidate has to stay InnerSource until it's scrubbed. See [Data Leakage Risk](../../bok/Risks/Data-Leakage-Risk).
- **Dependency and license hygiene.** If the code pulls in internal proprietary libraries that can't be cleared through legal review or stripped out, it can't be open sourced regardless of anything else; default to InnerSource.
- **Maturity of the code.** Rough, early-stage code is a legitimate reason to keep something InnerSource temporarily, so it can become presentable and stable through internal reuse first, then get reassessed for open sourcing.
- **Maintenance capacity.** InnerSource still needs a maintainer, but open source adds external triage, security disclosure handling (CVEs), and community management. Don't open source something the team can't support publicly, even if it's otherwise a good candidate; see [Codebase Risk](../../bok/Risks/Codebase-Risk).
- **Existing industry consortia.** Before building a new open source project, check whether FINOS or a similar body already hosts something for this problem; contributing is usually lower-risk and lower-cost than maintaining a competing project.
- **Talent and reputation value.** For genuinely non-differentiating tech, open sourcing can help with recruiting and external reputation, a tie-breaker in favor of open source when the tree above is otherwise neutral.
- **Plugin/modular architecture.** A generic core with proprietary or internal-only pieces (connectors, rulesets, credentials) split out behind a plugin interface is often what turns a Q1/Q4 "no" into a shareable project: the core can go further (InnerSource, sometimes Open Source) while the proprietary parts stay private. This is good practice for InnerSource projects for the same reason it's good practice for open source ones: it keeps the boundary between "shared" and "confidential" explicit and enforced by the architecture rather than by convention.
- **This isn't a one-time classification.** A project's answer can move over time: today's differentiator can become tomorrow's commodity once the market catches up, and today's rough internal tool can mature into a credible open source release. Revisit the tree periodically rather than treating the first answer as permanent.
