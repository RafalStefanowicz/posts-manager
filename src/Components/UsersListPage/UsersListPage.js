import React from "react";
import { connect } from "react-redux";

const UserListPage = props => {
  const users = props.users;
  const usersArray = Object.values(users);
  const userItems = usersArray.map(user => {
    const { id, name, email, phone, website } = user;
    return (
      <li key={id}>
        <h1>{name}</h1>
        <h3>{email}</h3>
        <h3>{phone}</h3>
        <h3>{website}</h3>
        <button name={id}>Details</button>
      </li>
    );
  });
  return <ul> {userItems}</ul>;
};

const mapStateToProps = state => ({ users: state.users });
export default connect(mapStateToProps)(UserListPage);
