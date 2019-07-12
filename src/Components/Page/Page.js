import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { USERSLIST, USER } from "../../constants/routes";
import UserListPage from "../UsersListPage/UsersListPage";
import UserPage from "../UserPage/UserPage";
const Page = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={USER} component={UserPage} />
      </Switch>
      <Switch>
        <Route path={USERSLIST} component={UserListPage} />
      </Switch>
    </BrowserRouter>
  );
};
export default Page;
