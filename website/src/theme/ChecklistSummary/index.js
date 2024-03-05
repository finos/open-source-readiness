import React from 'react';
import { usePluginData } from '@docusaurus/useGlobalData'
import styles from './styles.module.css'
import { getLevel, levels } from '../ArticleChecklist';
import BrowserOnly from '@docusaurus/BrowserOnly';

function matchesTag(tags, t) {
	return tags.filter(tag => tag.label == t).length > 0;
}

function checklistItems(checklist, title, tags, slug) {
	const itemLevels = checklist.map(i => {
		return {
			level: getLevel(`${title}_${i.title}`),
			name: i.title,
			description: i.description,
			tags,
			slug
		}
	})

	return itemLevels
}

function allChecklists(docs) {

	var out = []

	const docLevels = docs.map(d => {
		out = [ ...out, ...checklistItems(d.checklist, d.title, d.tags, d.id) ]
	})

	return out
}

function DetailRow({d}) {
	return (
		<li><a title={d.description} href={"/docs/"+d.slug+"#maturity-checklist"}>{d.name}</a></li>
	)
}

function Square({docDetails, level}) {
	const total = docDetails.length
	const relevantDocs = docDetails.filter(d => d.level == ""+level)
	const count = relevantDocs.length
	const opacity = Math.floor((count / total)*128).toString(16);
	const completeColour = `#${levels[level].color}${opacity}`
	
	return (
		<div className={styles.countRect} style={{backgroundColor: completeColour}}>
			<div className={styles.name}><a href={levels[level].link} title={levels[level].description}>{levels[level].name}</a></div>
			<div className={styles.score}>{count}</div>
			<ul className={styles.items}>
				{ (relevantDocs.length < 6 ) ? relevantDocs.map(d => <DetailRow d={d} />) : relevantDocs.slice(0, 4).map(d => <DetailRow d={d} />) }
			</ul>
			{ (relevantDocs.length > 5) ? <p><em>...and {relevantDocs.length - 4} others</em></p> : "" }
			
			<div className={styles.detail}>{}</div>
		</div>
	)
}

function DoDocList({ tag, uri, name, icon, description }) {
	const allDocs = usePluginData('checklist-listing');
	const complete = allChecklists(allDocs)
	const matchingDocs = complete.filter(d => matchesTag(d.tags, name+" (OSMM)"))

	return (
		<div className={styles.level}>
			<div className={styles.levelIdentifier}>
				<h4><a href={uri}>{name}</a></h4>
				<img src={icon} />
				<p>{description}</p>
			</div>

			{
				levels.map((d,i) => <Square docDetails={matchingDocs} level={i}/>)
			}
		</div>
	)
}

function ChecklistSummaryInner() {
	return (
		<div className={styles.checklistSummary}>
			<DoDocList tag="Level 5 (OSMM)" uri="/docs/bok/OSMM/Checklist#level-5" name="Level 5" description="Strategic Advantage" icon="/img/bok/maturity/strategy.png" />
			<DoDocList tag="Level 4 (OSMM)" uri="/docs/bok/OSMM/Checklist#Level-4" name="Level 4" description="Hosting" icon="/img/bok/maturity/foundation.png" />
			<DoDocList tag="Level 3 (OSMM)" uri="/docs/bok/OSMM/Checklist#Level-3" name="Level 3" description="Contribution" icon="/img/bok/maturity/contributing.png" />
			<DoDocList tag="Level 2 (OSMM)" uri="/docs/bok/OSMM/Checklist#Level-2" name="Level 2" description="Compliant Usage" icon="/img/bok/maturity/compliance.png" />
			<DoDocList tag="Level 1 (OSMM)" uri="/docs/bok/OSMM/Checklist#Level-1" name="Level 1" description="Ad-Hoc Usage" icon="/img/bok/maturity/using.png" />
		</div>
	)
}



export default function Hello() {
	return (
		<BrowserOnly>{() => <ChecklistSummaryInner />}</BrowserOnly>
	)
}