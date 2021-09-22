import { akitaDevtools, persistState, resetStores } from "@datorama/akita";
import React, { createContext, useContext } from "react";
import SimpleCrypto from "simple-crypto-js";
import { CoreConstants } from "../models/constants/core.constants";

let operationsAllowed = {};
const CoreServiceContext = createContext(operationsAllowed);

export const CoreServiceProvider = (props: any) => {
  let simpleCrypto: SimpleCrypto;
  let persistStorage: any;

  const setUpApplication = (body: any) => {
    setupCryptography();
    setupStateManagement();
  };

  const tearDownApplication = () => {
    resetStateManagement();
  };

  const setupCryptography = () => {
    simpleCrypto = new SimpleCrypto(CoreConstants.APP_SECRET_KEY);
  };

  const setupStateManagement = () => {
    console.log(process.env.NODE_ENV);
    if (process.env.NODE_ENV !== "production") {
      console.log(akitaDevtools());
      akitaDevtools();
    }

    persistStorage = persistState({
      include: ["auth"],
      preStorageUpdate(storeName, state) {
        console.log("pre storage update");
        // This function is called before storing data into local storgage.
        if (simpleCrypto) {
          return simpleCrypto.encrypt(state);
        }
        return state;
      },
      preStoreUpdate(storeName, state) {
        // This function is called before storing data in in-memory storage.
        // E.g, what you see in Redux tab in browser.
        if (simpleCrypto) {
          console.log("pre store update");
          return simpleCrypto.decrypt(state);
        }
        console.log("pre store update " + state);
        return state;
      },
    });
  };

  const resetStateManagement = () => {
    resetStores();

    if (persistStorage) {
      // It is important to execute this transaction as async operation because we need to wait for 'resetStores' to complete the process.
      setTimeout(() => {
        persistStorage.clearStore();
      }, 0);
    }
  };

  operationsAllowed = {
    setUpApplication,
    tearDownApplication,
  };

  return (
    <CoreServiceContext.Provider value={operationsAllowed}>
      {props.children}
    </CoreServiceContext.Provider>
  );
};

export const useCoreService = () => {
  return useContext(CoreServiceContext);
};
