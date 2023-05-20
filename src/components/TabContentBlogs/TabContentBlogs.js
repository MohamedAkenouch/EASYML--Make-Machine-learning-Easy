import React, {useEffect} from 'react';
import styles from './TabContentBlogs.module.css';
import './TabContentBlogs.css';
import TabCardBlog from './TabCardBlog/TabCardBlog';

import { getBlogs } from '../../actions/blogs';

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";


function TabContentBlogs() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getBlogs());
    }, [dispatch]);

    const blogs = useSelector((state) => state.blogs);
    console.log(blogs);

    const blog = {id: "afg14567ggs", title: "linear regression", owner: "ahmed", idOwner: "ahhagf363v"}
    const blogsList = [
    blog,
    blog,
    blog,
    blog,
    ];

    return (
    <div className={styles.TabContent}>
        <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item">
                <a className="nav-link active" id="home-tab" data-toggle="tab" href="#allBlogs" role="tab" aria-controls="home" aria-selected="true">All Blogs</a>
            </li>
        </ul>

        <div class="tab-content">
            <div className="tab-pane active" id="allBlogs" role="tabpanel" aria-labelledby="home-tab">
            <div className={styles.TabContentCard}>
                <div className='row text-center'>
                    <div className='col-sm-2'>
                        ID
                    </div>
                    <div className='col-sm-2'>
                        Title
                    </div>
                    <div className='col-sm-2'>
                        ID Expert
                    </div>
                    <div className='col-sm-2'>
                        Created At
                    </div>
                    <div className='col-sm-4 text-center'>
                    </div>
                </div>
                {
                    blogs.map( (blog) => (
                        <>
                            <div className={styles.TabBorder}></div>
                            <TabCardBlog
                                id={blog._id} 
                                title={blog.title} 
                                idExpert={blog.idExpert}
                            />
                        </>
                    ) )
                } 
            </div>
            </div>
        </div>
    </div>
    );
}


export default TabContentBlogs;
