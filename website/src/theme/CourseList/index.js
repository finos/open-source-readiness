import React from 'react';
import {usePluginData} from '@docusaurus/useGlobalData'
import {useLocation} from '@docusaurus/router';
import PesterDataTable from './PesterDataTable'
import clsx from 'clsx';
import styles from './styles.module.css'
import Link from '@docusaurus/Link';


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

export default function CourseList(props) {

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

	const data = oneTag
                .filter(d => d.permalink.indexOf(filter) > -1) 
                .filter(d => d.permalink.indexOf(location) == -1);
                
	const columns = [
	  {
	    Header: "Code",
	    accessor: "frontMatter.course.code",
	    className: "pester-data-table left",
	    Cell: ({ cell: { value }, row: { original } }) => (
	      <a href={`${original.frontMatter.course.link}`} target="blank" rel="noreferrer noopener">
	        {value}
	      </a>
	    ),	  
	  },
	  {
	    Header: "Title",
	    accessor: "title",
	    className: "pester-data-table left",
	    Cell: ({ cell: { value }, row: { original } }) => (
	      <a href={`${original.permalink}`} target="blank" rel="noreferrer noopener">
	        {value}
	      </a>
	    ),
	  },
	  {
	    Header: "Course Length",
	    accessor: "frontMatter.course.length",
	    className: "pester-data-table left"
	  },
	  {
	    Header: "Tags",
	    accessor: "frontMatter.tags",
	    className: "pester-data-table",
	    Cell: ({ cell: { value }, row: { original } }) => (
	      <div>
	      	{
	      		original.frontMatter.tags
	      			.filter(tag => tag.indexOf("(Role)") > -1)
	      			.map(tag => tag.substring(0, tag.length - 7))
	      			.map(tag => (<Tag label={tag} />))
	      		
	      	}
	      </div>
	    )
	  },
	  {
	    Header: "Price",
	    accessor: "frontMatter.course.cost",
	    className: "pester-data-table left"
	  }
	];
	
	return (
		<PesterDataTable columns={columns} data={data} />
	)

}