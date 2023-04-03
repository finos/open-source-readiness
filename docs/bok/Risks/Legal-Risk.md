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


## Examples

(improve this)


### Accountancy Regulations

 - Anything that developers write has a cost associated with it, which is charged to a cost center within an organisation. 
 - These costs are amortised with respect to the assets they create.
 - _Giving away software_ as open source breaks this model and needs to be accounted for correctly.
 
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

### Export Regulations / Sanctions Compliance

 - In a similar vein, many countries are prevented from selling into certain territories.  US/Iran for example.
 - There are rules in the US about exporting "non-standard crypto" (which might include obfuscated code).
 - Is open source contribution encompassed in "selling"?  
  
#### Sanctions Regimes 
 
Banks typically decide which sanctions regimes to follow based on a number of factors, including their legal and regulatory obligations, the countries they operate in, and the risks associated with their business activities.

First and foremost, banks must comply with the sanctions regimes imposed by their own country's government. For example, a bank based in the United States must comply with the sanctions regimes imposed by the US government, such as those administered by the [Office of Foreign Assets Control (OFAC)](https://home.treasury.gov/policy-issues/office-of-foreign-assets-control-sanctions-programs-and-informatioun).

In addition to complying with their own country's sanctions regimes, banks must also comply with international sanctions regimes, such as those imposed by the [United Nations](https://www.un.org/securitycouncil/content/un-sc-consolidated-list) or the [European Union](https://www.eeas.europa.eu/eeas/european-union-sanctions_en). Banks that operate in multiple countries may also need to comply with the sanctions regimes imposed by the countries in which they do business.

Banks must also take into account the risks associated with their business activities, such as the countries they operate in, the industries they serve, and the types of transactions they process. For example, a bank that does business with high-risk countries or industries may need to implement additional sanctions screening and monitoring measures to mitigate the risk of potential sanctions violations.

**Example:** In 2014, [BNP Paribas pleaded guilty to violating US sanctions](https://www.justice.gov/opa/pr/bnp-paribas-agrees-plead-guilty-and-pay-89-billion-illegally-processing-financial) against Sudan, Cuba, and Iran and agreed to pay a fine of $8.9 billion. The bank was accused of processing transactions in US dollars for clients in those countries in violation of US sanctions.

#### Sanctions Compliance with Open Source Software


- using russian open source software?
- core-js

See Also:

 - [Deutsche Bank seeks options as sanctions threaten Russian dev unit](https://www.theregister.com/2022/03/04/deutsche_bank_russia_dev_unit/)
 - [Deutsche Bank Moving Russian IT Staff to New Hub in Germany](https://www.bloomberg.com/news/articles/2022-06-07/deutsche-bank-moving-russian-it-staff-to-new-hub-in-germany)
 
 
## Risk Management Activities

<BokTagList tag="Legal Risk" filter="Activities" /> 