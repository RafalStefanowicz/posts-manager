import styled from "styled-components";
import Modal from "react-modal";

export const StyledReactModal = styled(Modal)`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 580px;
  height: 400px;
  transform: translate(-50%, -50%);
  border: 1px solid #0b5394;
`;

export const ModalHeading = styled.h1`
  margin-bottom: 20px;
  text-align: center;
`;

export const ModalInner = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
