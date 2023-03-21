import React from 'react';
import styles from './styles.module.css'


export default ({children, image, link, title}) => {
    return <div className={styles.boxout}>
    	<div className={styles.header}>
	        <img className={styles.icon} src={image} alt={title} />
    		<h3> {title} </h3>
    	</div>
        <div className={styles.contents}>
            {children}
        </div>
        <div className={styles.footer}> 
        { 
        	(link) ? <p><a href={link} className={styles.link}>Role Details</a></p> : ""
        }
        </div>
        
    </div>
}