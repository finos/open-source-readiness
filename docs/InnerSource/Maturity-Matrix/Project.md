---
title: Project Maturity
sidebar_label: Project
---

## Tooling and Processes

### Development & On-boarding

- Level 0:

- Level 1:

- Level 2:

  - External developers can build and test the code locally with minimum help
    from core team.
  - Team hosts open office hours at a regular cadance

- Level 3:
  - External developers can pull, build and test the code locally and
    automatically.

### Continuous Integration & Testing

- Level 0:

  - Code compiles and can be executed.
  - A mix of automated and manual tests

- Level 1:

  - Unit tests are automated
  - Teams has develops their own CI process, using non corporate or standard CI
    tools.

- Level 2:

  - Automated builds execute a range of tests and pre-release gate checks-
    Integration tests are automated
  - There are CI environments.
  - Teams has developed their own CI process, using corporate CI tools

- Level 3:

### Continuous Deployment & Building

- Level 0:

  - Builds are manual or scheduled (ie nightly)
  - Approved PR does not guarantee Production release

- Level 1:

  - Builds are automated on merge. Not automatically releasing to pre-prod
    environments.
  - Approved PRs are integration-tested and deployed to Production on host team
    cadence

- Level 2:

  - Approved PRs can be deployed to Production independent of host team release
    cadence

- Level 3:
  - Automated CI/CD allows Production release upon PR approval, consistent with
    the organization's regulations and processes.
  - Releases should be gated on meeting code quality metrics and standards.

### Development Practices

- Level 0:

  - Pulling the code and setting it up to run locally is poorly defined and
    often requires reaching out to the core team developers for help
  - Code Reviews are happening on demand
  - Contribution support is not planned and may require overtime from Trusted
    Committers

- Level 1:

  - Code Reviews are required but scrutiny may vary between in-team and outside
    submissions
  - Capacity is allocated in sprint for Trusted Committer activities

- Level 2:

  - Automated linters and style checks run on commit, so Code Reviews focus on
    design topics
  - Design reviews happen for large changes before coding begins, to ensure
    quality and minimize the amount of rework/frustration resulting from code
    reviews
  - Code review needs to be done to a certain standard, by independent
    (disinterested) parties.

- Level 3:

  - Code Review process is universal for all submissions regardless of which
    team authored the code.
  - Code review is done by both, internal and external team members.
  - Issue prioritization is similar to open source process: backlog is open,
    such that anyone in org can view and add to it; process to add new issue
    documented; automated checking for similar issues in tooling. Project team
    is working on backlog (not just theatre).
  - Process maintainers use to decide which work gets done is transparent and
    contributors understand how that process works.

- Examples:
  - [Project Lifecycle Definition](https://)
  - [Project Activation](https://)

## Documentation, Standards, & Communication

### Context for Implementation

- Level 0:

  - Opportunity provided by central CI/CD implementation or code review

- Level 1:

- Level 2:

- Level 3:

### Roadmap

- Level 0:

- Level 1:

- Level 2:

  - Open backlog/issue tracker

- Level 3:
  - Forward looking roadmap is published for anyone in the organization
  - Meeting minutes from design discussions are published

### Documentation & Standards: Contributing Process

- Level 0:

  - Most repositories have non-trivial README files

- Level 1:

  - Contributing guidelines are available in either the README or a separate
    CONTRIBUTING file
  - Each repository has a README outlining (a) user value, (b) how to run

- Level 2:

  - SLAs for inquiry responses and code reviews
  - Documented contributing standards, including code style and test coverage
    requirements
  - Defined post-merge expectations from contributors (i.e., 90-day warranty)

- Level 3:

### Documentation & Standards: Preferred Idioms & Design Patterns

- Level 0:

- Level 1:

- Level 2:

- Level 3:
  - Document architecture (e.g. like architecture.md)

### Community & Communication

- Level 0:

  - Accepting contributions
  - Do you have multiple people contributing and using the like-minded projects?

- Level 1:

- Level 2:

  - Documented support channels.

- Level 3:

## State of the Code

### State of the Code: Overview

- Level 0:

  - Multiple code versioning systems
  - Significant percentage of legacy code without documentation, automated tests
    and deep SME knowledge
  - People refusing to share //rephrase and/or move to culture (how about: Code
    components tied to specific individuals)

- Level 1:

  - Single code versioning system
  - An active effort is made to modernize some legacy code
  - Remaining legacy code continues to exist without documentation, automated
    tests and deep SME knowledge
  - Secrets/passwords are stored in the code, preventing it from being made
    public

- Level 2:

  - An active effort is made to document legacy code while it exists
  - An active effort is made to remove secrets from the code

- Level 3:
  - An active effort is made to modernize most legacy code and implement
    automated tests for the remaining parts
  - Passwords and keys are managed outside the code

### Technology

- Level 0:

  - XX% of legacy code
  - XX% of orphan code
  - Private Repos
  - People refusing to share
  - Nightly builds
  - Mainframe code - code owners don’t have SMEs who understand the complexity
    of changing API

- Level 1:

- Level 2:

- Level 3:

## Leadership

### Leadership: Overview

- Level 0:

  - Grass roots efforts within the team with no leadership support (or
    potentially even awareness).

- Level 1:

  - Grass roots within thte team with leadership knowledge and no-one impeding
    progress.

- Level 2:

  - Leadership has stated their support of InnerSource efforts.
  - InnerSource is not the default, but a supported option. Choice of whether to
    InnerSource often dictated by other priorities (e.g. time to release).

- Level 3:
  - Full support communicated by leadership for InnerSource initiative.
  - Participation and contribution to inner sourced projects, including and
    especially projects beyond one's core team, group, and/or business unit, can
    be accounted for in the company's performance management system and directly
    contribute to decisions about incentive compensation -- i.e., such "assists"
    are formally recognized as important work and rewarded as such; InnerSource
    goals are recognised by leadership in HR in annual reviews.
  - Policy to InnerSource by default (reuse first).
  - Regular reporting on business value delivered by InnerSource.

## Culture

### Culture: Overview

- Level 0:

  - Accepting contributions from inside the team or within the org (ie they are
    all under my boss's boss)
  - Product owners are largely unaware of InnerSource

- Level 1:

  - Accepting outside contributions after preliminary discussion
  - Double standards for inside-the-team and outside contributions
  - Escalations are normal and necessary for cross-org deliverables
  - Product owners may view InnerSource activities as impediments to feature
    delivery

- Level 2:

  - Accepting contributions from anyone based on standard documented
    contribution process
  - Leaders reward reuse above writing brand new code
  - Product owners understand value of reuse and better documentation

- Level 3:
  - Public credit is given to contributors by the code owners
  - Product owners and teams negotiate scope without leaders' involvement

## Ownership

### Ownership: Overview

- Level 0:

  - It is not clear who is responsible and maintenance done on a best effort
    basis with no SLAs.

- Level 1:

  - Have defined expectations of person contributing code in terms of code
    maintenance, often with an SLA for a defined period of time.

- Level 2:

  - Have more than one department contributing.
  - Expectation that the team that nominally owns the area is responsible fo the
    code that others are contributing.

- Level 3:
  - Have a clear adoption strategy (putting projects up for adoptions)
  - Have a clear maintenance / deprecation strategy.
  - Have at least 3 maintainers and at least 1 from different department or
    business group.
  - More than one department with decision making ability.
  - The people finding the issues are the ones fixing the code (as opposed to
    original contributor).
