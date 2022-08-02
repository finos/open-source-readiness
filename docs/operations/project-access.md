---
id: project-access
title: TODO
sidebar_label: TODO
---
<!-- 
TODO:
* fix title, sidebar_label in head matter above
-->

Companies in financial services and other highly regulated industries often face difficulties accessing open source projects. The websites or online services that host these projects may be entirely disallowed by the firm's [Data Leak Prevention](https://en.wikipedia.org/wiki/Data_loss_prevention_software) software. Alternatively, these resources may be available in a read-only form, preventing contributions or participation in online discussions. 

* Many people who work in banks can't access GitHub
    * Protect confidential information (DLP: Data Leakage Protection)
    * Sometimes will be accessible in a read-only (GET not POST)
* Usually need to apply for an exception to access
* What sort of information is helpful to include in that exception application?
    * List of projects you're working on
    * Benefits of risk minimisation by contributing upstream (as compared to internal fork)
* Workarounds
    * Mirror FOSS projects internally (can see the project but not contribute back)
        * Dangers of internal forks
    * git-proxy FINOS project
        * Commit internally, push out publicly
    * Use personal laptop for contributions
        * But this leaks IP
        * Could violate employment agreement
        * Still need approval to do this
    * Use personal GH account
        * Set up multiple emails
        * Use work email for work contributions
* Would love GitHub/Gitlab to work with them
    * What are the URLs that need to be proxied just so they can _see_ the sites (but not contribute)?
    * What are the URLs that IT can proxy/approve viewing (w/o logging in)
    * VMB will contact Ashley & James will talk to Phil (both at GitHub) about getting this added