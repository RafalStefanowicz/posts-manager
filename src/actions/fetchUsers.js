import usersApi from "../apis/usersApi";
import _ from "lodash";

import { ADD_USERS } from "./actionTypes";

const fetchUsers = () => async dispatch => {
  try {
    const response = await usersApi.get("/users");
    const users = response.data;
    const usersWithIdKey = _.mapKeys(users, "id");
    dispatch({ type: ADD_USERS, payload: usersWithIdKey });
  } catch (error) {
    console.log(error);
  }
};
export default fetchUsers;
