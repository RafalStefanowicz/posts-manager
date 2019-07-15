import { DELETE_POST } from "./actionTypes";
import usersApi from "../apis/usersApi";
import hideModal from "./hideModal";
import history from "../history/history";
import { USER } from "../constants/routes";

const deletePost = postId => async dispatch => {
  await usersApi.delete(`/posts/${postId}`);
  dispatch({ type: DELETE_POST, payload: postId });
  dispatch(hideModal());
  console.log("get user from store and push");
  // history.push(`/user/1`);
};
export default deletePost;
