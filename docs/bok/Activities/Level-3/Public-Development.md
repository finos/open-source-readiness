---
title: Developing in the Open
tags: 
  - Developer (Role)
  - Level 3 (OSMM)
  - Placeholder
sidebar_position: 1
sidebar_label: Public Development
checklist:
  - title: Contribution
    description: The organisation contributes to existing open source projects
  - title: Recognition
    description: The organisation recognises employees contributing in their own time
list_image: /img/bok/page-types/activity.png
---

## Public Development

### Working with others

The biggest thing to remember about open source development is that it happens in the public sphere, in written text, with other humans. Text can be a challenging medium in which to interact with others. Tone and intent can be hard to communicate - emoji help. Language barriers often exist. For this reason it is important open source developers strive for clarity, compassion, and empathy in their communication.

Many folks have written in depth on this topic. The following resources dig deeper into the human side of open, collaborative development:

* [Why the success of open source depends on empathy](https://opensource.com/article/21/2/open-source-empathy), by Bronagh Sorota
* [Inclusive Open Source Community Orientation - LFC102](https://trainingportal.linuxfoundation.org/courses/inclusive-open-source-community-orientation-lfc102), a Linux Foundation training course
* [Inclusive Strategies for Open Source - LFC 103](https://trainingportal.linuxfoundation.org/courses/inclusive-strategies-for-open-source-lfc103), a Linux Foundation training course

### Publicly visible code

Developers' interactions, including code pushed and conversations that happen in Issues and Pull Requests are visible to the world.

A number of concerns come to mind when people think of publicly-visible code. Two of the most common may be summarized as:

* security risk
* personal risk

Security risk is most commonly the primary concern of the developer's employer. "What if private information is accidentally included in the code?" Thankfully, a number of tools and processes are available to mitigate this risk. These include:

* Data Loss Prevention (DLP) software - see this FINOS OSR [article on DLP](https://osr.finos.org/docs/bok/Artifacts/DLP-Software) for more information
* Commit review software that requires approval before publication, including:
  * [GitProxy](https://github.com/finos/git-proxy)
  * [internal-contribution-forks](https://github.com/github-community-projects/internal-contribution-forks)

Personal risk is related to any fear or concern an individual may have around participation in an open source community. Putting your work for the world can, at first, be a bit unnerving for some. Common concerns include not knowing what to do or doing the "wrong thing," receiving less than constructive feedback, or having their contribution rejected.

Your firm likely has policies regarding public communication and social media, designed to limit risk to you and to the firm. Be sure to familiarize yourself with these policies and adhere to them.

### Promoting healthy community

Healthy open source communities actively work to promote positive environments for contributors by:

* Helping everyone understand the project's norms, standards, and processes
* Setting and enforcing norms for communication
* Pointing new contributors to small, easier to tackle opportunities

GitHub has published a blog of [tips for creating a healthy and sustainable open source community](https://github.blog/2022-07-07-healthy-and-sustainable-communities/). It is helpful for new contributors and maintainers alike to familiarize themselves with these practices and embody them in their open source work.

## Ways to Contribute

One of the common misconceptions of open source software is that the only way to contribute is with code. Open source projects, like all software, encompass far more than the application code. This creates many opportunities for contributions of many kinds, including:

- Developing new features
- Fixing bugs
- Improving docs
- Triage / reproduce issues
- Project Management
- Perform tests, write tests
- Improve UI
- Graphics 
- Marketing
- Localisation
- Performing / writing tests
- Improving UI
- Creating graphics 
- Marketing the project
- Localising the content

### Pull Requests

Many forms of contribution will require use of a Pull Request - a request to pull your proposed changes (to code, docs, etc.) into the repository. While GitHub provides some documentation on [how to create a pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request), effective pull requests communicate their purpose.

Keavy McMinn wrote a post on the GitHub blog in 2015 on [How to write the perfect Pull Request](https://github.blog/2015-01-21-how-to-write-the-perfect-pull-request/), based on thoughtbot's [code review guide](https://github.com/thoughtbot/guides/tree/main/code-review). Both are great resources to help open source contributors and maintainers communicate about proposed changes.

## Maturity Checklist

<ArticleChecklist checklist={frontMatter.checklist} title={frontMatter.title} />
