import { FETCH_POST_COMMENTS } from "../actions/actionTypes";

const comments = (state = {}, action) => {
  switch (action.type) {
    case FETCH_POST_COMMENTS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default comments;
