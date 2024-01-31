---
title: Building an Open Source Culture
tags: 
  - Developer (Role)
  - Business (Role)
  - OSPO (Role)
  - Placeholder
  - InnerSource
  - Level 3 (OSMM)
sidebar_position: 8
sidebar_label: Culture
authors:
  - name: Vicki Chung3
  - name: Rob Moffat
  - name: Rhyddian Olds
  - name: Andy Smith
image: /img/bok/page-types/activity.png
---

When people think about open source, most often they think about the _engineering aspects_: contributing or consuming code.  But community and culture are a central part of the open source world and should not be overlooked. 

The foundation of open source is the idea of individuals coming together to build a community where they can contribute their talents and resources and learn from each other. 

This article looks at fostering developer relations, building open source community and changing culture an at an organization.

## Changing Culture

Historically, employees in banks have faced challenges contributing to open source due to factors such as stringent regulatory environments, the sensitive nature of financial data, concerns over intellectual property rights, lack of internal policies or guidelines related to open source contributions, and a traditional banking culture that may not fully embrace the open, collaborative ethos of open source development.

Building a _culture around open source_ is crucial to encourage contributions in the rapidly evolving financial technology landscape.

## Organizational Development

### 1. Provide Clarity

_[Policies and guidelines](../../Artifacts/Policy) help **provide clarity** to employees and give them confidence that they are behaving in line with the firm's expectations._ 

 - Your [OSPO](../../Artifacts/OSPO) should publish and advertise their [policies and guidelines](Contribution-Compliance).

 - An internal [wiki](https://en.wikipedia.org/wiki/Wiki) or [microsite](https://en.wikipedia.org/wiki/Microsite) space that houses all relevant guidelines and resources can help employees learn about an organization’s open source efforts.

- You need to supply **clear, golden paths** (or templates) for the correct behaviours on topics such as:
  - [Contribution](Contribution-Training)
  - [Consumption](../Level-2/Consumption-Training)
  - [Open Sourcing A Project](../Level-4/Open-Sourcing-A-Project) 
  - and also _participation_ (discussed below).
 
 - You need to **Remove The Fear**:  you have to keep messaging that contributing to Open Source is OK.  In lots of institutions, drawing attention to your work has been considered harmful.  In some institutions code exfiltration has historically been a sackable offence.

 - Initially, these processes may be complex, but you should **work to simplify them** over time.   See the [Process Metrics](../../measurements/Process) article for more details. 

### 2. Build Awareness

_In addition, it is important for your [OSPO](../../Artifacts/OSPO) to **build awareness** of them within the organization._

Once an organization has established policy and [training](Contribution-Training), it is important to build awareness around the open source ecosystem to encourage employees to contribute code, make use of open source software, and participate in open source activities.  Finance is not a domain traditionally comfortable with the values of Open-Source, such as working in public and sharing code and ideas.  How to overcome this?

 - Host and advertise **workshops** or **training sessions** to build awareness across the organization and provide familiarity with the guidelines for engagement.

 - **Internal Conferences**:  Get people to talk about the open source code they're using and building.

 - **Building The Catalogue**: Track all the open source and InnerSource projects within the firm and make this visible.  See also [Organisational Metrics](../../measurements/Organisation) article.

 - **Guilds** / **Centres of Excellence** so that like developers can work together.  E.g. having a JavaScript community within the organisation and devolving to them to set up events, handle training etc.

 - **Bringing in External Community Managers**: to create communities and guilds where there wasn't one before.
 
 - **Gamification** Points / Rewards / Badges for the right behaviour such as doing talks, etc.

 - **Make allowances** for open source work as part of the day job. (Google's 20% time?!)

 - **Simplify manager approval** for working on specific projects. 

 - **Recognition** of star contributors

 - **Shift-Left of Licensing**: can you identify which OSS licenses are being used by your projects at build time, rather than once the projects are released?  (see also: SBOMs)

 - **Top-Down Buy-In**: get senior managers to telegraph their approval of OSS 
 
  - **Newsletters**


### 4. Public Engagement

Participation in **external engagements** can be done in parallel with internal organizational development, including having representation at **meetups and conferences**, as well as participating in **working groups** and **special interest groups**.

All of this helps raise the profile of your firm's open source commitment and demonstrates to staff what can be done. 

- **Hackathons** are another great way to engage and collaborate with the open source community. Participating in community events like this helps highlight an organization’s open source initiatives and generate opportunities for more potential engagements and collaborations.

  **See:**
    - [FINOS BMO Hackathon Blog Post](https://www.finos.org/community-spotlight/community-spotlight-interoperability-regtech-hackathon-winners)
    - [Global Accessibility Hackathon Blog Post](https://www.finos.org/community-spotlight/community-spotlight-gaad-hackathon-winners) 


- **Encouraging External Interaction**: e.g. covering the expenses of developers going to conferences, getting them to do talks at those conferences, asking people to attend meetups, asking people to engage with external open-source projects, giving people time to work on Open-Source.


### 4. Outreach

In addition to participating in events, **connecting with other organizations’ representatives** to learn how open source is implemented in different environments can be beneficial. 

 - **OSPO Ambassadors**: A great example of this is [Goldman Sachs’](https://www.goldmansachs.com) Open Source Ambassador Program, where they establish relationships with other firms’ [OSPO](../../Artifacts/OSPO)s and set up quarterly meetings to discuss best practices and even collaboratively brainstorm ideas and initiatives to work on together or separately.

 - **Foundations:** you can also work on relationships with [Foundations](../Level-4/Foundations) and get them involved in company events.
 - **External Speakers**: getting high-profile maintainers from OSS projects used in the firm to come and talk.
 

### 5. Embed Open Source In Process

_Even where contributing to Open-Source is allowed, the amount of process involved might be too onerous to make it worthwhile._

 - **Project Initiation:** Ideally, the decision to open source (or not) should be part of the project initiation process.  

 - **Involve Recruitment**:
   - You should be **hiring for open source competency**:  [HR](../../Roles/HR-Training) should [understand open source skills](https://ospo-alliance.org/ggi/activities/hr_perspective/).  (see [Talent](Talent) article for more details).
   - Positioning bank as an engineering organisation due to its open source credentials.
   - Open source visibility makes the bank a more attractive place to work.
    
 - **Educating Managers**: sometimes, managers need to be educated as to why their staff should be allowed to contribute to open source - what do they get out of it?  How can they be educated to value the long-term benefits? 
 
 - **Critical Dependencies**:  What are the critical strategic open source dependencies of the organisation?  It should be easier to get approval to work on those.
 
- **Sustaintability**: creating open source projects may be more [sustainable than internal ones](../../risks/Dependency-Risk).  Can we get people to think about this for their own projects?  Is it better for the bank if my project is open source?  

 - **Measure and Improve**: How long does it take to get started?  (See [Process Metrics](../../measurements/Process)).  Do you have particular parts of the process that could be sped up through automation?
 
    - **DLP**:   There are various approaches to minimizing the effort involved for [DLP](../../risks/Data-Leakage-Risk) reviews, such as [GitProxy](https://github.com/finos/git-proxy), using [personal machines or ephemeral desktops](Publication) etc.
    - **Audit**:  Does each new Open-Source project need an audit process?  Can't this be standardized?
    - **Approval**: who approves a new open source project?  How about contribution to existing (external) projects? Is the process streamlined?
    - **Lifecycle**: who is in charge of the creation/removal of Open-Source projects for the organisation?
    - **Estate Management**: does anyone keep track of the external estate of Open-Source projects (or InnerSource ones).
    - **Vulnerabilities**: do you have appropriate controls around [checking for vulnerabilities](../Level-2/Supply-Chain-Security) in your projects? (See [Organisation Metrics](../../measurements/Organisation))

## Changing Behaviour

_Many developers lead a double life: their corporate selves and their external, open-source persona.  How do you merge these?_

- **Mentoring**:  work with developers to build their open-source profiles.  Allow the leaders to train those inexperienced in Open-Source contribution.

- **DEVX (Developer Experience)**:  can you reduce the number of disparate sources of information (JIRA, Email, GitHub, vulnerabilities) for the developer, to reduce their cognitive load?  
  - Platforms - can the OSPO improve the state of tooling within the orgranisation by working with the platform teams?  (License compliance, vulnerabilities, sustainability)
  - A lot of infratstucture in platforms is built on open source. Can you prioritise improvements to these projects?
- **Networking**:  how can you put like developers together within the organisation?  Can you find out which tools+libraries developers are using, and share with them details of who else uses it, and training resources?
- **Scorecards**: [Discover](https://www.discover.com/company/) are looking at building project scorecards using the data-graph from [Backstage](https://backstage.io).  Can you rate the quality of the project based on documentation, licensing, observability, test coverage?  See the article on [Project Metrics](../../measurements/project) for more details.
- **Recommendation Algorithm**: Once you have a graph of projects-technologies-developers, can you build recommendations of blog articles, training courses and technologies for developers based on what other, similar developers/projects are doing?

## InnerSource

_Many firms see Inner Source as a good way of sharing work internally, as well as building the right mindset and tool familiarity for external open-source contribution._

### What is InnerSource?

The goal of InnerSource is to try to change the internal culture of the company to be more like Open Source.  That is:

 - Improving collaboration across the organization
 - Establish communication channels across the organization via Open-Source style tools (such as PRs, Issues and Comments)
 - Increase productivity, quality, code re-use, transparency and trust via publishing source code
 - Breaking organizational silos and spotlighting talent across the organization.
 
Additionally, many see Inner Source as being _a stepping stone_ to Open Source and an easier sell to [Product Managers](../../Roles/Product-Manager) who don't want their staff distracted by committing to open source projects.

**See Also:**: [InnerSource Commons Website](https://innersourcecommons.org)

### The Value of InnerSource

_Trying to change the internal culture of the company to be more like Open Source._

Sometimes, it's easier to get your company involved in InnerSource before making the full leap to open source contribution.  

> "InnerSource is the use of open source software development best practices and the establishment of an open source-like culture within organizations for the development of its non-open-source and/or proprietary software. The term was coined by Tim O'Reilly in 2000" - [Inner Source, _Wikipedia_](https://en.wikipedia.org/wiki/Inner_source)

In practice, this means opening up _internal_ projects to workflows such as issue tracking, pull requests etc.  If projects are started as InnerSource, you are at least starting to use the tools and practices of open source in your organisation.

Some reasons for considering this (from [Wikipedia](https://en.wikipedia.org/wiki/Inner_source)):

- Improve collaboration across the organization
- Establish communication channels across the organization
- Increase productivity, quality, code re-use, transparency and trust
- Remove organizational silos and identify talent across the organization
- Improve sustainability of in-house projects (since other parts of the organisation can re-use or contribute to them)
- Bridge the gap between open source and proprietary tooling.  Often, this _improves_ tooling internally whilst training staff in how to use open source tooling. 
- Make recruiting and onboarding easier.

### Promoting InnerSource

- **Bring External Tools In**: e.g. stand up [GitHub enterprise](https://github.com/enterprise) or [GitLab Enterprise](https://about.gitlab.com/enterprise/), allow everyone to contribute to that.  Consider [Stack Overflow for Teams](https://stackoverflow.co/teams/) 

- **Advertise Inner Source Projects**: InnerSource stands or falls by the amount of internal adoption it receives.  Make sure there is regular communication about the most important InnerSource projects.

- **Encourage Cross-Project Pull Requests**: Rather than one team requesting functionality from another, can they be encouraged to raise PRs for the functionality they need?

**See Also:**

 - [Using open source methods for internal software projects](https://www.oreilly.com/content/using-open-source-methods-for-internal-software-projects/) - Article by Jared Smith of O'Reilly.
 - [InnerSource Commons](https://innersourcecommons.org): InnerSource Commons is the world's largest community of InnerSource practitioners. 
 - [Wikipedia Page on InnerSource](https://en.wikipedia.org/wiki/Inner_source).
 - [Presentation on Inner Source Licensing](/docs/bok/osr-resources/InnerSource).
 

## Conclusion

In conclusion, in addition to defining firm policies and guidelines, establishing an open
source program that engages with the broader community helps to support an organization’s
efforts to scale its open source ecosystem. Engaging with the open source community in a
variety of ways helps to foster developer relations and encourage collaboration between
organizations in the broader open source community.
