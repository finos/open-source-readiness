---
title: Creating an Open Source Program Office (OSPO)
tags: 
  - Developer (Role)
  - OSPO (Role)
  - Placeholder
  - Level 2 (OSMM)
sidebar_position: 7
---

- Lots of the level 2 activities are probably being performed piecemeal by the organisation.
- Creating an OSPO allows you to centralise and structure all the level 2 activities and allow you to start working on Level 3.


Creating an OSPO is _organisational change_.  Therefore, in this article, we are going to use the formalism of [Kotter's 8-Step Process for Leading Change](https://en.wikipedia.org/wiki/Change_management#Change_models) to structure this article, however, you can approach this any way you want.


### 1.  Create a Sense of Urgency

There are few ways to create a sense of urgency around the need for an OSPO.  For example:

- [License Compliance Management](License-Management): it's possible that your organisation isn't doing license management in a comprehensive way.  An OSPO might be a single point of contact for that function.

- [Software Inventory](Software-Inventory) and [Supply Chain Security](Supply-Chain-Security):  events like the [Log4Shell](https://en.wikipedia.org/wiki/Log4Shell) vulnerability are often a catalyst for firms to focus on understanding what open source software they are using and to start looking more carefully at their open source supply chains.

- tbd. ... add more examples here.

1. Making the Case for an OSPO ( already written in the OSR Common Problems)

### 2. Build a Guiding Coalition

In the first instance, your OSPO should be composed of a "willing coalition".  You will need to communicate with each of these people (using the sense of urgency points above).

- CEO	(optional)
- CTO	_and / or_ CIO / CISO - someone to do with information security.
- Risk Officer/Compliance	
- Legal	
- Human Resources/Training	
- Line of Business (LOB) Leader	
- Product Manager	
- SRE / Cloud Operator	
- Corporate Communications	
- Internal Audit	
- Regulators / External Audit
- Developers / Developer Relations

(leave this part to Rob to fill in)

- regular meetings and communications

#### OSPO Structures

- To start with, the OSPO will probably start as a minimum-viable "guild" structure. tbd.  Reference TODOGROUP OSPO Structures here.  
- You will need to figure out who the OSPO "reports to", i.e an owning function, e.g. with the CTO, COO.  This will highly depend on your organisational structure.    

### 3. Form a Strategic Vision and Initiatives

What is the OSPO focusing on.  For example:  

1.  Open Source Learning.  
2.  Contributing at Scale.
3.  Manage OS Compliance.

_tbd. other things we could reference here from the todo group_

### 4. Enlist a Volunteer Army

> To effectively enlist an army you must first identify potential allies and build relationships with them. This can be done through open communication and by involving them in the change process from the beginning. Additionally, another method of enlisting and growing an army is to reward individuals for their contributions and support. This will build morale and motivation, and will organically encourage others to get involved. - [Kotters 8 Step Change Model](https://www.mtdtraining.com/blog/kotters-8-step-change-model.htm)

(tbd.  leave to fill in concrete examples of this)

Who should be the volunteers?  - list these.

- You need to _reward_ people if you want them to volunteer:
   - Improving the CV
   - Rewarding teams for engaging with open source practices.
   - 

### 5. Enable Action by Removing Barriers

Some examples:

- Procurement:  they might need some help to understand that procuring OSS is very different.  They cannot get an SLA from an open source project.  They _will_ need to understand [SBOMs](../../Artifacts/SBOMs).

- Middle Managers:  (Level 3) they might need to understand that their staff will be contributing to open source projects, this might not be aligned directly to a business goal.  Making OSS contribution part of the OKRs.

- HR: recruitment, visits to campus.  HR will need to understand how OSS attracts talent, and be able to hire for these skills.

- Process / Policy: Removing blockers in process.  Getting the policy approved by legal so that you don't need to recourse to them every time you want to do something.  For this you will need an [Open Source Policy](Creating-Policy) 

### 6. Generate Short-Term Wins

Examples:

- Performing a baseline [Software Inventory](Software-Inventory) on a subset of the application estate.  For example, looking at a single  customer-facing application/web property.

- Helping to remediate some vulnerabilities in one of those applications.

- (Level 3). Making small contributions back to open source projects.

It's important to make sure that you publicise your wins.  This means engaging with and communicating to the stakeholders (identified above).



### 7. Sustain Acceleration

> One key aspect of this step is to encourage employees to identify and address any issues that arise and to continuously seek out ways to improve the change initiative - [Kotters 8 Step Change Model](https://www.mtdtraining.com/blog/kotters-8-step-change-model.htm)

- Maintain the momentum from previous steps
- Make **communication** key to keep change on the top of everyone’s minds
- **Reward** those for endorsing change
- Improving process via feedback from participants
- Benchmarking against peers
- Metrics

### 8. Institute (Permanent) Change

_Changing from a Guild to being part of the organisational structure._

Making sure your OSPO is business critical:

- Compliance:   can you demonstrate compliance wins, that have made a material difference?
- License Management:
- Software Inventory: are there cost implications to understanding the open source inventory, and replacing proprietary software with open source.  
- Recruitment:  can you show improved talent retention?  
- Risk Reduction: _not_ having internal forks of OSS projects as this is a security risk.
- Supply Chain Security:  can you point to vulnerabilities that have been managed.








