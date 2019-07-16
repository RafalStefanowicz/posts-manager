import { DELETE_POST } from "./actionTypes";
import usersApi from "../apis/usersApi";
import hideModal from "./hideModal";
import history from "../history/history";
import { USER } from "../constants/routes";

const deletePost = (postId, userId) => async dispatch => {
  await usersApi.delete(`/posts/${postId}`);
  dispatch({ type: DELETE_POST, payload: postId });
  dispatch(hideModal());
  history.push(USER + userId);
};
export default deletePost;
