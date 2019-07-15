import { DELETE_POST } from "./actionTypes";
import usersApi from "../apis/usersApi";

const deletePost = post => async dispatch => {
  await usersApi.delete(`/posts/${post.id}`);
  dispatch({ type: DELETE_POST, payload: post });
};
export default deletePost;
