import React , {useEffect} from 'react';
import HeaderLite from '../components/HeaderLite/HeaderLite';
import ImageHeaderLite from '../components/ImageHeaderLite/ImageHeaderLite';
import bgModels from '../assets/images/bg-models.svg';
import styles from '../assets/styles/Models.module.css';
import Footer from '../components/Footer/Footer';
import DivHeightAnimation from '../components/DivHeightAnimation/DivHeightAnimation';
import ModelExpertCard from '../components/ModelExpertCard/ModelExpertCard';
import { getModels } from '../actions/Models';

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function Models() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getModels());
    }, [dispatch]);
    const ourModels = useSelector((state) =>(state.Models.filter(model => model.permission==='admin') ));
    const expertsModels = useSelector((state) =>(state.Models.filter(model => model.permission==='confirmed') ));
    console.log(ourModels)
    console.log(expertsModels)
    return (
        <>
            <HeaderLite />
            <ImageHeaderLite image={bgModels} title="Models"/>
            <div className='container-md p-2'> 
                <DivHeightAnimation />
            </div>
            <div className='container-md p-2'>
                <div className={styles.ourModels}>
                    <h2 className='mb-5'>Our Models</h2>
                    <div className='row'>
                        <div className='col-sm-1'></div>
                        {
                            ourModels.map(
                                (model) => (
                                    <div className='col-sm'>
                                        <ModelExpertCard link={model._id} name={model.name}/>
                                    </div>
                                )
                                )
                            }
                        <div className='col-sm-1'></div>
                    </div>
                </div>
            </div>
            <div className='container-md p-2'>
                <div className={styles.expertsModels}>
                    <h3 className='mb-5'>Experts Models</h3>
                    <div className='row'>
                        {
                            expertsModels.map(
                                (model) => (
                                    <div className='col-sm'>
                                        <ModelExpertCard link={model._id} name={model.name}/>
                                    </div>
                                )
                            )
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Models