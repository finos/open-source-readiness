---
title:  Why Open-Source an Firm Project?
tags: 
  - Level 4 (OSMM)
  - OSPO (Role)
  - CIO/CTO (Role)
sidebar_position: 1
---

Just as there are many reasons to [contribute to open source projects](../Level-3/Contributing-To-Projects), it is the same when it comes to a financial institution deciding to open-source.  However, the reasoning behind might be different. We are not trying to cover all reasonings for engaging in open source, see [Making the Case](../Level-3/Making-The-Case) for more basis for that. 

The reasons why a financial company would start an open source project are:

 * There is a _marketing value_ for the corporate communications teams
 * There is a _hiring value_ for the human resources teams
 * There is _strategic value_ if the project gets be used by others, and through this, influences communities of strategic importance to the organization

Next to the obvious marketing and hiring values, as you target [higher level activities](../Introduction) on the OSR activities list, more crucial benefits become visible too.

Often, when a new project is released, initial uptake is low. This raises the question: was it worth putting the effort into open-sourcing if the usage, and the type of usage cannot be guessed beforehand? In case of the latter, we have to synthetize the 'call-to-action' for the particular project as part of its inception and open-sourcing efforts - for which the arguments below can give some reasonings. In case of the former, the answer for this should be aligned with _pluggable platforms_.

## Pluggable Platforms

When you start your open-sourcing effort, you hope for an ecosystem to form (see also: [Foundations](../Level-3/Foundations)). But ecosystems grow gradually on an exponential curve and you do not yet know the upcoming usage.  Potential users of your project might be using another open source offering or using their proprietary one.   They may need to be persuaded to switch.

However, there should not be a reason for a company to own every line of code - most likely already using open source, and the same way, the code owned might be co-owned as part of an open source.

As a result, if your architecture is pluggable enough, avoding monolith patterns, it makes it possible to selectively choose components from open source and if needed, from commercial vendors that make sense given your requirements.

# Arguments for open-sourcing your project

Here are 4 different arguments that can be used effectively to change trajectory.

## 1. Vendor cooperation enablement

 * It enables a vendor, who is eager to get their product used, to show how their libraries, solutions are working together with your infrastructure pieces beforehand, and able to bring a more personalized demo
 * Using open source contributions can and do accelerate and highly simplifies these partnerships
 * There is a way to avoid the red tapes, the need for NDAs, the need for proprietary integrations, and to increase visibility

### An example

An actual example of how this process went an elevated the discussion:

 * A control vendor wanted to have a conversation about their control and trying to have a business relationship
 * They found an open source project from the financial company they wanted to work it that was relevant
 * They came to the discussion with the company with a customized demo using the open source project
 * Actually during the demo, the financial company was able to take their demo and use internal tooling to elevate it further as it had the compatibility due to the use of the open source library
 * Result is an instant win for both sides and making it easy to compare vendors

## 2. Open source is the tool to work with the industry

 * Enables outsourcing and “buying” features off the shelf that give commercial momentum with faster delivery
 * Extra benefit of having a project in the open source is useful for driving the roadmap of other companies by being able to add use cases that fintech developers need

### An example

 * Strategy for development of particular area got represented through an open source project
 * Discussions based on this open source project resulted in vendors pivoting their approach
  * "XXX helped influence us on the importance of having a strategy of hybrid style applications that merge web technologies and native technologies" - CVP at vendor
 * Resulting in external joint customer showcase video with the vendor

## 3. Open source is a tool for new ways of staff augmentation

 * Open source provides innovative methods to explore different avenues of staff augmentation
 * Eliminates onboarding needs, overhead, and results in immediate participation and contribution

### An example

 * A FINOS member company which is a sustainable enterprise and quality driven software consultancy company
 * Working with them is an opportunity to also give back and increase visibility
 * They provide services to multiple FINOS members through open source project contributions

## 4. Open source is helping you standardize

 * If you using open source, likely this would mean that you use standard open source tooling too (for compiling, linting, code coverage, security checks and more)
 * This will help you to keep free of unnecessary bindings to internal tooling, processes and implementation
 * By using off the shelf open source build infrastructure, the capabilities could be swiftly adopted internally as well and can leverage industry leading DevOps tooling

### An example

 * Good examples for this are FDC3, Legend, Morphir, Plexus and as the best example, CDM
 * Teams working with these technologies and contributing to it and picking up the methods of involving it are more likely to use standardized methods in their own development practices too


