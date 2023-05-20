import { FETCH, FETCH_ALL_experts, CREATE_expert, UPDATE_expert, DELETE_expert } from '../constants/actionTypes';

export default (experts = [], action) => {
  switch (action.type) {
    case FETCH_ALL_experts:
      return action.payload;
    case FETCH:
      return action.payload;
    case CREATE_expert:
      return [...experts, action.payload];
    case UPDATE_expert:
      return experts.map((Expert) => (Expert._id === action.payload._id ? action.payload : Expert));
    case DELETE_expert:
      return experts.filter((Expert) => Expert._id !== action.payload);
    default:
      return experts;
  }
};

