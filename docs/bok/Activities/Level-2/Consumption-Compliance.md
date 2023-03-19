---
title: Ensuring Open Source Compliance For Consumption
tags: 
  - OSPO (Role)
  - Placeholder
  - Level 2 (OSMM)
  - Compliance (Role)
  - Legal Risk
draft: true
sidebar_position: 6
---

Compliance and contribution tooling [DLP](DLP)

other compliance details tbd.

Make sure to cover things in the [checklist](/docs/operations/compliance-checklist) - perhaps subsume that into Artifacts.



## Three Lines of Defence Model

The three lines of defence is a risk management model commonly used in the banking industry to establish an effective and efficient risk management framework. The three lines are:

- **First Line of Defence:** This line of defence consists of the business units or front-line operations responsible for managing risks on a day-to-day basis. This includes the employees who execute operational tasks and processes, such as loan officers or traders. The first line of defence is responsible for identifying, assessing, and managing risks in their respective areas, adhering to internal controls, and communicating changes is operational risk or control deficiency. 

- **Second Line of Defence:** This line of defence consists of risk management functions that are responsible for providing oversight and guidance to the first line of defence. This includes the risk management, compliance, and internal audit functions. The second line of defence monitors the effectiveness of the first line's risk management activities and provides guidance and support as needed. This includes periodic reviews, audits, or use of automated tools to monitor risk and control activities. 

- **Third Line of Defence:** This line of defence consists of independent assurance functions that provide an objective assessment of the effectiveness of the first and second lines of defence. This includes external auditors, regulatory auditors, and other assurance providers. The third line of defence provides independent assurance on the effectiveness of the overall risk management framework and ensures that any deficiencies or gaps are addressed. This includes periodic audits, required disclosures and annual financial reporting. 


## What is Compliance?

The compliance department in a bank is responsible for ensuring that the bank operates in compliance with laws and regulations. This includes developing and implementing policies and procedures to manage compliance risks, conducting risk assessments, providing training and education to employees, monitoring the bank's compliance with laws and regulations, and reporting any non-compliance to senior management and the board of directors. The compliance department plays a critical role in maintaining the bank's reputation and avoiding financial and legal penalties that may result from non-compliance.

## Intersection with Open Source Consumption

There are several banking compliance policies that intersect with the use of software generally within an organization, which apply equally to open source software:

### Sarbanes-Oxley Act (SOX)
The Sarbanes–Oxley Act of 2002 is a United States federal law that mandates certain practices in financial record keeping and reporting for corporations. It codified the system of "Internal Controls over Financial Reporting" that requires publicly-traded corporations to define operational risk and control activities, notably IT General Controls, that includes the Software Development Lifecycle.

While not all financial institutions are public companies, the concept of IT controls has been incorporated into FDIC examinations and auditing requirements for internal and external auditors. 

### Bank Secrecy Act of 1970
The Bank Secrecy Act of 1970 (BSA), also known as the Currency and Foreign Transactions Reporting Act, is a U.S. law requiring financial institutions in the United States to assist U.S. government agencies in detecting and preventing money laundering.The BSA is sometimes referred to as an anti-money laundering law (AML) or jointly as BSA/AML.

A significant software industry has developed around providing software to analyze transactions in an attempt to identify transactions or patterns of transactions that may indicate AML. This implies that open source software in certain uses may have to comply with collecting transaction information, as well as potentially developing new open source software solutions that may support BSA reporting. 

### Intellectual Property and Licensing Policies

Open source software is typically distributed under specific [licensing terms](../../Artifacts/Licenses) and conditions that may affect how the software can be used, modified, and distributed. Compliance with these licensing requirements is essential to ensure that the organization does not infringe on the intellectual property rights of the software developers or violate the terms of the license.

See also: 

 - [Patents](../../Artifacts/Patents) 
 
 - [Trademarks](../../Artfacts/Trademarks).
 
### Data protection & Security Policy

The use of open source software may present data protection and security risks, particularly if the software has not been thoroughly reviewed or [tested for security vulnerabilities](Supply-Chain-Security). 

Compliance with data protection and security policies is essential to ensure that the organization's data is protected and secure.  Many pieces of software "phone home" and this can present an opportunity for data leakage for the bank.

#### Gramm-Leach-Bliley Act
The Gramm-Leach-Bliley Act (GLBA)  also known as the Financial Services Modernization Act of 1999, is a federal law enacted in the United States to control the ways financial institutions deal with the private information of individuals. 
The Act consists of three sections: The Financial Privacy Rule, which regulates the collection and disclosure of private financial information; the Safeguards Rule, which stipulates that financial institutions must implement security programs to protect such information; and the Pretexting provisions, which prohibit the practice of pretexting or accessing private information using false pretenses. 
The Act also requires financial institutions to give customers written privacy policy notices that explain their information-sharing practices.

