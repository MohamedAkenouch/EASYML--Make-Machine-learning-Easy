import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import {deleteModel} from '../../../actions/Models';
import styles from './ExpertModel.module.css';
import './ExpertModel.css';

const ExpertModel = ({ model}) => {

  return (
      <div className={'card '+styles.cards}>
          <h5 className={"card-header "+ styles.cardHeader}>{model.name}</h5>
          <div className="card-body">
              <h5 className="card-title">Type : {model.type}</h5>
              <p className="card-text">{model.description}</p>
              <Link to={`/Build/${model._id}`} className={"btn "+styles.butt}>Build</Link>
          </div>
      </div>
  );
};

export default ExpertModel;
