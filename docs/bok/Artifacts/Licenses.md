---
title: Software Licenses
tags: 
  - Introduction
  - Developer (Role)
  - OSPO (Role)
---

This article provides some basic information around the purpose of 

1.  What is a software license?




## What Is A Software License?





## Open Source Licenses




What oss licenses are, different types.  how to find out the type of license for a given piece of software.

Consider taking stuff out of the [License Management](../Activities/License-Management) and bring here.


Understand permissions granted by an OSS License



### License Identifiers

The license for an open source project is usually held in a file called LICENSE in the repository, (for example, FDC3's license here: https://github.com/finos/FDC3/blob/master/LICENSE).  Although that allows for practically infinite variation in license terms and conditions, most open source software uses one of just a few common licenses.  For this reason, SPDX introduces _license identifiers_ (for example, "Apache-2.0") which are defined here: https://spdx.org/licenses/

## License Compatibility

Determining the compatibility of licenses involves evaluating the terms and conditions of the licenses used in your software to determine whether they are compatible with each other and with your organization's open-source policy.

There are several factors to consider when determining the compatibility of licenses, including:

1. **License conditions:** Some licenses have conditions, such as copyleft or patent retaliation clauses, that must be followed in order for the license to be considered compatible.
2. **License compatibility:** Some licenses are designed to be compatible with each other, while others are not. For example, the GPL license is considered to be incompatible with many other licenses, while the Apache license is considered to be more compatible.
3. **Corporate open-source policy:** Your organization may have its own open-source policy that specifies which licenses are acceptable for use in your software.
4. **Legal considerations:** Some licenses may have legal implications for your organization, such as the potential for patent infringement or the requirement to provide source code.

By evaluating these factors, you can determine the compatibility of the licenses used in your software and establish a policy for compatible and incompatible licenses. It's important to seek the advice of a legal expert if you are unsure about the compatibility of a particular license.

### OSI Approved Licenses

Many of the most popular licenses are [OSI Approved](https://opensource.org/licenses), that is:

> they allow software to be freely used, modified, and shared. 

The OSI describes the definition of open source here: https://opensource.org/osd and describes how various common open source licenses differ here: https://opensource.org/licenses/category

The vast majority of open source software will be using an OSI-approved licenses.  However, only by completing the _license identification_ steps will you have a complete view on what is used throughout your organisation.

## License Obligations

Open source licenses differ by the permissions they give, the limitations they reserve and the conditions on which they grant their usage.  

### GitHub's Summary

GitHub provides a useful summary for most of the popular licenses when you view the LICENSE file in the repository.  For example:

![GitHub's License Summary Card 1](/img/bok/github-license-summary-affero.png)

![GitHub's License Summary Card 2](/img/bok/github-license-summary-apache.png)

Both of these licenses are open source, however the Apache License 2.0 is much more compatible with private/corporate software development as there is no condition that _derived works are also open source._ The important take-away here is that open source licenses can differ widely in what they require and legal counsel will need to be sought to define which are acceptable.

Note that different usage situations will also determine which licenses are acceptable.  For example, use _behind the firewall_ may allow a wider selection of licenses than usage to customers over the public network.

## Related Activities

<BokTagList tag="License (Artifact)" filter="Activities" />

## Related Risks

<BokTagList tag="License (Artifact)" filter="Risks" />

## Further Reading




