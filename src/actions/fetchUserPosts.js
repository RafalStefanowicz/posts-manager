import { FETCH_USER_POSTS } from "./actionTypes";
import usersApi from "../apis/usersApi";

const fetchUserPost = userId => async dispatch => {
  const response = await usersApi.get(`/posts?userId=${userId}`);
  const posts = response.data;
  dispatch({ type: FETCH_USER_POSTS, payload: { [userId]: posts } });
};

export default fetchUserPost;
