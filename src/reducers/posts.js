import { FETCH_USER_POSTS, ADD_POST } from "../actions/actionTypes";

const posts = (state = {}, action) => {
  switch (action.type) {
    case FETCH_USER_POSTS:
      return { ...state, ...action.payload };
    case ADD_POST:
      const newPosts = JSON.parse(JSON.stringify(state));
      const post = action.payload;
      newPosts[post.userId].push(post);
      return newPosts;
    default:
      return state;
  }
};

export default posts;
