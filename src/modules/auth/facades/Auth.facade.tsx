import React, { createContext, useContext } from "react";
import { useAuthService } from "../services/Auth.service";

let operationsAllowed = {};
const AuthFacadeContext = createContext(operationsAllowed);

export const AuthFacadeProvider = (props: any) => {
  const authService: any = useAuthService();

  const logIn = (body: any) => {
    return authService.logIn(body);
  };

  const getCurrentAuthScreen = () => {
    return authService.getCurrentAuthScreen();
  };

  const setNextAuthScreen = (screen: string) => {
    authService.setNextAuthScreen(screen);
  };

  const isLoggedIn = () => {
    let session = authService.isLoggedIn();
    if (session.username) {
      return true;
    }
    return false;
  };

  const getSession = () => {
    return authService.getSession();
  };

  const setSession = (username: string, password: string) => {
    return authService.setSession(username, password);
  };

  operationsAllowed = {
    logIn,
    getCurrentAuthScreen,
    setNextAuthScreen,
    isLoggedIn,
    getSession,
    setSession
  };

  return (
    <AuthFacadeContext.Provider value={operationsAllowed}>
      {props.children}
    </AuthFacadeContext.Provider>
  );
};

export const useAuthFacade = () => {
  return useContext(AuthFacadeContext);
};
