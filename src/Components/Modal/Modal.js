import React from "react";
import { connect } from "react-redux";
import { default as ReactModal } from "react-modal";
import styled from "styled-components";

import hideModal from "../../actions/hideModal";

const StyledModal = styled(ReactModal)`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 30%;
  height: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid black;
`;

ReactModal.setAppElement(document.getElementById("root"));

const Modal = props => {
  return (
    <StyledModal isOpen={true} onRequestClose={props.hideModal}>
      <div>{props.children}</div>
    </StyledModal>
  );
};

const mapDispatchToProps = { hideModal };
export default connect(
  null,
  mapDispatchToProps
)(Modal);
