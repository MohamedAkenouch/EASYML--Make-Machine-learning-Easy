import React, {useEffect} from 'react';
import styles from './TabCardModel.module.css';
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import path from 'path';
import axios from "axios";

import { getModels, deleteModel } from '../../../actions/Models';
var fileDownload = require('js-file-download');




function TabCardModel({id, name, type, owner, permission, selectedFile}) {
    

    const dispatch = useDispatch();
    const download = (e) => {
     
        axios({
          url:"//easyml-app.herokuapp.com/downloadmodell/"+selectedFile,
          method:"GET",
          responseType:"blob"
        }).then((res)=>{
          fileDownload(res.data,selectedFile)
        })
      }
    const deleteM = () => {
        dispatch(deleteModel(id));
    }

    return (
        <div className={styles.TabCardModel}>
            <div className='row text-center'>
                <div className='col-sm-2'>
                    <pre>{id}</pre>
                </div>
                <div className='col-sm-2'>
                    <pre>{name} / <strong>{type}</strong></pre>
                </div>
                <div className='col-sm-2'>
                    <pre>{owner} / <strong>{permission}</strong></pre>
                </div>
                <div className='col-sm-2'>
                    <pre>20/03/2021</pre>
                </div>
                <div className='col-sm-4'>
                    <button onClick={ () => download() } className={styles.viewFile} >Download</button>
                    <button onDoubleClick={ () => deleteM() } className={styles.deleteModel}>Delete</button>
                </div>
            </div>
        </div>
    );
}


export default TabCardModel;
