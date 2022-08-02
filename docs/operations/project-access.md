---
id: project-access
title: TODO
sidebar_label: TODO
---
<!-- 
TODO:
* fix title, sidebar_label in head matter above
-->

Companies in financial services and other highly regulated industries often face difficulties accessing open source projects. The websites or online services that host these projects may be entirely disallowed by the firm's [Data Leak Prevention](https://en.wikipedia.org/wiki/Data_loss_prevention_software) (DLP) software. Alternatively, these resources may be available in a read-only form, preventing contributions or participation in online discussions. 

## Requestion an exception

In situations like this, it's common for the IT and/or security teams to provide an exception mechanism. Check to see whether this is possible in your firm.

When applying for an exception to DLP in order to access open source projects, it's helpful to have the following information readily available:

* List of projects to which you need access and direct links to each
* The type of access needed for each (download, read-only, read-write if you need to contribute back)
    * If you'd like to contribute back to one or more projects, concrete examples of the sort of contributions you'd make can be very helpful
* Links to the security policies for each project or the service that hosts it
* Benefits of access for the firm (how will it allow you to perform your job?)

Depending upon the needs of you and your team, it may be possible to acquire a blanket exception (for instance, for all of GitHub or GitLab). Check with your IT and security teams to see whether this makes more sense than a continual series of one-off exception applications.

## Potential workarounds

In some cases, teams have to work around the DLP restrictions in order to complete their work for the firm. **Workarounds should always be an approach of last resort.** Never undertake any sort of workaround without verifying with your management and other stakeholders first.

Some of the workarounds that OSR member firms have used to access the open source projects they need:

### Gain read-only access to the project, then fork and use/develop them for internal-use only

This is a good approach as it minimizes DLP risks, but it comes with its own problems. It's software development best practice to avoid maintaining or using internal forks of open source projects. That's because these forks become disconnected from their upstream projects. That disconnection means the internal fork will not receive features and bug fixes from upstream, including those that patch security vulnerabilities.

### Use the git-proxy project for interacting with open source projects

[git-proxy](https://github.com/finos/git-proxy) is a FINOS project that provides a proxy between software developers in your firm and upstream open source projects. It's a highly extensible proxy that can flex to support the specific compliance policies of your firm. This allows developers to use and contribute to upstream open source projects and IT/security to maintain compliance to DLP and other policies, minimizing overhead for all parties.

### Use personal laptop for contributions

Depending upon the situation, the only solution to the open source access problem may be to use a personal laptop or computer to access the necessary projects. Of all of the workarounds, this one holds the highest risk for the firm so you should avoid this option unless there are no viable alternatives. Not only can this option leak firm data and intellectual property, it may violate your employment agreement. Never use this option unless you have received approval to do so. Fully document that approval as well as all firm operations performed in this way.

## Correct attribution after acquiring an exception

Once you've acquired approval to access upstream open source projects and IT has processed the exception, you still need to ensure that all work performed upstream has appropriate attribution.

As work you're performing on behalf of the firm, these open source contributions are the intellectual property of the firm. To aid in tracking that work and intellectual property, these contributions should be made using your work email address.

Most open source source code forges such as GitHub and GitLab allow users to set up multiple email addresses for use on a single account (for example, [here's the GitHub documentation for setting that up](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/adding-an-email-address-to-your-github-account)). You can then select which email address to associate with your git commits on each contribution. Alternatively, you can [set up your git config on your work computer](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-email-preferences/setting-your-commit-email-address#setting-your-commit-email-address-in-git) to use your work email address for all commits you make on that device.

* Set up multiple emails
* Use work email for work contributions