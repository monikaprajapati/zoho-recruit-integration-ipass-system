import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import PageNotFound from "../../../core/presentations/PageNotFound";
import DashboardPage from "./pages/DashboardPage";

export const DashboardRoutes = () => {
  const match = useRouteMatch();
  console.log(match);
  return (
    <Switch>
      <Route path={match.path + "/"} exact={true}>
        <DashboardPage />
      </Route>
      <Route>
        <PageNotFound />
      </Route>
    </Switch>
  );
};
