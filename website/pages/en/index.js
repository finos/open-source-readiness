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
          <img src="img/osr-icon-2019.png"></img>
          <ProjectTitle tagline="Special Interest Group" title={siteConfig.title} />
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
            image: `img/check-box.svg`,
            imageAlign: 'top',
            title: `<a href="https://github.com/finos/OSLC-handbook">Open Source License Compliance Handbook</a>`
          },
          {
            content: `A comprehensive model corporate policy for consuming, contributing to, and publishing open source software. It's a great starting point for firms adopting their first open source policy or revising an existing one.`,
            image: `img/check-box.svg`,
            imageAlign: 'top',
            title: '<a href="https://github.com/finos/reference-foss-policy">Reference FOSS Policy</a>'
          },
          {
            content: `Our whitepaper on Business Value of Open Source in Financial Services lays out the business case for open source engagement and is a helpful aid for pitching open source to decision-makers on the business side of finance firms.`,
            image: `img/check-box.svg`,
            imageAlign: 'top',
            title: '<a href="https://www.finos.org/business-value-of-open-source-for-financial-services-firms-download-page?hsLang=en-us">Whitepaper: Business Value of Open Source in Financial Services</a>'
          },
          {
            content: `We built some high-level workflows for common open source compliance processes, along with a checklist that helps establishing an open source compliance program within your firm.`,
            image: `img/check-box.svg`,
            imageAlign: 'top',
            title: '<a href="https://open-source-readiness.netlify.app/docs/compliance-checklist">Compliance checklist and workflow</a>'
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
            <h2>Welcome to the FINOS Open Source Readiness SIG!</h2>
            <p>
            The OSR SIG is dedicated to helping financial services firms advance their open source programs. Here's what we have to offer:</p>
            <ul>
              <li>
                <strong>Meetings</strong> of the SIG are held on the first Wednesday of each month at 10am US/Eastern, and are open to anyone who would like to participate. Meetings include group discussions of open source best practices, guest presentations from open source experts, and collaborative sessions to produce resources for the industry.
              </li>
              <li>
                <strong>Media</strong> from guest presentations and SIG sessions provides invaluable insights from experts and FSI colleagues on a range of topics related to open source usage, contribution, and compliance.
              </li>
              <li>
                We produce <strong>resources</strong> to support FSI firms in developing robust open source programs, including an <a href="https://github.com/finos/OSLC-handbook">Open Source License Compliance Handbook</a> with information about complying with common open source licenses, a <a href="https://www.finos.org/business-value-of-open-source-for-financial-services-firms-download-page?hsLang=en-us">executive whitepaper on the business value of open source</a>, and a <a href="https://github.com/finos/reference-foss-policy">reference open source policy</a> for FSI firms. 
              </li>
            </ul>
          </div>

          <div className="wrapper">
            <h2>Get Involved</h2>
            <p>Interested in the SIG? Join us! Here are a few ways to get involved:</p>
            <ul>
              <li>Join us for an <a href="https://github.com/finos/open-source-readiness/issues?q=is%3Aopen+is%3Aissue+label%3Ameeting">upcoming meeting</a>!</li>
              <li>
              Subscribe to our <a href="https://groups.google.com/a/finos.org/forum/#!forum/osr-regulatory-compliance">mailing list</a> by sending an email to <a href="mailto:osr+subscribe@finos.org">osr+subscribe@finos.org</a>, and get updates on upcoming meetings and other activity.
              </li>
              <li>
                Check out our <strong>open source projects</strong> on GitHub. All of our resources are collaboratively produced as open source projects, and we're always on the lookout for ways to enable participants to share knowledge and best practices in a form that's useful to their peers. If you have a project to propose, <a href="https://github.com/finos/open-source-readiness/issues">open a GitHub issue</a> and share your vision!
              </li>
            </ul>
          </div>
        </div>
      </div>
      
    );
  }
}


module.exports = Index;
