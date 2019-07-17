import React from "react";
import { connect } from "react-redux";

import {
  ADD_POST_MODAL,
  DELETE_POST_MODAL,
  ADD_COMMENT_MODAL
} from "../../constants/modalTypes";
import AddPostModal from "../AddPostModal/AddPostModal";
import DeletePostModal from "../DeletePostModal/DeletePostModal";
import AddCommentModal from "../AddCommentModal/AddCommentModal";

const ModalRoot = props => {
  const modalType = props.modal.modalType;
  const modalProps = props.modal.modalProps;

  switch (modalType) {
    case ADD_POST_MODAL:
      return <AddPostModal userId={modalProps.userId} />;

    case DELETE_POST_MODAL:
      return (
        <DeletePostModal
          postId={modalProps.postId}
          userId={modalProps.userId}
        />
      );

    case ADD_COMMENT_MODAL:
      return <AddCommentModal postId={modalProps.postId} />;

    default:
      return null;
  }
};

const mapStateToProps = state => ({ modal: state.modal });

export default connect(mapStateToProps)(ModalRoot);
