import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  color: #0b5394;
  :hover {
    cursor: pointer;
  }
`;

export const StyledLabel = styled.span`
  margin: 3px;
  font-size: 20px;
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 60px;
`;
