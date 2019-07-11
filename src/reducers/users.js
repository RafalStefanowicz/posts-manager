import { ADD_USERS } from "../actions/actionTypes";

const users = (state = {}, action) => {
  console.log(action.type);
  switch (action.type) {
    case ADD_USERS:
      return { ...action.payload };
    default:
      return state;
  }
};

export default users;
