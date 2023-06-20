--- 
title: Introduction to Open Source Readiness 
sidebar_label: Presentation
author: Rob Moffat
---

<link href="/css/presentation/web.css" rel="stylesheet"></link>

<Bio name="Rob Moffat" image="/img/people/rob-moffat.jpeg" organisation="FINOS">
Presentation by Rob Moffat to FINOS Members Meeting on June 15 2023.
</Bio>

<div className="slides">
  <div className="slide slide--bordered">
    <div className="slide-image">
      <img src="/img/presentations/intro/images.001.jpg" alt="Image of slide number 1" />
    </div>
    <div className="slide-notes">
      <p>Hi Everyone!</p>
      <p>Thanks for having me today to talk about the FINOS Open
        Source Readiness project. So my job here at FINOS is a technical
        architect but I mainly work on two projects or “strategic
        initiatives” at FINOS - one being Open Source Readiness, the
        other being FDC3, which I’m sure you’ll be hearing a lot about
        this afternoon from other speakers, so I won’t dwell on it here.</p>
      <p>Before we get into this, I’m going to give a bit of my
        personal background here too, because this is actually really
        relevant to what I want to say about Open Source Readiness, or
        OSR.</p>
    </div>
  </div>
  <div className="slide slide--bordered">
    <div className="slide-image">
      <img src="/img/presentations/intro/images.002.jpg" alt="Image of slide number 2" />
    </div>
    <div className="slide-notes">
      <p>The first job I had in banking was with Deutsche Bank, back
        in early 2000’s. I then worked for several years at RBS - in
        credit and market risk. I took a few years out of banking when
        my children were really young and then came back and worked at
        Credit Suisse as a contractor for a few years.</p>
      <p>While I was there I was working on Back Testing, which is
        kind of a way of checking that your risk methodology works. As a
        part of that, I got involved in an open source project called
        Concordion, which was a tool for building tests and I was able
        to extend this to use for Back Testing risk models.</p>
      <p>But I had to write this in my own time, outside of the bank
        and then during my day job, consume the software within the
        bank. So credit suisse was getting a good deal here.</p>
      <p>After I worked there I was pretty burnt out of risk and so
        I took a job at HSBC helping to build bots on this new fangled
        chat platform called Symphony, and it was at a Symphony meetup
        that I first met Gab and Mao from FINOS.</p>
      <p>I built some nice bots at HSBC and a Symphony App where you
        could search for and read HSBC research.</p>
      <p>But after that, I went back to Deutsche Bank again because
        they were rolling out Symphony and wanted me to head up their
        Bot practice.</p>
      <p>And what I found was, a lot of the code I’d written for
        HSBC I ended up writing again at DB! But this time, I worked
        with the DB staff and was able to Open Source that code so that
        other people could benefit from it. And that code now exists as
        a FINOS project called…</p>
    </div>
  </div>
  <div className="slide slide--bordered">
    <div className="slide-image">
      <img src="/img/presentations/intro/images.003.jpg" alt="Image of slide number 3" />
    </div>
    <div className="slide-notes">
      <p>Shortly after that, my job at DB was relocated to India, so
        along with a bunch of other Symphony experts, I was let go.
        Which was cool because I’d been planning to take a sabbatical
        anyway.</p>
      <p>But Open Source doesn’t sleep, so even on my sabbatical I
        carried on attending FINOS meetings on Spring Bot, along with
        the staff from DB.</p>
      <p>Now the interesting thing is: Spring Bot is still going,
        We’ve had lots of improvements. It now supports bots across
        Symphony and Microsoft Teams. The same bots work in both places.
      </p>
      <p>Also, Symphony themselves have stepped up their game and
        open sourced lots of new bot libraries to FINOS too.</p>
      <p>And the Symphony team are now starting to collaborate with
        FINOS and DB on Spring Bot.</p>
      <p>None of this would have happened if this was a DB-internal
        project. It would probably be abandoned by now.</p>
      <p>So, although Spring Bot is super niche, it has benefitted
        from being Open Source. And, DB have benefitted from open
        sourcing it.</p>
    </div>
  </div>
  <div className="slide slide--bordered">
    <div className="slide-image">
      <img src="/img/presentations/intro/images.004.jpg" alt="Image of slide number 4" />
    </div>
    <div className="slide-notes">
      <p>So let’s talk for a minute about my oher project at FINOS -
        FDC3, which is an open source standard concerned with getting
        applications from different teams or even different vendors to
        work, or, interoperate together on a user’s desktop. As you
        heard in Gab’s earlier keynote, there’s a lot going on in FDC3 -
        lots of interesting work happening. But I think the biggest
        problem we have in FDC3, is what I call the iceberg problem.</p>
      <p>We have a small tip of very visible maintainers, some of
        whom are here today, who turn up to everything, are really vocal
        in the community, contribute enormously through standards
        discussions and open source projects like FDC3 Sail. This vocal
        group is mainly independent people and vendors.</p>
      <p>But we have this massive silent majority of developers and
        users across some pretty enormous institutions who use FDC3 in
        their day to day jobs. In some banks they have hundreds of FDC3
        applications.</p>
      <p>But we never hear from these people. Unlike me at DB, they
        are simply prevented for various reasons from engaging with open
        source in any meaningful way. They just consume.</p>
      <p>And that’s a problem for projects like FDC3 because you
        need contributors to keep the project moving forward and keep it
        alive.</p>
      <p>So, why is that?</p>
      <p>Let’s look at the reasons.</p>
    </div>
  </div>
  <div className="slide slide--bordered">
    <div className="slide-image">
      <img src="/img/presentations/intro/images.005.jpg" alt="Image of slide number 5" />
    </div>
    <div className="slide-notes">
      <p>Ok, so first reason is that it’s against the rules at most
        banks. I remember being at one of my previous banking jobs - not
        giving any names - and overhearing a conversation between some
        senior managers where they discussed how an employee had emailed
        some code to his personal address. It was like,</p>
      <p>“Well, he did it on purpose, but he just wanted to work on
        it at home”</p>
      <p>“But, it contravenes the policy, so we are definitely going
        to sack him”</p>
      <p>And, they had trainings and a town hall to reiterate the
        rules and their consequences.</p>
      <p>And these rules exist because banks want to protect their
        intellectual property. And they’re secretive organisations. They
        have lots of very confidential, personal information and so
        these rules are there to provide every protection for that.</p>
      <p>By the way, another example of this is generally speaking,
        social media sites are all blocked by firewalls in banks. Again,
        this is to stop staff wasting time on Insta all day long but
        that’s kind of a happy accident - the main reason is to stop
        people accidentally or deliberately copy-pasting private data
        onto the internet,</p>
      <p>GitHub might not be people’s first example of a social
        media site, but it kind of is. It’s a community where people
        follow each other, exchange messages, you have stars instead of
        likes, but it’s close enough that this is blocked too, or made
        read-only.</p>
    </div>
  </div>
  <div className="slide slide--bordered">
    <div className="slide-image">
      <img src="/img/presentations/intro/images.006.jpg" alt="Image of slide number 6" />
    </div>
    <div className="slide-notes">
      <p>So, as well as banks inventing their own rules, they also
        are regulated industries. So they have lots of rules to follow
        from governments. And they get big fines if they don’t obey
        them.</p>
      <p>One law is that all electronic communications must be
        recorded for auditing for five years. This means, banks have
        certain systems (like Symphony chat) which they approve for
        communications because they are able to keep the 5-year record.
      </p>
      <p>But this rules out a lot of ways of engaging with open
        source projects - like GitHub, Slack, Google Docs and so on, The
        way compliance has been implemented prevents open source
        happening.</p>
    </div>
  </div>
  <div className="slide slide--bordered">
    <div className="slide-image">
      <img src="/img/presentations/intro/images.007.jpg" alt="Image of slide number 7" />
    </div>
    <div className="slide-notes">
      <p>So probably a lot of people heard about the fines in 2022
        that many firms got for not following those rules. This is
        actually an excerpt from the Open Source Readiness site where we
        have been documenting all of the different compliance rules that
        might apply to open source.</p>
      <p>And I’ll show that in a bit.</p>
      <p>There are so many rules and regulations that banks have to
        follow. I worked in RIsk for many years and there were always
        new regulations coming out to follow. Just complying with these
        rules is hard work - vast numbers of staff are involved in
        making sure they avoid getting fines like these.</p>
    </div>
  </div>
  <div className="slide slide--bordered">
    <div className="slide-image">
      <img src="/img/presentations/intro/images.008.jpg" alt="Image of slide number 8" />
    </div>
    <div className="slide-notes">
      <p>And when you have so many people in the organisation
        figuring out how to stop other people from doing things, you end
        up with a very “closed” culture, one which avoids risk.</p>
      <p>Culture is hard to pin down- it’s kind of the unwritten
        rules and ways of behaving. And it changes slowly, usually.</p>
      <p>I think it’s fair to say that even though banks do a bit of
        open source, they don’t have an “open source culture”, unlike
        say…</p>
    </div>
  </div>
  <div className="slide slide--bordered">
    <div className="slide-image">
      <img src="/img/presentations/intro/images.009.jpg" alt="Image of slide number 9" />
    </div>
    <div className="slide-notes">
      <p>So, Google really goes in hard on open source and uses it
        successfully. When they realised that apple was way ahead with
        the iPhone, but they wanted a piece of the mobile market, they
        came up with Android - an open source mobile operating system.</p>
      <p>Same for Chrome - there were various browsers like Mozilla
        and Internet Explorer which had good market share. But Chrome
        came along and was mostly open source, and is now super popular.</p>
      <p>Then Google realised Amazon was getting ahead with AWS, and
        they wanted to be a cloud computing provider. They couldn’t
        compete with AWS’ closed ecosystem so they created an open one
        around Kubernetes, and given all the stories Mao has been
        telling me about KubeCon in Amsterdam last week, that seems to
        be working out really well for them.</p>
      <p>Google gets open source.</p>
    </div>
  </div>
  <div className="slide slide--bordered">
    <div className="slide-image">
      <img src="/img/presentations/intro/images.010.jpg" alt="Image of slide number 10" />
    </div>
    <div className="slide-notes">
      <p>I was trying to get an idea of whether there were more
        people working in big tech or finance this morning, so I tried
        googling it, and then I tried using Wolfram Alpha and in the end
        I gave up and asked Chat GPT.</p>
      <p>So here’s today’s obligatory reference to Chat GPT in a
        presentation. This is its idea of how many employees work for
        various finance organisations.</p>
      <p>It had no idea of how many of them work as software
        engineers. I am guessing that for each of these it’s at least in
        the region of tens of thousands.</p>
    </div>
  </div>
  <div className="slide slide--bordered">
    <div className="slide-image">
      <img src="/img/presentations/intro/images.011.jpg" alt="Image of slide number 11" />
    </div>
    <div className="slide-notes">
      <p>… and here’s the same thing for big tech. Again, at
        somewhere like Amazon, a lot of people are going to be in
        operations. But I think this is similar?</p>
      <p>Apparently, the contribution of big tech to GDP is about
        8%, and for finance it’s 21%. So I guess my point is that there
        are not finance firms that are even trying to be strategic about
        open source in the same way as Google, or Netflix, Amazon or
        Facebook for that matter.</p>
      <p>One final point on this is, Apple have just announced a new
        savings account with something like 4% interest. They’ve
        partnered with Goldman Sachs to do this. Now, Apple could run a
        savings account, but they don’t want to!</p>
      <p>They don’t want all these rules and compliance. And they
        want to keep their culture of being a bunch of west coast
        hippies or whatever. Not risk-averse secretive bankers. I think.</p>
    </div>
  </div>
  <div className="slide slide--bordered">
    <div className="slide-image">
      <img src="/img/presentations/intro/images.012.jpg" alt="Image of slide number 12" />
    </div>
    <div className="slide-notes">
      <p>So, the goal of OSR, and one of the goals of FINOS and one
        of my goals is - how can we fix that problem? How can we unlock
        the innovation potential of finance organisations and allow them
        to to go from benefiting from open source in the tiny way that
        DB did with me to benefitting from doing open source in the same
        way as Google with all these blockbuster projects.</p>
      <p>I don’t believe that people working in banks are any less
        innovative, or intelligent, or less technically gifted than
        people in big tech - they just don’t have the opportunity.</p>
      <p>So, how are we going about this?</p>
    </div>
  </div>
  <div className="slide slide--bordered">
    <div className="slide-image">
      <img src="/img/presentations/intro/images.013.jpg" alt="Image of slide number 13" />
    </div>
    <div className="slide-notes">
      <p>First, in order to solve this problem, we have to
        understand it. This means understanding all the rules, laws,
        issues and so on, and documenting them. The FINOS OSR Special
        Interest Group is a group that gets together every couple of
        weeks and discusses this stuff, with a view to documenting it.</p>
    </div>
  </div>
  <div className="slide slide--bordered">
    <div className="slide-image">
      <img src="/img/presentations/intro/images.014.jpg" alt="Image of slide number 14" />
    </div>
    <div className="slide-notes">
      <p>So, our OSR Special Interest Group is one of many expert
        sources who is working on the problem. And we get together and
        every couple of weeks advance the state of what we’re calling
        the Body of Knowledge.</p>
      <p>We have articles on Licenses, CLAs, Compliance Policy,
        Contribution Policy, Different Roles of staff involved with open
        source - we’ve basically broken down the whole space into
        different articles which we’re beavering away on.</p>
      <p>This diagram above reflects the structure of the OSR
        microsite at osr.finos.org.</p>
      <p>Let’s start with risks: we’ve talked about Data Leakage
        Risk and the Legal Risk of not complying with the law, but also
        Staff Risk, Reputational Risk, Operational Risk, Strategic Risk.
      </p>
      <p>And then regulations - we’ve talked about Electronic
        Communications but there are Sanctions, Cross Border Laws,
        Accountancy Laws, Anti Money Laundering. It might seem
        surprising but these do intersect with open source contribution!</p>
      <p>So those risks and laws affect the shape of the
        organisation: the roles of staff and the activities they
        perform. From CTOs to OSPOs, Security Teams, Compliance, Legal..
        They are all touched by open source. They have to do things like
        software inventory, license compliance management, drafting
        policies, training, Data Leakage Prevention and so on.</p>
      <p>We have a section on training that people might take and a
        section on different artifacts to do with open source, like
        licenses, CLAs, DCOs, Patents, Policies, SBOMs and so on.</p>
      <p>Certification and Maturity Levels I will talk about in an
        upcoming slide.</p>
    </div>
  </div>
  <div className="slide slide--bordered">
    <div className="slide-image">
      <img src="/img/presentations/intro/images.015.jpg" alt="Image of slide number 15" />
    </div>
    <div className="slide-notes">
      <p>This is a view of our open Pull Requests on GitHub. We’ve
        got stuff being worked on from Brittany Istines from FannyMae,
        Peter Smuillovics from Morgan Stanley, Pooi Chong from Llloyds
        and Cara Delia from RedHat.</p>
      <p>There are lots of articles here which appear to be by me -
        I am essentially “Ghost Writing” these with help from people
        like Rhyddian Olds at Citi, Mark Hoare at Deutsche, Andy Smith
        from Discover, William Rothwell and Chris Stevenson from UBS,
        Phillip Holleran and colleagues from GitHub and so on. This
        actually seems to be quite an effective way of working.</p>
      <p>Then during our twice-monthly meetings, we review them and
        discuss what needs to be added, and we find out how it differs
        in other places. We have some pretty opinionated people on our
        calls.</p>
    </div>
  </div>
  <div className="slide slide--bordered">
    <div className="slide-image">
      <img src="/img/presentations/intro/images.016.jpg" alt="Image of slide number 16" />
    </div>
    <div className="slide-notes">
      <p>So, we know that firms are starting to do open source in a
        small way. Deutsche, Citi, UBS, JP Morgan, Morgan Stanley and so
        on - they’re all dipping their toes and</p>
      <p>contributing projects to FINOS.</p>
      <p>But one of the things we’re finding out in OSR is they’re
        all approaching it in a different way - the way to do compliant
        open source development at Citi is very different to Morgan
        Stanley.</p>
      <p>We want to figure out some best practices and share them
        with people.</p>
    </div>
  </div>
  <div className="slide slide--bordered">
    <div className="slide-image">
      <img src="/img/presentations/intro/images.017.jpg" alt="Image of slide number 17" />
    </div>
    <div className="slide-notes">
      <p>What we want to get to with OSR is this:</p>
      <p>On the left hand side we have our experts spread out
        working on open source in finance. In the middle, we have the
        body of knowledge, embedded in the OSR website. And we want to
        distill all of those different approaches, and document them
        here, and come up with best practices.</p>
      <p>The important thing in this diagram is authority: those
        people on the left give us the authority to say what the stuff
        on the right should look like.</p>
      <p>But after that, we should be able to provide training
        materials and guides:</p>
      <p>How do you create an open source compliance policy that
        meets all the laws?</p>
      <p>How do you make sure your staff are correctly trained? Can
        we certify staff to say they know what they’re doing?</p>
      <p>What should the organisational structure look like? What
        roles do you need? What committees? Who are the decision makers?</p>
      <p>We should also be able to certify individuals. “John knows
        how to contribute to open source in a bank in a compliant
        manner” and we give him a badge he can share on LinkedIn.</p>
      <p>Finally - and eventually - on the top right, we’re looking
        at certifications of organisations, based on our maturity model.
      </p>
    </div>
  </div>
  <div className="slide slide--bordered">
    <div className="slide-image">
      <img src="/img/presentations/intro/images.018.jpg" alt="Image of slide number 18" />
    </div>
    <div className="slide-notes">
      <p>So, at the beginning of the year, we broke down the whole
        topic. We had some help here: Thomas Steenbergen had built a
        mind-map which was useful input, and people like Rhyddian Olds
        had done some deeping thinking about all this. And the OSR SIG
        Leads came in with their own ideas.</p>
      <p>Having done that, we divided this bag of talking points
        into articles in each section of that Information Architecture
        diagram I showed earlier. And then we got to work drafting them,
        discussing them and adding them to our Body of Knowledge.</p>
      <p>And so this is where we are- there are a few bit left to
        do, and there’s probably some duplication going on here. But
        after four or five months we’ve basically covered nearly the
        whole of our original breakdown.</p>
      <p>So I’m going to touch on a few bits now so that you can get
        a feel for this.</p>
    </div>
  </div>
  <div className="slide slide--bordered">
    <div className="slide-image">
      <img src="/img/presentations/intro/images.019.jpg" alt="Image of slide number 19" />
    </div>
    <div className="slide-notes">
      <p>So, here we have the introductory page, with our
        information architecture on it, and all the articles in
        categories on the left hand side.</p>
    </div>
  </div>
  <div className="slide slide--bordered">
    <div className="slide-image">
      <img src="/img/presentations/intro/images.020.jpg" alt="Image of slide number 20" />
    </div>
    <div className="slide-notes">
      <p>This is an example of an artifact page - it explains what
        CLAs and DCOs are. There are links to useful resources from all
        around the internet. The idea of “artifacts” is that they are
        structures around the open source code that you’ll need to deal
        with or set up.</p>
    </div>
  </div>
  <div className="slide slide--bordered">
    <div className="slide-image">
      <img src="/img/presentations/intro/images.021.jpg" alt="Image of slide number 21" />
    </div>
    <div className="slide-notes">
      <p>Next, here are the risks we’ve broken down all the risks
        that apply to consuming or contributing to open source.</p>
      <p>So, as I said before my background is risk management
        software in banks. And in 2019 I wrote a book called “Risk-First
        Software Development”, which is available on Amazon. £18.39.</p>
      <p>But the idea of the book is to break down software
        development and look at it in terms of all the risks that affect
        it. Now, there have been broadly two responses to this from the
        developers I talk to. One set of developers say, yes, Rob,
        obviously. All work is some kind of risk management. And so they
        don’t care. And then the other group of developers are people
        who resent me dissecting what they see as an art form.
        Nevertheless, I stand by this analysis and so it was really
        heart warming for me when Rhyddian Olds (who you saw earlier)
        said that setting up an Open Source policy at Citi was all about
        managing risk.</p>
      <p>And he then went ahead and broke down those risks.</p>
      <p>So, we documented them all on here - there’s still some
        work to do on this, especially around supply chain security
        risks.</p>
    </div>
  </div>
  <div className="slide slide--bordered">
    <div className="slide-image">
      <img src="/img/presentations/intro/images.022.jpg" alt="Image of slide number 22" />
    </div>
    <div className="slide-notes">
      <p>If you’re going to build a compliant open source function
        within your organisation, you need to be aware of all the
        existing regulations that are out there governing firm behaviour
        in finance. These are the guardrails that you have to work
        within. You can’t just start “doing open source” if it
        contravenes existing bank policy, which is likely built on top
        of regulation. So, we’re trying to map all this out within the
        SIG - this is another active area of discussion.</p>
      <p>Tomorrow, there is a talk by Jamie Slome from Citi about
        how they tackled this problem which, for people coming tomorrow
        I strongly recommend you attending if you’re interested in this.</p>
    </div>
  </div>
  <div className="slide slide--bordered">
    <div className="slide-image">
      <img src="/img/presentations/intro/images.023.jpg" alt="Image of slide number 23" />
    </div>
    <div className="slide-notes">
      <p>So one of the things we’re trying to formalize is a
        maturity model for firms engagement with open source. Luckily
        for us, there’s some pre-existing work in this area. Last year
        FINOS and Wipro built a tool called the OSMM - Open Source
        Maturity Model, which is a questionnaire to get firms thinking
        about how they do open source.</p>
      <p>But meanwhile, the OSPO Alliance published a model called
        the “Good Governance Initiative” which has a maturity model in 5
        levels, and also our colleagues at the TODO group published a
        similar 5-level maturity model.</p>
      <p>So, rather than try and invent a new one, we’ve synthesized
        this description which is consistent with the TODO and OSPO
        Alliance models, which means we’re not re-inventing the wheel.</p>
      <p>The SIG is still coming together on names for the different
        levels, but it breaks down like this:</p>
      <p>(Describe levels)</p>
      <p>Next steps for this: we’re going to add checklists right
        into the Body of Knowledge so that you can check your maturity
        level and eventually probably next year FINOS has a goal to
        create some kind of organisational certification around this
        too.</p>
    </div>
  </div>
  <div className="slide slide--bordered">
    <div className="slide-image">
      <img src="/img/presentations/intro/images.024.jpg" alt="Image of slide number 24" />
    </div>
    <div className="slide-notes">
      <p>So another part of the Body of Knowledge that the SIG has
        worked really hard on is breaking down the different personas of
        people involved in open source. We describe what they care
        about, who they interact with, how their job intersects with
        open source and how to engage with them.</p>
      <p>Again, if you are a member coming tomorrow, Cara Delia is
        running a round-table discussion workshopping some of these
        personas which should be really interesting - hopefully we’ll
        drive out some really interesting techniques for engaging with
        these different people and building consensus around driving
        open source forwards.</p>
    </div>
  </div>
  <div className="slide slide--bordered">
    <div className="slide-image">
      <img src="/img/presentations/intro/images.025.jpg" alt="Image of slide number 25" />
    </div>
    <div className="slide-notes">
      <p>A lot of the meat of the Body of Knowledge is in the
        activities. This is taking those levels of the body of knowledge
        and splitting them into different activities and explaining what
        you have to do to be at that maturity level.</p>
      <p>So for example, to reach Level 2 maturity, you have to be
        consuming open source in a way compliant with poilcy and
        regulation. So you can see in this screenshot here on the left
        the activities relating to that - such as building a software
        inventory, taking care of license management, supply chain
        security, training and so on.</p>
      <p>We’ve still got a few articles to write here if anyone
        wants to help.</p>
    </div>
  </div>
  <div className="slide slide--bordered">
    <div className="slide-image">
      <img src="/img/presentations/intro/images.026.jpg" alt="Image of slide number 26" />
    </div>
    <div className="slide-notes">
      <p>Finally, we’re also trying to catalog useful training
        materials. So you can see here we’re listing out different
        training that exists already in the Linux Foundation.
        Eventually, we’re going to get to the point of recommending
        different trainings for different roles. So, what training
        should a CEO, CTO, Developer take from the catalog.</p>
      <p>And, as Gab said earlier, we’re going to fill in any gaps
        by building trainings to cover finance-specific topics that
        aren’t already covered.</p>
      <p>And hopefully after taking those training courses, you’ll
        be able to take FINOS-branded certifications to prove you know
        what you’re talking about.</p>
    </div>
  </div>
  <div className="slide slide--bordered">
    <div className="slide-image">
      <img src="/img/presentations/intro/images.027.jpg" alt="Image of slide number 27" />
    </div>
    <div className="slide-notes">
      <p>So, if we get this maturity model working, and we have
        developer certifications, we can start to publicise the story
        that Open Source is big thing that is happening in finance, and
        not just around the edges.</p>
      <p>There should be a virtuous circle around people and
        organisations getting certified and open source projects being
        donated to FINOS. We can create FOMO, too.</p>
      <p>First, we know that developers are picky about where they
        work, and working on open source is a deal breaker for lots of
        them. Banks worry about attracting talent. This is where Staff
        Risk comes in.</p>
      <p>Second, as we saw with Google, there are strategic benefits
        from doing open source. Finance is a competitive arena. If
        someone in thee industry figures out how to “do a google”,
        everyone else will get left behind. This is a big, obvious
        strategic risk.</p>
      <p>Third, banks worry about dependencies - especially since
        Log4Shell. Not being involved in the development of key
        strategic open source projects is a big risk for them. What if a
        project they really care about gets abandoned? They can’t take
        up maintenance unless they’re doing open source!</p>
      <p>They can’t address this Dependency Risk without
        contributing to open source.</p>
    </div>
  </div>
  <div className="slide slide--bordered">
    <div className="slide-image">
      <img src="/img/presentations/intro/images.028.jpg" alt="Image of slide number 28" />
    </div>
    <div className="slide-notes">
      <p>Ok, so that about wraps it up and gives you an idea of what
        OSR is up to for this year. We’d love to have you involved. Do
        you have a view on any of this stuff? Want to write an article?
        Review a PR? Or just show up to a meeting and tell us how it is,
        please do that.</p>
      <p>I am also collecting names for our Beta certification
        program. If you want to get FINOS Open Source certified ahead of
        everyone else and for free, then come talk to me and I’ll add
        you to the list or hit up this QR code here.</p>
      <p>Thanks for listening, any questions?</p>
    </div>
  </div>
</div>
<p className="credits">
  Made with <a href="https://keynote-extractor.com">Keynote
    Extractor</a>.
</p>