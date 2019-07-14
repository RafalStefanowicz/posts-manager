import { ADD_POST } from "./actionTypes";
import usersApi from "../apis/usersApi";

const addPost = (userId, post) => async dispatch => {
  const response = await usersApi.post(`/posts/`, {
    userId: userId,
    title: post.title,
    body: post.body
  });
  const responsePost = response.data;
  dispatch({ type: ADD_POST, payload: responsePost });
};

export default addPost;
