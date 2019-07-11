import React from "react";
import { connect } from "react-redux";

import fetchUsers from "../../actions/fetchUsers";

class App extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    return <div>APP</div>;
  }
}
const mapStateToProps = state => ({ users: state.users });
const mapDispatchToProps = { fetchUsers };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
