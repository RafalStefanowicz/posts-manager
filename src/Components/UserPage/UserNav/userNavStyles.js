import styled from "styled-components";

export const StyledName = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 32px;
  @media (max-width: 768px) {
    font-size: 28px;
  }
`;
