import React from 'react';
import styles from './TabCardExpert.module.css';

import { deleteExpert } from '../../../actions/Experts';

import { useDispatch } from "react-redux";

function TabCardExpert({id, name, idUser , selectedFile, profession}) {

    const dispatch = useDispatch();
    const deleteE = () => {
        dispatch(deleteExpert(id))
    }

    return (
        <div className={styles.TabCardExpert}>
            <div className='row text-center'>
                <div className='col-sm-2'>
                    <pre><img src={selectedFile} className={styles.expertProfile} alt="expert"/></pre>
                </div>
                <div className='col-sm-3'>
                    <pre>{id}</pre>
                </div>
                <div className='col-sm-3'>
                    <pre>{name} / <strong>{idUser}</strong></pre>
                </div>
                <div className='col-sm-2'>
                    <pre>20/03/2021</pre>
                </div>
                <div className='col-sm-2'>
                    <button onDoubleClick={ () => deleteE()} className={styles.deleteExpert}>Delete</button>
                </div>
            </div>
        </div>
    );
}


export default TabCardExpert;
