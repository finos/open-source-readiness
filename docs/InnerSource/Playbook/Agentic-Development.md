---
title: Agentic Development with InnerSource
sidebar_label: Agentic Development
sidebar_position: 9
authors:
  - name: "Russell Rutledge"
---

AI coding agents raise an honest question inside every bank experimenting with them: if an agent can produce working code in seconds, is InnerSource - sharing and reusing code across teams so no one rebuilds the same thing twice - still worth the overhead? The answer for financial services organisations is the opposite of what the question implies: agentic development makes InnerSource *more* necessary, not less, and InnerSource is what makes a flood of agent-generated code safe to run at institutional scale.

## Agentic development raises the InnerSource stakes

Coding agents collapse the cost of producing code that compiles and looks right. They do nothing about the cost of producing code that is **correct** - highly available, secure, and compliant with the regulatory and audit requirements a bank has learned the hard way. That cost is exactly as high as it has ever been; an agent just hides it behind something that looks finished.

There is a second effect that makes this urgent for regulated environments specifically: **when code gets cheap to produce, you get more of it, including duplication.** Duplication used to be self-limiting because it was slow and expensive. Remove that brake and every agent, on every task, will happily re-derive its own slightly different auth flow, retry logic, or logging wrapper, at machine speed. The result isn't one duplicate control - it's a sprawl of near-identical, subtly inconsistent implementations across the estate, and inconsistency is exactly where outages, audit findings, and security gaps live.

InnerSource is the counterweight that moves at the same speed as the problem. A shared, well-governed InnerSource project gives every agent in the organisation a single place to find the vetted implementation instead of inventing a new one.

## InnerSource makes agentic development cheaper and safer

- **Context and token economy.** An agent's context window is a scarce, costly resource, and a bloated context degrades its output. Without a discoverable shared module, an agent has no way to know a capability already exists, so it rebuilds the whole thing from the prompt, burning tokens and reasoning to re-derive something the bank already owns - and often getting the hard parts subtly wrong. A registered InnerSource project lets the agent bring in only the *interface*, not the full implementation: cheaper in tokens, and more correct, because it's standing on a version that's already been hardened.
- **Correctness the agent doesn't know to ask for.** The developer or agent driving a task doesn't know what it doesn't know - the uptime guarantees, the security posture, the compliance edge cases a shared component accreted over years, most of which was never written down anywhere an agent could read. Reproducing that from scratch would take an entire dedicated session and still miss the unknowns. A mature InnerSource project *is* that institutional knowledge, already packaged and correct on first use.

## Agentic development removes InnerSource's traditional adoption barriers

InnerSource has always fought friction, and agent tooling dissolves the two biggest sources of it:

| Barrier | Before | With agentic tooling |
|---|---|---|
| Skill/language gap | A contributor unfamiliar with a project's stack or language couldn't realistically send a change | If you can describe the change, the agent writes the syntax - contributing to someone else's repo, in an unfamiliar language, becomes realistic |
| Discovery | Finding out a reusable project already existed was itself a barrier | AI-assisted search over an internal catalog surfaces existing InnerSource projects before an agent (or a person) starts building from scratch |

The practical effect: people who were previously locked out of contributing - because they weren't developers, or didn't know that stack - can now land a real change, reviewed through the project's normal InnerSource governance. InnerSource stops being a developers-only practice.

## Treat the agent as your most frequent first-time contributor

An agent is a first-time contributor on every single session: it wakes up with no memory of your codebase and has to get oriented from scratch, every time. That is exactly the contributor InnerSource readiness was built for. Every practice this playbook already recommends - a clear README, a real CONTRIBUTING guide, defined ownership, a working test suite - was designed to let a capable stranger land a change without a personal tour.

Agentic development doesn't make those practices optional; it makes them load-bearing in a new way. A README and CONTRIBUTING guide are no longer just documentation for humans - they're the operating instructions an agent reads before it acts. Projects written to be read fluently by both humans and agents will see faster, safer contributions from both.

## What to put in place

1. **Route agent-generated contributions through the same ownership and review model as human ones.** Nothing in this playbook's [Blueprint](./Blueprint.md) changes because an agent wrote the diff - governance, review SLOs, and merge rights still apply, and reviewers should be told when a contribution was agent-assisted.
2. **Point agent tooling at your InnerSource catalog before it starts building.** If engineers are using AI coding assistants, make sure those tools (or the engineers prompting them) are pointed at your registered InnerSource projects first, so the agent's first move is to check for reuse, not to generate a new implementation.
3. **Audit your base documentation for agent-readability, not just human-readability.** A README that assumes a human will ask a colleague to fill in the gaps will leave an agent to guess. Make the project's purpose, interface, and constraints explicit in the docs themselves.
4. **Watch for the duplication signal.** If review teams start seeing multiple, slightly different implementations of the same capability appearing across the organisation in a short window, that's the machine-speed duplication problem above showing up in practice - treat it as a signal to formalise or promote an InnerSource project, not just a one-off cleanup.

## The bottom line

The discipline doesn't disappear with agentic development - it becomes the control point. Coding agents are generating code at a scale no bank has had to absorb before; InnerSource, applied deliberately to agent-assisted contributions as well as human ones, is how that scale turns into a consistent, auditable asset instead of an unmanaged sprawl.
