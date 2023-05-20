import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import {deleteExpert } from '../../../actions/Experts';
import useStyles from './styles';

const Expert = ({ user ,expert, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={expert.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={expert.name} />
      <Link to={`/ExpertDetails/${expert._id}`}>
      <div className={classes.overlay}>
        <Typography variant="h6">{expert.name}</Typography>
        {/* <Typography variant="body2">{moment(expert.createdAt).fromNow()}</Typography> */}
      </div>
      </Link>
      
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{expert.name}</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{expert.description ? `${expert.description.substring(0, 70) + " ..."} ` : ""}</Typography>
      </CardContent>
      { (user!== undefined && user!== null)?
          (user.result!== undefined && user.result!== null)?
          (user.result.email==='EasyMLadmin@gmail.com'?
            <CardActions className={classes.cardActions}>
              <Button size="small" color="primary" onClick={() => dispatch(deleteExpert(expert._id))}><DeleteIcon fontSize="small" /> Delete</Button>
            </CardActions>
            :null)
            : null
          :null
      }
      
    </Card>
  );
};

export default Expert;
