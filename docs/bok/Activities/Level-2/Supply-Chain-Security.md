---
title: Open Source Supply Chain Security
tags: 
  - Developer (Role)
  - Risk-Compliance (Role)
  - Security Expert (Role)
  - CIO (Role)
  - OSPO (Role)
  - Codebase Risk
  - Dependency Risk
  - Operational Risk
  - Level 2 (OSMM) 
  - CVE (Artifact)
  - Repository (Artifact)
sidebar_position: 4
sidebar_label: Security
checklist:
  - title: Security Training
    description: Security training is provided for teams working on open source software
  - title: Scanning
    description: The organisation scans and audits software automatically and frequently
  - title: Testing
    description: The organisation performs penetration tests and periodic threat assessment
  - title: OpenChain 
    description: The firm embeds the OpenChain supply chain standard
list_image: /img/bok/page-types/activity.png
---

In this article we are going to look at the growing issue of software supply chain attacks via some examples and then look at the emerging field of open source supply chain security:  what it is, current best practices, the institutional landscape and emerging legislation.

Since there are more authoritative sources on the Internet, this article aims to provide the key concepts.  This is an executive summary of this topic with lots of references to further reading.

## Supply Chain Attacks

A software supply chain attack occurs when an attacker compromises the software development or distribution process to introduce malicious code into legitimate software or updates that are then delivered to end users.

