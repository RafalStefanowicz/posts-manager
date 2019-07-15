import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Modal from "../Modal/Modal";
import hideModal from "../../actions/hideModal";
import deletePost from "../../actions/deletePost";

const DeletePostModal = props => {
  const { postId, userId } = props;
  const handleDeleteClick = () => {
    props.deletePost(postId, userId);
  };
  return (
    <Modal>
      <h1>{`Do u want to delete post ${postId} ?`}</h1>
      <button onClick={hideModal}>Cancel</button>
      <button onClick={handleDeleteClick}>Delete</button>
    </Modal>
  );
};

DeletePostModal.propTypes = {
  postId: PropTypes.number.isRequired,
  userId: PropTypes.number.isRequired
};

const mapDispatchToProps = { deletePost, hideModal };

export default connect(
  null,
  mapDispatchToProps
)(DeletePostModal);
