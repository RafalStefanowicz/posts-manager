import { FETCH_COMMENTS, ADD_COMMENT } from "../actions/actionTypes";

const comments = (state = [], action) => {
  switch (action.type) {
    case FETCH_COMMENTS:
      return [...state, ...action.payload];
    case ADD_COMMENT:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default comments;
