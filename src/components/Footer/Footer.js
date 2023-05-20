import React from 'react';
import styles from './Footer.module.css';
import easyMLLogo from '../../assets/images/easyMLLogo.png';
import { Link } from 'react-router-dom';

const Footer = () => (
  <div className={styles.Footer}>
    <footer className="page-footer font-small blue pt-4 container-md mb-0 text-center">
      <h6 className='text-uppercase mb-4'>UPSKILL FOR A BETTER</h6>
      <div className={styles.footerScreen}>
        <div className="row">
          <div className="col-md-4 mt-md-0 mt-3">
            <img className={styles.easyLogo} src={easyMLLogo} alt="Easy ML Logo"/>
            <p>The best tool to exploit machine learning algorithms</p>
          </div>
          <hr className="clearfix w-100 d-md-none pb-3" />
          <div className="col-md-4 mb-md-0 mb-3">
            <h5 className="text-uppercase">Quicklinks</h5>
            <ul className="list-unstyled">
              <li className={styles.quickLinks}>
                <Link className={styles.quickLink} to='/'>Home</Link>
              </li>
              <li className={styles.quickLinks}>
                <Link className={styles.quickLink} to='/models'>Models</Link>
              </li>
              <li className={styles.quickLinks}>
                <Link className={styles.quickLink} to='/experts'>Experts</Link>
              </li>
              <li className={styles.quickLinks}>
                <Link className={styles.quickLink} to='/blogs'>Blogs</Link>
              </li>
              <li className={styles.quickLinks}>
                <Link className={styles.quickLink} to='/contact-us'>Contact Us</Link>
              </li>
              <li className={styles.quickLinks}>
                <Link className={styles.quickLink} to="/about-us">About Us</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4 mb-md-0 mb-3">
            <div className={styles.buttonContactUs}>
              <Link className={styles.quickLinkC} to='/contact-us'>Contact Us</Link>
            </div>
            <ul className="list-unstyled">
              <li>(+212) 6254. 254. 254 </li>
              <li>Info@EasyML.com </li>
              <li>lmaarif 75 Casablanca Mohamed Ali </li>
              <li>- Mostapha hilal - oussama hamam</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.displayNone}>
        <div className="row">
          <div className="col-6 mb-md-0 mb-3">
            <h5 className="text-uppercase">Quicklinks</h5>
            <ul className="list-unstyled">
            <li className={styles.quickLinks}>
                <Link className={styles.quickLink} to='/'>Home</Link>
              </li>
              <li className={styles.quickLinks}>
                <Link className={styles.quickLink} to='/models'>Models</Link>
              </li>
              <li className={styles.quickLinks}>
                <Link className={styles.quickLink} to='/experts'>Experts</Link>
              </li>
              <li className={styles.quickLinks}>
                <Link className={styles.quickLink} to='/blogs'>Blogs</Link>
              </li>
              <li className={styles.quickLinks}>
                <Link className={styles.quickLink} to='/contact-us'>Contact Us</Link>
              </li>
              <li className={styles.quickLinks}>
                <Link className={styles.quickLink} to="/about-us">About Us</Link>
              </li>
            </ul>
          </div>
          <div className="col-6 mb-md-0 mb-3">
            <div className={styles.buttonContactUs}>
              <Link className={styles.quickLinkC} to='/contact-us'>Contact Us</Link>
            </div>
            <ul className="list-unstyled">
              <li>(+212) 6254. 254. 254 </li>
              <li>Info@EasyML.com </li>
              <li>lmaarif 75 Casablanca Mohamed Ali </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='row mb-1 justify-content-center'>
        <hr className={styles.separateLine} />
      </div>
    </footer>
  </div>
);


export default Footer;
