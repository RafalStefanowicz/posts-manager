import React from "react";
import { withRouter } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import {
  StyledButton,
  StyledFontAwesomeIcon,
  StyledLabel
} from "./BackBtnStyles";
const BackButton = props => {
  const handleClick = () => {
    props.history.push(props.path);
  };
  return (
    <StyledButton onClick={handleClick}>
      <StyledFontAwesomeIcon icon={faArrowLeft} />
      <StyledLabel>Back</StyledLabel>
    </StyledButton>
  );
};
export default withRouter(BackButton);
