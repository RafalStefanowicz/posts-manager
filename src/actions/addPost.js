import { ADD_POST } from "./actionTypes";
import usersApi from "../apis/usersApi";
import hideModal from "./hideModal";
import UniqueId from "../helpers/UniqueId";

const uniqueId = new UniqueId(100);

const addPost = (userId, post) => async dispatch => {
  try {
    const response = await usersApi.post(`/posts/`, {
      userId: userId,
      title: post.title,
      body: post.body
    });
    const responsePost = response.data;
    // reassign post.id , because api always returns 101
    responsePost.id = uniqueId.getUniqueId();
    dispatch({ type: ADD_POST, payload: responsePost });
    dispatch(hideModal());
  } catch (error) {
    console.log(error);
  }
};

export default addPost;
