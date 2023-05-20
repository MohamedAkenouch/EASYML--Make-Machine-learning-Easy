import React, {useEffect,  useState} from 'react';
import styles from './TabContentExperts.module.css';
import './TabContentExperts.css';
import TabCardExpert from './TabCardExpert/TabCardExpert';
import Form from "../../components/addExpert/Form";

import { getExperts } from '../../actions/Experts';

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function TabContentExperts() {

    const [user , setUser] = useState(JSON.parse(localStorage.getItem('profile')))

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getExperts());
    }, [dispatch]);

    const experts = useSelector((state) => state.Experts);
    console.log(experts);

    const expert = {id: "afg14567ggs", name: "akenouch mohamed", email: "ahmed@gmail.com", selectedFile: "ertyusbsbb", profession: "Data Scientist"}
    const expertsList = [
    expert,
    expert,
    expert,
    expert,
    ];

    return (
    <div className={styles.TabContent}>
        <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item">
                <a className="nav-link active" id="home-tab" data-toggle="tab" href="#allExperts" role="tab" aria-controls="home" aria-selected="true">All Experts</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" id="home-tab" data-toggle="tab" href="#addExpert" role="tab" aria-controls="home" aria-selected="true">Add Expert</a>
            </li>
        </ul>

        <div class="tab-content">
            <div className="tab-pane active" id="allExperts" role="tabpanel" aria-labelledby="home-tab">
            <div className={styles.TabContentCard}>
                <div className='row text-center'>
                    <div className='col-sm-2'>
                        Profile
                    </div>
                    <div className='col-sm-3'>
                        ID
                    </div>
                    <div className='col-sm-3'>
                        Name / <strong>Email</strong>
                    </div>
                    <div className='col-sm-2'>
                        Created At
                    </div>
                    <div className='col-sm-2'>
                    </div>
                </div>
                {
                    experts.map( (expert) => (
                        <>
                            <div className={styles.TabBorder}></div>
                            <TabCardExpert 
                                id={expert._id} 
                                name={expert.name}
                                idUser={expert.idUser} 
                                profession={expert.profession} 
                                selectedFile={expert.selectedFile}
                            />
                        </>
                    ) )
                } 
            </div>
            </div>
            <div className="tab-pane active" id="addExpert" role="tabpanel" aria-labelledby="home-tab">
                { (user!== undefined && user!==null)?
                    user.result.email==='EasyMLadmin@gmail.com'?
                    <Form />
                        :null
                    :null
                }
            </div>
        </div>
    </div>
    );
}

export default TabContentExperts;
