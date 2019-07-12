import { combineReducers } from "redux";
import users from "./users";
import userPosts from "./userPosts";

const reducers = combineReducers({
  users,
  userPosts
});

export default reducers;
