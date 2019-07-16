import React from "react";
import PropTypes from "prop-types";

import {
  ButtonWrapper,
  PostWrapper,
  StyledTitle,
  CommentItem,
  UserDetailsWrapper,
  StyledName,
  StyledEmail,
  StyledComment,
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
        <UserDetailsWrapper>
          <StyledName>{comment.name}</StyledName>
          <StyledEmail>{comment.email}</StyledEmail>
        </UserDetailsWrapper>
        <StyledComment>{comment.body}</StyledComment>
      </CommentItem>
    );
  });
  return (
    <div>
      <PostWrapper>
        <StyledTitle>{post.Posttitle}</StyledTitle>
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