##### What Does the GLBA Require? 
The GLBA requires companies that qualify as “financial institutions” to take several affirmative steps in order to prevent the unauthorized collection, use, and disclosure of "Non-public Personal Information" or NPI. 
It imposes these obligations under two “Rules”: (i) the Privacy Rule, and (ii) the Safeguards Rule.

##### The GLBA Privacy Rule
The Privacy Rule establishes financial institutions’ obligations with regard to consumer and customer NPI. 
The GLBA treats “consumers” and “customers” differently, with “consumers” referring to a much larger population of individuals. 
A “consumer” is anyone who obtains financial products or services from a financial institution, while a “customer” is a consumer who establishes a continuing relationship with a financial institution. 

Under the Privacy Rule, financial institutions must provide privacy notices to consumers. They must provide this notice at the time the consumer relationship is established and on an annual basis going forward. In order to comply with the GLBA, a consumer privacy notice must explain what NPI the financial institution collects, how that NPI gets used and shared, and how it gets protected. 
Crucially, the consumer privacy notice must also provide instructions for how consumers can opt out of having their NPI shared with unaffiliated third parties. 
While there are exceptions to the Privacy Rule’s notice requirements, financial institutions must be very cautious about not providing privacy notices to consumers. 
If a financial institution seeks not to provide notice, it must ensure that it can clearly document its qualification for one of the Privacy Rule’s exceptions. 

##### The GLBA Safeguards Rule
The Safeguards Rule has two main components. It requires financial institutions to implement security protocols (both logical and physical), and it requires financial institutions to provide breach notifications when customers’ NPI becomes compromised. 
While all financial institutions that collect NPI (which encompasses virtually all financial institutions) must comply with the Safeguards Rule, individual institutions’ obligations will differ depending on their resources, the volume of NPI they collect, and the manners in which they use and store NPI. 
The FTC has provided recommendations for Safeguards Rule compliance; however, it also makes clear that, “[c]ompanies should implement safeguards appropriate to their own circumstances . . . and address any unique risks raised by their business operations — such as the risks raised when employees access customer data from their homes or other off-site locations, or when customer data is transmitted electronically outside the company network.”

#### GDPR

