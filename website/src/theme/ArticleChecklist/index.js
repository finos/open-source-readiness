import React from 'react';
import styles from './styles.module.css'
import BrowserOnly from '@docusaurus/BrowserOnly';

const expDays = 2000;

const levels = [
	{
		name: "Unaware",
		description: "No awareness of this activity",
		class: styles.unaware
	},
	{
		name: "Initial",
		description: "Unrepeatable process, poorly controlled, reactive",
		class: styles.initial
	},
	{
		name: "Managed",
		description: "Ad-hoc processes exist, usually followed, reactive",
		class: styles.managed
	},
	{
		name: "Defined",
		description: "Processes in place, proactive application",
		class: styles.defined
	},
	{
		name: "Quantitative",
		description: "Processes measured and controlled",
		class: styles.quantitative
	},
	{
		name: "Optimised",
		description: "The organisation has reached its goal in terms of this activity.",
		class: styles.optimised
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
			<div key={this.state.id} className={styles.checklistItem} onMouseUp={() => {
				update(this.state.id);
				this.handleForceupdateMethod();
			}}>
				<div className={levels[this.state.level].class}>
					<div key="control" className={styles.control}>
						<input type="range" min={0} max={5} name={this.state.id} id={this.state.id} defaultValue={this.state.level} className={styles.checklistInput} />
					</div>
					<div key="label" className={styles.label}>
						<label htmlFor={this.state.id}>
							{this.props.label}: <span className={styles.nameLabel}>{levels[this.state.level].name}</span>
						</label>

						<div key="k1" className={styles.description}>"{this.props.description}"</div>

						<div key="k2" className={styles.valueDescription}>{levels[this.state.level].description}</div>

					</div>
				</div>
			</div>
		)
	}
}


function ChecklistInner({ checklist, title }) {
	return (<div className={styles.checklist}>
		<div key="one" className={styles.header}>
			<img className={styles.icon} src="/img/bok/maturity/checklist.png" alt="Maturity Checklist" />
			<h3> Maturity Checklist </h3>
		</div>
		<form id="article-checklist-form" name="article-checklist" className={styles.checklistBody}>
			{
				checklist.map(item => <Slider label={item.title} description={item.description} page={title} />)
			}
		</form>
		<div key="two" className={styles.contents}>
		</div>
	</div>)
}

export default ({ checklist, title }) => {
	return (
		<BrowserOnly>{() => <ChecklistInner checklist={checklist} title={title} />}</BrowserOnly>
	)

}