import { DELETE_POST } from "./actionTypes";
import usersApi from "../apis/usersApi";
import hideModal from "./hideModal";

const deletePost = postId => async dispatch => {
  await usersApi.delete(`/posts/${postId}`);
  dispatch({ type: DELETE_POST, payload: postId });
  dispatch(hideModal());
};
export default deletePost;
