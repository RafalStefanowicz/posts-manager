import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const StyledItem = styled.li`
  display: flex;
  align-items: center;
  margin: 10px;
  padding: 10px;
  border: 2px solid black;
`;

export const StyledLink = styled(Link)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 15px;
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 35px;
  color: #0b5394;
`;
