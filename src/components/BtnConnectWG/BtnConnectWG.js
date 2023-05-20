import React from 'react';
import styles from './BtnConnectWG.module.css';

const BtnConnectWG = (props) => (
  <div className={styles.BtnConnectWG}>
    <button className={styles.btnConnectWG}><a href={props.href} >{props.value}</a></button>
  </div>
);

export default BtnConnectWG;
