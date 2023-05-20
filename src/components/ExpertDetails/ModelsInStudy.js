import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Grid, CircularProgress, Paper } from '@material-ui/core';

import useStyles from './styles';
import ModelInStudy from './ExpertModelInStudy/ExpertModelInStudy';

const ModelsInStudy = ({ modeles,id}) => {
  const classes = useStyles();

  return (
    <>
      <h3 className='text-center m-2 mb-4'>Models state</h3>
      <div className='container-md'>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Type</th>
              <th scope="col">File</th>
              <th scope="col">State</th>
            </tr>
          </thead>
          <tbody>
            {modeles.filter(model =>  model.owner === id).map((model) => (
                <ModelInStudy modelInStudy={model}/>
              ))
            }
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ModelsInStudy;