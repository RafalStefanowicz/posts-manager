import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import showModal from "../../../actions/showModal";
import { DELETE_POST_MODAL } from "../../../constants/modalTypes";
const Posts = props => {
  const handleDeleteClick = post => {
    props.showModal(DELETE_POST_MODAL, { post: post });
  };

  const postItems = props.posts.map(post => {
    const { userId, id: postId, title } = post;
    return (
      <li key={postId}>
        <button
          onClick={() => {
            handleDeleteClick(post);
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
const mapDispatchToProps = { showModal };

export default connect(
  null,
  mapDispatchToProps
)(Posts);
