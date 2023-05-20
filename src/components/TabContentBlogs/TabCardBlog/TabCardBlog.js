import React from 'react';
import styles from './TabCardBlog.module.css';

import { deleteBlog } from '../../../actions/blogs';

import { useDispatch } from "react-redux";

function TabCardBlog({id, title, owner, idExpert}) {

    const dispatch = useDispatch();
    const deleteB = () => {
        dispatch(deleteBlog(id));
    }

    return (
        <div className={styles.TabCardBlog}>
            <div className='row text-center'>
                <div className='col-sm-2'>
                    <pre>{id}</pre>
                </div>
                <div className='col-sm-2'>
                   <pre> {title}</pre>
                </div>
                {/* <div className='col'>
                    {owner}
                </div> */}
                <div className='col-sm-2'>
                    <pre>{idExpert}</pre>
                </div>
                <div className='col-sm-2'>
                    <pre>20/03/2021</pre>
                </div>
                <div className='col-sm-4'>
                    <button onDoubleClick={ () => deleteB()} className={styles.deleteBlog}>Delete</button>
                </div>
            </div>
        </div>
    );
}


export default TabCardBlog;
