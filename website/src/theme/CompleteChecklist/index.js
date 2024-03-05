import ArticleChecklist from "../ArticleChecklist";
import React from 'react';
import { usePluginData } from '@docusaurus/useGlobalData'


function matchesTag(tags, t) {
	return tags.filter(tag => tag.label == t).length > 0;
}


export default function CompleteChecklist({tag}) {
	const allDocs = usePluginData('checklist-listing');
	const matchingDocs = allDocs.filter(d => 3(d.tags, tag))

	return (
		<div>
            {
				matchingDocs.map(d => <ArticleChecklist checklist={d.checklist} title={d.title} link={"/docs/"+d.id} linkText="View original article"/>)
			}
		</div>
	)
}