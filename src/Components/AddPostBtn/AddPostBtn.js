import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import { ADD_POST_MODAL } from "../../constants/modalTypes";
import showModal from "../../actions/showModal";
import { StyledButton } from "./AddPostBtnStyles";
const AddPostBtn = props => {
  const handleAddPost = () => {
    props.showModal(ADD_POST_MODAL, { userId: props.userId });
  };

  return (
    <StyledButton onClick={handleAddPost}>
      <FontAwesomeIcon icon={faPlus} />
    </StyledButton>
  );
};

AddPostBtn.propTypes = { userId: PropTypes.number.isRequired };

const mapDispatchToProps = { showModal };
export default connect(
  null,
  mapDispatchToProps
)(AddPostBtn);
