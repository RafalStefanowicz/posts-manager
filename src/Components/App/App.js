import React from "react";
import { connect } from "react-redux";

import Page from "../Page/Page";
import Loader from "../Loader/Loader";
import fetchUsers from "../../actions/fetchUsers";

class App extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }
  render() {
    const users = this.props.users;
    return users ? <Page /> : <Loader />;
  }
}
const mapStateToProps = state => ({ users: state.users });
const mapDispatchToProps = { fetchUsers };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
