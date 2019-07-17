import { SHOW_MODAL, HIDE_MODAL } from "../actions/actionTypes";
const INITIAL_STATE = { modalType: "", modalProps: {} };

const modal = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return action.payload;

    case HIDE_MODAL:
      return INITIAL_STATE;

    default:
      return state;
  }
};
export default modal;
