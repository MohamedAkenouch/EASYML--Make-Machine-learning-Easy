import React from 'react';
import styles from './UnderLineText.module.css';

const UnderLineText = (props) => (
  <div className='text-center'>
    <div className={styles.UnderLineText}>
        <h3> {props.text} </h3>
    </div>
  </div>
);


export default UnderLineText;
