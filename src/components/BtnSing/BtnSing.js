import React from 'react';
import styles from './BtnSing.module.css';

const BtnSing = (props) => (
  <button className={styles.BtnSing} type="submit">{props.name}</button>
);

export default BtnSing;
