import { FETCH, FETCH_ALL_models, CREATE_model, UPDATE_model, DELETE_model } from '../constants/actionTypes';

export default (models = [], action) => {
  switch (action.type) {
    case FETCH_ALL_models:
      return action.payload;
    case FETCH:
      return action.payload;
    case CREATE_model:
      return [...models, action.payload];
    case UPDATE_model:
      return models.map((Model) => (Model._id === action.payload._id ? action.payload : Model));
    case DELETE_model:
      return models.filter((Model) => Model._id !== action.payload);
    default:
      return models;
  }
};

