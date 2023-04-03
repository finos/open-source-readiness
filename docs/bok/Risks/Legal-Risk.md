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
 
 

### License Compliance

 - What consitutes an acceptable license depends on the software, the license and the context it is used in.  
 - For this reason, it is difficult to get (say the legal department) to review each license and make a blanket decision on each one.
 - Again - look to tooling to help mitigate this risk.  Can software project's build be failed because the wrong licenses are included in the codebase?
 - See [License Compliance Management](../Activities/Level-2/License-Management.md)

### Cross-Border Obligations

 - Many organisations are bound by what is allowed to cross their borders.  For example:  in Swiss banks, there are strong controls in place to make sure no data leaves Switzerland.  
 - This is a consideration for code too, as code _contributed to GitHub_ is data leaving the organisation and there may be requirements around these obligations.
 - Another example of why preventing contributions with "test data" in them may be good policy.

### Export Regulations

 - In a similar vein, many countries are prevented from selling into certain territories.  US/Iran for example.
 - There are rules in the US about exporting "non-standard crypto" (which might include obfuscated code).
 - Is open source contribution encompassed in "selling"?  
 
## Risk Management Activities

<BokTagList tag="Legal Risk" filter="Activities" /> 