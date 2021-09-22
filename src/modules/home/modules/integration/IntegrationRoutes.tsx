import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import PageNotFound from "../../../core/presentations/PageNotFound";
import IntegrationPage from "./pages/IntegrationPage";

export const IntegrationRoutes = () => {
  const match = useRouteMatch();
  console.log(match);
  return (
    <Switch>
      <Route path={"/home/integration"}>
        <IntegrationPage />
      </Route>
      <Route>
        <PageNotFound />
      </Route>
    </Switch>
  );
};
