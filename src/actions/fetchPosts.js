import { FETCH_POSTS } from "./actionTypes";
import usersApi from "../apis/usersApi";
import postFetched from "./postsFetched";

const fetchPosts = userId => async dispatch => {
  try {
    const response = await usersApi.get(`/posts?userId=${userId}`);
    const posts = response.data;
    await dispatch({ type: FETCH_POSTS, payload: posts });
    dispatch(postFetched(userId));
  } catch (error) {
    console.log(error);
  }
};

export default fetchPosts;
