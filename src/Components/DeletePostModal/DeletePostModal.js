import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Modal from "../Modal/Modal";
import deletePost from "../../actions/deletePost";

const DeletePostModal = props => {
  const { postId } = props;
  const handleDeleteClick = () => {
    props.deletePost(postId);
  };
  return (
    <Modal>
      <h1>{`Do u want to delete post ${postId} ?`}</h1>
      <button onClick={handleDeleteClick}>Tak</button>
    </Modal>
  );
};

DeletePostModal.propTypes = { postId: PropTypes.number.isRequired };

const mapDispatchToProps = { deletePost };

export default connect(
  null,
  mapDispatchToProps
)(DeletePostModal);
