import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import { StyledLabel } from "./loaderStyles";
import { StyledInfoHeading } from "../../styles/common";

const Loader = () => {
  return (
    <StyledInfoHeading>
      <FontAwesomeIcon icon={faSpinner} className="fa-spin" />
      <StyledLabel>Logowanie..</StyledLabel>
    </StyledInfoHeading>
  );
};

export default Loader;
