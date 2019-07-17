import { CHANGE_IS_DELETING_STATE } from "./actionTypes";

const changeIsDeletingState = isDeleting => ({
  type: CHANGE_IS_DELETING_STATE,
  payload: isDeleting
});

export default changeIsDeletingState;
