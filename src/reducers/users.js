import { FETCH_ALL_users, CREATE_user,DELETE_user } from '../constants/actionTypes';

export default (users = [], action) => {
  switch (action.type) {
    case FETCH_ALL_users:
      return action.payload;

    case CREATE_user:
      return [...users, action.payload];

    case DELETE_user:
      return users.filter((User) => User._id !== action.payload);
    default:
      return users;
  }
};

