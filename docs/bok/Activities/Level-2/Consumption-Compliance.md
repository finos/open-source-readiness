---
title: Ensuring Open Source Compliance For Consumption
tags: 
  - Placeholder
  - Level 2 (OSMM)
  - Risk-Compliance (Role)
  - Legal Risk
sidebar_position: 6
---

other compliance details tbd.

Make sure to cover things in the [checklist](/docs/operations/compliance-checklist) - perhaps subsume that into Artifacts.

## Three Lines of Defence Model

The three lines of defence is a risk management model commonly used in the banking industry to establish an effective and efficient risk management framework. The three lines are:

- **First Line of Defence:** This line of defence consists of the business units or front-line operations responsible for managing risks on a day-to-day basis. This includes the employees who execute operational tasks and processes, such as loan officers or traders. The first line of defence is responsible for identifying, assessing, and managing risks in their respective areas, adhering to internal controls, and communicating changes is operational risk or control deficiency. 

- **Second Line of Defence:** This line of defence consists of risk management functions that are responsible for providing oversight and guidance to the first line of defence. This includes the risk management and compliance functions. The second line of defence monitors the effectiveness of the first line's risk management activities and provides guidance and support as needed. This includes periodic reviews, audits, or use of automated tools to monitor risk and control activities. 

- **Third Line of Defence:** This line of defence consists of independent assurance functions that provide an objective assessment of the effectiveness of the first and second lines of defence. This includes internal auditors.  The third line of defence provides independent assurance on the effectiveness of the overall risk management framework and ensures that any deficiencies or gaps are addressed. This includes periodic audits, required disclosures and annual financial reporting. 

- **External auditors/regulators:**  External auditors can play an important role through their considerations of the governance and control structure where this is relevant to financial reporting.  For regulated entities,  governance and risk management requirements (see below for examples) are often set by regulators.

