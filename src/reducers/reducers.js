import { combineReducers } from "redux";
import users from "./users";
import posts from "./posts";
import comments from "./comments";
import modal from "./modal";

const reducers = combineReducers({
  users,
  posts,
  comments,
  modal
});

export default reducers;
