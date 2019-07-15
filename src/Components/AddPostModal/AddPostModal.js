import React from "react";
import PropTypes from "prop-types";

import AddPostForm from "../AddPostForm/AddPostForm";
import Modal from "../Modal/Modal";

const AddPostModal = props => {
  const { userId } = props;
  return <Modal>{<AddPostForm userId={userId} />}</Modal>;
};

AddPostModal.propTypes = { userId: PropTypes.number.isRequired };

export default AddPostModal;
