import { FETCH_USER_POSTS } from "../actions/actionTypes";

const posts = (state = {}, action) => {
  switch (action.type) {
    case FETCH_USER_POSTS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default posts;
