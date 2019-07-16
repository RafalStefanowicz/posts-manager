import React from "react";
import PropTypes from "prop-types";

import DeletePostBtn from "../../DeletePostBtn/DeletePostBtn";
import AddPostBtn from "../../AddPostBtn/AddPostBtn";
import BackBtn from "../../BackBtn/BackBtn";

const UserNav = props => {
  const { userName, userId, postId } = props;
  return (
    <>
      <BackBtn path={postId ? `/user/${userId}` : "/"}>Cofnij</BackBtn>
      <h1>{userName}</h1>
      {postId ? (
        <DeletePostBtn userId={userId} postId={postId} />
      ) : (
        <AddPostBtn userId={userId} />
      )}
    </>
  );
};
UserNav.propTypes = {
  userName: PropTypes.string.isRequired,
  userId: PropTypes.number.isRequired,
  postId: PropTypes.number
};

export default UserNav;
