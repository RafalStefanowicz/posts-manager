import styled from "styled-components";
import Modal from "react-modal";

export const StyledReactModal = styled(Modal)`
  background-color: #fff;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 630px;
  height: 450px;
  transform: translate(-50%, -50%);
  border: 1px solid #0b5394;
  @media (max-width: 768px) {
    width: 300px;
    height: 380px;
  }
`;

export const StyledHeading = styled.h1`
  margin-bottom: 20px;
  text-align: center;
`;

export const ModalInner = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
