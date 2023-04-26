---
title: Making The Case For Contribution
tags: 
  - Data Loss (Risk)
  - Placeholder
  - OSPO (Role)
  - Level 3 (OSMM)
draft: true
sidebar_position: 1.5
sidebar_label: Making The Case
---

Organisational change can be very hard to achieve since organisations are naturally protective of themselves and the status quo.  Setting up an OSPO and beginning an open source journey will seem like a risky and dangerous proposition for many parts of an organisation.  

If you want to change an organisation you will need to convince people that what you are presenting:

 - Considers the risks and benefits to _all stakeholders / departments_
 - Provides an approach to mitigating the risks
 - Presents a _preferable risk profile_ to the status quo

## Steering The Technology

 - Banks are first and foremost technology companies.  Before "Big Tech" came along, they were the largest technology companies.
 - There are examples of open source tools (e.g. Prometheus) that are widely used but not optimised for the finance industry.  Therefore, having engineers working on improving these tools to work better for finance makes a lot more sense than going down the route of using vendor solutions that you have little control over.

##  Talent Retention

 - Finance organisations are great at _attracting_ talent by simply paying very high wages.  The problem is attrition.  
 - It's important to understand that lots of open source is developed for _non-financial rewards_.   
 - If you hire a key engineer who is a top contributor to an open source project and then prevent them from contributing further then they will likely leave.
 - Even if you allow them to continue contributing, if the workflow is onerous (e.g. MD-level reviews of their code) they will also get fed up and leave.
 - To _retain_ these high-performing staff, you have to give them the right tools to carry on contributing effectively.
 - Also: GitHub is _becoming a CV_.  

## Strategy

 - "Commoditizing your complement"

## Internal Forks

 - The [Code Duplication](code-duplication) article already describes the maintainance costs associated with internal forks of projects, and in passing discusses how this also presents a security risk.
 - It is hard but perhaps not impossible to get a view of how big a problem this is in your organsisation by looking at the internal repository (e.g. Artifactory) and looking for versions of open source libraries that are _not_ coming from the original external source.
 - An argument _for_ internal forks is that this mitigates the cyber risk of trojan code from an external environment.  However this is specious since 99% of the code running in the organisation is open source anyway: bad actors can exist both inside and outside the bank and this is no substitute for scanning tools.
 - For example, consider a  _bad actor_ performing a [Solar Winds Trojan](https://www.cisecurity.org/solarwinds)-style attack.  This is a consumption risk that _already exists_.  Allowing developers to contribute to open source doesn't worsen or improve this situation.   

## Reputation

tbd.