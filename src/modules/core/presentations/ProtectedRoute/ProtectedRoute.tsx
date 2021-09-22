import * as React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { useAuthFacade } from "../../../auth/facades/Auth.facade";

interface ProtectedRouteProps extends RouteProps {
  component: any;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = (
  props: ProtectedRouteProps
) => {
  const authFacade: any = useAuthFacade();
  const { component: Component, ...rest } = props;

  let isSignedIn = false;
  if (authFacade.isLoggedIn()) {
    isSignedIn = true;
  }

  return (
    <Route
      {...rest}
      render={(routeProps) =>
        isSignedIn ? (
          <Component {...routeProps} />
        ) : (
          <Redirect
            to={{
              pathname: "/auth",
            }}
          />
        )
      }
    />
  );
};

export default ProtectedRoute;
