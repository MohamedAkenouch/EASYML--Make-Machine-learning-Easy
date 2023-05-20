import React, {useEffect} from 'react';
import styles from './TabContentModels.module.css';
import './TabContentModels.css';
import TabCardModel from './TabCardModel/TabCardModel';
import TabCardModelPending from './TabCardModelPending/TabCardModelPending';
import TabCardModelCanceled from './TabCardModelCanceled/TabCardModelCanceled';
import ModelFormAdmin from '../../components/ModelFormAdmin/ModelForm'

import { getModels } from '../../actions/Models';

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";


function TabContentModels() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getModels());
    }, [dispatch]);

    const models = useSelector((state) => state.Models);
    console.log(models);

    
    return (
        <div className={styles.TabContentModels}>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#allModels" role="tab" aria-controls="home" aria-selected="true">All Models</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#pending" role="tab" aria-controls="profile" aria-selected="false">Pending</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="messages-tab" data-toggle="tab" href="#cancelled" role="tab" aria-controls="messages" aria-selected="false">Cancelled</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="messages-tab" data-toggle="tab" href="#addModel" role="tab" aria-controls="messages" aria-selected="false">Add Model</a>
                </li>
            </ul>

            <div class="tab-content">
                <div className="tab-pane active" id="allModels" role="tabpanel" aria-labelledby="home-tab">
                    <div className={styles.TabContentCard}>
                        <div className='row text-center'>
                            <div className='col-sm-2'>
                                ID
                            </div>
                            <div className='col-sm-2'>
                                Name / <strong>Type</strong>
                            </div>
                            <div className='col-sm-4'>
                                Owner / <strong>Permission</strong>
                            </div>
                            <div className='col-sm-2'>
                                Created At
                            </div>
                            <div className='col-sm-2'> 
                            </div>
                        </div>
                        {
                            models.filter(model => model.permission==='confirmed' || model.permission==='admin').map( (model) => (
                                <>
                                    <div className={styles.TabBorder}></div>
                                    <TabCardModel 
                                        id={model._id} 
                                        name={model.name} 
                                        type={model.type} 
                                        owner={model.owner} 
                                        permission={model.permission}
                                        selectedFile={model.selectedFile}
                                    />
                                </>
                            ) )
                        }
                        
                    </div>
                </div>
                <div className="tab-pane" id="pending" role="tabpanel" aria-labelledby="profile-tab">
                    <div className={styles.TabContentCard}>
                        <div className='row text-center'>
                            <div className='col-sm-2'>
                                ID
                            </div>
                            <div className='col-sm-2'>
                                Name / <strong>Type</strong>
                            </div>
                            <div className='col-sm-2'>
                                Owner / <strong>Permission</strong>
                            </div>
                            <div className='col-sm-2'>
                                Created At
                            </div>
                            <div className='col-sm-2'> 
                            </div>
                            <div className='col-sm-2'>
                            </div>
                        </div>
                        {
                            models.filter(model => model.permission==='pending').map( (model) => (
                                <>
                                    <div className={styles.TabBorder}></div>
                                    <TabCardModelPending 
                                        id={model._id} 
                                        name={model.name} 
                                        type={model.type} 
                                        owner={model.owner} 
                                        permission={model.permission}
                                        selectedFile={model.selectedFile}
                                    />
                                </>
                            ) )
                        }
                        
                    </div>
                </div>
                <div className="tab-pane" id="cancelled" role="tabpanel" aria-labelledby="messages-tab">
                    <div className={styles.TabContentCard}>
                        <div className='row text-center'>
                            <div className='col-sm-2'>
                                ID
                            </div>
                            <div className='col-sm-2'>
                                Name / <strong>Type</strong>
                            </div>
                            <div className='col-sm-2'>
                                Owner / <strong>Permission</strong>
                            </div>
                            <div className='col-sm-2'>
                                Created At
                            </div>
                            <div className='col-sm-2'> 
                            </div>
                            <div className='col-sm-2'>
                            </div>
                        </div>
                        {
                            models.filter(model => model.permission==='cancelled' ).map( (model) => (
                                <>
                                    <div className={styles.TabBorder}></div>
                                    <TabCardModelCanceled 
                                        id={model._id} 
                                        name={model.name} 
                                        type={model.type} 
                                        owner={model.owner} 
                                        permission={model.permission}
                                        selectedFile={model.selectedFile}
                                    />
                                </>
                            ) )
                        }
                        
                    </div>
                </div>
                <div className="tab-pane" id="addModel" role="tabpanel" aria-labelledby="messages-tab">
                    <ModelFormAdmin />
                </div>
            </div>
        </div>
    );
}


export default TabContentModels;
