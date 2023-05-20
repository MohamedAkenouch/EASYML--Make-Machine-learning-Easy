import React from 'react';
import styles from './EasyMLLogo.module.css';
import easyMLLogo from '../../assets/images/easyMLLogo.png';

const EasyMLLogo = () => (
  <div className={styles.EasyMLLogo}>
    <div className='container text-center'>
      <h1 className={styles.easyMLTitle}>Best Resources for Machine Learning</h1>
      <img className={styles.easyMLImg} src={easyMLLogo} alt="EasyML Logo"/>
    </div>
  </div>
);

EasyMLLogo.propTypes = {};

EasyMLLogo.defaultProps = {};

export default EasyMLLogo;
