import {
  FETCH_USER_POSTS,
  ADD_POST,
  DELETE_POST
} from "../actions/actionTypes";

const posts = (state = [], action) => {
  switch (action.type) {
    case FETCH_USER_POSTS:
      return [...state, ...action.payload];

    case ADD_POST:
      return [...state, action.payload];

    case DELETE_POST:
      return state.filter(post => post.id !== action.payload.id);

    default:
      return state;
  }
};

export default posts;
