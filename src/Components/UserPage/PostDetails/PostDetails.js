import React from "react";
import PropTypes from "prop-types";

import Comments from "./Comments/Comments";
import {
  ButtonWrapper,
  PostWrapper,
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
      <PostWrapper>
        <StyledTitle>{post.Posttitle}</StyledTitle>
        <p>{post.body}</p>
        <ButtonWrapper>
          <StyledButton onClick={toggleCommentsVisible}>{`${
            commentsVisible ? "Hide" : "Show"
          } comments`}</StyledButton>
          <StyledButton onClick={handleAddComments}>Add comments</StyledButton>
        </ButtonWrapper>
        {commentsVisible ? <Comments post={post} /> : null}
      </PostWrapper>
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
