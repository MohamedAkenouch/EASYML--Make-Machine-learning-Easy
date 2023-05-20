import React from 'react';
import styles from './IconText.module.css';

function IconText(props) {
  return (
    <div className={props.column}>
        <img className={styles.imgIcon} src={props.icon} alt={props.title}/>
        <h3 className={styles.titleIcon}>{props.title}</h3>
        <p className={styles.textIcon}>{props.text}</p>
    </div>
  )
}

export default IconText;