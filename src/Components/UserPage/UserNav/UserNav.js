import React from "react";
import PropTypes from "prop-types";

import DeletePostBtn from "../../DeletePostBtn/DeletePostBtn";
import AddPostBtn from "../../AddPostBtn/AddPostBtn";
import BackBtn from "../../BackBtn/BackBtn";

const UserNav = props => {
  const { userName, userId, postId } = props;
  return (
    <div>
      <BackBtn>Cofnij</BackBtn>
      <h1>{userName}</h1>
      {postId ? (
        <DeletePostBtn postId={postId} />
      ) : (
        <AddPostBtn userId={userId} />
      )}
    </div>
  );
};
UserNav.propTypes = {
  userName: PropTypes.string.isRequired,
  userId: PropTypes.number.isRequired,
  postId: PropTypes.number
};

export default UserNav;
