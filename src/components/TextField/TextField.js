import React from 'react';
import styles from './TextField.module.css';

const TextField = (props) => (
  <div className={styles.TextField}>
    <input className={styles.TextFieldInput} type={props.type} id={props.id} placeholder={props.hint} required />
  </div>
);


export default TextField;
