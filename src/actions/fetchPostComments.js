import { FETCH_POST_COMMENTS } from "./actionTypes";
import usersApi from "../apis/usersApi";

const fetchPostComments = postId => async dispatch => {
  const response = await usersApi.get(`/comments?postId=${postId}`);
  const comments = response.data;
  dispatch({ type: FETCH_POST_COMMENTS, payload: comments });
};

export default fetchPostComments;
