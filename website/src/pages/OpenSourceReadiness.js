import React from 'react';
import Layout from '@theme/Layout';
import BoxOut from '../theme/BoxOut'
import BokTagList from '../theme/BokTagList'

export default function Hello() {
	return (
		<Layout title="Hello" wrapperClassName="page-container">
			<img src="/img/bok/osr-header.svg" alt="Website banner graphic" />
			<h1>Welcome to Open Source Readiness</h1>
			<p>Here is some introductory stuff about Open Source Readiness ... </p>
			<div className="frontPageContent">
				<BoxOut image="/img/bok/page-types/getting-started.png" title="Getting Started" link="/GettingStarted" linkText="More Details...">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.        </BoxOut>

				<BoxOut image="/img/bok/roles/OSPO.png" title="Starting an OSPO" link="/GettingStarted" linkText="More Details...">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.        </BoxOut>

				<BoxOut image="/img/bok/page-types/strategy.png" title="Open Source Strategy" link="/Strategy" linkText="More Details...">
					strategy, foundations

					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</BoxOut>
				<BoxOut image="/img/bok/page-types/strategy.png" title="Open Source Strategy" link="/Strategy" linkText="More Details...">
					strategy, foundations

					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</BoxOut>
			</div>
			
			<h1>Introductory Articles</h1>
			<BokTagList tag="Introduction" />
		</Layout>
	);
}

