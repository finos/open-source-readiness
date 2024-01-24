import React from 'react';
import Layout from '@theme/Layout';
import BoxOut from '../theme/BoxOut'
import BokTagList from '../theme/BokTagList'

export default function Hello() {
	return (
		<Layout title="Hello" wrapperClassName="page-container">
			<img src="/img/bok/page-types/2020_InnerSourceSIG_Horizontal.png" className="page-header-image" />
			<h1>Welcome to the InnerSource SIG</h1>
			<p>Here is some introductory stuff about InnerSource... </p>
			<div className="frontPageContent">
				<BoxOut image="/img/bok/page-types/what.png" title="What is it?" className='boxout1'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.        </BoxOut>

				<BoxOut image="/img/bok/page-types/important.png" title="Why is it Important?" className='boxout2'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.        </BoxOut>

				<BoxOut image="/img/bok/page-types/how.png" title="How Does it Work?" className='boxout3'>
					strategy, foundations

					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</BoxOut>
				<BoxOut image="/img/bok/page-types/involved.png" title="How Do I Get Involved?" className='boxout4'>
					strategy, foundations

					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</BoxOut>
			</div>
			
			<h1>InnerSource Resources</h1>
		
			Here are some main jumping-off articles tagged with InnerSource.
			
			<BokTagList tag="InnerSource" />
		</Layout>
	);
}

