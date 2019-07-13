import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Posts = props => {
  const postItems = props.posts.map(post => {
    const { userId, id: postId, title } = post;
    return (
      <li key={postId}>
        <button
          onClick={() => {
            console.log("click");
          }}
        >
          Usun
        </button>
        <Link to={`/user/${userId}/${postId}`}>
          <h1>{title}</h1>
          <span>ikonka</span>
        </Link>
      </li>
    );
  });
  return <ul>{postItems}</ul>;
};

Posts.propTypes = {
  posts: PropTypes.array.isRequired
};

export default Posts;
