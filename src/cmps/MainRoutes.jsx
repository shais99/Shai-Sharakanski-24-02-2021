import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home } from "../pages/Home";
import { Favorites } from "../pages/Favorites";

export const MainRoutes = () => {
  return (
    <Switch>
      <Route component={Favorites} path="/favorites" />
      <Route component={Home} path="/" />
    </Switch>
  );
};
