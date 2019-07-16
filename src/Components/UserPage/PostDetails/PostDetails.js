import React from "react";
import PropTypes from "prop-types";

import {
  ButtonWrapper,
  PostWrapper,
  PostTitle,
  CommentItem,
  UserDetails,
  CommentName,
  Email,
  CommentBody,
  StyledButton
} from "./PostDetailsStyle";
const PostDetails = props => {
  const {
    comments,
    post,
    commentsVisible,
    toggleCommentsVisible,
    handleAddComments
  } = props;

  const commentsItems = comments.map(comment => {
    return (
      <CommentItem key={comment.id}>
        <UserDetails>
          <CommentName>{comment.name}</CommentName>
          <Email>{comment.email}</Email>
        </UserDetails>
        <CommentBody>{comment.body}</CommentBody>
      </CommentItem>
    );
  });
  return (
    <div>
      <PostWrapper>
        <PostTitle>{post.Posttitle}</PostTitle>
        <p>{post.body}</p>
        <ButtonWrapper>
          <StyledButton onClick={toggleCommentsVisible}>{`${
            commentsVisible ? "Hide" : "Show"
          } comments`}</StyledButton>
          <StyledButton onClick={handleAddComments}>Add comments</StyledButton>
        </ButtonWrapper>
        {commentsVisible ? <ul>{commentsItems}</ul> : null}
      </PostWrapper>
    </div>
  );
};
PostDetails.propTypes = {
  post: PropTypes.object.isRequired,
  comments: PropTypes.array.isRequired,
  commentsVisible: PropTypes.bool.isRequired,
  toggleCommentsVisible: PropTypes.func.isRequired,
  handleAddComments: PropTypes.func.isRequired
};

export default PostDetails;
