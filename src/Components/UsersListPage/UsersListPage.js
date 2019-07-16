import React from "react";
import { connect } from "react-redux";

import { Wrapper } from "../../styles/common";
import {
  StyledList,
  StyledItem,
  StyledName,
  StyledDetails,
  StyledButton
} from "./UsersListPageStyle";

const UserListPage = props => {
  const users = props.users;
  const usersArray = Object.values(users);

  const onClick = event => {
    const userId = event.currentTarget.id;
    props.history.push(`/user/${userId}`);
  };

  const userItems = usersArray.map(user => {
    const { id, name, email, phone, website } = user;
    return (
      <StyledItem key={id}>
        <StyledName>{name}</StyledName>
        <StyledDetails>{email}</StyledDetails>
        <StyledDetails>{phone}</StyledDetails>
        <StyledDetails>{website}</StyledDetails>
        <StyledButton onClick={onClick} id={id}>
          Details
        </StyledButton>
      </StyledItem>
    );
  });

  return (
    <Wrapper>
      <StyledList> {userItems}</StyledList>{" "}
    </Wrapper>
  );
};

const mapStateToProps = state => ({ users: state.users });
export default connect(mapStateToProps)(UserListPage);
