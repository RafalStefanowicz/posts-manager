import React from "react";
import { connect } from "react-redux";

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
      <li key={id}>
        <h1>{name}</h1>
        <h3>{email}</h3>
        <h3>{phone}</h3>
        <h3>{website}</h3>
        <button onClick={onClick} id={id}>
          Details
        </button>
      </li>
    );
  });

  return <ul> {userItems}</ul>;
};

const mapStateToProps = state => ({ users: state.users });
export default connect(mapStateToProps)(UserListPage);
