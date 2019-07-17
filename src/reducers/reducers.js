import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import users from "./users";
import posts from "./posts";
import comments from "./comments";
import dataFetched from "./dataFetched";
import modal from "./modal";
import isDeleting from "./isDeleting";

const reducers = combineReducers({
  users,
  posts,
  comments,
  dataFetched,
  modal,
  isDeleting,
  form: formReducer
});

export default reducers;
