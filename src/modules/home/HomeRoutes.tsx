import React from "react";
import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import PageNotFound from "../core/presentations/PageNotFound";
import { Dashboard } from "./modules/dashboard/Dashboard";
import { Integration } from "./modules/integration/Integration";

export const HomeRoutes = () => {
  const match = useRouteMatch();
  console.log("Home routes :: ",match.path);
  return (
    <Switch>
      <Route path={match.path + "/dashboard"}>
        <Dashboard />
      </Route>

      <Route path={match.path + "/integration"}>
        <Integration />
      </Route>

      <Redirect
        path={match.path + "/"}
        exact={true}
        to={match.path + "/dashboard"}
      ></Redirect>

      <Route>
        <PageNotFound />
      </Route>
    </Switch>
  );
};
