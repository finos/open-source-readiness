---
title: InnerSource Licensing 
sidebar_label: InnerSource Presentation 
author: Chamindra de Silva
sidebar_position: 2
---

<link href="/css/presentation/web.css" rel="stylesheet"></link>

<Bio name="Chamindra de Silva" image="/img/people/chamindra-de-silva.jpeg" organisation="Citi">
Presentation by Chamindra de Silva to FINOS Members Meeting on June 15
2023. </Bio>

<div class="slides">
  <div class="slide slide--bordered">
    <div class="slide-image">
      <img src="/img/presentations/innersource/images.‎001.jpg"
        alt="Image of slide number 1" />
    </div>
    <div class="slide-notes">
      <p>Hello everyone, my name is Chamindra and I am an InnerSource
        Product Owner and Solution Architect at Citi. I am also a
        co-lead of the FINOS InnerSource Special Interest Group.</p>
      <p>For those who are not aware InnerSource, it is the application
        of Open Source principles and working culture within the
        boundary of an enterprise. Large enterprises in particular
        suffer from many organizational knowledge silos and open source culture
        can provide a lot of benefit to improve engineering quality and
        reduce cost through reuse, though those product might never venture 
        outside the boundaries of that institution.</p>
      <p>Before joining Citi I led two open source projects in
        humanitarian response and education sector and was a committer to Apache
        Web Services, so I had some exposure to open source and the Apache
        Way going into the Banking Industry.</p>
      <p>But after becoming an InnerSource project lead, I understood that there 
        are nuances in InnerSource that make it different from open source and it needs to be
        considered in its own right. In fact, I have been exposed to IP
        violation due to a lack of clarify between InnerSource and Open
        Source</p>
    </div>
  </div>
  <div class="slide slide--bordered">
    <div class="slide-image">
      <img src="/img/presentations/innersource/images.‎002.jpg"
        alt="Image of slide number 2" />
    </div>
    <div class="slide-notes">
      <p>My agenda for today is to explain why we a need common set of
        InnerSource licenses and to give you a demo of a tool we have
        created that can provide you with an appropriate InnerSource license for you needs</p>
    </div>
  </div>
  <div class="slide slide--bordered">
    <div class="slide-image">
      <img src="/img/presentations/innersource/images.‎003.jpg"
        alt="Image of slide number 3" />
    </div>
    <div class="slide-notes">
      <p>The InnerSource Special Interest Group (SIG) in FINOS seeks to
        setup a safe space for talking about running an
        InnerSource project in your Financial institution. There many
        projects in finance that will always remain behind closed
        doors but that does not mean they cannot benefit from the
        open source way of doing things. The InnerSource SIG is a place you can
        learn from others in the finance domain on how they run
        such projects and come up with a set of common standards 
        and best practices. It is also closely tied to the 
        InnerSource Commons organization which is a major custodian of the 
        InnerSource practices</p>
    </div>
  </div>
  <div class="slide slide--bordered">
    <div class="slide-image">
      <img src="/img/presentations/innersource/images.‎004.jpg"
        alt="Image of slide number 4" />
    </div>
    <div class="slide-notes">
      <p>Open source would not exist today if not for the strong
        licensing leadership by the Free Software Foundation (FSF) and
        Open Source Initiative (OSI), encoded and supported by
        copyright law. Both used copyright law as
        the basis of open source licensing and though they were different in
        philosophy they were very similar in practice. This does
        not exist in the same way for InnerSource programs</p>
    </div>
  </div>
  <div class="slide slide--bordered">
    <div class="slide-image">
      <img src="/img/presentations/innersource/images.‎005.jpg"
        alt="Image of slide number 5" />
    </div>
    <div class="slide-notes">
      <p>Whilst advocating for open source in Sri Lanka and Asia in the
        2000s, there was a plethora of licenses developers had to
        understand and we had to educate developers on the
        may varieties of commercial and open source licenses to help them
        understand what they could and could not do. This was
        not always trivial. The viral nature of GPL v2 vs v3 for example
        is not the easiest thing to translate from legal terms!</p>
    </div>
  </div>
  <div class="slide slide--bordered">
    <div class="slide-image">
      <img src="/img/presentations/innersource/images.‎006.jpg"
        alt="Image of slide number 6" />
    </div>
    <div class="slide-notes">
      <p>Eventually, it helped that open source consolidated into a
        few key licenses such as GPL, MIT, Apache, BSD, LGPL. It reduced
        the effort required to explain to developers what they could and could
        not do with software and eventually the
        developers got comfortable with these licenses.</p>
    </div>
  </div>
  <div class="slide slide--bordered">
    <div class="slide-image">
      <img src="/img/presentations/innersource/images.‎007.jpg"
        alt="Image of slide number 7" />
    </div>
    <div class="slide-notes">
      <p>The advantage of popular open source licenses is that they
        often have a case history in court that can be called up to
        defend a product. There are groups such as the Software Freedom
        Conservancy that deal with violations so there is a form of
        shared protection</p>
      <p>Popularly breeds familiarity and developers need to spend
        less time trying to decipher licenses and trying to understand what is
        permissible when using of the software. In a corporate context it means
        less legal cost with regard to protection and liability. 
        Especially compared with developing and enforcing your own license.</p>
    </div>
  </div>
  <div class="slide slide--bordered">
    <div class="slide-image">
      <img src="/img/presentations/innersource/images.‎008.jpg"
        alt="Image of slide number 8" />
    </div>
    <div class="slide-notes">
      <p>Unfortunately there is no similar set of licenses for
        InnerSource for companies to easily adopt.</p>
      <p>They need to spend money to define an unproven license for
        their InnerSource products, and it might be a struggle to defend their
        IP in the first court case.</p>
      <p>There is confusion between employees and vendors on the
        difference between InnerSource and open source and what is
        permissive use due to lack of popular licenses.</p>
      <p>This ambiguity can result in breaches if people mistake
        InnerSource for open source in financial institutions</p>
    </div>
  </div>
  <div class="slide slide--bordered">
    <div class="slide-image">
      <img src="/img/presentations/innersource/images.‎009.jpg"
        alt="Image of slide number 9" />
    </div>
    <div class="slide-notes">
      <p>Terms can differ between InnerSource and open source:</p>
      <p>First, boundary conditions are a key area. There is haziness on
        where exactly the boundary lies. Is it with your employees? With
        subsidiaries? When vendors are involved this can vary.</p>
      <p>Second, the copyright holder is always the organization, so the
        incentive mechanism for the author is different. They
        cannot reference this contribution for their CV, so while career progression
        is a motivation when contributing to open source this might not be possible for InnerSource.</p>
      <p>Sometimes, in finance there is sometimes an
        anti-attribution pattern: a need to <em>not</em> be
        affiliated with the code.</p>
      <p>Third, in finance we look carefully at
        security vulnerabilities when sharing code and data.</p>
      <p>Finally, you might not be able to provide an "as-is" warranty waiver. Often
        within a corporate structure you expect those creating software
        to take some responsibility to maintaining it as often the teams
        are funded.</p>
    </div>
  </div>
  <div class="slide slide--bordered">
    <div class="slide-image">
      <img src="/img/presentations/innersource/images.‎010.jpg"
        alt="Image of slide number 10" />
    </div>
    <div class="slide-notes">
      <p>From open consultation, we concluded that we do need a popular set of licenses
        similar to Creative Commons and a tool to create it. We gathered
        existing InnerSource licenses and performed interviews
        with organizations that have done InnerSource before.  </p>
        <p>From this, we arrived at a set of initial clauses.</p>
    </div>
  </div>
  <div class="slide slide--bordered">
    <div class="slide-image">
      <img src="/img/presentations/innersource/images.‎011.jpg"
        alt="Image of slide number 11" />
    </div>
    <div class="slide-notes">
      <p>Given here are some of those clauses that we discussed:</p>
      <p><strong>Scope</strong> - defines what needs to be protected. Nowadays,
        data such as AI training sets can become be included.</p>
      <p><strong>Boundary</strong> - we needed to clearly define where the boundary
        for InnerSource lies and it varies by the sensitivity of the
        project. It can be just within the employees of the organization
        or even extended as far as partners and vendors.</p>
      <p><strong>Redistribution</strong> - determines how distribution is allowed. If
        it is a centrally governed project they might want
        to control the quality of the modified code and so would
        want re-distribution to happen centrally.</p>
      <p><strong>Attribution</strong> - is different to open source as the organization is always
        the copyright holder and you need to find a way to attribute the
        authors in some other way.</p>
      <p><strong>Warranty and Support</strong> - you might not be allowed to provide
        as-is warranties as that could represent an organizational risk.
        Instead you might need to offer a warranty period so that others in
        the organization can be assured security flaws will be fixed
        and that they don't find themselves in a critical situation without
        support.</p>
      <p><strong>Liability</strong> is different when the sharing is happening
        between contracted employees of the same organization.</p>
      <p>Finally with ChatGPT and large language models (LLMs) generally accessing both open source and 
        InnerSource repositories, we have questions around the principles of some of the
        licenses. Due to the nature of the algorithms things like
        sources and attribution of derivative works cannot be traced. In
        fact this might make InnerSource more important.  While it is hard
        to enforce and prove this in an open source context, there may be
        some way to do this in an InnerSource context</p>
    </div>
  </div>
  <div class="slide slide--bordered">
    <div class="slide-image">
      <img src="/img/presentations/innersource/images.‎012.jpg"
        alt="Image of slide number 12" />
    </div>
    <div class="slide-notes">
      <p>The InnerSource license generator is a simple tool that
        takes these clauses and generates a <code>license.md</code> file
        for your project. It is constructed by assembling different
        license clause options. We are working towards a fixed set of
        licenses similar to Creative Commons.  At the moment, we don't
        have enough data points but hopefully by engaging more use
        of the tool we will be able to come to a well-defined set of
        license definitions.</p>
      <p>The tool is an alpha version and available as
        open source for contribution and improvement. As a next step we
        do need to do a legal review of the clauses before we make it
        available. As it presently stands you can download
        licenses but you will need to review with your legal team before
        you apply them internally. But that's still better than dealing
        with N number of separate contracts articulating the different
        license options with different vendors and partners.</p>
    </div>
  </div>
  <div class="slide slide--bordered">
    <div class="slide-image">
      <img src="/img/presentations/innersource/images.‎014.jpg"
        alt="Image of slide number 14" />
    </div>
    <div class="slide-notes">
      <p>In summary the financial industry and the larger corporate
        world can benefit from a set of common, well-defined InnerSource
        licenses to protect corporate IP whilst encouraging internal
        sharing and open source culture.</p>
      <p>LLMs and ChatGPT type tools might actually make InnerSource
        licenses more important given the challenge
        presented by LLMs in the open source world toward attribution,
        copyleft etc.</p>
      <p>As a call to action we would like to encourage your
        participation and contribution to the InnerSource SIG and
        license working group.</p>
    </div>
  </div>
  <div class="slide slide--bordered">
    <div class="slide-image">
      <img src="/img/presentations/innersource/images.‎015.jpg"
        alt="Image of slide number 15" />
    </div>
    <div class="slide-notes"></div>
  </div>
  <div class="slide slide--bordered">
    <div class="slide-image">
      <img src="/img/presentations/innersource/images.‎016.jpg"
        alt="Image of slide number 16" />
    </div>
    <div class="slide-notes"></div>
  </div>
  <div class="slide slide--bordered">
    <div class="slide-image">
      <img src="/img/presentations/innersource/images.‎017.jpg"
        alt="Image of slide number 17" />
    </div>
    <div class="slide-notes"></div>
  </div>
  <div class="slide slide--bordered">
    <div class="slide-image">
      <img src="/img/presentations/innersource/images.‎018.jpg"
        alt="Image of slide number 18" />
    </div>
    <div class="slide-notes"></div>
  </div>
</div>
<p class="credits">
  Made with <a href="https://keynote-extractor.com">Keynote
    Extractor</a>.
</p>
