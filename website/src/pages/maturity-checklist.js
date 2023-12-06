import React from 'react';
import Layout from '@theme/Layout';
import {usePluginData} from '@docusaurus/useGlobalData'
import ArticleChecklistView from '../theme/ArticleChecklistView';

function matchesTag(tags, t) {
    return tags.filter(tag => tag.label == t).length > 0;
}

function DoDocList({tag, name, icon, description}) {
    const allDocs = usePluginData('checklist-listing');

    return  (
        <div>
            <h2>{name}</h2>
            <p>{description}</p>
            {
                allDocs
                    .filter(d => matchesTag(d.tags, tag))
                    .map(d => <ArticleChecklistView checklist={d.checklist} title={d.title} uri={d.id} />)            
            }
        </div>
    )
}


export default function Hello() {
    return (
        <Layout title="Hello" description="Maturity Checklist Summary">
            <h1>Maturity Checklist Summary</h1>
            <div>
                <DoDocList tag="Level 5 (OSMM)" name="Level 5" description="Strategic Blah" url="thing"/>
                <DoDocList tag="Level 4 (OSMM)" name="Level 4" description="Project Contribution" url="thing"/>
                <DoDocList tag="Level 3 (OSMM)" name="Level 3" description="Contribution" url="thing"/>
                <DoDocList tag="Level 2 (OSMM)" name="Level 2" description="Compliant Usage" url="thing"/>
                <DoDocList tag="Level 1 (OSMM)" name="Level 1" description="Using" url="thing"/>
            </div>
        </Layout>
    );
}