---
title: Open Source Supply Chain Security Testing
tags: 
  - Developer (Role)
  - Risk-Compliance (Role)
  - Security Expert (Role)
  - CIO (Role)
  - Placeholder
  - Codebase Risk
  - Dependency Risk
  - Operational Risk
  - Level 2 (OSMM) 
draft: true
sidebar_position: 4
---

tbd: break into _incoming_ and _outgoing_

include:
 - Vulnerability Testing
 - keeping dependencies up-to-date https://openssf.org/resources/guides/
 

- KPIs around dependencies?

- code reviews (GGI)


Security testing is a broad term that encompasses various techniques for evaluating the security of software systems and applications. The main types of security testing include:

1. Software Composition Analysis (SCA) or Vulnerability Scanning: Vulnerability scanning involves automatically searching for known security weaknesses in software systems and applications. This type of testing can help identify potential security risks, but does not guarantee that all vulnerabilities have been found.
2. Static Application Security Testing (SAST): SAST involves analyzing the source code of an application for potential security vulnerabilities without executing the code. This type of testing can help identify potential security risks early in the development process, before the code is deployed.
3. Dynamic Application Security Testing (DAST): DAST involves executing the code of an application and examining its behavior for potential security vulnerabilities. This type of testing can help identify potential security risks that may not be apparent from examining the code alone.
4. Penetration Testing: Penetration testing involves attempting to actively exploit vulnerabilities in a software system or application to determine its security weaknesses. This type of testing is usually conducted by security experts who use manual and automated techniques to simulate real-world attacks.
5. Web Application Security Testing: Web application security testing focuses on identifying security vulnerabilities in web applications, such as SQL injection, cross-site scripting (XSS), and cross-site request forgery (CSRF).
6. Infrastructure Security Testing: Infrastructure security testing involves evaluating the security of the underlying infrastructure that supports a software system or application, such as networks, servers, and databases.
7. Mobile Application Security Testing: Mobile application security testing focuses on identifying security vulnerabilities in mobile applications, such as those running on iOS or Android platforms.

## Software Composition Analysis

According to https://en.wikipedia.org/wiki/Software_Composition_Analysis:

> **Software Composition Analysis** (SCA) is a practice in the fields of [Information technology](https://en.wikipedia.org/wiki/Information_technology) and [software engineering](https://en.wikipedia.org/wiki/Software_engineering) for analyzing custom-built software applications to detect embedded open-source software and detect if they are up-to-date, contain security flaws, or have licensing requirements.

Many SCA tools produce SBOMs which can then be checked for vulnerabilities.   A long list is provided here: https://todogroup.org/guides/management-tools/#tools-for-managing-source-code

## Static Application Security Testing

See: https://snyk.io/learn/application-security/static-application-security-testing/

SAST, or Static Application Security Testing, is a type of software security testing that analyzes the source code of an application for potential security vulnerabilities without executing the code. The leading SAST tools are:

1. Checkmarx: Checkmarx is a commercial SAST tool that provides a comprehensive solution for finding security vulnerabilities in source code. It supports a wide range of programming languages and provides detailed analysis of potential security issues.
2. Veracode: Veracode is a commercial SAST tool that provides a cloud-based solution for finding security vulnerabilities in source code. It integrates with a variety of development tools and provides a range of reporting and remediation options.
3. SonarQube: SonarQube is an open source platform for continuous inspection of code quality and security. It provides a range of tools for code analysis, including SAST capabilities, and supports a wide range of programming languages.
4. Fortify: Fortify is a commercial SAST tool that provides a comprehensive solution for finding security vulnerabilities in source code. It supports a wide range of programming languages and provides detailed analysis of potential security issues.
5. Coverity: Coverity is a commercial SAST tool that provides a comprehensive solution for finding security vulnerabilities in source code. It supports a wide range of programming languages and provides detailed analysis of potential security issues.

tbd.

## Dynamic Application Security Testing 


tbd.