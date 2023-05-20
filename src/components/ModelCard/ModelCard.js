import React from 'react';
import styles from './ModelCard.module.css';

const ModelCard = (props) => (
  <div className={styles.ModelCard}>
    <img src={props.image} alt="model background"/>
    <h4>{props.title}</h4>
  </div>
);


export default ModelCard;
