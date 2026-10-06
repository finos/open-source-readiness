---
title: InnerSource Ownership Models
sidebar_label: Ownership Models
sidebar_position: 6.5
authors:
  - name: "Russell Rutledge"
---

Every InnerSource project has an owner, even when nobody has written the word down.
Someone decides what gets merged, what gets built next, and who answers when production breaks at 2am.
InnerSource changes who is allowed to *propose* a change, but it does not remove the need for someone to be accountable for the result.

In a financial services organisation that accountability is not optional.
Regulators, auditors, and risk teams all expect a named owner for every piece of production code, and InnerSource projects are no exception.
The ownership model is the answer to the question "who is on the hook, and how do outsiders get work in?"

This page describes the common ownership models, when each one fits, and how a project moves from one to the next as it matures.
It builds on the [Blueprint](./Blueprint.md), which asks every project to define ownership and governance, and on the InnerSource Commons [governance levels pattern](https://patterns.innersourcecommons.org/p/governance-levels).

## What ownership has to cover

Whatever model a project picks, it should be explicit about five things:

- **Direction.** Who decides what the project is for, what goes on the roadmap, and what is out of scope.
- **Merge rights.** Who may approve and merge a contribution, and what the review expectations are.
- **Operations.** Who carries the pager, handles incidents, and owns patching and vulnerability response.
- **Accountability.** Which named person or team answers to risk, audit, and the business for the project.
- **Succession.** What happens when the owning team is reorganised, loses headcount, or moves on.

A model that leaves any of these blank still has an owner, just an accidental one.

## The models

### 1. Single owning team, open contributions

One team owns the project end to end and accepts contributions from anyone in the organisation.
The owning team sets the roadmap, reviews every contribution, and keeps the final say.
Contributors work through issues and pull requests like any open source contributor.

This is the usual starting point.
It changes the least about existing accountability, so it is the easiest model to get approved.

- **Fits when:** the project is new to InnerSource, has one clear business owner, or supports a critical or regulated service.
- **Strength:** clear accountability and fast decisions.
- **Risk:** the owning team becomes the bottleneck, and contributors drift away when reviews are slow.

### 2. Trusted committers

The owning team names a small group of experienced contributors, some from outside the team, who hold merge rights and help guide the project.
The owning team keeps accountability, but review load and day-to-day stewardship are shared.

The InnerSource Commons [Trusted Committer pattern](https://patterns.innersourcecommons.org/p/trusted-committer) describes this model in detail.

- **Fits when:** contribution volume has outgrown the owning team's review capacity, and a few outside contributors have earned the team's trust.
- **Strength:** removes the review bottleneck without handing over accountability.
- **Risk:** needs a visible, agreed path for becoming a trusted committer, or it looks like an inner circle.

### 3. Shared stewardship across teams

Several teams that depend on the project share ownership.
Each contributes people, and a steering group made up of those teams sets direction and approves changes to the project's scope.
Merge rights are spread across the participating teams.

- **Fits when:** the project is a shared platform or library that many teams depend on and no single team is the natural owner.
- **Strength:** the teams that rely on the project have a real voice in it, which supports adoption.
- **Risk:** decisions slow down, and "everyone owns it" can quietly become "nobody is accountable." Name one accountable team or role even in a shared model.

### 4. Community-of-practice ownership

A community of practice or guild owns a body of shared guidance, templates, or tooling rather than a deployed service.
Ownership is a role the community fills, with a rotating or elected set of maintainers.

- **Fits when:** the shared asset is documentation, standards, or reference implementations with no production runtime attached.
- **Strength:** low overhead and broad participation.
- **Risk:** without a sponsor and a small amount of protected time, maintenance fades once the early energy passes.

## Choosing a model

| Question | Points toward |
|---|---|
| Does the project support a regulated or critical production service? | Single owning team, then trusted committers |
| Is review capacity the main constraint on contribution? | Trusted committers |
| Do many teams depend on it and none is the natural owner? | Shared stewardship |
| Is it guidance or reference material rather than a running service? | Community of practice |
| Is the project brand new to InnerSource? | Single owning team |

Most projects do not stay in one model.
A common path is a single owning team, then trusted committers as contributors prove themselves, then shared stewardship if the project becomes a platform other teams build on.
Treat the model as something to revisit as the project's maturity and contributor community change, and record the current choice in the project's governance document so contributors can see how decisions are made.

## The human side of ownership

Ownership problems in InnerSource are often not structural.
They are about people and incentives.

- **Fear of losing ownership.** Teams worry that opening a project means giving it away.
  Say plainly, in the project's governance, that the owning team keeps accountability and the final decision.
  InnerSource adds contributors and does not remove the owner.
- **Competing priorities.** Owning teams are measured on their own delivery budget and timeline, and reusability rarely shows up in those measures.
  Contribution review needs protected time and an expectation from management, or it loses to the delivery plan every time.
- **Building contributors, not just users.** An owning team that treats contributors as a source of free labour will not keep them.
  Respond to contributions quickly, explain review decisions, and credit contributors publicly.
- **Recognition.** If a contributor's own manager cannot see the work, it will not last.
  Make it easy for the owning team to tell a contributor's manager what was delivered.

## Practical guidance

1. **Write the model down.** Put ownership, merge rights, and decision-making in the project's governance document, linked from the README.
2. **Name one accountable owner.** Even in shared models, one team or role answers to risk, audit, and the business.
3. **Publish the path to more responsibility.** Say how a contributor becomes a trusted committer or steering group member.
4. **Set a review expectation.** State a target response time for contributions, and measure it.
5. **Plan for succession.** Record what happens to the project if the owning team changes, so a reorganisation does not orphan a shared dependency.
6. **Revisit on a schedule.** Review the model at least yearly, or when contribution volume, dependent teams, or team structure change.

## Related pages

- [Blueprint](./Blueprint.md) for where ownership fits in setting up an InnerSource project
- [Project Guidance](./Project-Guidance.md) for running a project and growing its community
- [Best Candidates](./Best-Candidates.md) for deciding which projects to share at all
- [Agentic Development](./Agentic-Development.md) for how agent-authored contributions fit the same ownership model
