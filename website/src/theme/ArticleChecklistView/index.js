import React from 'react';
import styles from './styles.module.css'

function CompletionBox({ label, description, done }) {
    return (
        <div class={styles.checkboxWrapper}>
            <label for={label}>
                <input type="checkbox" id={label} />
                <span class={styles.cbx}>
                    <svg width="25px" height="25px" viewBox="0 0 16 15">
                        <polyline points="1 6.29411765 4.5 10 11 1"></polyline>
                    </svg>
                </span>
                <span class={styles.checkbox}>{label} </span> &nbsp;
                <span class={styles.description}>{description}</span>
            </label>
        </div>
    )
}


export default ({ checklist, title, url }) => {
    return <div className={styles.boxout}>
        <h3><a href={url}>{title}</a></h3>
            {
                checklist.map(item => CompletionBox({ label: item.title, description: item.description, title: title }))
            }
        </div>
}