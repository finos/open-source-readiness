---
title: Project Level Metrics
tags: 
  - OSPO (Role)
  - CTO/CIO (Role)
  - Developer
  - Placeholder
  - Project-Measurement
sidebar_label: Project
---

For a given open source project, here are some ways of measuring the health of the project, thereby determining [Dependency Risk](../Risks/Dependency-Risk).

## What To Measure

<BoxOut title="Committer Strength" image="/img/bok/metric.png">

_Number of individual committers (within a given recency)_. 

[GitHub](https://github.com) provides some indication of this for each project.  First on the front page of the project it gives a committer count:

![GitHub Committers](/img/bok/metrics/committer-strength-1.png)

Secondly on the Insights/Pulse page (for example [here](https://github.com/finos/spring-bot/graphs/contributors)) you can see the activity for each committer, like so:

![Pulse for a committer](/img/bok/metrics/committer-strength-2.png)

**See:**

 - [Backstage](https://backstage.io): This builds a graph of the tech landscape by consuming other golden-sources of data, such as GitHub, Artifactory, Jenkins, JIRA, etc.   This gives you a really good high-level view of the whole landscape.   More and more sources are getting backstage plugins to allow them to connect their data.  
 - The [GitHub GraphQL API](https://docs.github.com/en/graphql).   
 - [Cauldron.io](cauldron.io): Open source ecosystem analytics

</BoxOut>

<BoxOut title="Committer Diversity" image="/img/bok/metric.png">

_Diversity of committer organisations_

If all the committers to a project hail from the same organisation, this might represent a single-point-of-failure if the organisation defunds the initiative.

</BoxOut>

<BoxOut title="Stars" image="/img/bok/metric.png">

GitHub and GitLab both allow you to "Star" projects you like.  The number of stars helps as an indicator of all-time popularity but doesn't show whether a project is _still_popular_.

![GitHub Stars](/img/bok/metrics/stars-1.png)

![GitLab Stars](/img/bok/metrics/stars-2.png)

</BoxOut>

<BoxOut title="Issues" image="/img/bok/metric.png">

It can be useful to review the open issues for a project, as well as comparing this with the number of closed issues.  A healthy project like the one below will have vastly more closed issues than open ones.

![GitLab Stars](/img/bok/metrics/issues.png)

</BoxOut>

<BoxOut title="Badges" image="/img/bok/metric.png">

Projects will often advertise "badges" on their [README Pages](https://github.com/finos/spring-bot).  This can be used as another signal for determining [Dependency Risk](../Risks/Dependency-Risk)


![GitLab Stars](/img/bok/metrics/badges.png)

Of particular interest are badges such as:

 - [OpenSSF](https://github.com/ossf/scorecard): This is a checklist of security behaviours.
 - [FINOS Active](https://community.finos.org/docs/governance/software-projects/stages/active/): indicates the project is now mature in terms of quality and community.
 
Foundations like [Apache](https://github.com/apache) don't rely on badges, but instead rename their projects when active.   Therefore [Incubator-Pegasus](https://github.com/apache/incubator-pegasus) will become simply "Pegasus" once it reaches Active state.

</BoxOut>

<BoxOut title="Release Cadence" image="/img/bok/metric.png">

For an open source / inner source project, how quickly are changes incorporated and released?  If this can be done automatically, this is often (but not always) a sign of a mature [CI / CD Pipeline](https://en.wikipedia.org/wiki/CI/CD).  

For GitHub projects, details of the [releases](https://github.com/apache/echarts/releases) and [tags](https://github.com/apache/echarts/tags) are readily available, both summarised on the front page:

![GitLab Stars](/img/bok/metrics/releases-1.png)

Broken down more thoroughly in the /tags and /releases sub-pages:

![GitLab Stars](/img/bok/metrics/releases-2.png)

... and available programmatically via GraphQL.

</BoxOut>


<BoxOut title="Total Cost of Ownership (TCO)" image="/img/bok/metric.png">

How does using open source software compare with buying off-the-shelf?  The costs are very different.

**See:**
 
  - [How useful are ‘proprietary vs. open source’ TCO studies?](https://www.linux.com/news/how-useful-are-proprietary-vs-open-source-tco-studies/) - from linux.com.

</BoxOut>
