---
title: Software Licenses
tags: 
  - Developer (Role)
  - OSPO (Role)
  - Legal (Role)
sidebar_position: 1
---

This article provides some basic framing around the purpose of licenses within open source:

- It introduces common _terms_ used to describe software: _copyright_, _software licenses_ and _open source_.
- It describes the three types of open source licenses, and why an organisation needs to track the licenses it uses.
- The work of the Open Source Initiative (OSI) in tracking different types of license.
- How to identify at-a-glance the characteristics of a given software license.

## Some Terms

### 1. What is Copyright?

By default, in many jurisdictions (e.g. the US) the author of software holds the _copyright_ to it, granting them exclusive rights to the work. [Wikipedia](https://en.wikipedia.org/wiki/Copyright) describes copyright as follows:

> A copyright is a type of intellectual property that gives its owner the exclusive right to copy, distribute, adapt, display, and perform a creative work, usually for a limited time. The creative work may be in a literary, artistic, educational, or musical form.  - [Copyright, _Wikipedia_](https://en.wikipedia.org/wiki/Copyright)

In order to allow other parties to use a piece of software, the copyright holder must issue them with a _license_.

### 2. What Is A Software License?

A software license describes what the end-user of a piece of software can do with it:

> A typical software license grants the licensee, typically an end-user, permission to use one or more copies of software in ways where such a use would otherwise potentially constitute copyright infringement of the software owner's exclusive rights under copyright. - [Software License, _Wikipedia_](https://en.wikipedia.org/wiki/Software_license)

The concept of a license applies to _all_ software, whether it is free, open source or commercial (proprietary).  For proprietary software:

> The hallmark of proprietary software licenses is that the software publisher grants the use of one or more copies of software under the end-user license agreement (EULA), but ownership of those copies remains with the software publisher (hence use of the term "proprietary"). - [Proprietary Software, _Wikipedia_](https://en.wikipedia.org/wiki/Proprietary_software)

### 3. Open Source Software

The difference between proprietary software and _open source software_ is therefore in the license.   In general: 

> Open-source software (OSS) is computer software that is released under a license in which the copyright holder grants users the rights to use, study, change, and distribute the software and its source code to anyone and for any purpose. - [Open-source software, _Wikipedia_](https://en.wikipedia.org/wiki/Open-source_software)

Conversely, for _proprietary_ software, source code is generally _not_ made available to the end user.  Where it is, there are usually strict non-disclosure agreements in place.  

## Types of Open Source License

[Wikipedia](https://en.wikipedia.org/wiki/Software_license) describes three main types of open source licenses:

### 1. Public Domain Licenses

This where the work has been deliberately donated to the [Public Domain](https://en.wikipedia.org/wiki/Public_domain), or copyright on it has expired:

> The public domain (PD) consists of all the creative work to which no exclusive intellectual property rights apply. Those rights may have expired, been forfeited, expressly waived, or may be inapplicable. Because no one holds the exclusive rights, anyone can legally use or reference those works without permission. - [Public Domain, _Wikipedia_](https://en.wikipedia.org/wiki/Public_domain)

An example of a public domain license is [CCO](https://creativecommons.org/share-your-work/public-domain/cc0/), which is a license with "no rights reserved". 

### 2. Permissive Licenses

[Permissive licenses](https://en.wikipedia.org/wiki/Permissive_software_license) are software licenses where the end user has many rights over what they can do with the software, including re-distribute it with their own license.  This allows people to make proprietary software _based on_ existing open source software:

> A permissive software license, sometimes also called BSD-like or BSD-style license, is a free-software license which ... carries only minimal restrictions on how the software can be used, modified, and redistributed, usually including a warranty disclaimer. - [Permissive Software License, _Wikipedia_](https://en.wikipedia.org/wiki/Permissive_software_license)

Examples of this type of license include the [Apache 2.0 License](https://apache.org/licenses/LICENSE-2.0), [MIT License](https://mit-license.org) and [BSD License](https://opensource.org/license/bsd-2-clause/).

### 3. Copyleft Licenses

[Copyleft licenses](https://en.wikipedia.org/wiki/Copyleft) are more restrictive licenses which ask the end user to further license their derivative works under a similar copyleft agreement (called _reciprocity_):

> Instead of allowing a work to fall completely into the public domain, where no ownership of copyright is claimed, copyleft allows authors to impose restrictions on the use of their work. One of the main restrictions imposed by copyleft is that derived works must also be released under a compatible copyleft license. - [Copyleft, _Wikipedia_](https://en.wikipedia.org/wiki/Copyleft)

Copyleft licenses can present a problem for many organisations as they are fundamentally incompatible with either proprietary licenses or permissive licenses.  An example of this type of license is the [GNU Public License](https://www.gnu.org/licenses/quick-guide-gplv3.html).

## Identifying The License

The license for an open source project is usually held in a file called LICENSE in the repository or library, (for example, FDC3's license here: https://github.com/finos/FDC3/blob/master/LICENSE).  

Although this file allows for practically infinite variation in license terms and conditions, most open source software uses one of just a few common licenses.  For this reason, [SPDX](https://spdx.org/licenses/
) introduces _license identifiers_.  For example, the SPDX identifier "Apache-2.0" refers to the [Apache 2.0 License](https://apache.org/licenses/LICENSE-2.0)

### Open Source Initiative (OSI) Approved Licenses

The [Open Source Initiative (OSI)](https://opensource.org) is an organisation keeping track of the different open source licenses in common use.  

Many of the most popular licenses are [OSI Approved](https://opensource.org/licenses), that is:

> Open source licenses are licenses that comply with the Open Source Definition – in brief, they allow software to be freely used, modified, and shared. To be approved by the Open Source Initiative (also known as the OSI) a license must go through the Open Source Initiative’s license review process. - [OSI Approved Licenses, _OSI_](https://opensource.org/licenses/)

The OSI describes the definition of open source here: https://opensource.org/osd and describes how various common open source licenses differ here: https://opensource.org/licenses/category

The vast majority of open source software will be using an OSI-approved licenses. 

## License Obligations

Within the three broad types of open source license described above, each license will differ by the permissions it gives, the limitations it reserves and the conditions on which it grants usage.  

GitHub provides a useful summary for most of the popular licenses when you view the LICENSE file in the repository.  For example:

![GitHub's License Summary Card 1](/img/bok/github-license-summary-affero.png)

![GitHub's License Summary Card 2](/img/bok/github-license-summary-apache.png)

Both of these licenses are open source, however the Apache License 2.0 is much more compatible with private/corporate software development as there is no condition that _derived works are also open source._ The important take-away here is that open source licenses can differ widely in what they require and legal counsel will need to be sought to define which are acceptable.

Note that different usage situations will also determine which licenses are acceptable.  For example, use _behind the firewall_ may allow a wider selection of licenses than usage to customers over the public network.

## Final Points

- Not all open source software is licensed in the same way. 
- It is important to understand the licenses of the open source software you are using.
- In particular, for commercial use, open source software with a copyleft license is problematic and needs to be carefully considered from a legal standpoint before use.

## Related Activities

<BokTagList tag="License (Artifact)" filter="Activities" />

## Further Reading

1.  [CopyLeft](https://en.wikipedia.org/wiki/Copyleft) article on Wikipedia.

2.  [A guide to the GPL v3](https://www.gnu.org/licenses/quick-guide-gplv3.html) explaining the philosophy behind the Copyleft GPL License.

3.  [GitHub's ChooseALicense Site](https://choosealicense.com). A simple site that helps you navigate the choice of license for new software projects.

4.  [Open Source Initiative's License Browser](https://opensource.org/license/).  Try choosing "Popular/Strong Community" for the most commonly used licenses.
