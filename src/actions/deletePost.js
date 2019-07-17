import { DELETE_POST } from "./actionTypes";
import usersApi from "../apis/usersApi";
import hideModal from "./hideModal";
import changeIsDeletingState from "./changeIsDeletingState";
import history from "../history/history";
import { USER } from "../constants/routes";

const deletePost = (postId, userId) => async dispatch => {
  try {
    await usersApi.delete(`/posts/${postId}`);
    await dispatch({ type: DELETE_POST, payload: postId });
    dispatch(changeIsDeletingState(false));
    dispatch(hideModal());
    history.push(USER + userId);
  } catch (error) {
    console.log(error);
  }
};

export default deletePost;
