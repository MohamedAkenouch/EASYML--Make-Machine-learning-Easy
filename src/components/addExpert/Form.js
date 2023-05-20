import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import useStyles from './styles';
import { createExpert, updateExpert } from '../../actions/Experts';
import { createUser } from '../../actions/auth';
import {  useLocation,useNavigate } from 'react-router-dom';


const Form = () => {
  const [expertData, setExpertData] = useState({ name: '', description: '',selectedFile: '',idUser: '' });
  const [userData, setUserData] = useState({ name: '', email: '',password: '' });
  
  const dispatch = useDispatch();
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();


  const handleSubmit = async (e) => {
      e.preventDefault();
      dispatch(createUser(userData));

      console.log(expertData);
      dispatch(createExpert(expertData));
  };

  return (
    <div className='container-md'>
      <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{'Add Expert'}</Typography>
        <TextField name="name" variant="outlined" label="Name" className={`${classes.input}`} value={expertData.name} onChange={(e) =>{setExpertData({ ...expertData, name: e.target.value }); setUserData({ ...userData, name: e.target.value });}  } />
        <TextField name="desciption" variant="outlined" label="Description" className={`${classes.input}`}  multiline rows={10} value={expertData.description} onChange={(e) => setExpertData({ ...expertData, description: e.target.value })} />
        <TextField name="email" variant="outlined" label="Email" className={`${classes.input}`}  multiline rows={1} value={userData.email} onChange={(e) => {setUserData({ ...userData, email: e.target.value }) ;setExpertData({ ...expertData, idUser: e.target.value });}} />
        <TextField name="password" variant="outlined" label="Password" className={`${classes.input}`} multiline rows={1} value={userData.password} onChange={(e) => setUserData({ ...userData, password: e.target.value })} />
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setExpertData({ ...expertData, selectedFile: base64 })} /></div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
      </form>
    </Paper>
    </div>
    
  );
};

export default Form;
