import React from 'react';
import styles from './TabCardModelCanceled.module.css';
import { Link } from 'react-router-dom';
import { updateModel } from '../../../actions/Models';

import axios from "axios";
import { useDispatch } from "react-redux";
var fileDownload = require('js-file-download');



function TabCardModelCanceled({id, name, type, owner, permission, selectedFile}) {
    const dispatch = useDispatch();
    const pendM = () => {
        let newModel={}
        newModel['_id']=id
        newModel['name']=name
        newModel['type']=type
        newModel['owner']=owner
        newModel['permission']='pending'
        dispatch(updateModel(id,newModel));
    }

    const download = (e) => {
     
        axios({
          url:"//easyml-app.herokuapp.com/downloadmodell/"+selectedFile,
          method:"GET",
          responseType:"blob"
        }).then((res)=>{
          fileDownload(res.data,selectedFile)
        })
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
                    <button onDoubleClick={ () => pendM() } className={styles.pendModel}>Pend</button>
                </div>
            </div>
        </div>
    );
}


export default TabCardModelCanceled;
