---
title: Creating an Open Source Program Office (OSPO)
tags: 
  - OSPO (Role)
  - Level 2 (OSMM)
sidebar_position: 7
sidebar_label: OSPO
authors:
  name: Pooi Cheong
---

An [Open Source Program Office (OSPO)](../../Artifacts/OSPO) is designed to be the center of competency for an organization's open source operations and structure as defined by the [TODO group](https://github.com/todogroup/ospodefinition.org). 

- Lots of the level 2 activities are probably being performed piecemeal by the organisation.
- Creating an OSPO allows you to centralise and structure all the level 2 activities and allow you to start working on Level 3.

Creating an OSPO is _organisational change_.  Therefore, in this article, we are going to use the formalism of [Kotter's 8-Step Process for Leading Change](https://en.wikipedia.org/wiki/Change_management#Change_models) to structure this article, however, you can approach this any way you want.

## 1.  Create a Sense of Urgency

There are few ways to create a sense of urgency (i.e. fear) around the need for an OSPO.  For example:

- [License Compliance Management](License-Management): it's possible that your organisation isn't doing license management in a comprehensive way.  An OSPO might be a single point of contact for that function.

- [Software Inventory](Software-Inventory) and [Supply Chain Security](Supply-Chain-Security):  events like the [Log4Shell](https://en.wikipedia.org/wiki/Log4Shell) vulnerability are often a catalyst for firms to focus on understanding what open source software they are using and to start looking more carefully at their open source supply chains.

- [Talent](../Level-3/Talent): reportedly, recruitment and retention both become easier when you engage with open source.

- [Reputation](../../Risks/Reputational-Risk): _other_ organisations already have OSPOs and are operating at a higher level than our organisation. 

See Also: 

- [Making the Case for Contribution](../Level-3/Making-The-Case)

## 2. Build a Guiding Coalition

In the first instance, your OSPO should be composed of a "willing coalition".  Please review the [Roles](../../Roles/Introduction) for a list of OSPO-adjacent business roles you will need to engage with.  Different parts of a large organisation will have different priorities, backgrounds and ways of talking and working.  You will need to reach across these gaps.  Here are some tips on how to do this:

- **Understand their priorities**: Research the roles within the company (use the [Roles](../../Roles/Introduction) material here to help start). Familiarize yourself with their key concerns.  If you can learn their KPIs, all the better.  Your OSPO will need to help towards these in order to get their buy-in.

- **Focus on value**: Present the OSPO in terms of the value it can deliver to the organization. Emphasize objectives such as improving efficiency, reducing costs, or enhancing security.

- **Address their pain points**: Listen to what they say and show empathy and understanding for the problems they encounter in their role.

- **Be a strategic partner**: Position the OSPO as a strategic partner. This is especially useful when engaging with security concerns.

- **Provide insights and thought leadership**: OSPOs are a _trend_ in IT.  Share views and research with them to make the case (see the [further reading](#further-reading) section below for examples.

Build trust and credibility: Establish trust by being transparent, reliable, and professional in all interactions. Showcase your track record of success, customer testimonials, and industry recognition to build credibility.

- **Follow up and stay connected**: Maintain regular communication with these stakeholders and keep them informed of relevant developments.

- **Be patient and persistent**: Building any relationship takes time.   

### OSPO Structures

- To start with, the OSPO will probably start as a minimum-viable ["guild" structure](../../Artifacts/OSPO#Staffing). 
- You will need to figure out who the OSPO "reports to", i.e an owning function, e.g. with the [CTO](../../Roles/CTO), [CISO](../../Roles/CISO) etc.  This will highly depend on your organisational structure.  You may want to think about how this influences the focus of the OSPO.   Being part of the [CISO](../../Roles/CISO) may mean your OSPO is limited to helping control security issues.  

## 3. Form a Strategic Vision and Initiatives

Every OSPO is different. Having a clear view on [why you need an OSPO](https://www.redhat.com/en/resources/open-source-program-office-brief) will help you define the vision and areas of focus. This in turn helps with communication with other stakeholders to further secure support and buy-in to create and OSPO. Some examples of OSPO initiatives are:  

1.  Open Source Learning.  
2.  Open Source Compliance
3.  External collaboration

You can visit the [TODO page](https://todogroup.org/guides/create-program/) for more examples of OSPO roles.

### Aligning To KPIs

OSPOs demonstrate their value where they align to the KPIs of other teams.  For example:

- **Security Around Use**:  Can the OSPO help the security team do their job?  There is a big overlap between "Open Source Software in the Organisation" and "Ensuring Security of all software used in the organisation".   The security team might need guidance on understanding [vulnerability response](Supply-Chain-Security) and helping prioritise issues with [software inventory](Software-Inventory). 

> "Security is part of our OSPO's mission - we want to secure our use of open source... but we're a different part of the organisation to security.  We have a partnership approach with them and we are aligned on wanting the same things.  Our [OSPO Lead] understands the OKRs of the security team." - Zack Keppert, Github OSPO Lead  

- **Outgoing Security**:  The OSPO can help by ensuring that the organisation doesn't [Leak IP via open source](../Level-3/Publication). This might be by helping the security team improve their policies, which may not be well-developed around _outgoing_ security risks via open source projects. 

- **Recruiting Talent**:  Becoming [active contributors](../Level-3/Community-Engagement) and demonstrating engineering excellence attracts talent.  See [Recruiting Developers](https://todogroup.org/guides/recruiting-developers/).  Open source can be a ["Shift Left"](https://devopedia.org/shift-left) approach to hiring, where you are improving your organisations' awareness at the top of the funnel due to open source activity.  Microsoft open-sourcing Typescript and VSCode has helped them hire top talent in other areas because of brand awareness.  

- **Procurement**:  OSPO can help avoid undesirable software or license entering the organisation through equipping the procurement team with relevant open source knowledge so they can be more effective in evaluating potential vendors.


## 4. Enlist a Volunteer Army

> To effectively enlist an army you must first identify potential allies and build relationships with them. This can be done through open communication and by involving them in the change process from the beginning. Additionally, another method of enlisting and growing an army is to reward individuals for their contributions and support. This will build morale and motivation, and will organically encourage others to get involved. - [Kotters 8 Step Change Model](https://www.mtdtraining.com/blog/kotters-8-step-change-model.htm)

(tbd.  leave to fill in concrete examples of this)

Who should be the volunteers?  - list these.

- You need to _reward_ people if you want them to volunteer. For example:
   - Improving the CV
   - Rewarding teams for engaging with open source practices.
   - Public recognition by senior leadership team 
   - Oportunity to involve in shaping organisation's OS strategy
   
Identifying the right [motivational drivers](https://growthoughtful.com/motivational-drivers-with-examples/) for your volunteers will help you define an engagement strategy that encourages the desired behaviour from them

## 5. Enable Action by Removing Barriers

Some examples:

- **Procurement**:  they might need some help to understand that procuring OSS is very different.  They cannot get an SLA from an open source project.  They _will_ need to understand [SBOMs](../../Artifacts/SBOMs).

- **Middle Managers**:  (Level 3) they might need to understand that their staff will be contributing to open source projects, this might not be aligned directly to a business goal.  Making OSS contribution part of the OKRs.

- **HR**: they might need to understand how open source can attract talents (https://enterprisersproject.com/article/2021/1/open-source-6-surprising-advantages-enterprises), and leverage open source activities to drive recruitment (e.g. campus events)

- **Process / Policy**: Removing blockers in process.  Getting the policy approved by legal so that you don't need to recourse to them every time you want to do something.  For this you will need an [Open Source Policy](Creating-Policy) 

## 6. Generate Short-Term Wins

OSPOs are usually a small part of the organisation, so you'll have to ruthlessly prioritise. In order to do this, you could either _teach_ other teams, or, if you are going to take action yourself, you could look at:

 - What is deployed
 - What is commonly used (dependencies)
 - What has the greatest business impact
 
Examples:

- Performing a baseline [Software Inventory](Software-Inventory) on a subset of the application estate.  For example, looking at a single  customer-facing application/web property.

- Helping to remediate some vulnerabilities or license compliance issue in one of those applications.

- Making small contributions back to open source projects.

It's important to make sure that you publicise your wins. This means engaging with and communicating to the stakeholders (identified above).

## 7. Sustain Acceleration

> One key aspect of this step is to encourage employees to identify and address any issues that arise and to continuously seek out ways to improve the change initiative - [Kotters 8 Step Change Model](https://www.mtdtraining.com/blog/kotters-8-step-change-model.htm)

- Maintain the momentum from previous steps
- [Make **communication** key to keep change on the top of everyone’s minds](../Level-3/Community-Engagement)
- [**Reward** those for endorsing change](../Level-3/Culture)
- [**Metrics** to measure success](../../Measurements)
- Improving process via feedback from participants
- Benchmarking against peers

## 8. Institute (Permanent) Change

_Changing from a Guild to being part of the organisational structure._

Making sure your OSPO is business critical:

- [Compliance](Consumption-Compliance): Can you demonstrate compliance wins, that have made a material difference? 
- [License Management](License-Management): Is your OSPO doing its part to ensure open source license compliance?
- [Software Inventory](Software-Inventory): are there cost implications to understanding the open source inventory, and replacing proprietary software with open source.  
- [Recruitment](../Level-4/Talent):  can you show improved talent retention?  
- [Risk Reduction](../../Risks/Introduction): _not_ having [internal forks](../../Measurements/Code-Duplication) of OSS projects as this is a security risk.
- [Supply Chain Security](Supply-Chain-Security):  can you point to vulnerabilities that have been managed?

Owning Improved Processes:

- [Releases](../../Measurements/Release-Cadence):  can you institute some kind of checklist of controls around open source releases?  How can you encourage open source without putting people off with process?
- [Training](Consumption-Training): can you point to the number of people trained in open source consumption / contribution across your organisation? how can you demonstrate application of these trainings?
- [Service Level](../../Measurements/Tickets): Is there a support function for the OSPO?  Can you demonstrate how successful it is?



### OSPO Staff

At some point, you may be in the position to hire permanent staff for the OSPO, and move beyond the guild model:

- **Most OSPOs have a developer component** - that is, developers who can help build and deploy tooling.  If you are hiring for this role you will need to find staff who are comfortable with both development and customer-facing work.   
- **Hire for communications** - your OPSO will need to interface with [Internal Audit](../../Roles/Internal-Audit) or [Compliance](../../Roles/Compliance) so it might be worth hiring people who have had experience working in these areas.

## Further Reading

- [The Business Value of the OSPO](https://www.linuxfoundation.org/research/business-value-of-ospo).  Useful article by the TODO Group
- [Recruiting Open Source Developers](https://todogroup.org/guides/recruiting-developers/). 
- [OSPO Mind Map](https://ospomindmap.todogroup.org/). From TODO Group.
- [GitHub-OSPO](https://github.com/github/github-ospo) - Helping OSPOs be successful on GitHub.
- [Google blew it with open source layoffs](https://www.infoworld.com/article/3686511/google-blew-it-with-open-source-layoffs.html) - InfoWorld article about Google OSPO layoffs.
 - [What does an open source program office do?](https://www.redhat.com/en/blog/what-does-open-source-program-office-do) - RedHat
 - [Why have an open source program office?](https://www.redhat.com/en/blog/what-does-open-source-program-office-do) - RedHat
 - [Why PMOs Fail](https://www.reddit.com/r/projectmanagement/comments/14jm72v/why_the_majority_of_pmos_fail/?utm_source=share&utm_medium=ios_app&utm_name=iossmf&utm_content=1&utm_term=22) - Reddit Discussion

## Other Notes

- Can the OSPO change the procurement process for software? OSS doesn't have an SLA, support agreements etc.  This requires a significant change in approach.

- Is the OSPO able to make recommendations around which open source libraries and projects to invest in?  If so, can they create metrics around how much this simplifies the technology landscape?   

