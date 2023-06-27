---
title:  Why Open-Source a Firm Project?
tags: 
  - Level 4 (OSMM)
  - OSPO (Role)
  - CIO/CTO (Role)
sidebar_position: 1
sidebar_label: Why
---

Just as there are many reasons to [contribute to open source projects](../Level-3/Contributing-To-Projects), it is the same when it comes to a financial institution deciding to open-source.  However, the reasoning behind might be different. 

**Note:** In this article, we are not trying to cover all reasons for engaging in open source, see [Making the Case](../Level-3/Making-The-Case) for more basis for that. 

The reasons why a financial company would start an open source project are:

 * There is a _marketing value_ for the corporate communications teams
 * There is a _hiring value_ for the human resources teams
 * There is _strategic value_ if the project gets be used by others, and through this, influences communities of strategic importance to the organization

Next to the obvious marketing and hiring values, as you target [higher level activities](../Introduction) on the OSR activities list, more crucial benefits become visible too.

Often, when a new project is released, initial interest is low. This raises the question: was it worth putting the effort into open-sourcing if the usage, and the type of usage cannot be guessed beforehand? In case of the latter, we have to synthesise the 'call-to-action' for the particular project as part of its inception and open-sourcing efforts - for which the arguments below can give some reasonings. In case of the former, the answer for this should be aligned with _pluggable platforms_.

## Pluggable Platforms

When you start your open-sourcing effort, you hope for an ecosystem to form (see also: [Foundations](Foundations). But ecosystems grow gradually on an exponential curve and you do not yet know the upcoming usage.  Potential users of your project might be using another open source offering or using their own proprietary one.   They may need to be persuaded to switch.  This can raise the question - _was there any point in us open sourcing this project at all?_

Conversely, there should not be a reason for a company to own every line of the code they write:  most likely already using plenty of open source.  So by this argument, the code in a new project owned might as well be part open source.

As a result, if your architecture is pluggable enough (avoiding monolithic patterns) it makes it possible to selectively choose components from open source, from commercial vendors or written internally depending on the requirements.

## Arguments for Open-Sourcing Your Project

Here are 4 different arguments that can be used effectively to argue for a project to be open source as opposed to internal:

### 1. Enabling Vendor Cooperation

By open-sourcing your platform, vendors eager to get their products used can show how their libraries and solutions work together with your infrastructure before a decision to buy is made.  This allows not only a more "personalized" demo but also alleviates concerns around incompatibility.

Furthermore, using open source accelerates and simplifies the relationship once a partnership is made, since this is a way to avoid the red tape, NDAs, the need for proprietary integrations, and increases visibility for both parties.

#### An example

An actual example of how this process went an elevated the discussion:

 * A control vendor wanted to have a conversation about their control and trying to have a business relationship
 * They found an open source project from the financial company they wanted to work it that was relevant
 * They came to the discussion with the company with a customized demo using the open source project
 * During the demo, the financial company was able to take their demo and _use internal tooling_ to elevate it further as it had the compatibility due to the use of the open source library
 * Result is an instant win for both sides and making it easy to compare vendors

### 2. Open Source To Work With the Industry

As discussed above, open-sourcing enables outsourcing and “buying” features off-the-shelf that give commercial momentum with faster delivery.  But there is an extra benefit of having open-sourced a project since it then drives the roadmap of other companies looking for similar solutions.  By participating in the project they save time getting started and are then able to add features/use cases that developers need in both organisations.

#### An example

 * Within a firm X (elided), a strategy was taken to go open source on a particular project.
 * Discussions based on this open source project resulted in vendors pivoting their approach to match.
 * The vendors later said "Firm X helped influence us on the importance of having a strategy of hybrid style applications that merge web technologies and native technologies."
 * This resulted in an external joint customer showcase video with the vendor

### 3. Open Source as a Tool For Talent Acquisition

In many regulated environments, adding permanent staff involves a complex on-boarding process with security and background checks and the provision of secure computing environments or office space.   There are many regions of the world where it is impossible to on-board staff due to legal constraints.

Open source provides an alternative approach to talent acquisition without these overheads and can result in immediate participation and contribution.

#### An example

 * A FINOS member company which is a sustainable enterprise and quality driven software consultancy company
 * Working with them is an opportunity to give back and increase visibility
 * They provide services to multiple FINOS members through open source project contributions

### 4. Open Source to Help Standardize

If you using open source it is likely you will use standard open source tooling too (e.g. for compiling, linting, code coverage, security checks and more). This reduces dependencies on custom internal tooling, processes and implementation.  Adopting open source is a quick route to modernizing and standardizing on off-the-shelf open source build infrastructure, likely reducing the costs of maintaining internal legacy tooling.

#### An example

 * Good examples for this are [FDC3](https://fdc3.finos.org), [Legend](https://legend.finos.org), [Morphir](https://morphir.finos.org) and (the best example) [the Common Domain Model](https://github.com/finos/common-domain-model).
 * Teams working with these technologies and contributing to them learn the standard GitHub Actions/CI model, and are more likely to end up bringing back knowledge of these methods to internal development teams too.


