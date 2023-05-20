import { Navigate } from 'react-router-dom';
import {FETCH_ALL_users,DELETE_user,CREATE_user, AUTH} from '../constants/actionTypes';
import * as api from '../api/index.js'

export const signin = (formData, navigate) => async(dispatch) => {
    try {
        //login the user
        const {data}= await api.signIn(formData)
        dispatch({type : AUTH , data})
        //
        navigate('/')
    } catch (error) {
        console.log(error)
    }
}

export const signup = (formData, navigate) => async(dispatch) => {
    try {
        //singup the user
        const {data}= await api.signUp(formData)
        dispatch({type : AUTH , data})
        //
        navigate('/')
        
    } catch (error) {
        console.log(error)

        
    }
}
export const createUser = (user) => async (dispatch) => {
    try {
        const { data } = await api.createUser(user);

        dispatch({ type: CREATE_user, payload: data })
    } catch (error) {
        console.log(error);
    }
}
export const getUsers = () => async (dispatch) => {
    try {
      const { data } = await api.fetchUsers();
  
      dispatch({ type: FETCH_ALL_users, payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };
  export const deleteUser = (id) => async (dispatch) => {
    try {
      await api.deleteUser(id);
  
      dispatch({ type: DELETE_user, payload: id });
    } catch (error) {
      console.log(error.message);
    }
  };
  