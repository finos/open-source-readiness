import React from 'react';
import Layout from '@theme/Layout';
import BoxOut from '../theme/BoxOut'
import BokTagList from '../theme/BokTagList'

export default function Hello() {
	return (
		<Layout title="Welcome to InnerSource" wrapperClassName="page-container">
			<img src="/img/bok/page-types/2020_InnerSourceSIG_Horizontal.png" className="page-header-image" />
			<h1>Welcome to the InnerSource SIG</h1>
			<div className="frontPageContent">
				<BoxOut image="/img/bok/page-types/what.png" title="What is it?" className='boxout1' link="/docs/InnerSource/Introduction" linkText="Find out More">
					<p>The FINOS InnerSource <a href="https://github.com/finos/community/tree/master/governance#special-interest-groups">Special Interest Group</a> is a community of people implementing, or interested in implementing,
						InnerSource within their financial services organization in order to increase collaboration and remove/deal with excessive ownership issues that can stall innovation.</p>

					<p>It is likely of particular importance to financial services
						organisations who wish to accelerate their InnerSource practices, share best
						practices, patterns and anti-patterns and potentially related code in a secure environment in collaboration with others in similar positions.</p>




				</BoxOut>
				<BoxOut image="/img/bok/page-types/involved.png" title="Get Involved" className='boxout2'>
					<h3>Meetings</h3>
					<table className="meetingTable">
						<thead>
							<tr>
								<th>Second Tuesday Every Month</th>
								<th>Fourth Tuesday Every Month</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td className="calendar"><a href="/ics/finos-event-7.ics"><img src="/img/bok/page-types/calendar.png" alt="Meeting Download" /><br />Add To Calendar</a></td>
								<td className="calendar"><a href="/ics/finos-event-8.ics"><img src="/img/bok/page-types/calendar.png" alt="Meeting Download" /><br />Add To Calendar</a></td>
							</tr>
						</tbody>
					</table>

					<p>Meetings are open to anyone who would like to participate. Previous Meeting Minutes and Agendas are available on <a href="https://github.com/finos/open-source-readiness/issues?q=is%3Aissue++label%3Ameeting+">GitHub</a>.</p>
					<h3>Subscribe to the Mailing List</h3>

					<ul>
						<li>Subscribe to <a href='/docs/get-involved/#mailing-list'>our mailing list</a></li>
					</ul>


				</BoxOut>
			</div>

			<h1>InnerSource Resources</h1>

			Here are some main jumping-off articles tagged with InnerSource.

			<BokTagList tag="InnerSource" />
		</Layout>
	);
}

