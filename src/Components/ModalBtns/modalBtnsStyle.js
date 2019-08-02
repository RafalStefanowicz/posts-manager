import styled, { css } from "styled-components";

export const StyledButtonsWrapper = styled.div`
  text-align: ${props => (props.rightPosition ? "right" : "center")};
`;

export const StyledButton = styled.button`
  width: 106px;
  padding: 10px;
  margin: 10px;
  border: 3px solid black;
  font-size: 20px;
  font-weight: 700;
  line-height: 1;
  :hover {
    cursor: pointer;
  }

  ${props =>
    props.disabled
      ? css`
          border: 3px solid gray;
          :hover {
            cursor: default;
          }
        `
      : css`
          :hover {
            background-color: #0b5394;
            color: #fff;
          }
        `}
`;

export const StyledButtonInner = styled.span`
  position: relative;
`;

export const StyledLoadingIconWrapper = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: -20px;
  display: ${props => (props.submitting ? "inline" : "none")};
`;
