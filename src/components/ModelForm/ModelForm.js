import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import axios from 'axios';


import useStyles from './styles';
import { createModel} from '../../actions/Models';

const ModelForm = ({ expertId }) => {
  const [modelData, setModelData] = useState({ name: '',owner: `${expertId}`,type: '', description: '',selectedFile: '', permission: 'pending'});
  const dispatch = useDispatch();
  const classes = useStyles();

  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Choose File');

 



  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    dispatch(createModel(modelData));
    const res = await axios.post('http://localhost:5000/upload', formData);
    

  };
  
  
  const FileChange = e => {
    setModelData({ ...modelData, selectedFile: e.target.files[0].name });
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };


  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{'Add model'}</Typography>
        <TextField className={classes.textField} name="name" variant="outlined" label="Model name" value={modelData.name} onChange={(e) => setModelData({ ...modelData, name: e.target.value })} />
        <TextField className={classes.textField} name="type" variant="outlined" label="Model type" value={modelData.type} onChange={(e) => setModelData({ ...modelData, type: e.target.value })} />
        <TextField className={classes.textField} name="description" variant="outlined" label="Model description" multiline rows={6} value={modelData.description} onChange={(e) => setModelData({ ...modelData, description: e.target.value })} />
        <div className={classes.fileInput}><input type="file" accept=".py"  onChange={FileChange}   /></div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth >Submit</Button>
      </form>
    </Paper>
  );
};

export default ModelForm;
