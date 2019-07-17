import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import hideModal from "../../actions/hideModal";
import {
  StyledButtonsWrapper,
  StyledButton,
  StyledButtonInner,
  StyledLoadingIconWrapper
} from "./modalBtnsStyle";

const ModalBtns = props => {
  return (
    <StyledButtonsWrapper rightPosition={props.rightPosition}>
      <StyledButton type="button" onClick={props.hideModal}>
        Cancel
      </StyledButton>
      <StyledButton
        onClick={props.handleSubmit}
        type="submit"
        disabled={props.disabled}
      >
        <StyledButtonInner>
          <StyledLoadingIconWrapper submitting={props.submitting}>
            <FontAwesomeIcon icon={faSpinner} className="fa-spin" />
          </StyledLoadingIconWrapper>
          {props.action}
        </StyledButtonInner>
      </StyledButton>
    </StyledButtonsWrapper>
  );
};

ModalBtns.propTypes = {
  disabled: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  action: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func,
  rightPosition: PropTypes.bool
};

const mapDispatchToProps = { hideModal };

export default connect(
  null,
  mapDispatchToProps
)(ModalBtns);