Any software (including open source) used by an organisation operating within the EU needs to be [General Data Protection Regulation (GDPR) compliant:

> The regulation applies if the data controller (an organisation that collects data from EU residents), or processor (an organisation that processes data on behalf of a data controller like cloud service providers), or the data subject (person) is based in the EU. Under certain circumstances,[3] the regulation also applies to organisations based outside the EU if they collect or process personal data of individuals located inside the EU. The regulation does not apply to the processing of data by a person for a "purely personal or household activity and thus with no connection to a professional or commercial activity." - [GDPR, _Wikipedia_](https://en.wikipedia.org/wiki/General_Data_Protection_Regulation)

**Example: ** During the pandemic in 2020, many banks started using [Zoom](https://zoom.us) for video conferencing, but this [ran afoul of the GDPR regulations (German language)](https://datenschutz-hamburg.de/pressemitteilungen/2021/08/2021-08-16-senatskanzlei-zoom).  More recent versions of the software [aim to remedy this](https://explore.zoom.us/en/gdpr/).

- other data protection stuff
- security examples
- phishing?

### Software Development Policies
As noted in the BOK activities addressing security, incorporating secure development into the Software Development Lifecycle (SDLC)..... 


### Communication Policies

In order to prevent insider dealing and market manipulation, under the [European Union's Market Abuse Regulation](https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32014R0596&from=EN), firms must maintain effective systems and controls to detect, prevent, and report market abuse, and to keep records of all communications that are capable of leading to a transaction.

**Example:** The US has a similar regulation, [Securities and Exchange Commission's (SEC) Regulation Fair Disclosure (Reg FD)](https://en.wikipedia.org/wiki/Regulation_Fair_Disclosure).  In 2022 several major firms were fined under this regulation for using WhatsApp messenger, an un-monitored and unauthorized communications platform:

> The Securities and Exchange Commission announced $1.1 billion in fines and the Commodity Futures Trading Commission disclosed $710 million in penalties in separate statements Tuesday. Those levies -- against firms including Bank of America Corp., Citigroup Inc. and Goldman Sachs Group Inc. -- combined with JPMorgan Chase & Co.’s $200 million in fines from December, bring the total to $2.01 billion, making them the biggest penalties ever against US banks for record-keeping lapses. - [Wall Street Hit With $2 Billion of Fines in WhatsApp Probe, _Bloomberg_](https://www.bloomberg.com/news/articles/2022-09-27/wall-street-whatsapp-probe-poised-to-result-in-historic-fine)

See also: 

- [Data Leakage Prevention](../Level-3/DLP).
 
### Anti-Money Laundering (AML)

As noted in the discussion of the BSA, The use of open source software may present risks related to anti-money laundering and sanctions compliance, particularly if the software is used to facilitate financial transactions. 

Compliance with these policies is essential to ensure that the organization does not inadvertently facilitate illegal activities or violate sanctions regimes.

There is also consideration for open source decentralized projects and cryptocurrency. "Crypto" has recevied tremendous scrutiny though significant effort is being made in the development of Central Bank Digital Currencies (CDBCs)

### Risk Management

The use of open source software may present risks related to operational, financial, or reputational risks. Compliance with risk management and internal controls policies is essential to ensure that these risks are identified, assessed, and managed effectively.

**Example:** In 2017, credit reporting agency [Equifax suffered a massive data breach] that exposed the personal information of approximately 143 million Americans. The breach included names, birthdates, social security numbers, and other sensitive information. The breach led to a drop in the company's stock price and widespread public outrage.  This was caused by an open source vulnerability:

> A key security patch for [Apache Struts](https://en.wikipedia.org/wiki/2017_Equifax_data_breach) was released on March 7, 2017 after a security exploit was found and all users of the framework were urged to update immediately.  Security experts found an unknown hacking group trying to find websites that had failed to update Struts as early as March 10, 2017 as to find a system to exploit. - [2017 Equifax data breach](https://en.wikipedia.org/wiki/2017_Equifax_data_breach)

**Example:** In 2014, [JPMorgan Chase suffered a data breach](https://en.wikipedia.org/wiki/2014_JPMorgan_Chase_data_breach) that compromised the personal information of approximately 76 million households and 7 million small businesses. The breach exposed names, addresses, phone numbers, email addresses, and internal JPMorgan Chase information. The incident led to negative press coverage and public scrutiny of the bank's security practices.

> The attack—disclosed in September 2014—was discovered by the bank's security team in late July 2014, but not completely halted until the middle of August.  The bank declared that login information associated with the accounts (such as social security numbers or passwords) was not compromised but names, email and postal addresses, and phone numbers of account holders were obtained by hackers, raising concerns of potential phishing attacks. - [2014 JPMorgan Chase data breach, _Wikipedia_](https://en.wikipedia.org/wiki/2014_JPMorgan_Chase_data_breach)

**Example:** In 2005, Bank of America suffered a data breach that exposed the personal information of approximately 1.2 million federal employees. The breach occurred when an employee of a subcontractor, who had access to sensitive data, took a laptop containing the information home and it was stolen. The incident led to negative press coverage and calls for stronger data security measures.

**Example:** In 2017, [Wells Fargo suffered a data breach](https://www.bloomberg.com/news/articles/2017-07-22/wells-fargo-said-to-get-regulatory-questions-after-data-breach?leadSource=uverify%20wall) that exposed the personal information of approximately 50,000 of its customers. The breach occurred when an employee of the bank's data hosting vendor accidentally released unencrypted files containing the information to a third party. The incident led to negative press coverage and calls for stronger data security measures.

### Sanctions Policies

Banks typically decide which sanctions regimes to follow based on a number of factors, including their legal and regulatory obligations, the countries they operate in, and the risks associated with their business activities.

First and foremost, banks must comply with the sanctions regimes imposed by their own country's government. For example, a bank based in the United States must comply with the sanctions regimes imposed by the US government, such as those administered by the [Office of Foreign Assets Control (OFAC)](https://home.treasury.gov/policy-issues/office-of-foreign-assets-control-sanctions-programs-and-informatioun).

In addition to complying with their own country's sanctions regimes, banks must also comply with international sanctions regimes, such as those imposed by the [United Nations](https://www.un.org/securitycouncil/content/un-sc-consolidated-list) or the [European Union](https://www.eeas.europa.eu/eeas/european-union-sanctions_en). Banks that operate in multiple countries may also need to comply with the sanctions regimes imposed by the countries in which they do business.

Banks must also take into account the risks associated with their business activities, such as the countries they operate in, the industries they serve, and the types of transactions they process. For example, a bank that does business with high-risk countries or industries may need to implement additional sanctions screening and monitoring measures to mitigate the risk of potential sanctions violations.

- using russian open source software?
- core-js

See Also:

 - [Deutsche Bank seeks options as sanctions threaten Russian dev unit](https://www.theregister.com/2022/03/04/deutsche_bank_russia_dev_unit/)
 - [Deutsche Bank Moving Russian IT Staff to New Hub in Germany](https://www.bloomberg.com/news/articles/2022-06-07/deutsche-bank-moving-russian-it-staff-to-new-hub-in-germany)

