import styled from "styled-components";

export const StyledUserNavWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  background-color: white;
  @media (max-width: 768px) {
    padding: 15px;
  }
`;

export const StyledUserMainWrapper = styled.main`
  margin-top: 120px;
  @media (max-width: 768px) {
    margin-top: 90px;
  }
`;
