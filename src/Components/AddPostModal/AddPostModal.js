import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import addPost from "../../actions/addPost";
import AddPostForm from "../AddPostForm/AddPostForm";
import Modal from "../Modal/Modal";

const AddPostModal = props => {
  const { userId } = props;
  return <Modal heading="Add post">{<AddPostForm userId={userId} />}</Modal>;
};

AddPostModal.propTypes = { userId: PropTypes.number.isRequired };

const mapDispatchToPropst = { addPost };
export default connect(
  null,
  mapDispatchToPropst
)(AddPostModal);
