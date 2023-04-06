---
title: Legal Risk
tags:
  - Legal Risk
  - Legal (Role)
  - Placeholder
---

<BoxOut title="Legal Risk" image="/img/bok/risks/legal-risk.png">

Legal risk refers to the potential for an organization to face legal consequences and financial or reputational harm as a result of its actions or decisions that violate laws and regulations.

> [Basel II](https://en.wikipedia.org/wiki/Basel_II) classified legal risk as a subset of operational risk in 2003. This conception is based on a business perspective, recognizing that there are threats entailed in the business operating environment. The idea is that businesses do not operate in a vacuum and in the exploitation of opportunities and their engagement with other businesses, their activities tend to become subjects of legal liabilities and obligations. - [Legal Risk, _Wikipedia_](https://en.wikipedia.org/wiki/Legal_risk)

</BoxOut>


### Accountancy Regulations

 - Anything that developers write has a cost associated with it, which is charged to a cost center within an organisation. 
 - These costs are amortised with respect to the assets they create.
 - _Giving away software_ as open source breaks this model and needs to be accounted for correctly.

#### Sarbanes Oxley (SOX)

The Sarbanes–Oxley Act (SOX) of 2002 is a United States federal law that mandates certain practices in financial record keeping and reporting for corporations. It codified the system of "Internal Controls over Financial Reporting" that requires publicly-traded corporations to define operational risk and control activities, notably IT General Controls, that includes the Software Development Lifecycle.

SOX was enacted in response to accounting scandals involving companies such as [Enron, WorldCom, and Tyco](https://en.wikipedia.org/wiki/Sarbanes–Oxley_Act#History_and_context). The act established new or expanded requirements for public companies and accounting firms, with the goal of improving corporate governance, financial reporting, and accountability.

While not all financial institutions are public companies, the concept of IT controls has been incorporated into FDIC examinations and auditing requirements for internal and external auditors. 

**Example:** In 2013, [JPMorgan Chase was fined $200 million](https://www.sec.gov/news/press/2013/2013-187.htm) by regulatory authorities for its failure to maintain effective internal controls over financial reporting. The bank had made several risky trades that resulted in significant losses, which highlighted weaknesses in its internal control processes.
 
 

### Communication Policies

#### Market Abuse Regulation (MAR)

In order to prevent insider dealing and market manipulation, under the [European Union's Market Abuse Regulation (MAR)](https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32014R0596&from=EN), firms must maintain effective systems and controls to detect, prevent, and report market abuse, and to keep records of all communications that are capable of leading to a transaction.

**Example:** The US has a similar regulation, [Securities and Exchange Commission's (SEC) Regulation Fair Disclosure (Reg FD)](https://en.wikipedia.org/wiki/Regulation_Fair_Disclosure).  In 2022 several major firms were fined under this regulation for using WhatsApp messenger, an un-monitored and unauthorized communications platform:

> The Securities and Exchange Commission announced $1.1 billion in fines and the Commodity Futures Trading Commission disclosed $710 million in penalties in separate statements Tuesday. Those levies -- against firms including Bank of America Corp., Citigroup Inc. and Goldman Sachs Group Inc. -- combined with JPMorgan Chase & Co.’s $200 million in fines from December, bring the total to $2.01 billion, making them the biggest penalties ever against US banks for record-keeping lapses. - [Wall Street Hit With $2 Billion of Fines in WhatsApp Probe, _Bloomberg_](https://www.bloomberg.com/news/articles/2022-09-27/wall-street-whatsapp-probe-poised-to-result-in-historic-fine)

See also: 

- [Data Loss Prevention](../Level-3/DLP).

### Anti-Money Laundering

As noted in the discussion of the BSA, The use of open source software may present risks related to anti-money laundering and sanctions compliance, particularly if the software is used to facilitate financial transactions. 

Compliance with these policies is essential to ensure that the organization does not inadvertently facilitate illegal activities or violate sanctions regimes.

There is also consideration for open source decentralized projects and cryptocurrency. "Crypto" has recevied tremendous scrutiny though significant effort is being made in the development of Central Bank Digital Currencies (CDBCs)

#### Bank Secrecy Act 1970

The Bank Secrecy Act of 1970 (BSA), also known as the Currency and Foreign Transactions Reporting Act, is a U.S. law requiring financial institutions in the United States to assist U.S. government agencies in detecting and preventing money laundering. The BSA is sometimes referred to as an anti-money laundering law (AML) or jointly as BSA/AML.

A significant software industry has developed around providing software to analyze transactions in an attempt to identify transactions or patterns of transactions that may indicate AML. This implies that open source software in certain uses may have to comply with collecting transaction information, as well as potentially developing new open source software solutions that may support BSA reporting. 

**Example:** In 2012, HSBC was charged with willfully failing to maintain an effective anti-money laundering program and willfully facilitating financial transactions for customers in countries under U.S. sanctions, including Iran, Sudan, and Libya.  HSBC ultimately [agreed to pay a $1.3 billion settlement](https://www.ice.gov/news/releases/hsbc-admits-anti-money-laundering-and-sanctions-violations-following-hsi-el-dorado) to resolve the charges, which represented the largest penalty ever imposed under the Bank Secrecy Act at the time.
 
### Intellectual Property and Licensing Policies

Open source software is typically distributed under specific [licensing terms](../../Artifacts/Licenses) and conditions that may affect how the software can be used, modified, and distributed. Compliance with these licensing requirements is essential to ensure that the organization does not infringe on the intellectual property rights of the software developers or violate the terms of the license.

- Deployment has an impact on the choice of licenses.  e.g. free-for-use machine learning packages, running on specific Nvidia chips.  Nvidia license says you shouldn't develop on the software unless you run on Nvidia hardware.  

- SGX Confidential Computing Consortium (more a hardware issue)

_Open source development on top of prioprietary codebase_
 
See also: 

 - [Patents](../../Artifacts/Patents) 
 - [Trademarks](../../Artfacts/Trademarks)
 - [License Compliance Management](../Activities/Level-2/License-Management.md)
 - [Training](../../Activities/Level-2/Training)

### Cross-Border Obligations

 - Many organisations are bound by what is allowed to cross their borders.  For example:  in Swiss banks, there are strong controls in place to make sure no data leaves Switzerland.  
 - This is a consideration for code too, as code _contributed to GitHub_ is data leaving the organisation and there may be requirements around these obligations.
 - Another example of why preventing contributions with "test data" in them may be good policy.

### Counter-Terrorism 

These laws require financial institutions to implement measures that prevent, detect, and report suspicious activities or transactions related to the financing of terrorism or terrorist organizations.

#### Patriot Act

USA PATRIOT Act: This U.S. law enhances the BSA by imposing additional AML and Counter-Terrorist Financing (CTF) requirements on banks, such as implementing Customer Identification Programs (CIP) and conducting enhanced due diligence for high-risk customers.  This is dealt with Title III (part 3) of the Patriot Act :

> The first subtitle deals primarily with strengthening banking rules against money laundering, especially on the international stage. The second subtitle attempts to improve communication between law enforcement agencies and financial institutions, as well as expanding recordkeeping and reporting requirements. The third subtitle deals with currency smuggling and counterfeiting, including quadrupling the maximum penalty for counterfeiting foreign currency. - [Patriot Act, _Wikipedia_](https://en.wikipedia.org/wiki/Patriot_Act#Title_III:_Anti-money-laundering_to_prevent_terrorism)
 
### Sanctions
 
Many countries are prevented from selling into certain territories (US into Iran for example).
  
#### Sanctions Regimes 
 
Banks typically decide which sanctions regimes to follow based on a number of factors, including their legal and regulatory obligations, the countries they operate in, and the risks associated with their business activities.

 - First and foremost, banks must comply with the sanctions regimes imposed by their own country's government. For example, a bank based in the United States must comply with the sanctions regimes imposed by the US government, such as those administered by the [Office of Foreign Assets Control (OFAC)](https://home.treasury.gov/policy-issues/office-of-foreign-assets-control-sanctions-programs-and-informatioun).

 - In addition to complying with their own country's sanctions regimes, banks must also comply with international sanctions regimes, such as those imposed by the [United Nations](https://www.un.org/securitycouncil/content/un-sc-consolidated-list) or the [European Union](https://www.eeas.europa.eu/eeas/european-union-sanctions_en). Banks that operate in multiple countries may also need to comply with the sanctions regimes imposed by the countries in which they do business.

 - Banks must also take into account the risks associated with their business activities, such as the countries they operate in, the industries they serve, and the types of transactions they process. For example, a bank that does business with high-risk countries or industries may need to implement additional sanctions screening and monitoring measures to mitigate the risk of potential sanctions violations.

**Example:** In 2014, [BNP Paribas pleaded guilty to violating US sanctions](https://www.justice.gov/opa/pr/bnp-paribas-agrees-plead-guilty-and-pay-89-billion-illegally-processing-financial) against Sudan, Cuba, and Iran and agreed to pay a fine of $8.9 billion. The bank was accused of processing transactions in US dollars for clients in those countries in violation of US sanctions.

#### Cryptography

The United States regulates the export of non-standard cryptography under the Export Administration Regulations (EAR), which classifies cryptographic items as "dual-use" commodities, software, or technology that have both civilian and military applications, and require an export license depending on the encryption strength, end-use, or destination country.

See Also:

 - [Export of cryptography from the United States](https://en.wikipedia.org/wiki/Export_of_cryptography_from_the_United_States) - Wikipedia Article.

#### Sanctions Compliance with Open Source Software

 - Is open source contribution encompassed in "selling"?  
- using russian open source software?
- core-js

See Also:

 - [Deutsche Bank seeks options as sanctions threaten Russian dev unit](https://www.theregister.com/2022/03/04/deutsche_bank_russia_dev_unit/)
 - [Deutsche Bank Moving Russian IT Staff to New Hub in Germany](https://www.bloomberg.com/news/articles/2022-06-07/deutsche-bank-moving-russian-it-staff-to-new-hub-in-germany)

#### Counter-Terrorism Laws

 
 
## Risk Management Activities

<BokTagList tag="Legal Risk" filter="Activities" /> 