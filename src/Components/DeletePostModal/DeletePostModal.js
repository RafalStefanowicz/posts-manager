import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Modal from "../Modal/Modal";
import hideModal from "../../actions/hideModal";
import deletePost from "../../actions/deletePost";
import { StyledButton, StyledButtonsWrapper } from "../../styles/FormStyles";
const DeletePostModal = props => {
  const { postId, userId } = props;

  const handleDeleteClick = () => {
    props.deletePost(postId, userId);
  };

  return (
    <Modal heading={`Do u want to delete post ${postId} ?`}>
      <StyledButtonsWrapper>
        <StyledButton onClick={hideModal}>Cancel</StyledButton>
        <StyledButton onClick={handleDeleteClick}>Delete</StyledButton>
      </StyledButtonsWrapper>
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
