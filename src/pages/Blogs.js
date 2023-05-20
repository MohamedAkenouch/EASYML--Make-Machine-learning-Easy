import React , {useEffect} from 'react';
import Button from "../components/Button"
import Footer from "../components/Footer/Footer";
import ImageHeaderLite from '../components/ImageHeaderLite/ImageHeaderLite';
import HeaderLite from '../components/HeaderLite/HeaderLite';
import BlogCard  from "../components/BlogCard/BlogCard";
import bgBlogs from '../assets/images/bg-blogs.svg';
import styles from '../assets/styles/Blogs.module.css';

import { getBlogs } from '../actions/blogs';

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Blogs() {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(getBlogs());
  }, [dispatch]);
  
  const blogs = useSelector((state) => state.blogs);
  console.log(blogs);
  return (
    <>
    <HeaderLite />
    <ImageHeaderLite image={bgBlogs} title="Blogs"/>
    
    <div className="blogJ">
          <div  style={{padding:"12px"}} >
            <img src="/images/titre.png" width="100%" height="100%" alt='titre'/>
          </div>
          <div style={{padding: '12px'}}>
            <h1 style={{color: "#676767", fontWeight: "700", fontSize: "40px"}}>Disease Detection with Machine Learning</h1>
            <p style={{color:"white"}}>There are many concerns about increasing reliance on technology. Nevertheless, as a society, we continue to push technology to new heights. From how we order food to how we provide healthcare, machine learning, …</p>
          </div>
    </div>

    <div className={styles.blogs + " container-md mt-0 p-0"}>     
          {
              blogs.map(
                  (blog) => (
                      <div key={blog._id} className="text-center">
                          <BlogCard image={blog.selectedFile} content={blog.content} title={blog.title} id={blog._id}/>
                      </div>
                  )
              )
          }
    </div>

    <div style={{margin: "0 auto" , width: "0%"}}>
      <Button color="rgba(196, 110, 184)" title='More'  />
    </div>

    <>
      <Footer />
    </>
    </>
  )
}

export default Blogs

