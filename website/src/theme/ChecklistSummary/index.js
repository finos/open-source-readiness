import React from 'react';
import {usePluginData} from '@docusaurus/useGlobalData'
import styles from './styles.module.css'
import { isChecked } from '../ArticleChecklist';
import BrowserOnly from '@docusaurus/BrowserOnly';

function matchesTag(tags, t) {
    return tags.filter(tag => tag.label == t).length > 0;
}

function ChecklistItem({title, item}) {
    const checked = isChecked(title+"_"+item.title)
    console.log("Checked: "+checked)
    const className = checked ? styles.doneItem : styles.notDoneItem
    return (
        <div className={className}>
            <p>{item.title}</p>
        </div>
    )
}

function completionCount(checklist, title) {
    const items = checklist.length
    const completedItems = checklist.filter(i => isChecked(title+"_"+i.title)).length;

    return {
        completed: completedItems,
        total: items
    } 
}

function levelCompletionCount(docs) {
    return docs.map(d => completionCount(d.checklist, d.title))
        .reduce((a, b) => {
            return {
                completed : a.completed + b.completed,
                total: a.total + b.total
            }
        }, {
            completed: 0,
            total: 0
        })
}

function DocSummary({checklist, title, uri}) {
    const completion = completionCount(checklist, title)
    return (
        <div className={styles.docSummary}>
            {
                checklist.map(item => <ChecklistItem title={title} item={item} />) 
            }    
            <div className={styles.docDetails}>
                <h5><a href={'/docs/'+uri}>{title}</a></h5>
                <div classNaem={styles.divider}></div>
                <h3 className={styles.score}>{completion.completed + " / " + completion.total}</h3>
            </div>
        </div>
    )
}

function DoDocList({tag, uri, name, icon, description}) {
    const allDocs = usePluginData('checklist-listing');
    const matchingDocs =  allDocs.filter(d => matchesTag(d.tags, tag))
    const level = levelCompletionCount(matchingDocs)

    return  (
        <div className={styles.level}>
            <div className={styles.levelIdentifier}>
                <h4><a href={uri}>{name}</a></h4>
                <img src={icon} />
                <p>{description}</p>
                <div className={styles.divider}></div>
                <h3 className={styles.score}>{level.completed +" / " + level.total }</h3>
            </div>

            {
                    matchingDocs.map(d => <DocSummary checklist={d.checklist} title={d.title} uri={d.id} />)            
            }
        </div>
    )
}

function ChecklistSummaryInner() {
    return (
        <div className={styles.checklistSummary}>
            <DoDocList tag="Level 5 (OSMM)" uri="/docs/bok/OSMM/Level-5" name="Level 5" description="Strategic Advantage"  icon="/img/bok/maturity/strategy.png"/>
            <DoDocList tag="Level 4 (OSMM)" uri="/docs/bok/OSMM/Level-4" name="Level 4" description="Hosting" icon="/img/bok/maturity/foundation.png"/>
            <DoDocList tag="Level 3 (OSMM)" uri="/docs/bok/OSMM/Level-3" name="Level 3" description="Contribution" icon="/img/bok/maturity/contributing.png"/>
            <DoDocList tag="Level 2 (OSMM)" uri="/docs/bok/OSMM/Level-2" name="Level 2" description="Compliant Usage" icon="/img/bok/maturity/compliance.png"/>
            <DoDocList tag="Level 1 (OSMM)" uri="/docs/bok/OSMM/Level-1" name="Level 1" description="Ad-Hoc Usage" icon="/img/bok/maturity/using.png"/>
        </div>
    )
}



export default function Hello() {
    return (
        <BrowserOnly>{() => <ChecklistSummaryInner />}</BrowserOnly>
    )
}