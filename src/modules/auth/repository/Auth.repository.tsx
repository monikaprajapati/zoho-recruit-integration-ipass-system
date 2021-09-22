import React, { createContext, useContext } from "react";
import { useAPIService } from "../../core/services/API.service";
import { API_URLS } from "../models/enums/auth.enums";
import { authQuery, authStore } from "../states/auth";

let operationsAllowed = {};
const AuthRepositoryContext = createContext(operationsAllowed);

export const AuthRepositoryProvider = (props: any) => {
  const APIService: any = useAPIService();

  const logIn = (body: any) => {
    return APIService.logIn(API_URLS.LOGIN, body);
  };

  const getCurrentAuthScreen = () => {
    return authQuery.getValue().screen;
  };

  const setNextAuthScreen = (screen: string) => {
    authStore.update({ screen: screen });
  };

  const isLoggedIn = () => {
    return authQuery.getValue().session;
  };

  const getSession = () => {
    return authQuery.getValue().session;
  };

  const setSession = (username: string, password: string) => {
    return authStore.update({
      session: { username: username, password: password },
    });
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
    <AuthRepositoryContext.Provider value={operationsAllowed}>
      {props.children}
    </AuthRepositoryContext.Provider>
  );
};

export const useAuthRepository = () => {
  return useContext(AuthRepositoryContext);
};
