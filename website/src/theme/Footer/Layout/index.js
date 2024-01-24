import React from 'react';
import clsx from 'clsx';

export default function FooterLayout({style, links, logo, copyright}) {
  return (
    <footer
      className={clsx('footer', {
        'footer--dark': style === 'dark',
      })}>
      <div className="container container-fluid">
        {logo && <div className="margin-bottom--sm">{logo}</div>}
        <p className="footer-extra">The Open Source Readiness and InnerSource Special Interest Groups <br />
          are proud members of the FINOS community.</p>
        {links}
        {(logo || copyright) && (
          <div className="footer__bottom text--center">
            {copyright}
          </div>
        )}
      </div>
    </footer>
  );
}
