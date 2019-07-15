import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import showModal from "../../actions/showModal";
import { DELETE_POST_MODAL } from "../../constants/modalTypes";

const DeletePostBtn = props => {
  const handleDeleteClick = () => {
    props.showModal(DELETE_POST_MODAL, { postId: props.postId });
  };

  return <button onClick={handleDeleteClick}>Usuń Post</button>;
};

const mapDispatchToProps = { showModal };

DeletePostBtn.propTypes = {
  postId: PropTypes.number.isRequired
};

export default connect(
  null,
  mapDispatchToProps
)(DeletePostBtn);
