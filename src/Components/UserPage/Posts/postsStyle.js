import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const StyledItem = styled.li`
  display: flex;
  margin: 10px;
  padding: 10px;
  border: 2px solid black;
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

export const StyledLink = styled(Link)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 15px;
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  margin-left: 10px;
  font-size: 35px;
  color: #0b5394;
`;
