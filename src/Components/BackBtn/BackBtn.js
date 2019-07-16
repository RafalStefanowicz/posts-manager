import React from "react";
import { withRouter } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import { StyledButton, StyledFontAwesomeIcon, Label } from "./BackBtnStyles";
const BackButton = props => {
  const handleClick = () => {
    props.history.push(props.path);
  };
  return (
    <StyledButton onClick={handleClick}>
      <StyledFontAwesomeIcon icon={faArrowLeft} />
      <Label>Back</Label>
    </StyledButton>
  );
};
export default withRouter(BackButton);
