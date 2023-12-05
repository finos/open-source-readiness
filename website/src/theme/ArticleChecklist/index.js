import React from 'react';
import styles from './styles.module.css'


function storeValues(title) {
    const theForm = document.forms[title];

    const values = new FormData(theForm);

    const cookie = title + JSON.stringify({
        title: title,
        theForm: values
    })

    document.cookie = cookie
}

function Checkbox({ label, description, title }) {
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


export default ({ checklist, title }) => {
    return <div className={styles.boxout}>
        <div className={styles.header}>
            <img className={styles.icon} src="/img/bok/maturity/checklist.png" alt="Maturity Checklist" />
            <h3 id="maturity-checklist"> Maturity Checklist </h3>
        </div>
        <form name={title} className={styles.boxlist}>
            {
                checklist.map(item => Checkbox({ label: item.title, description: item.description, title: title }))
            }
        </form>
        <div className={styles.contents}>
        </div>
    </div>
}