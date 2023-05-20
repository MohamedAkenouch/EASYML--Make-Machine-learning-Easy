import { Link } from 'react-router-dom';
import React from 'react';
import styles from './ModelExpertCard.module.css';

const ModelExpertCard = (props) => (
  <div>
    <Link className={styles.Link} to={`/models/${props.link}`}>
      <div className={styles.ModelExpertCard}>
          <h4><span className={styles.modelName}>{props.name}</span> </h4>
      </div>
    </Link>
  </div>
);


export default ModelExpertCard;
