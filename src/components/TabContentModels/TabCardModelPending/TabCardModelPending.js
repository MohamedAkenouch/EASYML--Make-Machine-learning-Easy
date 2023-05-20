import React from 'react';
import { useDispatch } from "react-redux";
import styles from './TabCardModelPending.module.css';
import { Link } from 'react-router-dom';
import { updateModel } from '../../../actions/Models';
import path from 'path';
import axios from "axios";

var fileDownload = require('js-file-download');



function TabCardModelPending({id, name, type, owner, permission, selectedFile}) {
    const dispatch = useDispatch();
    const __dirname = path.resolve();

    
    const acceptM = () => {
        let newModel={}
        newModel['_id']=id
        newModel['name']=name
        newModel['type']=type
        newModel['owner']=owner
        newModel['permission']='confirmed'
        dispatch(updateModel(id,newModel));
    }
    const denyM = () => {
        let newModel={}
        newModel['_id']=id
        newModel['name']=name
        newModel['type']=type
        newModel['owner']=owner
        newModel['permission']='cancelled'
        dispatch(updateModel(id,newModel));
    }
    let dir = __dirname+"\\..\\MachineLearning\\models\\"+selectedFile;
    console.log(__dirname)
    console.log(dir)

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
                <div className='col-sm-2 pt-4'>
                    <button onClick={ () => download() } className={styles.viewFile} >Download</button>
                </div>
                <div className='col-sm-2'>
                    <button onDoubleClick={ () => acceptM() } className={styles.accepteModel}>Accepte</button> <br />
                    <button onDoubleClick={ () => denyM() } className={styles.denyModel}>Deny</button>
                </div>
            </div>
        </div>
    );
}


export default TabCardModelPending;
