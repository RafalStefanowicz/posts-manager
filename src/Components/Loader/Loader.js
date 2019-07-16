import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import { StyledHeading, StyledLabel } from "./LoaderStyles";

const Loader = () => {
  return (
    <StyledHeading>
      <FontAwesomeIcon icon={faSpinner} className="fa-spin" />
      <StyledLabel>Logowanie..</StyledLabel>
    </StyledHeading>
  );
};
export default Loader;
