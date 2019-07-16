import React from "react";

import { StyledInfoHeading } from "../../styles/common";

const InfoPage = props => {
  return <StyledInfoHeading>{props.children}</StyledInfoHeading>;
};

export default InfoPage;
