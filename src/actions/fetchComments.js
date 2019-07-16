import { FETCH_COMMENTS } from "./actionTypes";
import usersApi from "../apis/usersApi";
import commentsFetched from "./commentsFetched";

const fetchComments = postId => async dispatch => {
  const response = await usersApi.get(`/comments?postId=${postId}`);
  const comments = response.data;
  await dispatch({ type: FETCH_COMMENTS, payload: comments });
  dispatch(commentsFetched(postId));
};

export default fetchComments;
