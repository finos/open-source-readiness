import React from 'react';
import styles from './styles.module.css'

const expDays = 2000;

function updateValues(id, state) {
    let dt = new Date();
    dt.setTime(dt.getTime() + (expDays * 24 * 60 * 60 * 1000));
    const cookie = `${id}=${state}; expires=${dt.toUTCString()}; path=/`
    console.log("Updated cookie "+cookie)
    document.cookie = cookie
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

function isChecked(id) {
    const v = getCookie(id);
    console.log("COokie: "+id+" "+v)
    return v == 'true';
} 

function toggle(id) {
    const el = document.getElementById(id)
    const state = el.checked
    if (state) {
        updateValues(id, false)
    } else {
        updateValues(id, true)
    }
    return false;
}

function Checkbox({ label, page, description }) {
    const id = page+"_"+label
    return (
        <div className={styles.checkboxWrapper}>
            <label htmlFor={id} onMouseUp={() => toggle(id)}>
                <input type="checkbox" name={id} id={id} defaultChecked={isChecked(id)} />
                <span class={styles.cbx}>
                    <svg width="25px" height="25px" viewBox="0 0 16 15">
                        <polyline points="1 6.29411765 4.5 10 11 1"></polyline>
                    </svg>
                </span>
                <span className={styles.checkbox}>{label} </span> &nbsp;
                <span className={styles.description}>{description}</span>
            </label>
        </div>
    )
}


export default ({ checklist, title }) => {
    return <div className={styles.boxout}>
        <div className={styles.header}>
            <img className={styles.icon} src="/img/bok/maturity/checklist.png" alt="Maturity Checklist" />
            <h3> Maturity Checklist </h3>
        </div>
        <form id="article-checklist-form" name="article-checklist" className={styles.boxlist}>
            {
                checklist.map(item => Checkbox({ label: item.title, description: item.description, page: title}))
            }
        </form>
        <div className={styles.contents}>
        </div>
    </div>
}