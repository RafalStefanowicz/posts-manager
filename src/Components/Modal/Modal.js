import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import hideModal from "../../actions/hideModal";
import { StyledReactModal, ModalInner, ModalHeading } from "./ModalStyles";

StyledReactModal.setAppElement(document.getElementById("root"));

const Modal = props => {
  return (
    <StyledReactModal isOpen={true} onRequestClose={props.hideModal}>
      <ModalInner>
        <ModalHeading>{props.heading}</ModalHeading>
        {props.children}
      </ModalInner>
    </StyledReactModal>
  );
};

Modal.propTypes = { heading: PropTypes.string.isRequired };

const mapDispatchToProps = { hideModal };
export default connect(
  null,
  mapDispatchToProps
)(Modal);
