import styled from "styled-components";

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
`;

export const StyledButton = styled.button`
  color: #0b5394;
`;

export const PostWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

export const PostTitle = styled.h1`
  text-align: center;
  margin: 10px;
`;

export const CommentItem = styled.li`
  padding: 10px;
  margin: 10px;
  border: 3px solid black;
`;

export const UserDetails = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
`;

export const CommentName = styled.span`
  font-weight: bold;
`;

export const Email = styled.span`
  color: #0b5394;
`;

export const CommentBody = styled.p`
  margin: 10px;
`;
