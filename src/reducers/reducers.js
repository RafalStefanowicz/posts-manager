import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import users from "./users";
import posts from "./posts";
import comments from "./comments";
import modal from "./modal";

const reducers = combineReducers({
  users,
  posts,
  comments,
  modal,
  form: formReducer
});

export default reducers;
