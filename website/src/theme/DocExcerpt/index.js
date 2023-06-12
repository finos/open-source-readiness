import React from 'react';
import {usePluginData} from '@docusaurus/useGlobalData'
import Link from '@docusaurus/Link';


function DocItem({doc}) {
    return <p>{doc.description} <Link to={doc.permalink}> (Read More)</Link></p>
}
  
/**
 * Outputs the excerpt (description) information for a single document.
 */
export default function DocExceprt(props) {

    function uniqueOnly(value, index, array) {
        return array.map(o => o.permalink).indexOf(value.permalink) == index;
    }
    
    const allData = usePluginData('category-listing');
    const allDocs = Object.values(allData).flatMap(a => a).filter(uniqueOnly);   
    const filter = props.src;
	const theDoc = allDocs.filter(d => d.permalink.indexOf(filter) > -1)[0];

    return <DocItem key={theDoc} doc={theDoc} />

}