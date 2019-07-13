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
      {postId ? <DeletePostBtn /> : <AddPostBtn />}
    </div>
  );
};
UserNav.propTypes = {
  userName: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  postId: PropTypes.string
};

export default UserNav;
