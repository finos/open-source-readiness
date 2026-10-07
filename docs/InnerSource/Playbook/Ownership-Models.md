---
title: InnerSource Ownership Models
sidebar_label: Ownership Models
sidebar_position: 6.5
authors:
  - name: "Russell Rutledge"
---

The [InnerSource Blueprint](./Blueprint.md) asks every project to "establish an ownership model that defines how the project is maintained, how decisions are made, and who is responsible for reviewing and approving contributions".
This page is the detail behind that step: how to form an ownership model for your project, and how the models the InnerSource community has already published fit together.

The names vary.
The InnerSource Commons pattern [Explicit Governance Levels](https://patterns.innersourcecommons.org/p/governance-levels) notes: "Instead of "governance levels" we might also say "operating models", or "ownership models"."
Whatever the name, the problem it solves is the same.
Teams all describe their way of working as "InnerSource", while welcoming outside contributions to very different degrees, and the result is "confusion and frustration when teams collaborate as the expectation of what InnerSource means in practice is different in each team."
As the [InnerSource Learning Path](https://innersourcecommons.org/learn/learning-path/project-leader/05/) puts it: "Just because two projects you depend on use pull requests on a daily basis does not mean that their openness to team-external contributions is the same."

## Forming your ownership model: three questions

An ownership model is your answer to three independent questions.
Answer all three, write the answers down, and contributors, consumers and leaders all know what to expect from the project.

1. **Who maintains it?**
2. **What do the maintainers commit to do?**
3. **What are the maintainers open to receiving from others?**

The published models described [further down this page](#how-published-models-answer-the-three-questions) each answer some combination of these questions, often folded into a single scale.
Separating them makes it easier to describe a project precisely, and to see where two models that look different are actually making the same choice.

### 1. Who maintains it?

The first part of the answer is whether maintaining the project is someone's day job, with time formally allocated to it, or something people do on top of their day job.
The second part is how many maintainers there are, and how they are spread across the organisation.

| Who maintains it | Day job? | Published examples |
|---|---|---|
| Nobody | - | FINOS Maturity Matrix, Ownership level 0: "It is not clear who is responsible" |
| One person, on the side | No | Learning Path: "In grassroots communities, the founders often assume the role of the Trusted Committer"; "On small, grass roots efforts a single person often fills both" the Product Owner and Trusted Committer roles |
| A group of volunteers | No | [Group Support](https://patterns.innersourcecommons.org/p/group-support): "No one is assigned by their day job to work on it" |
| One assigned team | Yes | [Core Team](https://patterns.innersourcecommons.org/p/core-team); Flutter's "maintaining team" at stages 1 and 2 of its [InnerSource Pyramid](https://innersource.flutter.com/how/pyramid/) |
| An assigned team plus Trusted Committers from other teams | Yes, for the team | [Trusted Committer](https://patterns.innersourcecommons.org/p/trusted-committer) |
| Maintainers in several teams, each with allocated time | Yes, part-time | Flutter stage 3, [Maintainers in Multiple Teams](https://innersource.flutter.com/how/multiple-teams/) |

Points the sources make about this question:

- A dedicated team is formed so the organisation can "empower and hold them accountable in the same way as any other team" ([Core Team](https://patterns.innersourcecommons.org/p/core-team)). Core Team members can be full-time or part-time.
- Volunteer support is "best effort" only, and "not well-suited for run-time critical, production projects like live APIs" ([Group Support](https://patterns.innersourcecommons.org/p/group-support)).
- Flutter's maintainers in multiple teams are not volunteers: "No-one is a full-time maintainer", but the role "is usually recognised to take 10-20% of their working time", in groups "commonly ... between 4-8" ([Flutter, Maintainer](https://innersource.flutter.com/how/roles/maintainer/)).
- More than one maintainer "makes it easier when someone leaves the company or moves on from the role" ([Learning Path, Becoming a Trusted Committer](https://innersourcecommons.org/learn/learning-path/trusted-committer/07/)).
- The [FINOS Maturity Matrix](../Maturity-Matrix/Project.md) scores spread across the organisation at its top Ownership level: "Have at least 3 maintainers and at least 1 from different department or business group."

### 2. What do the maintainers commit to?

| Commitment | What it covers | Published examples |
|---|---|---|
| Best effort | No guarantees. | [Group Support](https://patterns.innersourcecommons.org/p/group-support): support is "best effort" only, and the group "is not expected to implement any new functionality for others"; FINOS Maturity Matrix Ownership level 0: "maintenance done on a best effort basis with no SLAs" |
| Maintenance | Guaranteed bug fixes, security fixes and dependency upgrades, and running the software: deployment and on-call. | [Core Team](https://patterns.innersourcecommons.org/p/core-team): "Production bugs", "CI/CD", "Versioning", "Monitoring"; Flutter stage 2: the maintaining team "retain full accountability" and takes "forward responsibility" for accepted contributions |
| Maintenance and features | Maintenance as above, plus new features built by the maintainers. | Flutter stage 1: "all changes to the service implemented by this maintaining team" |

Points the sources make about this question:

- The [Explicit Governance Levels](https://patterns.innersourcecommons.org/p/governance-levels) pattern explains its first level with the best-effort case from open source: "you can report the bug, but its on the owner to find the time to fix it."
- Accepting a contribution is a maintenance commitment. The Learning Path lists "Ongoing maintenance of submitted code (after the [warranty window](https://patterns.innersourcecommons.org/p/30-day-warranty))" among the host team's duties ([Is InnerSource Right for My Project?](https://innersourcecommons.org/learn/learning-path/introduction/08/)).
- A Core Team "doesn't have its own business agenda that determines its contributions", and its work "enables contributors to add and use the features that provide value to their scenarios" ([Core Team](https://patterns.innersourcecommons.org/p/core-team)).
- Security updates, dependency upgrades and refactoring are the work most at risk of being left undone. Flutter describes four ways to get it done: by the maintaining team in dedicated time, by sponsorship across teams, by a virtual team of maintainers, or by a "strategic intervention" where "A senior leader must sponsor the project, and fund and mobilise a team to do it" ([Flutter, Unpopular Work](https://innersource.flutter.com/blog/unpopular-work)).
- The ISC [Maturity Model](https://patterns.innersourcecommons.org/p/maturity-model) scores this question in its Support and Maintenance row, from "A business contract guaranties the support" (SM-0) to support "given by a mature community" (SM-3).

### 3. What are the maintainers open to?

This is the question the published ladders mostly answer, and the sources agree closely on the rungs.

| Open to | [Explicit Governance Levels](https://patterns.innersourcecommons.org/p/governance-levels) | [Flutter InnerSource Pyramid](https://innersource.flutter.com/how/pyramid/) |
|---|---|---|
| Nothing; the code is closed | - | Stage 0, Closed Source |
| Issues and bug reports | 1. Bug Reports and Issues Welcome | Stage 1, Readable Source |
| Small fixes | 2. Contributions Welcome | Stage 2, Guest Contribution |
| Entire features | 2. Contributions Welcome | Stage 2, Guest Contribution |
| Write access for people outside the maintaining group | 3. Shared Write Access | Stage 3, Maintainers in Multiple Teams |
| Write access, plus an equal say on direction and on who joins | 4. Shared Ownership | Stage 3, Maintainers in Multiple Teams |

Points the sources make about this question:

- Each rung "adds more influence/karma to the contributing team. However each step also requires more transparency and shared communication resources between both teams" ([Explicit Governance Levels](https://patterns.innersourcecommons.org/p/governance-levels)).
- Higher is not better: "a higher stage does not mean "better" - it just means "more complex"", and it is "only justified if the circumstances require it" ([Flutter, Pyramid](https://innersource.flutter.com/how/pyramid/)).
- "Increased sharing increases the need for communication and co-ordination. Increased shared accountabilities can slow down decision making" ([Learning Path, Options for Shared Ownership](https://innersourcecommons.org/learn/learning-path/project-leader/05/)).
- Opening up does not mean accepting everything: "It is the team of Trusted Committers that sets the mission and goals for the project. They are then in a position to set direction and decide on change acceptance accordingly" (same chapter).
- Flutter gives three reasons a capability needs maintainers in several teams: velocity, control, and maturity ([Flutter, Maintainers in Multiple Teams](https://innersource.flutter.com/how/multiple-teams/)).
- Small fixes and entire features can be handled differently. Flutter's [Major vs Minor](https://innersource.flutter.com/blog/major-vs-minor) triage, for example, needs one maintainer's approval for a minor change and a written design agreed by a maintainer in each division for a major one.

## Someone is always accountable

Whatever the answers, every source agrees that a project still has an accountable owner.

- "If everyone owns it, nobody is accountable." Each InnerSource project therefore "has a dedicated team of Trusted Committers" ([Learning Path, Options for Shared Ownership](https://innersourcecommons.org/learn/learning-path/project-leader/05/)).
- "Technical ownership and accountability is important at all stages of the inner source pyramid. At stage 1 or 2 the owner is the leader of the maintaining team. At stage 3 the owner isn't obvious from the org chart, and it helps to recognise a named individual as a Capability Owner." Without one, a capability risks becoming "a shared resource that's incrementally ruined by all divisions acting rationally but purely in their own interests" ([Flutter, Capability Owner](https://innersource.flutter.com/how/roles/owner/)).
- In the software catalogue Backstage, an owner is "the singular entity (commonly a team) that bears ultimate responsibility for the component", and "there will always be one ultimate owner" ([Backstage descriptor format](https://backstage.io/docs/features/software-catalog/descriptor-format/)).
- For teams worried that sharing means losing control: "Your team remains the core maintainers - Your group reviews, approves, and shape contributions" ([Driving InnerSource Culture](https://osr.finos.org/docs/InnerSource/driving_innersource_culture)).

## How published models answer the three questions

Each published model is a particular set of answers.
"-" means the source does not address that question.

| Published model | 1. Who maintains it | 2. Commitment | 3. Open to |
|---|---|---|---|
| [Explicit Governance Levels](https://patterns.innersourcecommons.org/p/governance-levels), level 1 | Host team | Best effort | Issues and bug reports |
| Explicit Governance Levels, level 2 | Host team | - | Contributions |
| Explicit Governance Levels, level 3 | Host team plus outside committers | - | Write access |
| Explicit Governance Levels, level 4 | Equal peers from different teams | - | Write access, equal say on direction and on who joins |
| [Flutter InnerSource Pyramid](https://innersource.flutter.com/how/pyramid/), stage 0 | One team | Maintenance and features | Closed |
| Flutter stage 1, Readable Source | One maintaining team | Maintenance and features | Issues, with read access |
| Flutter stage 2, Guest Contribution | One maintaining team | Maintenance, at least | Contributions |
| Flutter stage 3, Maintainers in Multiple Teams | A maintainer in each contributing team with allocated time, and a named Capability Owner | - | Write access |
| [Group Support](https://patterns.innersourcecommons.org/p/group-support) | Volunteers from anywhere in the organisation | Best effort, no new features for others | Contributions |
| [Core Team](https://patterns.innersourcecommons.org/p/core-team) | A dedicated team | Maintenance | Contributions |
| [ISC Maturity Model](https://patterns.innersourcecommons.org/p/maturity-model), Support and Maintenance | From a core or dedicated support team (SM-0, SM-1) to a mature community (SM-3) | Maintenance | - |
| [FINOS Maturity Matrix](../Maturity-Matrix/Project.md), Ownership | From nobody (level 0) to at least 3 maintainers, one from another department (level 3) | From best effort (level 0) to the owning team responsible for contributed code (level 2) | Up to "More than one department with decision making ability" (level 3) |
| [Learning Path, Options for Shared Ownership](https://innersourcecommons.org/learn/learning-path/project-leader/05/) | Trusted Committers tied to the host team, then shared | - | Same rungs as Explicit Governance Levels |
| [Identifying InnerSource Project Candidates](./Best-Candidates.md), "InnerSource with strong central governance" | "a small maintainer group" | - | Curated contributions |

Some published models also include things that are not ownership choices.
They are covered elsewhere on this page or in the playbook:

- **What contributors commit to after a merge**, such as the [30 Day Warranty](https://patterns.innersourcecommons.org/p/30-day-warranty) and the Maturity Matrix's Ownership level 1. See [Patterns for common pressures](#patterns-for-common-pressures).
- **Outcomes you measure rather than choose**, such as "Have more than one department contributing" or "The people finding the issues are the ones fixing the code".
- **Lifecycle practices**, such as "putting projects up for adoptions" and "a clear maintenance / deprecation strategy". See [Moving between models](#moving-between-models).
- **Who can see the code.** See [Financial services considerations](#financial-services-considerations).

## Declaring your model

Writing the answers down is what turns a way of working into a model others can rely on.

- Define your organisation's models centrally, give each a name, and "Present the governance levels as a menu of adoption options when launching new InnerSource projects" ([Explicit Governance Levels](https://patterns.innersourcecommons.org/p/governance-levels)).
- Label each project with its model in your [InnerSource Portal](https://patterns.innersourcecommons.org/p/innersource-portal) or software catalogue.
- Tell contributors what to expect, including "Response times to expect when submitting changes", the "communication channels to use", and the "governance levels to expect from the project" ([Learning Path, Options for Shared Ownership](https://innersourcecommons.org/learn/learning-path/project-leader/05/)).
- [Governance Level Guided Project Setup](https://github.com/InnerSourceCommons/InnerSourcePatterns/blob/main/patterns/1-initial/governance-based-project-setup.md) (an early-stage pattern) lists the patterns and maturity levels to start with for each level.

A short section in the project's README or CONTRIBUTING guide is enough, for example:

```markdown
## Ownership

- **Maintained by:** the Payments Platform team (assigned team),
  with Trusted Committers from Cards and Lending.
- **Commitment:** maintenance - bug fixes, security fixes, dependency
  upgrades and on-call. New features come from contributors.
- **Open to:** entire features. Open an issue before starting large changes.
```

## Making ownership visible

- [Standard Base Documentation](https://patterns.innersourcecommons.org/p/base-documentation) includes a "Who we are" section naming the Trusted Committers, and "An explanation of what the criteria are for the project to turn contributors into Trusted Committers - if that path exists."
- The [Trusted Committer](https://patterns.innersourcecommons.org/p/trusted-committer) pattern lists Maintainers and Trusted Committers in the README, and recommends documenting "the scope of your Trusted Committer role".
- GitHub's [CODEOWNERS](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners) file lets you "define individuals or teams that are responsible for code in a repository", and branch protection can require their approval.
- Backstage's `spec.owner` field records the owner in a software catalogue. It is for display, and "not to be used by automated processes to for example assign authorization in runtime systems".
- [Centralized InnerSource Repository Governance](https://github.com/InnerSourceCommons/InnerSourcePatterns/blob/main/patterns/1-initial/centralized-repository-governance.md) (an early-stage pattern) audits repositories against a readiness profile per operating model, including CODEOWNERS.

## Patterns for common pressures

| Pressure | Published responses |
|---|---|
| The host team won't take on maintenance of contributed code | [30 Day Warranty](https://patterns.innersourcecommons.org/p/30-day-warranty); [Reluctance to Accept Contributions](https://github.com/InnerSourceCommons/InnerSourcePatterns/blob/main/patterns/1-initial/reluctance-to-accept-contributions.md) |
| Teams can't share deployment or on-call | [Service vs. Library](https://patterns.innersourcecommons.org/p/service-vs-library); the Learning Path's options for "You build it, you run it" in [Options for Shared Ownership](https://innersourcecommons.org/learn/learning-path/project-leader/05/) |
| The host team is flooded with contributions | [Extensions for Sustainable Growth](https://patterns.innersourcecommons.org/p/extensions-for-sustainable-growth); [Core Team](https://patterns.innersourcecommons.org/p/core-team); Flutter's [Major vs Minor](https://innersource.flutter.com/blog/major-vs-minor) |
| Nobody owns it any more | [Group Support](https://patterns.innersourcecommons.org/p/group-support); [Explicit Shared Ownership](https://github.com/InnerSourceCommons/InnerSourcePatterns/blob/main/patterns/1-initial/explicit-shared-ownership.md) |
| Decisions across maintainers in different teams | [Transparent Cross-Team Decision Making using RFCs](https://patterns.innersourcecommons.org/p/transparent-cross-team-decision-making-using-rfcs); Flutter's [Lazy Consensus](https://innersource.flutter.com/blog/lazy-consensus) |
| Unpopular work, such as security and dependency upgrades | Flutter's [Unpopular Work](https://innersource.flutter.com/blog/unpopular-work) |
| An emergency change outside normal approvals | The "Emergency Changes" section of Flutter's [Major vs Minor](https://innersource.flutter.com/blog/major-vs-minor) |

## Financial services considerations

- **Who can see the code is a separate question from who decides on it.** [Balancing Openness and Security](https://github.com/InnerSourceCommons/InnerSourcePatterns/blob/main/patterns/1-initial/balancing-openness-and-security.md) (an early-stage pattern) describes sharing levels such as PUBLIC, INTERNAL, RESTRICTED and CLOSED, and agreed rules such as "Code from SHARED repositories will not be distributed directly to Production."
- **Regulation can be a reason to keep deployment separate while sharing code.** [Service vs. Library](https://patterns.innersourcecommons.org/p/service-vs-library) lists "Teams may have different security or regulatory constraints governing their deployments" as a force, and Flutter's use of it is "driven by varying regulatory requirements, service and incident management practices and infrastructure skill sets in different areas of the business."
- **Some changes need explicit sign-off, whatever the model.** "When a change introduces a new 3rd party dependency the security, data protection and legal teams must have time to review this usage. Such teams typically require you to wait for an explicit approval before proceeding" ([Flutter, Lazy Consensus](https://innersource.flutter.com/blog/lazy-consensus)).
- **Review is part of the compliance story.** "Support Compliance - Standardized review processes aligned with regulatory needs to build audit-friendly software" ([Driving InnerSource Culture](https://osr.finos.org/docs/InnerSource/driving_innersource_culture)).
- PayPal's InnerSource programme began with regional teams that "ensure that PayPal complies with the different regulations of the many different countries it works in" ([InfoQ](https://www.infoq.com/news/2015/10/innersource-at-paypal)).

## Moving between models

A project's answers change over time.

- Group Support is expected to "dissolve again at some point". If the project continues in the long run, "use this period of stable group support to find a long-lived way to support it (e.g. Core Team)" ([Group Support](https://patterns.innersourcecommons.org/p/group-support)).
- At Flutter, Guest Contribution capabilities "if contribution stops over time can become Delegated", that is, built and run by one division for the others ([Flutter, Choosing Inner Source](https://innersource.flutter.com/how/choose/)).
- When contractors built the code, plan the handover from the start, including "Identification of new a maintainer team" ([Transitioning Contractor Code to InnerSource Model](https://github.com/InnerSourceCommons/InnerSourcePatterns/blob/main/patterns/1-initial/transitioning-contractor-code-to-innersource-model.md), an early-stage pattern).
- Plan for Trusted Committers leaving, and thank them publicly ([Trusted Committer](https://patterns.innersourcecommons.org/p/trusted-committer)).
- At its top Ownership level the [FINOS Maturity Matrix](../Maturity-Matrix/Project.md) asks for "a clear adoption strategy (putting projects up for adoptions)" and "a clear maintenance / deprecation strategy".

## Related playbook pages

- [InnerSource Blueprint](./Blueprint.md), step 3, Define Ownership and Governance.
- [Identifying InnerSource Project Candidates](./Best-Candidates.md), for when a project needs strong central governance.
- [Organisational Enablement](./Organisational-Enablement.md), for funding and management structures such as [Review Committee](https://patterns.innersourcecommons.org/p/review-committee), [Contracted Contributor](https://patterns.innersourcecommons.org/p/contracted-contributor) and [Dedicated Community Leader](https://patterns.innersourcecommons.org/p/dedicated-community-leader).
- [Agentic Development](./Agentic-Development.md): agent-written changes go through the same ownership and review model.
