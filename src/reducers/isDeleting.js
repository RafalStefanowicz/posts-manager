import { CHANGE_IS_DELETING_STATE } from "../actions/actionTypes";
const INITIAL_STATE = false;

const isDeleting = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_IS_DELETING_STATE:
      return action.payload;
    default:
      return state;
  }
};

export default isDeleting;
