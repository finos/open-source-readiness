import React from 'react';
import styles from './styles.module.css'
import Link from '@docusaurus/Link';

export default ({course}) => {
	const {publisher, code, length, certification, cost, link} = course;
    return <div className={styles.course}>
		<ul>	
			<li>Publisher: {publisher}</li>
			<li>Code: {code}</li>
			<li>Length: {length}</li>
			<li>Certification: {certification}</li>
			<li>Cost: {cost}</li>
			<li><Link href={link}>Course Catalog Entry</Link></li>
		</ul>
    </div>
}