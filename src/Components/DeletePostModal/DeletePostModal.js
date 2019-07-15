import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Modal from "../Modal/Modal";
import deletePost from "../../actions/deletePost";

const DeletePostModal = props => {
  const { post } = props;
  const handleDeleteClick = () => {
    props.deletePost(post);
  };
  return (
    <Modal>
      <h1>{`Do u want to delete post ${post.id} ?`}</h1>
      <button onClick={handleDeleteClick}>Tak</button>
    </Modal>
  );
};

DeletePostModal.propTypes = { post: PropTypes.object.isRequired };

const mapDispatchToProps = { deletePost };

export default connect(
  null,
  mapDispatchToProps
)(DeletePostModal);
