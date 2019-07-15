import React from "react";
import { Router, Switch, Route } from "react-router-dom";

import { USERSLIST, USER } from "../../constants/routes";
import UserListPage from "../UsersListPage/UsersListPage";
import UserPage from "../UserPage/UserPage";
import history from "../../history/history";
const Page = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path={USER} component={UserPage} />
        <Route path={USERSLIST} component={UserListPage} />
      </Switch>
    </Router>
  );
};
export default Page;
