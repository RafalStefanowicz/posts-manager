import { COMMENTS_FETCHED } from "./actionTypes";

const commentsFetched = fromPostId => ({
  type: COMMENTS_FETCHED,
  payload: fromPostId
});

export default commentsFetched;
