import ArticleChecklist from "../ArticleChecklist";
import React from 'react';
import styles from './styles.module.css'


import { usePluginData } from '@docusaurus/useGlobalData'


function matchesTag(tags, t) {
	return tags.filter(tag => tag.label == t).length > 0;
}


function DoDocList({ tag, uri, name, icon, description }) {
	const allDocs = usePluginData('checklist-listing');
	const matchingDocs = allDocs.filter(d => matchesTag(d.tags, tag))

	return (
		<div className={styles.level}>
			<div className={styles.levelIdentifier}>
				<h4><a id={name.replace(" ","-").toLowerCase()} href={uri}>{name}</a></h4>
				<img src={icon} />
				<p>{description}</p>
				<div className={styles.divider}></div>
			</div>
            <div className={styles.levelContent}>			
            {
				matchingDocs.map(d => <ArticleChecklist checklist={d.checklist} title={d.title} link={"/docs/"+d.id} linkText="View original article"/>)
			}
            </div>
		</div>
	)
}

function ChecklistSummaryInner() {
	return (
		<div className={styles.checklistSummary}>
			<DoDocList tag="Level 5 (OSMM)" uri="/docs/bok/OSMM/Level-5" name="Level 5" description="Strategic Advantage" icon="/img/bok/maturity/strategy.png" />
			<DoDocList tag="Level 4 (OSMM)" uri="/docs/bok/OSMM/Level-4" name="Level 4" description="Hosting" icon="/img/bok/maturity/foundation.png" />
			<DoDocList tag="Level 3 (OSMM)" uri="/docs/bok/OSMM/Level-3" name="Level 3" description="Contribution" icon="/img/bok/maturity/contributing.png" />
			<DoDocList tag="Level 2 (OSMM)" uri="/docs/bok/OSMM/Level-2" name="Level 2" description="Compliant Usage" icon="/img/bok/maturity/compliance.png" />
			<DoDocList tag="Level 1 (OSMM)" uri="/docs/bok/OSMM/Level-1" name="Level 1" description="Ad-Hoc Usage" icon="/img/bok/maturity/using.png" />
		</div>
	)
}



export default function CompleteChecklist() {
	return (
		<ChecklistSummaryInner />
	)
}