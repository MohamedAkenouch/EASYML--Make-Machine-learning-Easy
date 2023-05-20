import React from 'react';
import styles from './TabCardUser.module.css';

import { deleteUser } from '../../../actions/auth';

import { useDispatch } from "react-redux";


function TabCardUser({id, name, email, selectedFile}) {

    const dispatch = useDispatch();
    const deleteU = () => {
        dispatch(deleteUser(id));
    }

    return (
        <div className={styles.TabCardUser}>
            <div className='row text-center'>
                <div className='col-sm-2'>
                    <img src={selectedFile} className={styles.userProfile} alt="user"/>
                </div>
                <div className='col-sm-2'>
                    <pre>{id}</pre>
                </div>
                <div className='col-sm-2'>
                    <pre>{name}</pre>
                </div>
                <div className='col-sm-2'>
                    <pre>{email}</pre>
                </div>
                <div className='col-sm-2'>
                    <pre>20/03/2021</pre>
                </div>
                <div className='col-sm-2'>
                    <button onDoubleClick={ () => deleteU()} className={styles.deleteUser}>Delete</button>
                </div>
            </div>
        </div>
    );
}


export default TabCardUser;
