import { POSTS_FETCHED } from "./actionTypes";

const postsFetched = fromUserId => ({
  type: POSTS_FETCHED,
  payload: fromUserId
});

export default postsFetched;
