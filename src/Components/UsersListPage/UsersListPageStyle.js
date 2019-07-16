import styled from "styled-components";

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

export const StyledButton = styled.button`
  width: 100%;
  height: 70px;
  margin: 8px 0;
  border: 1px solid black;
  font-size: 30px;
`;
