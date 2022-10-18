---
title: OSR Playbook
---

This article contains some ideas for solving common problems when starting an OSPO.  It's divided into sections according to the type of problem you are trying to solve.  

## Funding

_How to make the case for funding an OSPO within an organisation._

- **Legal**: sometimes, OSPOs are started from a position of legal necessity.  Are you using appropriate licenses?  Does someone have to adjudicate which packages are allowed and which aren't?

- [Code Duplication](code-duplication): a lot of times, people need changes to an open-source project.  If you don't allow them to contribute to the original project then they're going to fork the project internally.  If you are a large organisation, you may end up with several different, incompatible forks of some open source project.  This has to be maintained.

- **Sharing Cost**: Working on open source projects should mean that cost is amortised amongst the collaborating organisations.

## Staffing

_Who do you need in the OSPO?_

- **Guild Model**:  ideally, you need representatives interacting with the OSPO from all the areas of business: finance, HR, Legal etc.   Several firms operate their OSPO on a "Guild Model", with staff being present in the OSPO and their line function.
- **IP Council**:  You may need someone who is expert on software licensing if this is part of the remit of your OSPO.
- [IP Policy](ip-policy): The organisation's IP Policy has a bearing on whether employees can contribute to open source.  

## Remit

_What concerns are inside the OSPO?  What should you not focus on?_

- **A Software Catalogue**: sometimes, an OSPO is about mandating certain types of technologies.  Are you trying to establish standards for the estate?   
- **Vulnerabilities**:  who is dealing with reported vulnerabilities on used projects?  Is there reporting and a process around closing these?   Should the OSPO be tracking that?   In order to establish this, you will need to know what software is being consumed within the organisation.

## Culture

_Finance is not a domain traditionally comfortable with the values of Open-Source, such as working in public and sharing code and ideas.  How to overcome this?_

- **Internal Conferences**:  Get people to talk about the open source code they're using, building
- **InnerSource**: to get people to share within the firm, with a view to do more externally
- **Building The Catalogue**: (using backstage, for example)
- **Guilds** / **Centres of Excellence** so that like developers can work together.  E.g. having a JavaScript community within the organisation and devolving to them to set up events, handle training etc.
- **Bringing in External Community Managers**: to create communities and guilds where there wasn't one before.
- **Gamification** Points / Rewards / Badges for the right behaviour such as doing talks, etc.
- **Encouraging External Interaction**: e.g. covering the expenses of developers going to conferences, getting them to do talks at those conferences, asking people to attend meetups, asking people to engage with external open-source projects, giving people time to work on Open-Source.
- **Remove The Fear**:  you have to keep messaging that contributing to Open Source is OK.  In lots of institutions, drawing attention to your work has been considered harmful.  In some institutions code exfiltration has been a sackable offence.
- **Shift-Left of Licensing**: can you identify which OSS licenses are being used by your projects at build time, rather than once the projects are released?  (see also: SBOMs)


## Changing Behaviour

_Many developers lead a double life: their corporate selves and their external, open-source persona.  How do you merge these?_

- **Mentoring**:  work with developers to build their open-source profiles.  Allow the leaders to train those inexperienced in Open-Source contribution.
- **Education**: sometimes, managers need to be educated as to why their staff should be allowed to contribute to open source - what do they get out of it?  How can they be educated to value the long-term benefits?
- **Create a Hub**:  build a site where people can find the resources they need.  Tutorials, training, documentation, etc.  
- **Golden Paths**:  is there a "golden path" to doing something right?  e.g. starting a new application, open-sourcing a project?  Can you make this path as simple as possible?
- **DEVX (Developer Experience)**:  can you reduce the number of disparate sources of information (JIRA, Email, GitHub, vulnerabilities) for the developer, to reduce their cognitive load?  
- **Networking**:  how can you put like developers together within the organisation?  Can you find out which tools+libraries developers are using, and share with them details of who else uses it, and training resources?
- **Scorecards**: Discover are looking at building project scorecards using the data-graph from Backstage.  Can you rate the quality of the project based on documentation, licensing, observability, test coverage?  
- **Recommendation Algorithm**: Once you have a graph of projects-technologies-developers, can you build recommendations of blog articles, training courses and technologies for developers based on what other, similar developers/projects are doing?

## Inner Source

_Many firms see Inner Source as a good way of sharing work internally, as well as building the right mindset and tool familiarity for external open-source contribution._

- **Bring External Tools In**: e.g. stand up GitHub enterprise, allow everyone to contribute to that.
- **Advertise Inner Source Projects**: InnerSource stands or falls by the amount of internal adoption it receives.  Make sure there is regular communication about the most important InnerSource projects.


## Process

_Even where contributing to Open-Source is allowed, the amount of process involved might be too onerous to make it worthwhile._

- **DLP**:   There are various approaches to minimizing the effort involved for DLP reviews, such as GitProxy, using personal machines, ephemeral desktops etc.
- **Audit**:  Does each new Open-Source project need an audit process?  Can't this be standardized?
- **Approval**: who approves a new open source project?  How about contribution to existing (external) projects? Is the process streamlined?
- **Lifecycle**: who is in charge of the creation/removal of Open-Source projects for the organisation?
- Estate Management: does anyone keep track of the external estate of Open-Source projects (or Inner Source ones).
- Vulnerabilities: do you have appropriate controls around checking for vulnerabilities in your projects?

## Tools

_Some tools which help OSPOs do their work._

- **Backstage**:  Builds a graph of the tech landscape by consuming other golden-sources of data, such as GitHub, Artifactory, Jenkins, JIRA, etc.   This gives you a really good high-level view of the whole landscape.   More and more sources are getting backstage plugins to allow them to connect their data.  
- **SBOMs**: _tbd._
- **LFX**: _tbd._
- **cauldron.io**: _tbd._
