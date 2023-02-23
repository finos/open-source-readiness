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
  

export default function BokTagList({tag}) {
    const allTags = usePluginData('category-listing');
    const oneTag = allTags[tag];

    return (
        <div id="soo">   
            {
               oneTag.map(d => <DocItem doc={d} />)
            }
        </div>
    );
}