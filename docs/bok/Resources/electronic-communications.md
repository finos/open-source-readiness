---
id: electronic-communications
title: Considerations and Guidance for Electronic Communications Policies and Open Source
sidebar_label: ECOM Policies
slug: /operations/electronic-communications
tags:
 - Resources
list_image: /img/bok/page-types/resource.png
---

<BoxOut title="Work In Progress" image="/img/bok/warning.png">

* List/link to example regulations
* Provide example policy wording

</BoxOut>

It's common for companies in the financial service industry to be subject to regulations requires retention of firm business-related electronic communications for a certain amount of time (that time varies by jurisdiction and type of communication). Frequently, firms struggle with how to manage open source interactions within the guidelines set both by the regulations and by their own company policies. This article covers how some member firms from our community have approached the matter.

Remember that only communications related to firm business require retention. As electronic communications for open source use, support, and contribution aren't typically directly related to that business (related instead to the software that can _enable_ the business), these communications don't require retention under the regulations. For instance, there's no need to retain emails or copies of issue tracker comments for questions about how to use a feature of an open source project. That's a technical support question and doesn't relate to firm business. This is helpful, since the nature of some of the communication routes (Slack, for instance) cannot guarantee that the communications would be available for the required retention period and would otherwise require special accomodations to archive and retain.

Here are some actions our members have taken to ease their open source engagements:

1. Determine which types of communication are used by the open source projects that are relevant to your firm.
1. Using that list, speak with the people at your firm who are responsible for defining and/or enforcing the communication policy.
1. Work with these people to draft and approve carve-outs from the policy for those types of communication used by the open source projects. For example, if the policy says that no one at the firm may use Slack but the open source projects rely on it for communication, create a policy exception for using Slack in an open source context.
1. Specify in the policy that no open source support request or communication will ever discuss firm business, only matters related to the open source project and its functionality.
1. As needed, work with the training and internal comms teams to spread the new policy across the firm.

## A note about open source contributions

While only tangentially considered "electronic communication," contributions to open source projects are related enough to warrant a quick note here.

Open source contributions do naturally involve electronic communication and usually are exempt from regulatory retention requirements, but they do fall under _intellectual property_ and _security_ policies, therefore requiring different sorts of approval. Common policies in the case of contribution include a security review to ensure the contribution includes no sensitive information such as IP addresses, host names, or access keys; pre-contribution review for patentable innovations; and a requirement that all firm-related contributions be made under the employee's work email address. Some firms have worked with their IT departments to block login access to popular open source collaboration services like GitHub unless employees have explicit permission, but these firms often find their efforts backfire as developers find ways to work around the block by using their personal computer or accounts. This can lead to unreviewed/unapproved contributions and may be a risk vector.