Further Reading:

 - [Updated 3 Lines of Defence Model](https://www.bdo.co.uk/en-gb/insights/advisory/risk-and-advisory-services/the-three-lines-of-defence-model-has-been-updated-what-does-this-mean-for-heads-of-internal) 
 - [Three Lines of Defence Model Explained](https://managingrisktogether.orx.org/insights-resources/three-lines-defence-3lod-model-explained)

## What is Compliance?

The compliance department in a bank is responsible for ensuring that the bank operates in compliance with laws and regulations. This includes developing and implementing policies and procedures to manage compliance risks, conducting risk assessments, providing training and education to employees, monitoring the bank's compliance with laws and regulations, and reporting any non-compliance to senior management and the board of directors. The compliance department plays a critical role in maintaining the bank's reputation and avoiding financial and legal penalties that may result from non-compliance.

## Intersection with Open Source Consumption

There are several banking compliance policies that intersect with the use of software generally within an organization, which apply equally to open source software:


### Communication Policies

#### MAR

In order to prevent insider dealing and market manipulation, under the [European Union's Market Abuse Regulation (MAR)](https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32014R0596&from=EN), firms must maintain effective systems and controls to detect, prevent, and report market abuse, and to keep records of all communications that are capable of leading to a transaction.

**Example:** The US has a similar regulation, [Securities and Exchange Commission's (SEC) Regulation Fair Disclosure (Reg FD)](https://en.wikipedia.org/wiki/Regulation_Fair_Disclosure).  In 2022 several major firms were fined under this regulation for using WhatsApp messenger, an un-monitored and unauthorized communications platform:

> The Securities and Exchange Commission announced $1.1 billion in fines and the Commodity Futures Trading Commission disclosed $710 million in penalties in separate statements Tuesday. Those levies -- against firms including Bank of America Corp., Citigroup Inc. and Goldman Sachs Group Inc. -- combined with JPMorgan Chase & Co.’s $200 million in fines from December, bring the total to $2.01 billion, making them the biggest penalties ever against US banks for record-keeping lapses. - [Wall Street Hit With $2 Billion of Fines in WhatsApp Probe, _Bloomberg_](https://www.bloomberg.com/news/articles/2022-09-27/wall-street-whatsapp-probe-poised-to-result-in-historic-fine)

See also: 

- [Data Loss Prevention](../Level-3/DLP).

#### SOX

The Sarbanes–Oxley Act (SOX) of 2002 is a United States federal law that mandates certain practices in financial record keeping and reporting for corporations. It codified the system of "Internal Controls over Financial Reporting" that requires publicly-traded corporations to define operational risk and control activities, notably IT General Controls, that includes the Software Development Lifecycle.

SOX was enacted in response to accounting scandals involving companies such as [Enron, WorldCom, and Tyco](https://en.wikipedia.org/wiki/Sarbanes–Oxley_Act#History_and_context). The act established new or expanded requirements for public companies and accounting firms, with the goal of improving corporate governance, financial reporting, and accountability.

While not all financial institutions are public companies, the concept of IT controls has been incorporated into FDIC examinations and auditing requirements for internal and external auditors. 

**Example:** In 2013, [JPMorgan Chase was fined $200 million](https://www.sec.gov/news/press/2013/2013-187.htm) by regulatory authorities for its failure to maintain effective internal controls over financial reporting. The bank had made several risky trades that resulted in significant losses, which highlighted weaknesses in its internal control processes.
 
### Anti-Money Laundering (AML)

As noted in the discussion of the BSA, The use of open source software may present risks related to anti-money laundering and sanctions compliance, particularly if the software is used to facilitate financial transactions. 

Compliance with these policies is essential to ensure that the organization does not inadvertently facilitate illegal activities or violate sanctions regimes.

There is also consideration for open source decentralized projects and cryptocurrency. "Crypto" has recevied tremendous scrutiny though significant effort is being made in the development of Central Bank Digital Currencies (CDBCs)

#### Bank Secrecy Act of 1970

The Bank Secrecy Act of 1970 (BSA), also known as the Currency and Foreign Transactions Reporting Act, is a U.S. law requiring financial institutions in the United States to assist U.S. government agencies in detecting and preventing money laundering. The BSA is sometimes referred to as an anti-money laundering law (AML) or jointly as BSA/AML.

A significant software industry has developed around providing software to analyze transactions in an attempt to identify transactions or patterns of transactions that may indicate AML. This implies that open source software in certain uses may have to comply with collecting transaction information, as well as potentially developing new open source software solutions that may support BSA reporting. 

**Example:** In 2012, HSBC was charged with willfully failing to maintain an effective anti-money laundering program and willfully facilitating financial transactions for customers in countries under U.S. sanctions, including Iran, Sudan, and Libya.  HSBC ultimately [agreed to pay a $1.3 billion settlement](https://www.ice.gov/news/releases/hsbc-admits-anti-money-laundering-and-sanctions-violations-following-hsi-el-dorado) to resolve the charges, which represented the largest penalty ever imposed under the Bank Secrecy Act at the time.

### Risk Management

The use of open source software may present risks related to operational, financial, or reputational risks. Compliance with risk management and internal controls policies is essential to ensure that these risks are identified, assessed, and managed effectively.


#### Financial Risks

tbd

#### Communications / Reputational Risk 

tbd


Management


#### PCI DSS 4.0

Payment Card Industry Data Security Standards

Coming soon

- [SBOMs](../../Artifacts/SBOMs)
- What cloud providers does it run on?
- Graph of linkages around who developed it, where it can be used etc.

- e.g. Solar Winds Hack.  

PCI DSS, HIPAA, CCPA


## Further Topics

- CFI


## Working With Compliance


1.

- Controls/tools built around protection (PCI/PPI/proprietary code).  
- All these controls written from this perspective.

2.  What does "production" mean?

- Putting something into an environment accessible to a customer.
- Not the same for OSS:

   -What happens with vulns?
   -What does the licence mean WRT liability/brand damage.
   
3.  Avoiding leaking proprietary code.

- architecture, code review, business review

controls need to vary with proximity to core banking.  e.g. backstage, react.

Don't want to apply a heavyweight review process to every area of code.

PatH:

- Start small with a small contribution outside of the main core activities. No one cares about this small stuff.
- Collaborating across industry with competitors much harder.
- INternal code -> Open SOurce, much harder.

@andybs



