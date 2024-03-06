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
		out = [...out, ...checklistItems(d.checklist, d.title, d.tags, d.id)]
	})

	return out
}

function DetailRow({ d }) {
	return (
		<li><a title={d.description} href={"/docs/" + d.slug + "#maturity-checklist"}>{d.name}</a></li>
	)
}

function Square({ name, level, row }) {
	const allDocs = usePluginData('checklist-listing');
	const complete = allChecklists(allDocs)
	const docDetails = complete.filter(d => matchesTag(d.tags, name + " (OSMM)"))
	const zeroPad = (num, places) => String(num).padStart(places, '0')

	const total = docDetails.length
	const relevantDocs = docDetails.filter(d => d.level == "" + level)
	const count = relevantDocs.length
	const opacity = Math.floor((count / total) * 128).toString(16);
	const completeColour = `#${levels[level].color}${zeroPad(opacity, 2)}`
	console.log("COMplete colour:"+completeColour)

	return (
		<div className={styles.square} style={{ backgroundColor: completeColour, gridColumnStart: level + 2, gridRowStart: row }}>
			<h4 className={styles.name}><a href={levels[level].link} title={levels[level].description}>{levels[level].name}</a></h4>
			<div className={styles.score}>{count}</div>
			<ul className={styles.items}>
				{(relevantDocs.length < 6) ? relevantDocs.map(d => <DetailRow key={d.slug + "_" + d.name} d={d} />) : relevantDocs.slice(0, 4).map(d => <DetailRow key={d.slug + "_" + d.name} d={d} />)}
				{(relevantDocs.length > 5) ? <li><em>& {relevantDocs.length - 4} others</em></li> : ""}
			</ul>

		</div>
	)
}

function DoDocList({ row, uri, name, icon, description }) {
	return (
		<div className={styles.level} style={{ gridColumnStart: 1, gridRowStart: row }}>
			<h4 className={styles.name}><a href={uri}>{name}</a></h4>
			<img className={styles.score} src={icon} />
			<ul className={styles.items}><li>{description}</li></ul>
		</div>
	)
}

const tags = ["Level 5", "Level 4", "Level 3", "Level 2", "Level 1"]

function ChecklistSummaryInner() {
	return (
		<div id="checklist" className={styles.checklistOutline}>
			<div className={styles.banner}>
				<h2>FINOS Open Source Readiness Maturity Checklist</h2>
			</div>
			<div className={styles.checklistSummary} id="checklist-summary-inner">
				<DoDocList row={1} uri="/docs/bok/OSMM/Checklist#level-5" name="Level 5" description="Strategic Advantage" icon="/img/bok/maturity/strategy.png" />
				<DoDocList row={2} uri="/docs/bok/OSMM/Checklist#Level-4" name="Level 4" description="Hosting" icon="/img/bok/maturity/foundation.png" />
				<DoDocList row={3} uri="/docs/bok/OSMM/Checklist#Level-3" name="Level 3" description="Contribution" icon="/img/bok/maturity/contributing.png" />
				<DoDocList row={4} uri="/docs/bok/OSMM/Checklist#Level-2" name="Level 2" description="Compliant Usage" icon="/img/bok/maturity/compliance.png" />
				<DoDocList row={5} uri="/docs/bok/OSMM/Checklist#Level-1" name="Level 1" description="Ad-Hoc Usage" icon="/img/bok/maturity/using.png" />

				{
					tags.flatMap((t, j) => levels.map((_l, i) => <Square key={i + "_" + j} name={t} level={i} row={j + 1} />))
				}

			</div>
		</div>
	)
}



export default function Hello() {
	return (
		<BrowserOnly>{() => <ChecklistSummaryInner />}</BrowserOnly>
	)
}