import React from "react";
import PropTypes from "prop-types";

import AddCommentForm from "../AddCommentForm/AddCommentForm";
import Modal from "../Modal/Modal";

const AddCommentModal = props => {
  const { postId, userId } = props;
  return <Modal>{<AddCommentForm postId={postId} userId={userId} />}</Modal>;
};

AddCommentModal.propTypes = {
  postId: PropTypes.number.isRequired
};

export default AddCommentModal;
