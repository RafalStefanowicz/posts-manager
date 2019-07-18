import React from "react";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import {
  StyledLink,
  StyledFontAwesomeIcon,
  StyledLabel
} from "./backBtnStyles";

const BackButton = props => {
  return (
    <StyledLink to={props.path}>
      <StyledFontAwesomeIcon icon={faArrowLeft} />
      <StyledLabel>Back</StyledLabel>
    </StyledLink>
  );
};

export default BackButton;
