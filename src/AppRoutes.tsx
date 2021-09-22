import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Auth } from "./modules/auth/Auth";
import PageNotFound from "./modules/core/presentations/PageNotFound";
import ProtectedRoute from "./modules/core/presentations/ProtectedRoute";
import { Home } from "./modules/home/Home";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/auth"}>
          <Auth />
        </Route>

        <ProtectedRoute component={Home} path={"/home"}></ProtectedRoute>

        <Redirect path={"/"} exact={true} to={"/home"}></Redirect>

        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
