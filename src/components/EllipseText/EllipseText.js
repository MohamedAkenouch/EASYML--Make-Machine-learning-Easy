import React from 'react';
import styles from './EllipseText.module.css';

function EllipseText(props) {
  return (
    <div className={props.clName}>
        <img src={props.ellipse} alt='Eclipse'/>
        <h2 className={styles.numberWhyEML}>{props.rang}</h2>
        <p className={styles.numberDisc}>{props.text}</p>
    </div>
  );
}

export default EllipseText;
