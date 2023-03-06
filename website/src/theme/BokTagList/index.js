import React from 'react';
import {usePluginData} from '@docusaurus/useGlobalData'
import Link from '@docusaurus/Link';
import {useLocation} from '@docusaurus/router';
import clsx from 'clsx';
import styles from './styles.module.css'

function Tag({permalink, label}) {
  return (
    <Link
      href={permalink}
      className={clsx(
        styles.tag,
        styles.tagRegular,
      )}>
      {label}
    </Link>
  );
}

function DocItem({doc}) {
    return (
      <article className="margin-vert--lg">
        <Link to={doc.permalink}>
          <h3>{doc.title}</h3>
        </Link>
        {doc.description && <p>{doc.description}</p>}
        {doc.tags.map(t => <Tag permalink={t.permalink} label={t.label} />)}
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
    const filter = props.filter ? '/'+props.filter+'/' : ''
    const location = useLocation().pathname;

    oneTag.sort((a, b) => a.order - b.order);

    return (
        <div class="bok-tag-list" key={props.tag}>   
            {
               oneTag
                .filter(d => d.permalink.indexOf(filter) > -1) 
                .filter(d => d.permalink.indexOf(location) == -1)
                .map(d => <DocItem key={d} doc={d} />)
            }
        </div>
    );
}