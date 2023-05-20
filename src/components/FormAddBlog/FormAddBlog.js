import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';

import useStyles from './styles';
import { createBlog } from "../../actions/blogs";
import { useSelector } from "react-redux";

const FormAddBlog = ({id}) => {
    const blog = useSelector((state) => state.blogs);
    const [blogData, setBlogData] = useState({ title: '', content: '', selectedFile: '',idExpert: ''});


    const classes = useStyles();
    const dispatch = useDispatch();
    console.log(blogData)

    useEffect(() => {
        if(blog){
            setBlogData(blog);
            setBlogData({...blogData, idExpert: id});
        }
    }, [ blog])

    const hundleSubmit = (e) => {
        e.preventDefault();
        console.log(blogData)
        dispatch(createBlog(blogData))
        console.log(blogData)

    }



    return (
      <div className="container">
        <div className="row justify-content-center">
            <div className="col-sm">
                <Paper className={classes.paper}>
                    <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={hundleSubmit}>
                        <Typography variant="h6">{'Creating'} a Blog</Typography>
                        <TextField className={classes.textField} name="title" variant="outlined" label="Title" value={blogData.title} onChange={(e) => { setBlogData({...blogData, title: e.target.value})}}/>
                        <TextField className={classes.textField} name="content" variant="outlined" multiline rows={10}label="Content" value={blogData.content} onChange={(e) => setBlogData({...blogData, content: e.target.value})}/>
                        <div className={classes.fileInput}>
                            <FileBase type="file" multiple={false} onDone={({base64}) => setBlogData({ ...blogData, selectedFile: base64})}/>
                        </div>
                        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth >Submit</Button>
                    </form>
                </Paper>
            </div>
        </div>
      </div>
    );
}

export default FormAddBlog;