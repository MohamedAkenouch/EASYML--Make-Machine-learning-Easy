import React from 'react';
import styles from './BtnViewMore.module.css';

const BtnViewMore = (props) => (
  <div className={styles.BtnViewMore}>
    <a href={props.link}>View more</a>
  </div>
);


export default BtnViewMore;
