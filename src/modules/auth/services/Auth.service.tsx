import React, { createContext, useContext } from "react";
import { useAuthRepository } from "../repository/Auth.repository";

let operationsAllowed = {};
const AuthServiceContext = createContext(operationsAllowed);

export const AuthServiceProvider = (props: any) => {
  const authRepository: any = useAuthRepository();

  const logIn = (body: any) => {
    return authRepository.logIn(body);
  };

  const getCurrentAuthScreen = () => {
    return authRepository.getCurrentAuthScreen();
  };

  const setNextAuthScreen = (screen: string) => {
    authRepository.setNextAuthScreen(screen);
  };

  const isLoggedIn = () => {
    return authRepository.isLoggedIn();
  };

  const getSession = () => {
    return authRepository.getSession();
  };

  const setSession = (username: string, password: string) => {
    return authRepository.setSession(username, password);
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
    <AuthServiceContext.Provider value={operationsAllowed}>
      {props.children}
    </AuthServiceContext.Provider>
  );
};

export const useAuthService = () => {
  return useContext(AuthServiceContext);
};
