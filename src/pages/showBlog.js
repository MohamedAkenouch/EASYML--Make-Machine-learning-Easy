import React, { useState, useEffect } from 'react'
import { useSelector} from 'react-redux';
import ShowBogs from './../components/blogDetails/showBogs';
import BlogTitles from '../components/blogDetails/blogTitles';
import { useParams } from "react-router-dom";
import UnderLineText from "../components/UnderLineText/UnderLineText";
import styles from '../assets/styles/Home.module.css';
import BlogCard  from "../components/BlogCard/BlogCard";
import BtnViewMore from "../components/BtnViewMore/BtnViewMore";
import { CircularProgress } from "@material-ui/core";
import Footer from "../components/Footer/Footer";
import HeaderLite from '../components/HeaderLite/HeaderLite';

function ShowBlog () {
    const { id } = useParams();
    const blog = useSelector((state) => (id ? state.blogs.find((message) => message._id === id) : null));
    const blogs = useSelector((state) => (state.blogs));
    const [blogData, setBlogData] = useState({ title: '', content: '',selectedFile: '' });
    useEffect(() => {
        if (blog) setBlogData(blog);
      }, [blog]);


    return (
        <>
        <div>
            <HeaderLite />
            <BlogTitles title={blogData.title} img={blogData.selectedFile}/>
            <ShowBogs texts={blogData.content}/>
            <UnderLineText text="Blogs"/>
            {
                !blogs.length ? <div className="text-center mt-1"><CircularProgress /></div> :
                    <div className={styles.blogs}>
                        <div className="container-md">
                            <div className="mt-4">  
                                {
                                    blogs.map(
                                        (blog) => (
                                            <div key={blog._id} className="text-center">
                                                <BlogCard 
                                                    image={blog.selectedFile} 
                                                    title={blog.title}
                                                    content={blog.content}
                                                    id={blog._id} 
                                                />
                                            </div>
                                        )
                                    )
                                }
                            </div>
                        </div>
                    <BtnViewMore link="/blogs"/> 
                </div>
            }
        </div>
        <Footer />
        </>
      
    )
  

};
export default ShowBlog;