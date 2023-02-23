import React from 'react';
import {usePluginData} from '@docusaurus/useGlobalData'
import Link from '@docusaurus/Link';


function DocItem({doc}) {
    return (
      <article className="margin-vert--lg">
        <Link to={doc.permalink}>
          <h3>{doc.title}</h3>
        </Link>
        {doc.description && <p>{doc.description}</p>}
      </article>
    );
  }
  

export default function BokTagList(props) {

    function uniqueOnly(value, index, array) {
        return array.map(o => o.permalink).indexOf(value.permalink) == index;
    }
    
    const allTags = usePluginData('category-listing');
    const oneTag = props.tag ? allTags[props.tag] : Object.values(allTags)
        .flatMap(a => a)
        .filter(uniqueOnly)
    const filter = props.filter ?? ''

    return (
        <div class="bok-tag-list" key={props.tag}>   
            {
               oneTag
                .filter(d => d.permalink.indexOf(filter) > -1) 
                .map(d => <DocItem key={d} doc={d} />)
            }
        </div>
    );
}