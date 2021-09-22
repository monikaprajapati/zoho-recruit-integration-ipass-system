import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import PageNotFound from "../core/presentations/PageNotFound";
import AuthPage from "./pages/AuthPage";

export const AuthRoutes = () => {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route path={match.path + "/"} exact={true}>
        <AuthPage />
      </Route>
      <Route>
        <PageNotFound />
      </Route>
    </Switch>
  );
};
