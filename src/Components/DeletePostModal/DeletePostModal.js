import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Modal from "../Modal/Modal";
import ModalBtns from "../ModalBtns/ModalBtns";
import changeIsDeletingState from "../../actions/changeIsDeletingState";
import deletePost from "../../actions/deletePost";
const DeletePostModal = props => {
  const { postId, userId } = props;

  const handleDeleteClick = () => {
    props.changeIsDeletingState(true);
    props.deletePost(postId, userId);
  };

  return (
    <Modal heading={`Do u want to delete post ${postId} ?`}>
      <ModalBtns
        handleSubmit={handleDeleteClick}
        disabled={props.isDeleting}
        submitting={props.isDeleting}
        action="Delete"
      />
    </Modal>
  );
};

DeletePostModal.propTypes = {
  postId: PropTypes.number.isRequired,
  userId: PropTypes.number.isRequired
};

const mapStateToPropst = state => ({ isDeleting: state.isDeleting });

const mapDispatchToProps = { deletePost, changeIsDeletingState };

export default connect(
  mapStateToPropst,
  mapDispatchToProps
)(DeletePostModal);
