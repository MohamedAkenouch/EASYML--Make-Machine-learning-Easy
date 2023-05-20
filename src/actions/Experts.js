import { FETCH, FETCH_ALL_experts, CREATE_expert, UPDATE_expert, DELETE_expert} from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getExperts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchExperts();

    dispatch({ type: FETCH_ALL_experts, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const getExpert = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchExpert(id);

    dispatch({ type: FETCH, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
export const createExpert = (Expert) => async (dispatch) => {
  try {
    const { data } = await api.createExpert(Expert);

    dispatch({ type: CREATE_expert, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateExpert = (id, Expert) => async (dispatch) => {
  try {
    const { data } = await api.updateExpert(id, Expert);

    dispatch({ type: UPDATE_expert, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteExpert = (id) => async (dispatch) => {
  try {
    await api.deleteExpert(id);

    dispatch({ type: DELETE_expert, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
