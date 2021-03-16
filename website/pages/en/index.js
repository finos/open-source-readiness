/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const Button = props => (
  <div className="pluginWrapper buttonWrapper">
    <a className="button" href={props.href} target={props.target}>
      {props.children}
    </a>
  </div>
);
class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = props => (
      <h2 className="projectTitle">
        {props.title}
        <small>{props.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle tagline={siteConfig.tagline} title={siteConfig.title} />
          <PromoSection>
            <Button href='https://www.finos.org/business-value-of-open-source-for-financial-services-firms-download-page?hsLang=en-us'>WhitePaper</Button>
            <Button href='https://github.com/finos/reference-foss-policy/raw/master/bin/docx/FINOS%20Reference%20FOSS%20Policy%20v0.2.3.docx'>Reference FOSS Policy</Button>
            <Button href="https://www.finos.org/open-source-license-compliance-handbook-download-page?hs_preview=nOUxUYUU-7982450440&hsLang=en-us">OSR HandBook</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;

    const CompLibrary = require('../../core/CompLibrary.js');

    const Container = CompLibrary.Container;
    const GridBlock = CompLibrary.GridBlock;

    const Projects = () => (
      <Block background="white" layout="fourColumn">
        {[
          {
            content: `A guide for complying with a wide range of open source licenses in common use cases. It's an invaluable resource for enabling developers to manage the most common compliance tasks without unnecessary legal and compliance review.`,
            image: ``,
            title: `<a href="https://github.com/finos/OSLC-handbook">Open Source License Compliance Handbook</a>`
          },
          {
            content: `A comprehensive model corporate policy for consuming, contributing to, and publishing open source software. It's a great starting point for firms adopting their first open source policy or revising an existing one.`,
            image: ``,
            title: '<a href="https://github.com/finos/reference-foss-policy">Reference FOSS Policy</a>'
          },
          {
            content: `Our whitepaper on Business Value of Open Source in Financial Services lays out the business case for open source engagement and is a helpful aid for pitching open source to decision-makers on the business side of finance firms.`,
            image: ``,
            title: '<a href="https://www.finos.org/business-value-of-open-source-for-financial-services-firms-download-page?hsLang=en-us">Whitepaper: Business Value of Open Source in Financial Services</a>'
          },
          {
            content: `We built some high-level workflows for common open source compliance processes, along with a checklist that helps establishing an open source compliance program within your firm.`,
            image: ``,
            title: 'Compliance checklist and workflow'
          }

        ]}
      </Block>
    );

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">

          <div className="wrapper">
            <h2>Project Charter</h2>
            <p>The purpose of the Open Source Readiness Project is to accelerate financial services firms’ journeys toward open source readiness. The concrete goals of the Project are to 1) advance the readiness of participants’ firms and 2) to inform guidance for the broader industry in the form of white papers, presentations, and blog posts.</p>
            <p>Meetings will be designed to provide value to, and welcome participation from, participants at every stage of open source readiness. Each meeting will center on a particular open source topic, introduced by a reading or presentation, followed by a discussion and "office hours" where members can raise issues and get answers. Topics will generally relate to strategy & business value, policy & process, and tools & technology.</p>
          </div>

          <div className="wrapper">
            <h2>Background</h2>
            <p>Financial services firms face a variety of barriers, both real and perceived, that impede adoption of Open Source software and related software development practices. These obstacles include:</p>
            <ul>
              <li>Corporate strategy considerations on competitive advantage and protecting trade secrets</li>
              <li>Legal & regulatory concerns or incompatible internal policies</li>
              <li>Inhospitable technical environments & resistance from corporate IT departments</li>
              <li>Cultural friction & <a href="https://www.fintechfutures.com/2019/06/killing-four-myths-about-open-source-in-financial-services/">open source myths</a></li>
            </ul>
            <p>FINOS helps firms overcome these challenges with its Open Source Readiness Project, focused on enabling financial services organizations and employees to be first class citizens in OSS Communities. The group has produced several valuable practical resources for firms developing their open source strategy and process, listed below.</p>
          </div>
          <Projects />
          <div className="wrapper">
            <h2>Participating</h2>
            <p>This group is open to anyone. The primary audiences are financial services firms seeking to learn more about open source readiness and companies with mature open source programs interested in sharing knowledge. While various products and solutions will be discussed at meetings, promotion of specific vendors or products is not appropriate at Project meetings or on the mailing list, nor are press and PR inquiries.</p>
            <h3>Mailing list</h3>
            <p>Participants are encouraged to join the Project's mailing list: <a href="mailto:osr+subscribe@finos.org">osr+subscribe@finos.org</a> (<a href="https://groups.google.com/a/finos.org/forum/#!forum/osr-regulatory-compliance">web archive</a>)</p>
            <h3>Meetings</h3>
            <p>The Project meets every other Wednesday at 10:00 US/Eastern. For the next meeting, which is scheduled for agenda/minutes, see the <a href="https://finosfoundation.atlassian.net/wiki/spaces/FDX/pages/154533976/Meetings+-+Open+Source+Readiness+Working+Group">Meetings page</a>. You can also subscribe to the <a href="https://calendar.google.com/calendar/embed?src=finos.org_fac8mo1rfc6ehscg0d80fi8jig%40group.calendar.google.com&ctz=America%2FNew_York">FINOS Programs Calendar</a>.</p>
            <h3>Archives</h3>
            <ul>
              <li><a href="https://finosfoundation.atlassian.net/wiki/spaces/FDX/pages/815202423/OSR+2019+Roadmap">OSR 2019 Roadmap</a></li>
              <li><a href="https://finosfoundation.atlassian.net/wiki/spaces/FDX/pages/1331855369/OSR+2020+Roadmap">OSR 2020 Roadmap</a></li>
              <li><a href="https://finosfoundation.atlassian.net/wiki/spaces/FDX/pages/154533976/Meetings+-+Open+Source+Readiness+Working+Group">Meetings</a></li>
              <li><a href="https://finosfoundation.atlassian.net/wiki/spaces/FDX/pages/154435619/Action+Items+-+Open+Source+Readiness+Working+Group">Past action items</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Index;