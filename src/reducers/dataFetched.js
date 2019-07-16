import { POSTS_FETCHED, COMMENTS_FETCHED } from "../actions/actionTypes";
const INITIAL_STATE = { postsFromUser: [], commentsFromPost: [] };

const dataFetched = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POSTS_FETCHED:
      return {
        ...state,
        postsFromUser: [...state.postsFromUser, action.payload]
      };
    case COMMENTS_FETCHED:
      return {
        ...state,
        commentsFromPost: [...state.commentsFromPost, action.payload]
      };
    default:
      return state;
  }
};

export default dataFetched;
