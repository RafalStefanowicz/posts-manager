import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import showModal from "../../actions/showModal";
import { DELETE_POST_MODAL } from "../../constants/modalTypes";
import { StyledButton } from "./DeletePostBtnStyles";

const DeletePostBtn = props => {
  const handleDeleteClick = () => {
    props.showModal(DELETE_POST_MODAL, {
      userId: props.userId,
      postId: props.postId
    });
  };

  return (
    <StyledButton onClick={handleDeleteClick}>
      <FontAwesomeIcon icon={faTrash} />
    </StyledButton>
  );
};

const mapDispatchToProps = { showModal };

DeletePostBtn.propTypes = {
  postId: PropTypes.number.isRequired,
  userId: PropTypes.number.isRequired
};

export default connect(
  null,
  mapDispatchToProps
)(DeletePostBtn);
