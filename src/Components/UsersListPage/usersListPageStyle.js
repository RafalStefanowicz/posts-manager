import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const StyledItem = styled.li`
  width: 30%;
  min-width: 300px;
  margin: 20px;
  padding: 30px 40px;
  border: 2px solid black;
`;

export const StyledName = styled.h1`
  margin: 10px 0;
`;

export const StyledDetails = styled.h3`
  margin: 8px 0;
`;

export const StyledLink = styled(Link)`
  display: block;
  width: 100%;
  margin: 8px 0;
  padding: 15px 0;
  border: 1px solid black;
  font-size: 30px;
  text-align: center;
  :hover {
    background-color: #0b5394;
    color: #fff;
    cursor: pointer;
  }
`;
