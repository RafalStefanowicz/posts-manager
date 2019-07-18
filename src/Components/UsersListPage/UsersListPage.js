import React from "react";
import { connect } from "react-redux";

import { USER } from "../../constants/routes";
import { Wrapper } from "../../styles/common";
import {
  StyledList,
  StyledItem,
  StyledName,
  StyledDetails,
  StyledLink
} from "./usersListPageStyle";

const UserListPage = props => {
  const users = props.users;
  const usersArray = Object.values(users);

  const userItems = usersArray.map(user => {
    const { id, name, email, phone, website } = user;
    return (
      <StyledItem key={id}>
        <StyledName>{name}</StyledName>
        <StyledDetails>{email}</StyledDetails>
        <StyledDetails>{phone}</StyledDetails>
        <StyledDetails>{website}</StyledDetails>
        <StyledLink to={USER + id}>Details</StyledLink>
      </StyledItem>
    );
  });

  return (
    <Wrapper>
      <StyledList>{userItems}</StyledList>
    </Wrapper>
  );
};

const mapStateToProps = state => ({ users: state.users });

export default connect(mapStateToProps)(UserListPage);
