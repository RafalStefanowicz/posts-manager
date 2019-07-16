import {
  FETCH_POSTS,
  ADD_POST,
  DELETE_POST
} from "../actions/actionTypes";

const posts = (state = [], action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return [...state, ...action.payload];

    case ADD_POST:
      return [...state, action.payload];

    case DELETE_POST:
      return state.filter(post => post.id !== action.payload);

    default:
      return state;
  }
};

export default posts;
