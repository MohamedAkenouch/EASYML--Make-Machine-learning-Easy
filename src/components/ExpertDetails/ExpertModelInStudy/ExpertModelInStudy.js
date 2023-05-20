import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import {deleteModel} from '../../../actions/Models';
import useStyles from './styles';

const ModelInStudy = ({ modelInStudy}) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  

  return (
    <><div>
      </div>
              <tr>
                  <th scope="row">{modelInStudy.name}</th>
                  <td>{modelInStudy.type}</td>
                  <td>{modelInStudy.selectedFile}</td>
                  <td>{modelInStudy.permission}</td>
              </tr>
          </>
  
  );
};

export default ModelInStudy;
