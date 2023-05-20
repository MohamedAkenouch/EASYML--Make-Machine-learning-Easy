import { FETCH, FETCH_ALL_models, CREATE_model, UPDATE_model, DELETE_model} from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getModels = () => async (dispatch) => {
  try {
    const { data } = await api.fetchModels();

    dispatch({ type: FETCH_ALL_models, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const getModel = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchModel(id);

    dispatch({ type: FETCH, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const createModel = (Model) => async (dispatch) => {
  try {
    const { data } = await api.createModel(Model);

    dispatch({ type: CREATE_model, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateModel = (id, Model) => async (dispatch) => {
  try {
    const { data } = await api.updateModel(id, Model);

    dispatch({ type: UPDATE_model, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteModel = (id) => async (dispatch) => {
  try {
    await api.deleteModel(id);

    dispatch({ type: DELETE_model, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