> "A supply chain attack is a cyber-attack that seeks to damage an organization by targeting less secure elements in the supply chain.[1] A supply chain attack can occur in any industry, from the financial sector, oil industry, to a government sector.  A supply chain attack can happen in software or hardware. Cybercriminals typically tamper with the manufacturing or distribution of a product by installing malware or hardware-based spying components." - [Supply Chain Attack, _Wikipedia_](https://en.wikipedia.org/wiki/Supply_chain_attack)

### Example: Solar Winds

The SolarWinds attack, uncovered in late 2020, stands as one of the most significant and sophisticated cyber espionage campaigns ever. Attackers compromised [SolarWinds' Orion software](https://www.solarwinds.com/orion-platform), a network management tool used by numerous government agencies and large corporations worldwide. 

By doing so, the perpetrators were able to embed malicious code within legitimate software updates, enabling them to gain unauthorized access to the networks of organizations that installed these tainted updates. Once inside, they could move laterally, steal data, and potentially disrupt operations. The scale of the attack was massive, with thousands of entities affected, including key U.S. government agencies. 

**Further Reading**:

 - [The SolarWinds Cyber-Attack: What You Need to Know](https://www.cisecurity.org/solarwinds).  March 2021.

## Open Source Supply Chain Security

[Digital Supply Chain Security](https://en.wikipedia.org/wiki/Digital_supply_chain_security) refers to the strategies and measures implemented to protect digital assets and processes (such as software) as they move through various stages of development, distribution, and deployment - essentially trying to prevent attacks like the one above.

When focusing on open source, supply chain security becomes particularly challenging because of the communal and transparent nature of the development environment. 

Open source software often involves numerous contributors, some anonymous, and can be integrated into a wide variety of applications and platforms. As such, it's imperative to ensure that malicious actors don't introduce vulnerabilities, either inadvertently or deliberately, into these shared code bases. 

**Open source supply chain security**, therefore, emphasizes:

 - rigorous vetting of contributions
 - continuous monitoring of dependencies
 - prompt patching of known vulnerabilities
 - community collaboration to maintain the trustworthiness of shared software resources.

### Examples

- **[event-stream (2018)](https://es-incident.github.io)**: A malicious actor took over maintenance of a popular (>2m downloads per week) [npm](https://www.npmjs.com) package, introducing a targeted payload that stole Bitcoin funds from several users. 

- **[us-parser-js (2021)](https://www.rapid7.com/blog/post/2021/10/25/npm-library-ua-parser-js-hijacked-what-you-need-to-know/)**:  Threat actors offered access to the developer account of this package on the dark web.  An installation script was introduced into the package so that the victim's computer would be used to mine crypto currency and report back user credentials.

- **[left-pad (2016)](https://www.theregister.com/2016/03/23/npm_left_pad_chaos/)**: While SolarWinds is a high-profile, deliberate attack, the supply chain is at risk from vandalism too. [left-pad](https://www.npmjs.com/package/left-pad) was a popular but small JavaScript library that was removed from the [npm](https://www.npmjs.com) repository by its author [in protest over a decision made by NPM's administrators](https://www.theregister.com/2016/03/23/npm_left_pad_chaos/), unexpectedly breaking numerous dependent projects and highlighting vulnerabilities in modern software dependencies.

- **[Heartbleed / OpenSSL](https://www.buzzfeed.com/chrisstokelwalker/the-internet-is-being-protected-by-two-guys-named-st)**: The [OpenSSL](https://www.openssl.org) library is the default encryption implementation used by the majority of the Internet.  The critical [Heartbleed](https://en.wikipedia.org/wiki/Heartbleed) vulnerability of 2012 not only affected vast nubmers of servers and applications, but demonstrated a weakness in the open source supply chain present in many packages - that of too few maintainers.  This is commonly refered to as the "One Guy in Nebraska Problem" after this [XKCD cartoon](https://www.explainxkcd.com/wiki/index.php/2347:_Dependency).  

### A Growing Problem

As the volume of open source software grows, the number of open source developers increases, the cost of compute reduces and the cost of _initiating_ a supply chain attack reduces, the importance of securing the open source supply chain grows more important:

> "Supply chain attacks are increasing exponentially.  In 2021 the world witnessed a 650% increase in software supply chain attacks, aimed at exploiting weaknesses in upstream open source ecosystems. For perspective, the same statistic was 430% in the 2020 version of the report." - [State of the software Supply Chain, SonaType](https://www.sonatype.com/hubfs/Q3%202021-State%20of%20the%20Software%20Supply%20Chain-Report/SSSC-Report-2021_0913_PM_2.pdf)

### Transitive Dependencies

It is worth drawing attention to the issue of _transitive dependencies_.  A developer may make use of up to fifteen (say) dependencies directly in a moderately-sized software application.   However, each of these dependencies may have dependencies of their own _and so on_.

It is estimated that the average JavaScript dependency tree contains 86 packages, while for [PyPI](https://pypi.org) (Python libraries) it is 7.3. **See: **[How much do we really know about how packages behave on the npm registry?](https://snyk.io/blog/how-much-do-we-really-know-about-how-packages-behave-on-the-npm-registry/)

**Further Reading**:

 - [JavaScript Growing Pains: From 0 to 13,000 Dependencies](https://blog.appsignal.com/2020/05/14/javascript-growing-pains-from-0-to-13000-dependencies.html).  An example of how easy it is to end up with 13,000 dependencies in a simple JavaScript application.

### Components of the Open Source Supply Chain

![Open Source Supply Chain, adapted from the LF Open Source Software Supply Chain Security article.](/img/bok/supply-chain.png)

Attacks can occur at any point in the open source supply chain, so let's look at the different parts of this system.  The above diagram (adapted from ["Open Source Software Supply Chain Security" by the Linux Foundation](https://project.linuxfoundation.org/hubfs/Reports/oss_supply_chain_security.pdf?hsLang=en) shows the four main components, arranged in a cycle:

- **Users:** Individuals or systems that utilize software for various tasks and applications.
- **Package Managers:** Tools or software that automate the process of installing, upgrading, configuring, and removing software packages in a consistent manner.
- **Repositories:** Centralized storage locations or databases where software packages are archived, distributed, and made available for download.
- **Developers:** Individuals or teams responsible for creating, updating, and maintaining software codebases and packages.

Each of these is an opportunity for an attack.  

## Exploits. Vulnerabilities & Attacks

- **Exploits** (or "hacks") are methods that leverage a vulnerability to bypass security and gain unauthorized access, privileges, or capabilities within a system.

  > "An exploit (from the English verb to exploit, meaning "to use something to one’s own advantage") is a piece of software, a chunk of data, or a sequence of commands that takes advantage of a bug or vulnerability to cause unintended or unanticipated behavior to occur on computer software, hardware, or something electronic (usually computerized)." - [Exploit, _Wikipedia_](https://en.wikipedia.org/wiki/Exploit_(computer_security))

- **Vulnerabilities** can be accidentally introduced by maintainers, and they may range from low impact or not possible for an attacker to exploit, to high impact and easily exploitable. 

  > "Vulnerabilities are flaws in a computer system that weaken the overall security of the device/system. Vulnerabilities can be weaknesses in either the hardware itself, or the software that runs on the hardware. Vulnerabilities can be exploited by a threat actor, such as an attacker, to cross privilege boundaries (i.e. perform unauthorized actions) within a computer system." - [Vulnerability, _Wikipedia_](https://en.wikipedia.org/wiki/Vulnerability_(computing))

  Even if you have vulnerabilities in production, you have some time to address them; they may not be discovered or exploited before you update to a fixed version.  
  
  **See**:
  
   - Vulnerabilities in software are [catalogued as CVEs](../../Artifacts/CVE).

- **Supply Chain Attacks** (or exploit) involve malware that is intentionally introduced into a package by an attacker. 

  > "A supply chain attack can happen in software or hardware. Cybercriminals typically tamper with the manufacturing or distribution of a product by installing malware or hardware-based spying components." - [Supply Chain Attack, _Wikipedia_](https://en.wikipedia.org/wiki/Supply_chain_attack)

  You don't have a few days or weeks to mitigate the issue. You need to catch it before you install it on your own laptop or on a production server.

  **See:**

    - [The MITRE ATT&CK](https://attack.mitre.org) aims to be a knowledge base of all the tactics, techniques, and procedures (TTPs) used by attackers in cyberattacks.

### Examples of Common Supply Chain Attacks

| Attack Name                                                                                                                                                    | Description                                                                                                                                                                                                                                                                                                                                                    | Example                                                                                           |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------|
| [Dependency/Manifest Confusion](https://fossa.com/blog/dependency-confusion-understanding-preventing-attacks/)                                                 | An attacker publishes a package with the same name as a private package used by a specific company but in a public repository. If the company's build system is not properly configured, it may pull the malicious public package instead of the intended private one.                                                                                         | [Alex Birsan](https://medium.com/@alex.birsan/dependency-confusion-4a5d60fec610)                  |
| [Package Stealing/Hijacking](https://jfrog.com/blog/five-examples-of-infection-methods-attackers-use-to-spread-malicious-packages/#Software-Package-Hijacking) | Attackers can sometimes take over abandoned or poorly maintained packages and introduce malicious changes. They then publish the updated malicious version, and dependent systems automatically pull in these updates.                                                                                                                                         | `us-parser-js` above.                                                                             |
| [Malicious Forks/Masquerading](https://www.bleepingcomputer.com/news/security/35-000-code-repos-not-hacked-but-clones-flood-github-to-serve-malware/)          | An attacker might create a fork of a popular open-source project, introduce malicious changes, and then attempt to promote or advertise this fork to unsuspecting users.                                                                                                                                                                                       | [Stephen Lacy](https://twitter.com/stephenlacy/status/1554697077430505473)                        |
| [RepoJacking](https://www.bleepingcomputer.com/news/security/millions-of-github-repos-likely-vulnerable-to-repojacking-researchers-say/)                       | An attack where a malicious actor registers a username and creates a repository used by an organization in the past but which has since changed its name. Doing so results in any project or code that relies on the dependencies of the attacked project to fetch dependencies and code from the attacker-controlled repository, which could contain malware. | [CTX](https://www.synopsys.com/blogs/software-security/cyrc-vulnerability-analysis-repo-jacking/) |
| [Piggybacking on Legitimate Packages/Pull Request Sneaking](https://github.com/mortenson/pr-sneaking)                                                          | Some attackers contribute malicious code to popular and legitimate projects, usually through pull requests. If not thoroughly reviewed, the malicious code might get merged into the main project.                                                                                                                                                             | [Teleport](https://goteleport.com/blog/hack-via-pull-request/)                                    |
| [Download Count Inflation/Star Jacking](https://www.crn.com/news/security/checkmarx-attackers-hijacking-github-ratings-to-infect-as-many-targets-as-possible-) | To make a malicious package look popular and trustworthy, attackers artificially inflate the download count.                                                                                                                                                                                                                                                   | [Pampyio](https://www.pepy.tech/projects/pampyio)                                                 |
| [Trojan Package](https://jfrog.com/blog/five-examples-of-infection-methods-attackers-use-to-spread-malicious-packages/#Trojan-Package)                         | In the trojan package infection method, the attacker publishes a fully functional library but hides malicious code in it.                                                                                                                                                                                                                                      | `lemaaa`                                                                                          |
| [Joke Packages](https://dev.to/codesphere/javascript-flaws-5-stupid-npm-packages-5fi)                                                                          | Not strictly an attack, but publishing packages as jokes.  Can harm the supply chain and cause dependency bloat.                                                                                                                                                                                                                                               | [true](https://www.npmjs.com/package/true)                                                        |
| [Cache Poisoning](https://snyk.io/blog/cache-poisoning-in-popular-open-source-packages/)                                                                       | Exploiting weaknesses in parameter handling by package managers.                                                                                                                                                                                                                                                                                               | [Rack](https://security.snyk.io/vuln/SNYK-RUBY-RACK-1061917)                                      |
| [TypoSquatting](https://jfrog.com/blog/five-examples-of-infection-methods-attackers-use-to-spread-malicious-packages/#Typosquatting)                           | Typosquatting is the practice of obtaining (or squatting) a famous name with a slight typographical error.                                                                                                                                                                                                                                                     | "Amzon.com"                                                                                       |                                                                                       |

Once a package, even a legitimate one, becomes dependent on a malicious package, it might unknowingly propagate the malicious behavior when others use it.

**Note:** this table is just a list of notable examples.  See [The MITRE ATT&CK](https://attack.mitre.org) for a complete, authoritative list.

## Best Practices

As mentioned at the start of the article, this is a fast-evolving area.   In this section, we'll outline a few important concepts that you should be aware of.

**See:** 
 
 - [OpenSSF Best Practice Guides](https://openssf.org/resources/guides) are a useful first stop.
 - [Linux Security Blog Article](https://linuxsecurity.com/features/open-source-software-supply-chain-security) on best practices.

### Software Composition Analysis (SCA)

According to https://en.wikipedia.org/wiki/Software_Composition_Analysis:

> **Software Composition Analysis** (SCA) is a practice in the fields of [Information technology](https://en.wikipedia.org/wiki/Information_technology) and [software engineering](https://en.wikipedia.org/wiki/Software_engineering) for analyzing custom-built software applications to detect embedded open-source software and detect if they are up-to-date, contain security flaws, or have licensing requirements.

**See Also:**

- Many SCA tools produce [SBOMs](../../Artifacts/SBOMs) which can then be checked for vulnerabilities.   
- A long list of SCA tools is provided here: https://todogroup.org/guides/management-tools/#tools-for-managing-source-code
- [Dependabot](https://github.com/dependabot) on GitHub


### Static Application Security Testing (SAST)

SAST, or Static Application Security Testing, is a type of software security testing that analyzes the source code of an application for potential security vulnerabilities without executing the code. 

> "SAST is a vulnerability scanning technique that focuses on source code, bytecode, or assembly code. The scanner can run early in your CI pipeline or even as an IDE plugin while coding. SAST tools monitor your code, ensuring protection from security issues such as saving a password in clear text or sending data over an unencrypted connection." - [Static Application Security Testing, _Snyk_](https://snyk.io/learn/application-security/static-application-security-testing/)

Some leading SAST tools are [Checkmarx](https://checkmarx.com/cxsast-source-code-scanning/), [Veracode](https://www.veracode.com/products/binary-static-analysis-sast), [SonarQube](https://www.sonarsource.com/solutions/security/), [Fortify](https://www.microfocus.com/en-us/cyberres/application-security/static-code-analyzer) and [Coverity](https://www.synopsys.com/software-integrity/security-testing/static-analysis-sast.html).]

**See Also:**

 - [Socket Security](https://github.com/apps/socket-security) - a GitHub App for performing SAST
 - [CodeQL](https://codeql.github.com) also built into GitHub's Action system. 

### Dynamic Application Security Testing / Penetration Testing

- **Dynamic Application Security Testing (DAST)**: DAST involves executing the code of an application and examining its behavior for potential security vulnerabilities. This type of testing can help identify potential security risks that may not be apparent from examining the code alone.

- **Penetration Testing:** Penetration testing involves attempting to actively exploit vulnerabilities in a software system or application to determine its security weaknesses. This type of testing is usually conducted by security experts who use manual and automated techniques to simulate real-world attacks.

Tools for these include [Metasploit](https://www.metasploit.com), [Zed Attack Proxy (ZAP)](https://www.zaproxy.org), [Fortify WebInspect](https://www.microfocus.com/en-us/cyberres/application-security/webinspect) and [Burp Suite](https://portswigger.net/burp/pro).

**See:**

 - [Penetration Testing Reviews and Ratings](https://www.gartner.com/reviews/market/penetration-testing) by Gartner.
 - [DAST Tools](https://www.softwaretestinghelp.com/dynamic-application-security-testing-dast-software/). 
 
### Infrastructure Security Testing

Infrastructure security testing involves evaluating the security of the underlying infrastructure that supports a software system or application, such as networks, servers, and databases.

Some leading tools include [Nessus](https://www.tenable.com/products/nessus), [Nmap](https://nmap.org) and [Qualys](https://www.qualys.com)

### Attestation / Signing

Via the use of [secure hashes](https://en.wikipedia.org/wiki/Secure_Hash_Algorithms) and [digital signatures](https://en.wikipedia.org/wiki/Digital_signature), it's possible to prove that code was either authored by someone ("provenance attestation") or built by something ("build attestation").

This is useful when producing or consuming open source software.

### Developer Best Practces

[Linux Security](https://linuxsecurity.com/features/open-source-software-supply-chain-security) suggests: 

- Using multifactor authentication on developer accounts.
- Having a formal change-tracking process.
- Giving each release a unique identifier.
- Testing for bugs and unexpected behavior throughout the development cycle.
- Documenting and managing a project’s dependencies.
- Cryptographically signing a project’s integrity (attestation, above).
- Checking digital signatures of dependencies.
- Checking for signature _revocation_ (just checking attestation is not enough).
- Tracking and addressing vulnerabilities in open-source tools used in development.

... many of which are contained in the [OpenSSF best practices](https://www.bestpractices.dev/en/criteria/0) (see below).

### Endpoint Detection and Response (EDR)

Endpoint Detection and Response (EDR) is a cybersecurity solution that continuously monitors and analyzes endpoint data to detect, investigate, and mitigate advanced threats across a network.

https://en.wikipedia.org/wiki/Endpoint_detection_and_response

### Web / Mobile Application Security Testing.

- **Web Application Security Testing:** Web application security testing focuses on identifying security vulnerabilities in web applications, such as SQL injection, cross-site scripting (XSS), and cross-site request forgery (CSRF).
- **Mobile Application Security Testing:** Mobile application security testing focuses on identifying security vulnerabilities in mobile applications, such as those running on iOS or Android platforms.

**See:**

- Consider Gartner's [Application Security Testing](https://www.gartner.com/reviews/market/application-security-testing) summary page.  Lots of overlap in the tools between many of these categories.  

## Initiatives / Industry Bodies

- **[Vulnerabilities](../../Artifacts/CVE)**

  - **[Common Vulnerabilities and Exposures](https://www.cve.org) (CVE)** program, to catalog vulnerabilities.  See also [CVE Article](../../Artifacts/CVE).
  - **[National Vulnerability Database](https://nvd.nist.gov/vuln) (NVD)** program, another vulnerability catalog, run by [NIST](https://www.nist.gov).
  - **[OSV](https://osv.dev)** - synthesises CVEs fom the databases for a given commit hash.

- **[OpenSSF](https://openssf.org)**: A foundation (part of [LF](https://linuxfoundation.org)) devoted to the securing the open source ecosystem.  Most of its projects are hosted on [GitHub](https://github.com/ossf).  Projects of note include:
 
  - **[GUAC](https://github.com/guacsec/guac)**: Graph for Understanding Artifact Composition  
  - **[Best Practices Working group](https://www.bestpractices.dev/en)**: publishes best practices around hosting open source projects, issuing badges for meeting [their criteria](https://www.bestpractices.dev/en/criteria/0).
  - **[Digital Identity Attestation](https://www.sigstore.dev)**: an initiative for allowing contributors to sign open source code.
  - **[AllStar](https://openssf.org/blog/2021/08/11/introducing-the-allstar-github-app/)**: A GitHub App for [heuristically testing](https://github.com/ossf/scorecard/blob/main/docs/checks.md#check-documentation) best practices around open source governance.
  - **[CVE Schema](https://ossf.github.io/osv-schema/)** Standard format for reporting of CVEs.

- **[The MITRE ATT&CK](https://attack.mitre.org)** aims to be a knowledge base of all the tactics used in such supply chain attacks. 

- **[SLSA](https://slsa.dev/spec/v1.0/threats-overview)**: "Supply chain Levels for Software Artifacts".  This is a framework designed for creating repeatable builds with provenance of their components.

- **[OpenChain]( https://www.openchainproject.org/)**:  an ISO standard for open source license compliance, developed and hosted by the Linux Foundation. It provides a set of requirements to create effective open source management systems, helping companies to minimize legal risks related to open source software use and improve efficiency and trust in the software supply chain.

- **[Renovate Bot](https://docs.renovatebot.com)**: Renovate Bot is an open-source tool that helps to automate the process of updating dependencies in software projects. It scans your project for dependencies, automatically opens pull requests to update outdated ones, and provides change logs and compatibility information to assist in validation and troubleshooting.

- **[Secure Supply Chain Consumption Framework (S23C2F)](https://github.com/ossf/s2c2f)**: The S2C2F SIG is a group working within the OpenSSF's Supply Chain Integrity Working Group formed to further develop and continuously improve the [S2C2F guide](https://github.com/ossf/s2c2f/blob/main/specification/Secure_Supply_Chain_Consumption_Framework_(S2C2F).pdf) which outlines and defines how to securely consume Open Source Software (OSS) dependencies into the developer’s workflow.

- **[Financial Services Information Sharing and Analysis Center (FS-ISAC)](https://www.fsisac.com)**:  a non-profit organization dedicated to reducing cyber-risk in the global financial system. It enables members to share threat and vulnerability information, collaborate on incident response and mitigation, conduct synchronized response, and provides tools for better protection against physical and cyber threats.


## Legislation

### US

Following [SolarWinds](#example-solar-winds) the US government became concerned with the issue of software supply chain security.   See the linked articles below for more information.   However, a very brief summary is as follows:

- **Removing barriers to sharing threat information** between different government departments and the private sector.
- **Adopting a zero-trust architecture**, deployment of MFA, encryption etc.
- **Accelerate movement to secure cloud services**
- **Enhance Software Supply Chain Security**, adopting the standards and best practices, [SBOMs](../../Artifacts/SBOMs) etc.
- **Establish a standard "Playbook"** for responding to cyber incidentts.
- **Improving detection of cybersecurity vulnerabilities and incidents** e.g. by deploying [EDR](#endpoint-detection-and-response-edr)

**See:**

 - [Bob Calloway](https://www.youtube.com/watch?v=vAfk03yDIc8) - "All Things Open Keynote, 2022 on Supply Chain Security.
 - [OpenSSF's Blog Article](https://openssf.org/blog/2022/09/27/the-united-states-securing-open-source-software-act-what-you-need-to-know/) about this legislation.
 - [Executive Order (2021)](https://www.whitehouse.gov/briefing-room/presidential-actions/2021/05/12/executive-order-on-improving-the-nations-cybersecurity/) on Improving the Nation’s Cybersecurity
 - [Securing Open Source Software Act (2022)](https://www.congress.gov/bill/117th-congress/senate-bill/4913). This bill sets forth the duties of the Cybersecurity and Infrastructure Security Agency (CISA) regarding open source software security.
 - [FACT SHEET](https://www.whitehouse.gov/briefing-room/statements-releases/2021/05/12/fact-sheet-president-signs-executive-order-charting-new-course-to-improve-the-nations-cybersecurity-and-protect-federal-government-networks/): President Signs Executive Order Charting New Course to Improve the Nation’s Cybersecurity and Protect Federal Government Networks]

### EU
 
 - [EU Cybersecurity Strategy (2020)](https://digital-strategy.ec.europa.eu/en/policies/cybersecurity-strategy) aiming to bolster the digital supply chain's resilience and security. 
 - [Digital Operational Resilience Act (2020)](https://www.digital-operational-resilience-act.com) ensure that all financial entities can withstand potential ICT threats, thus addressing the risks that ICT (including supply chain vulnerabilities) can pose to financial stability.
 - [EU Cyber Resilience Act (2022)](https://digital-strategy.ec.europa.eu/en/library/cyber-resilience-act) regulation on cybersecurity requirements for products with digital elements.
 
### UK

 - [National Cyber Security Centre (NCSC)](https://www.ncsc.gov.uk)
 
## Further Reading

- [State of the Software Supply Chain](https://www.sonatype.com/hubfs/Q3%202021-State%20of%20the%20Software%20Supply%20Chain-Report/SSSC-Report-2021_0913_PM_2.pdf) - SonaType's 2021 Report

- [Open Source Software Supply Chain Security](https://project.linuxfoundation.org/hubfs/Reports/oss_supply_chain_security.pdf?hsLang=en) Report from 2020 by the Linux Foundation.

- [Do your part to secure the open source supply chain](https://github.com/readme/guides/dependency-risk) article by GitHub ReadME.

- [Keynote - OSS Supply CHain Security](https://www.youtube.com/watch?v=vAfk03yDIc8) talk by Google's Bob Calloway at All Things Open 2022.

- [Protect your open source project from supply chain attacks](https://opensource.googleblog.com/2021/10/protect-your-open-source-project-from-supply-chain-attacks.html) - 2021 blog article adapted from talk at All Things Open 2021, in the form of a Supply Chain Security quiz.

 - [CVEs](../../Artifacts/CVE) article from the BoK.
 
 - [SBOMs](../../Artifacts/SBOMs) primer.
 
 - [OpenChain Security Assurance](../../Artifacts/OpenChain-SecurityAssurance) an ISO Standard from the Linux Foundation.


## Maturity Checklist

<ArticleChecklist checklist={frontMatter.checklist} title={frontMatter.title} />
