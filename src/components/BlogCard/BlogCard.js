import React from 'react';
import styles from './BlogCard.module.css';
import { Link } from 'react-router-dom';

const BlogCard = ({title, content, id, image}) => (
  <div className={styles.BlogCard}>
    <div className="card mb-3">
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={image} alt="blog svg" />
        </div>
        <div className="col-md-8">
          <div className="card-body mt-5 border-bottom border-dark">
            <h5 className="card-title">{title}</h5>
            <p className='text-start'>{content ? content.substring(0, 320) + " ..." : ""}</p>
            <p className="card-text"><Link className={styles.linkSignIn} to={`/showBlog/${id}`}> Read Now</Link></p>
          </div>
        </div>
      </div>
    </div>
  </div>
);


export default BlogCard;
