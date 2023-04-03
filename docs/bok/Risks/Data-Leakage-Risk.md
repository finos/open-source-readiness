---
title: Data Leakage Risk
tags:
  - CIO/CTO (Role)
  - Developer (Role)
  - Data Leakage Risk
  - Placeholder
---

<BoxOut title="Data Leakage Risk" image="/img/bok/risks/data-leakage-risk.png">

Data leakage risk refers to the potential for sensitive or confidential information to be unintentionally or maliciously disclosed outside of an organization, leading to potential harm to the organization's reputation, finances, or legal standing.

> A data breach is a security violation, in which sensitive, protected or confidential data is copied, transmitted, viewed, stolen, altered or used by an individual unauthorized to do so.  Other terms are unintentional information disclosure, data leak, information leakage and data spill. - [Data Breach, _Wikipedia_](https://en.wikipedia.org/wiki/Data_breach)

In the past, many financial firms have prohibited the use of social media and sharing sites in order to mitigate the risk of data leakage. However, it is important to balance the risk of data leakage against the benefits of using these sites. This raises the question of whether employees can use sites like GitHub, where uploading data is commonplace, while still having controls in place to mitigate data leakage.

</BoxOut>

### Intellectual Property

Financial firms are technology organizations and, as such, must be aware of the potential risks associated with Intellectual Property (IP) risk. IP leakage can occur anywhere, making it a critical concern for these organizations. The risks are arguably greater in finance due to the penalties that regulators may apply for non-compliance.

tbd.  examples.

### Personal Information Breaches - Some Examples

The use of open source software may present data protection and security risks, particularly if the software has not been thoroughly reviewed or [tested for security vulnerabilities](Supply-Chain-Security). 

Compliance with data protection and security policies is essential to ensure that the organization's data is protected and secure.  Many pieces of software "phone home" and this can present an opportunity for data leakage for the bank.

As noted in the BOK activities [addressing supply chain security](Supply-Chain-Security), incorporating secure development into the Software Development Lifecycle is likely to be a compliance issue and therefore a legal requirement (see below). 

Tools like [Google Docs](https://docs.google.com), [Twitter](https://twitter.com), [StackOverflow](https://stackoverflow.org) and [GitHub](https://github.com) may be rendered inaccessible from within a financial organisation to comply with Data Protection and Security policies, since each presents a venue where client data might be deliberately or accidentally exfiltrated.  (See main article on [DLP](../../Artifacts/DLP-Software) for further details.)

#### GLBA

The [Gramm-Leach-Bliley Act (GLBA)](https://www.ftc.gov/business-guidance/privacy-security/gramm-leach-bliley-act) also known as the Financial Services Modernization Act of 1999, is a federal law enacted in the United States to control the ways financial institutions deal with the private information of individuals.   The Act consists of three provisions: 

 - The **Financial Privacy Rule**, which regulates the collection and disclosure of private financial information.  Under the Privacy Rule, financial institutions must provide privacy notices to consumers. They must provide this notice at the time the consumer relationship is established and on an annual basis going forward.
  
 - The **Safeguards Rule**, which stipulates that financial institutions must implement security programs to protect such information.   It requires financial institutions to implement security protocols (both logical and physical), and it requires financial institutions to provide breach notifications when customers’ Non-Public Information (NPI) becomes compromised. 
 
 - and the **Pretexting provisions**, which prohibit the practice of pretexting, or accessing private information using false pretenses:
 
> Pretexting (sometimes referred to as "social engineering") occurs when someone tries to gain access to personal nonpublic information without proper authority to do so. This may entail requesting private information while impersonating the account holder, by telephone, by mail, by e-mail, or even by "phishing" (i.e., using a phony website or email to collect data). GLBA encourages the organizations covered by GLBA to implement safeguards against pretexting. - [Gramm-Leach-Bliley Act, _Wikipedia_](https://en.wikipedia.org/wiki/Gramm–Leach–Bliley_Act#Pretexting_protection) 

**Example:** [In 2019, Equifax, Inc. agreed to pay at least $575 million](https://www.ftc.gov/legal-library/browse/cases-proceedings/172-3203-equifax-inc), and potentially up to $700 million, as part of a global settlement with the Federal Trade Commission, the Consumer Financial Protection Bureau (CFPB), and 50 U.S. states and territories to settle allegations that the credit reporting company's failed to take reasonable steps to secure its network.  
 
#### GDPR

Any software (including open source) used by an organisation operating within the EU needs to be [General Data Protection Regulation (GDPR)](https://en.wikipedia.org/wiki/General_Data_Protection_Regulation) compliant:

> The regulation applies if the data controller (an organisation that collects data from EU residents), or processor (an organisation that processes data on behalf of a data controller like cloud service providers), or the data subject (person) is based in the EU. Under certain circumstances,[3] the regulation also applies to organisations based outside the EU if they collect or process personal data of individuals located inside the EU. The regulation does not apply to the processing of data by a person for a "purely personal or household activity and thus with no connection to a professional or commercial activity." - [GDPR, _Wikipedia_](https://en.wikipedia.org/wiki/General_Data_Protection_Regulation)

**Example: ** During the pandemic in 2020, many banks started using [Zoom](https://zoom.us) for video conferencing, but this [ran afoul of the GDPR regulations (German language)](https://datenschutz-hamburg.de/pressemitteilungen/2021/08/2021-08-16-senatskanzlei-zoom).  More recent versions of the software [aim to remedy this](https://explore.zoom.us/en/gdpr/).
 
## Risk Management Activities

<BokTagList tag="Data Leakage Risk" filter="Activities" />