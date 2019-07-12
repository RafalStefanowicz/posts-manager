import { FETCH_USER_POSTS } from "../actions/actionTypes";

const userPosts = (state = {}, action) => {
  switch (action.type) {
    case FETCH_USER_POSTS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default userPosts;
