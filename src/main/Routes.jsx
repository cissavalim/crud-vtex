import React from "react";
import { Switch, Route, Redirect } from "react-router";

import Home from "../components/home/Home";
import ProdCrud from "../components/product/ProdCrud";
import UserCrud from "../components/user/UserCrud";

export default (props) => (
   <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/users" component={UserCrud} />
      <Route path="/products" component={ProdCrud} />
      <Redirect from="*" to="/" />
   </Switch>
);
