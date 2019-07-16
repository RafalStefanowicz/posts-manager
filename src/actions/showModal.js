import { SHOW_MODAL } from "../actions/actionTypes";

const showModal = (modalType, modalProps) => ({
  type: SHOW_MODAL,
  payload: { modalType, modalProps }
});

export default showModal;
