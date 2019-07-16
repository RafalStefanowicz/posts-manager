import React from "react";
import PropTypes from "prop-types";

import Comments from "./Comments/Comments";
import {
  StyledButtonWrapper,
  StyledPostWrapper,
  StyledTitle,
  StyledButton
} from "./PostDetailsStyle";
const PostDetails = props => {
  const {
    post,
    commentsVisible,
    toggleCommentsVisible,
    handleAddComments
  } = props;

  return (
    <div>
      <StyledPostWrapper>
        <StyledTitle>{post.title}</StyledTitle>
        <p>{post.body}</p>
        <StyledButtonWrapper>
          <StyledButton onClick={toggleCommentsVisible}>{`${
            commentsVisible ? "Hide" : "Show"
          } comments`}</StyledButton>
          <StyledButton onClick={handleAddComments}>Add comments</StyledButton>
        </StyledButtonWrapper>
        {commentsVisible ? <Comments post={post} /> : null}
      </StyledPostWrapper>
    </div>
  );
};
PostDetails.propTypes = {
  post: PropTypes.object.isRequired,
  commentsVisible: PropTypes.bool.isRequired,
  toggleCommentsVisible: PropTypes.func.isRequired,
  handleAddComments: PropTypes.func.isRequired
};

export default PostDetails;
