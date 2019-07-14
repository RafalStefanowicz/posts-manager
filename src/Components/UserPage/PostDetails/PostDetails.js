import React from "react";
import PropTypes from "prop-types";

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
      <li key={comment.id}>
        <h1>{comment.name}</h1>
        <span>{comment.email}</span>
        <h3>{comment.body}</h3>
      </li>
    );
  });
  return (
    <div>
      <h1>{post.title}</h1>
      <h3>{post.body}</h3>
      <button onClick={toggleCommentsVisible}>{`${
        commentsVisible ? "Hide" : "Show"
      } comments`}</button>
      <button onClick={handleAddComments}>Add comments</button>
      {commentsVisible ? <ul>{commentsItems}</ul> : null}
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
