import React from 'react';
import styles from './styles.module.css'
import BrowserOnly from '@docusaurus/BrowserOnly';

const expDays = 2000;

export const levels = [
	{
		name: "Unaware",
		description: "No awareness of this activity",
		class: styles.unaware,
		color: "000000",
		link: "/docs/bok/OSMM/Introduction#0-unaware"
	},
	{
		name: "Initial",
		description: "Unrepeatable process, poorly controlled, reactive",
		class: styles.initial,
		color: "880000",
		link: "/docs/bok/OSMM/Introduction#1-initial"
	},
	{
		name: "Managed",
		description: "Ad-hoc processes exist, usually followed, reactive",
		class: styles.managed,
		color: "666644",
		link: "/docs/bok/OSMM/Introduction#2-managed"
	},
	{
		name: "Defined",
		description: "Processes in place, proactive application",
		class: styles.defined,
		color: "888844",
		link: "/docs/bok/OSMM/Introduction#3-defined"
	},
	{
		name: "Quantitative",
		description: "Processes measured and controlled",
		class: styles.quantitative,
		color: "448844",
		link: "/docs/bok/OSMM/Introduction#4-quantitative"
	},
	{
		name: "Optimised",
		description: "The organisation has reached its goal in terms of this activity.",
		class: styles.optimised,
		color: "00AA00",
		link: "/docs/bok/OSMM/Introduction#5-optimised"
	}
]


function updateValues(id, state) {
	let dt = new Date();
	dt.setTime(dt.getTime() + (expDays * 24 * 60 * 60 * 1000));
	const cookie = `${id}=${state}; expires=${dt.toUTCString()}; path=/`
	console.log("Updated cookie " + cookie)
	document.cookie = cookie
}

function getCookie(name) {
	const nameEQ = name + "=";
	const ca = document.cookie.split(';');
	for (let i = 0; i < ca.length; i++) {
		const c = ca[i].trim()
		if (c.indexOf(nameEQ) == 0) {
			return c.split("=")[1]
		}
	}
	return null;
}

export function getLevel(id) {
	try {
		const v = getCookie(id);
		//console.log("Cookie: " + id + " " + v)
		const out = parseInt(v)
		if (isNaN(out)) {
			return 0
		} else {
			return out;
		}
	} catch (e) {
		return 0
	}
}

function update(id) {
	const el = document.getElementById(id)
	const state = el.value
	console.log("state: " + state)
	updateValues(id, state)
	return false;
}

class Slider extends React.Component {

	constructor(props) {
		super(props);
		this.handleForceupdateMethod = this.handleForceupdateMethod.bind(this);
		const id = this.props.page + "_" + this.props.label
		this.state = {
			id,
			level: getLevel(id)
		}
	};

	handleForceupdateMethod() {
		this.state.level = getLevel(this.state.id)
		this.forceUpdate();
		console.log("UPdated")
	};

	render() {
		return (
			<div className={levels[this.state.level].class}>
				<div key={this.state.id} className={styles.checklistItem} onMouseUp={() => {
					update(this.state.id);
					this.handleForceupdateMethod();
				}}>
					<div className={styles.control}>
						<input type="range" min={0} max={5} name={this.state.id} id={this.state.id} defaultValue={this.state.level} className={styles.checklistInput} />
					</div>
					<div className={styles.label}>
						<label htmlFor={this.state.id}>
							<div>{this.props.label}</div>
						</label>
					</div>
					<div className={styles.value}>
						<div className={styles.valueInner}>
							<a href={levels[this.state.level].link}>{levels[this.state.level].name}</a>
						</div>
					</div>
					<div className={styles.labelDescription}>
						<div className={styles.labelDescriptionInner}>
							{this.props.description}
						</div>
					</div>
					<div className={styles.valueDescription}>
						<div className={styles.valueDescriptionInner}>
							<a href={levels[this.state.level].link}>{levels[this.state.level].description}</a>
						</div>
					</div>
				</div>
			</div>

		)
	}
}


function ChecklistInner({ checklist, title, link, linkText }) {
	return (<div className={styles.checklist}>
		<div key="one" className={styles.header}>
			<img className={styles.icon} src="/img/bok/maturity/checklist.png" alt={title} />
			<h3> {title} </h3>
		</div>
		<form id="article-checklist-form" name="article-checklist" className={styles.checklistBody}>
			{
				checklist.map(item => <Slider key={item.title} label={item.title} description={item.description} page={title} />)
			}
		</form>
		<div className={styles.footer}> 
        { 
        	(link) ? <p><a href={link} className={styles.link}>{linkText}</a></p> : ""
        }
        </div>
	</div>)
}

export default ({ checklist, title, link="/docs/bok/OSMM/Checklist", linkText="View Complete Checklist" }) => {
	return (
		<BrowserOnly>{() => <ChecklistInner checklist={checklist} title={title} link={link} linkText={linkText}/>}</BrowserOnly>
	)

}