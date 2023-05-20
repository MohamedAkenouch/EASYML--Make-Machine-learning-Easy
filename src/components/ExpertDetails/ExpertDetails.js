import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import moment from 'moment';
import { useDispatch , useSelector} from 'react-redux';
import { Grid, CircularProgress, Paper } from '@material-ui/core';

import Model from './ExpertModel/ExpertModel';
import ModelInStudy from './ExpertModelInStudy/ExpertModelInStudy';
import ModelsInStudy from './ModelsInStudy';
import ModelForm from '../ModelForm/ModelForm';
import ModelFormAdmin from '../ModelFormAdmin/ModelForm';
import useStyles from './styles';
import HeaderLite from '../HeaderLite/HeaderLite';
import Footer from "../Footer/Footer";
import styles from './ExpertDetails.module.css';
import FormAddBlog from '../FormAddBlog/FormAddBlog';
import UnderLineText from '../../components/UnderLineText/UnderLineText'

const ExpertDetails = ({currentId,setCurrentId}) => {
    const [user , setUser] = useState(JSON.parse(localStorage.getItem('profile')))

  const { id } = useParams();
  const [expertData, setExpertData] = useState({ name: '', description: '',selectedFile: '' });
  const expert = useSelector((state) => (id ? state.Experts.find((message) => message._id === id) : null));
  const dispatch = useDispatch();

  useEffect(() => {
    if (expert) setExpertData(expert);
  }, [expert]);

  const modeles= useSelector((state) => state.Models);

  const classes = useStyles();



  return (
    <>
      <HeaderLite />

      <div className='container'>
        <Paper className={classes.paper}>
          <div className='row text-center mb-2'>
            <div className='col-6'>
              <img className={styles.imgExpert} src={expertData.selectedFile} alt='expert'/>
            </div>
            <div className='col-4 mt-2'>
              <h1>{expertData.name}</h1>
            </div>
            
          </div>
          <div className='row mt-2'>
            <div className='col'>
              <p className={styles.discExpert}>{expertData.description}</p>
            </div>
          </div>
        </Paper>
      </div>

      <div className={styles.myModels + ' container-md'}>

        <div className='row justify-content-center'>
          {
            (user!== undefined && user!==null)?
            (user.result!== undefined && user.result!== null)?
            ((user.result.email===expert.idUser)?
            <>

              <UnderLineText text="My Models"/>
              {modeles.filter(model => model.permission ==='confirmed' && model.owner === id).map((model) => (
                <div className='col'>
                  <Model model={model} />
                </div>
              ))}
            </>
          :null)
          :null
          :null
          }
        </div>
      </div>

      {
        (user!== undefined && user!==null)?
        (user.result!== undefined && user.result!== null)?
        (user.result.email===expertData.idUser?
        <>
          <div className={styles.ModelForm}>
            <ModelForm expertId={id} />
          </div>

          <div className={styles.ModelForm}>
            <FormAddBlog id={id} />
          </div>

          <ModelsInStudy modeles={modeles} id={id}/>
        </>
        :null)
        :null
        :null
      }
      <>
        <Footer />
      </>
    </>
    
  );
};

export default ExpertDetails;
