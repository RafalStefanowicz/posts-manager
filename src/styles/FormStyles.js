import styled, { css } from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledLabel = styled.label`
  display: inline-block;
  width: 25%;
  font-size: 24px;
  line-height: 1px;
  font-weight: 700;
  text-align: center;
`;

export const StyledInput = styled.input`
  width: 75%;
  height: 30px;
  border: 2px solid black;
  font-size: 20px;
`;

export const StyledTextArea = styled.textarea`
  width: 75%;
  height: 80px;
  border: 2px solid black;
  font-size: 20px;
`;

export const ButtonsWrapper = styled.div`
  text-align: ${props => (props.right ? "right" : "center")};
`;

export const StyledButton = styled.button`
  width: 25%;
  padding: 10px;
  margin: 10px;
  border: 3px solid black;
  font-size: 20px;
  font-weight: 700;
  ${props =>
    props.disabled
      ? css`
          border: 3px solid gray;
        `
      : css`
          :hover {
            background-color: #0b5394;
            color: white;
          }
        `}
`;

export const ButtonInner = styled.span`
  position: relative;
`;

export const LoadingIconWrapper = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: -25px;
  display: ${props => (props.submitting ? "inline" : "none")};
`;

export const StyledP = styled.p`
  color: red;
  text-align: center;
`;

export const StyledForm = styled.form`
  width: 85%;
  margin: 0 auto;
`;

export const ErrorWrapper = styled.div`
  height: 30px;
`;
