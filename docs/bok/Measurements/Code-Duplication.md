---
title: Code Duplication
tags: 
  - OSPO (Role)
  - Operational Risk
  - Codebase Risk
  - Organisational-Measurement
image: /img/bok/metric.png
---

Code duplication occurs when internal staff are forced to create copies of external (or other internal code) and modify it to suit their own purposes, thereby increasing the maintenance overhead.

## What to Measure

<BoxOut title="Internal Forks" image="/img/bok/metric.png">

Ideally, you want to know how much _developer time_ is being spent maintaining internal forks.  However this might be hard to come by without asking people.

Useful proxies for this which you could discover programmatically might be:

 - **Number of internal forks of pre-existing open source projects** which should show up as repositories in your internal source code repository system (GitHub Enterprise, Bitbucket etc.).
 
 - **Number of commits to these forks by staff** as a proxy of the variation from the open source version
 
 - **releases to these forks** which also acts as a proxy to the work required to maintain them
 
 - **Number of developers contributing to these forks** which gives you some scale of the size of the problem.
 
Higher numbers here are _worse_. 
 
</BoxOut>

## Making The Case For Avoiding Code Duplication

Perhaps the main advantage of open source software is that it can be endlessly duplicated for almost no cost.  Indeed, the _marginal cost_ of an extra user or extra deployment of a piece of open source software is zero.  

From this perspective, it would seem likely that everyone would have their own version (or [Fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo)) of a piece of software.   However, in practice this is often a bad idea, for the following reasons:

1.  **A Fork Doesn't Automatically See Improvements**.  Because a fork is made at a fixed point in time, and bug fixes, feature upgrades and other improvements made to the original software won't be applied in the fork.  This takes effort.  

2.  **Forks Need To Be Maintained**.  The value of a piece of open source software is largely in the community devoted to maintaining it.  The community writes documentation, responds to issues, creates releases and publicly proselytises.  _A fork of the software will also need maintainers doing this too._

3.  **There Is Safety In An Ecosystem**.  Despite high-profile cases like [Log4Shell](https://en.wikipedia.org/wiki/Log4Shell), it is safer to use software which is well-supported by an ecosystem, since bugs and security flaws get found faster.  Taking the Log4Shell example, it's easier to upgrade this library from _known broken releases_ to _known good releases_ than to try and understand whether any given _fork_ is vulnerable, or how to fix it.      A variation on this is Linus's Law, coined by Linus Torvalds the progenitor of Linux:

>  "given enough eyeballs, all bugs are shallow" - [Linus's Law](https://en.wikipedia.org/wiki/Linus's_law)

For these reasons, open source software is often described as being _free as in puppies_:   yes, you can have the code for free, but with ownership comes responsibility.  

## Open-Source Gravity

Because of the above reasons, forking for the purposes of maintaining an entirely new version is an uncommon practice in the open source world.  So why would open source projects get forked?

- **Fixing A Bug**.  Sometimes code will be forked by a committed user so that a bug fix can be worked out.  In fact, this is the main way open-source software improves: the user of a piece of software fixes a bug then requests to merge that change back to the main project.  

- **Contributing Missing Functionality**.   It is also very common to create a fork with the intention of trying out a change or working on a new feature, with the eventual goal being to [merge](https://en.wikipedia.org/wiki/Merge_(version_control)) the activity of the fork back into the main codebase.  This both grows the community of developers on the project, but also makes the project potentially more useful to more people, creating a positive feedback loop. 

- **A Change In Direction**.  In rare cases, a project will be forked because some of the community lose faith with the original owners of the project.  For example, [MariaDB](https://github.com/MariaDB) is a fork of the original MySQL database, which was bought by Oracle.  The community didn't appreciate the commercial direction that Oracle were taking with the original project and created a new one.

## Behind The Firewall

In many institutions (e.g. Finance), merging code to a public open source project requires code to cross the organisational firewall and is an opportunity for [data leakage](../Risks/Data-Leakage-Risk).  While code can come _in_ to the organisation, [merging](https://en.wikipedia.org/wiki/Merge_(version_control)) _out_ is prohibited.

This presents a problem for developers behind the firewall if they wish to **Fix A Bug** or **Contribute Missing Functionality**.  They can either:

 - **Contribute to the project in their own time, from outside of the organisation**.  If they are committed enough and not restricted by IP Policy then perhaps they can take action outside of their company.  However, this is difficult, since they wont be able to try out their fixes without access to the organisations' systems.  
 
 - **Find A New Approach**.  In many cases, there are alternatives to a piece of open source software.  Potentially, a developer could swap a dependency that doesn't work for one that does.  In most cases this is not a trivial task and so the developer is forced to...
 
 - **Fork The Project Internally**.  This allows them to make the bug fix they require and release organisation- or project-specific versions of the original code.  As should be clear from the earlier section, _this is not a ideal option_.

## Risks

_Internal Forking_ might be a band-aid solution for developers, but comes with its own risks:


<BoxOut title="Codebase Risk" image="/img/bok/risks/codebase-risk.png" link="../../Risks/Codebase-Risk" linkText="Codebase Risk Details">

- **Increased Maintenance Overhead**.   As already described, owning software has a cost.  Note that within an organisation _the same piece of software could get forked multiple times_, each fork taking its toll on a different development team.

- **Tip:** some organisations have made efforts to measure the amount of code duplication (and therefore developer cost) in order to justify [open source contribution](../Activities/Level-3/Making-The-Case).

</BoxOut>

<BoxOut title="Operational Risk" image="/img/bok/risks/operational-risk.png" link="../../Risks/Operational-Risk" linkText="Operational Risk Details">

- **Increased Security Risk**.  Vulnerability analysis is unlikely to work effectively against proprietary versions of a library.

- **Software Audit Issues**.  It becomes hard to know _where_ an organisation is using a particular piece of software if they are using an unofficial fork of it. 

</BoxOut>

## Conclusion

It should be clear from this article that there is a strong case for allowing developers to contribute to existing open source projects, irrespective of the type of organisation.  The problem is to allow this to be done in a controlled, risk-managed way that doesn't create other vulnerabilities (such as data leakage).


