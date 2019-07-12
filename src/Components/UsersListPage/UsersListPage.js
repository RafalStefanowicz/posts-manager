import React from "react";
import { connect } from "react-redux";

const UserListPage = () => {
  return <ul />;
};

const mapStateToProps = state => ({ users: state.users });
export default connect(mapStateToProps)(UserListPage);
