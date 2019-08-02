import styled from "styled-components";

export const StyledItem = styled.li`
  padding: 10px;
  margin: 10px;
  border: 3px solid black;
`;

export const StyledInputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const StyledName = styled.span`
  font-weight: bold;
`;

export const StyledEmail = styled.span`
  color: #0b5394;
`;

export const StyledComment = styled.p`
  margin: 10px;
`;
