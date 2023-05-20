import { combineReducers } from 'redux';

import Experts from './Experts';
import Models from './Models';
import auth from './auth';
import blogs from './blogs';
import users from './users';
import exploitables from './exploitables';


export const reducers = combineReducers({ Experts, Models, auth,blogs,users,exploitables });
