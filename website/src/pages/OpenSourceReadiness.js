import React from 'react';
import Layout from '@theme/Layout';
import BoxOut from '../theme/BoxOut'
import BokTagList from '../theme/BokTagList'
import ImageBullet from '../theme/ImageBullet';

export default function Hello() {
	return (
		<Layout title="Welcome to Open Source Readiness" wrapperClassName="page-container">
			<img src="/img/bok/osr-header.svg" alt="Website banner graphic" className="page-header-image" />
			<h1>Welcome to Open Source Readiness (OSR)</h1>
			<p>
			</p>
			<div className="frontPageContent">
				<BoxOut image="/img/bok/page-types/what.png" title="What is it?" className='boxout1' link="/docs/bok/Introduction" linkText="Introduction to OSR">

					<p>The <strong>Open Source Readiness Special Interest Group (OSR SIG)</strong> is dedicated to helping financial services firms advance their open source programs.</p>

					<p>We produce and collect: </p>
					
					<ImageBullet image="/img/bok/page-types/knowledge.png" alt="Knowledge Base">
					The OSR <a href="/docs/bok/Introduction">knowledge base</a> -  a collaborative project aimed at developing a comprehensive body of knowledge on open source best practices for the financial services industry.
					</ImageBullet>
					
					<ImageBullet image="/img/bok/page-types/resource.png" alt="Resources">
					Various <a href="/docs/osr-resources/">Resources</a> to help firms with their open source mission.
					</ImageBullet>
					<ImageBullet image="/img/bok/page-types/training2.png" alt="Training">
					Comprehensive <a href="/Training">Training and Certification</a> materials that firms can use to train and certify developers for open source contribution in a financial services setting. 
					</ImageBullet>
				</BoxOut>
				
				<BoxOut image="/img/bok/page-types/important.png" title="Why is it Important?" className='boxout2' link="/Strategy" linkText="More Information">

					<p>Open Source <em>use</em> and <em>contribution</em> are increasingly important both for <a href="/Strategy">strategic competitive advantage</a> and to manage <a href="/docs/bok/Risks/Introduction">business risks</a>. </p>

					<p>Here are some resources to help make this case:</p>

					<ImageBullet image="/img/bok/page-types/presentation.png" alt="Presentation">
					A <a href="(osr-resources/Presentation">Presentation on Open Source Readiness</a> explaining why we need this project.
					</ImageBullet>
					
					<ImageBullet image="/img/bok/page-types/knowledge.png" alt="Knowledge Base">
					An <a href="(https://www.finos.org/business-value-of-open-source-for-financial-services-firms-download-page?hsLang=en-us">executive whitepaper</a> on the business value of open source.
					</ImageBullet>
					
					<h4>Distilled Best Practices</h4>
					
					<p>The materials on this site are built by the consensus of financial services firms.  This means they reflect best practices and thinking for our industry.</p>
				</BoxOut>
				<BoxOut image="/img/bok/page-types/how.png" title="How Does it Work?" className='boxout3'>

					<h4>Navigating Open Source Readiness</h4>

					<ImageBullet image="/img/bok/page-types/risk.png" alt="Risks">
					
					<p>Articles within the site are broken down into different areas, such as <a href="/docs/bok/Risks/Introduction">Risks</a>, <a href="/docs/bok/Activities/Introduction">Activities</a>, <a href="/docs/bok/Artifacts/Introduction">Artifacts</a> and <a href="/docs/bok/Regualations/Introduction">Regulations</a>, contributed by members of the OSR SIG.</p>
						
					</ImageBullet>				
					<h4>Open Source Maturity</h4>
					
					<ImageBullet image="/img/bok/page-types/activity.png" alt="Activity">

					<p>The <a href="/docs/bok/Activities/Introduction">Activities</a> are arranged into a <a href="/docs/bok/OSMM/Introduction">maturity model</a>, starting at <a href="/docs/bok/OSMM/Level-1">Usage</a> and moving through <a href="/docs/bok/OSMM/Level-2">Compliance</a> <a href="/docs/bok/OSMM/Level-3">Contribution</a>, <a href="/docs/bok/OSMM/Level-4">Hosting</a> until the highest level, <a href="/docs/bok/OSMM/Level-5">Strategic Open Source</a>.</p>
					
					</ImageBullet>
					
					<ImageBullet image="/img/bok/page-types/maturity.png" alt="Maturity">

					<p>The OSR SIG is building out articles describing the expected activities at each level as well as putting together checklists for firms to self-assess on their level of maturity.</p>
					
					</ImageBullet>
					
					<h4>Other Resources</h4>
					
					
					<ImageBullet image="/img/bok/page-types/resource.png" alt="Resource">

					<p>This site also contains other resources to help firms on their open source journey, such as:</p>
					
					<ul>
					
					  <li>A <a href="https://github.com/finos/reference-foss-policy">reference open source policy</a> for FSI firms.</li>
					  
					  <li>An <a href="https://github.com/finos/OSLC-handbook">Open Source License Compliance Handbook</a> with information about complying with common open source licenses.</li>

					</ul>
					</ImageBullet>

				</BoxOut>
				<BoxOut image="/img/bok/page-types/involved.png" title="How Do I Get Involved?" className='boxout4'>

					<h4 id="meetings">Meetings</h4>
					
					<table>
						<thead>
							<tr>
								<th>First Wednesday <br /> Every Month</th>
								<th>Third Wednesday <br /> Every Month</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className="calendar"><a href="https://calendar.finos.org/4ceeknoiieiu0g9k6rmf4t3n44.ics"><img src="/img/bok/page-types/calendar.png" alt="Meeting Download"/><br />Add To Calendar</a></td>
								<td className="calendar"><a href="https://calendar.finos.org/3oeu8ev0okjen2i8v5hstg5abt.ics"><img src="/img/bok/page-types/calendar.png" alt="Meeting Download"/><br />Add To Calendar</a></td>
							</tr>
							<tr>
								<td>A show-and-tell covering important topics in open source.  In 2024 we aim to have <a href="https://github.com/finos/open-source-readiness/issues/224">more guest speakers and monthly themes.</a>  Please suggest your own!</td>
								<td>This meeting is more of a workshop session where we will try to work on articles for this site or organise further resources.  </td>
							</tr>
						</tbody>					
					
					</table>

					<p>Meetings are open to anyone who would like to participate. Previous Meeting Minutes and Agendas are available on <a href="https://github.com/finos/open-source-readiness/issues?q=is%3Aissue++label%3Ameeting+">GitHub</a>.</p>

					<h4>Mailing List</h4>

					<p><strong><a href="https://groups.google.com/a/finos.org/forum/#!forum/osr"> Subscribe to our mailing list</a></strong> by <a href="mailto:osr+subscribe@finos.org](mailto:osr+subscribe@finos.org">sending an email to join.</a> You will get updates on upcoming meetings and other activity.</p>

				

				</BoxOut>
				
				<BoxOut title="Training" link="/docs/osr-resources/Training" linkText="To The Training Page" image="/img/bok/page-types/training.png" className='boxout2'>
					<p>In November 2023 the OSR SIG team are proud to announce general availability of two new Linux Foundation training products:</p>


					<ImageBullet image="/img/bok/page-types/training2.png" alt="Training Course">
					<strong><a href="/docs/bok/Training/LFD137-Contribution-In-Finance">Open Source Contribution in Finance (LFD137)</a> </strong> - a comprehensive training enabling developers in financial services to safely participate in open source communities, 
					drawing from the best practices of the world's top financial institutions.
					</ImageBullet>
					
					<ImageBullet image="/img/bok/page-types/certification.png" alt="Certtification">
					<strong><a href="/docs/bok/Certifications/FSOSD">FINOS Financial Services Open Source Certification (FSOSD)</a></strong> - designed to ensure open source contributors in financial institutions, fintech and 
					technology vendors and consultants operating in the financial industry contribute in line with the financial services industry's regulatory framework and compliance best practices.
					</ImageBullet>

					
				</BoxOut>
				
				<BoxOut title="Contributing" image="/img/bok/page-types/contribution.png" className='boxout1' link="/docs/about" linkText="More on Contributing">
					<p>Please help contribute to the knowledge base or help improve our resources for open source programs. Most OSR resources are collaboratively 
					produced as open source projects, and we're always on the lookout for ways to enable participants to share knowledge and 
					best practices in a form that's useful to their peers. </p>
					
					<p>If you have a project to propose, <a href="https://github.com/finos/open-source-readiness/issues">open a GitHub issue</a> and share your vision!</p>
					
					<p>Alternatively, most pages have an "edit" button where you can propose changes to a page via the <a href="https://github.com/finos/open-source-readiness/pulls">GitHub Pull Request</a> process.</p>
				
				</BoxOut>
			</div>

			<h1><a href="/docs/bok/Introduction">Our Materials</a></h1>

			<p>The materials contained in the Open Source Readiness site are designed as a collection of interconnecting documents and categories which can be browsed in any order. </p>
			
			<p>The following diagram summarizes the information architecture.</p>

			<img src="/img/bok/information-architecture.png" alt="Information Architecture" />

			<p>Please see the following introductory articles each on these areas:</p>

			<BokTagList tag="Introduction" images="true" />
		</Layout>
	);
}

