import React from "react";
import { AuthRoutes } from "./AuthRoutes";
import { useAuthFacade } from "./facades/Auth.facade";
import { useHistory } from "react-router";

export const Auth = () => {
  const authFacade: any = useAuthFacade();
  let history = useHistory();

  if (authFacade.isLoggedIn()) {
    history.push("/home");
  }

  return (
    <div className="w-full items-center min-h-screen auth-backgound p-[50px]">
      <AuthRoutes></AuthRoutes>
    </div>
  );
};
