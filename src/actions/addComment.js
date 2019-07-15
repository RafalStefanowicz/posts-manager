import { ADD_COMMENT } from "./actionTypes";
import usersApi from "../apis/usersApi";
import hideModal from "./hideModal";
import UniqueId from "../helpers/UniqueId";

const uniqueCommentId = new UniqueId(500);

const addComment = comment => async dispatch => {
  try {
    const response = await usersApi.post(`/comments/`, {
      postId: comment.postId,
      name: comment.name,
      email: comment.email,
      body: comment.body
    });
    const responseComment = response.data;
    console.log(responseComment);
    // reassign comment.id , because api always returns 101
    responseComment.id = uniqueCommentId.getUniqueId();
    dispatch({ type: ADD_COMMENT, payload: responseComment });
    dispatch(hideModal());
  } catch (error) {
    console.log(error);
  }
};

export default addComment;
