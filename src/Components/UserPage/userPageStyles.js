import styled from "styled-components";

export const StyledUserNavWrapper = styled.nav`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  @media (max-width: 768px) {
    padding: 15px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: white;
  }
`;

export const StyledUserMainWrapper = styled.main`
  @media (max-width: 768px) {
    margin-top: 90px;
  }
`;
