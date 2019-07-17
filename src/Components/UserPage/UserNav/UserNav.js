import React from "react";
import PropTypes from "prop-types";

import DeletePostBtn from "../../DeletePostBtn/DeletePostBtn";
import AddPostBtn from "../../AddPostBtn/AddPostBtn";
import BackBtn from "../../BackBtn/BackBtn";
import { StyledName } from "./userNavStyles";

const UserNav = props => {
  const { userName, userIdParam, postIdParam } = props;
  return (
    <>
      <BackBtn path={postIdParam ? `/user/${userIdParam}` : "/"}>
        Cofnij
      </BackBtn>
      <StyledName>{userName}</StyledName>
      {postIdParam ? (
        <DeletePostBtn userId={userIdParam} postId={postIdParam} />
      ) : (
        <AddPostBtn userId={userIdParam} />
      )}
    </>
  );
};

UserNav.propTypes = {
  userName: PropTypes.string.isRequired,
  userIdParam: PropTypes.number.isRequired,
  postIdParam: PropTypes.number
};

export default UserNav;
