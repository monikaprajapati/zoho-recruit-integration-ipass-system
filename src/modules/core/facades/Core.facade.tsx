import React, { createContext, useContext } from "react";
import { useCoreService } from "../services/Core.service";

let operationsAllowed = {};
const CoreFacadeContext = createContext(operationsAllowed);

export const CoreFacadeProvider = (props: any) => {
  const CoreService: any = useCoreService();

  const setUpApplication = () => {
    return CoreService.setUpApplication();
  };

  operationsAllowed = {
    setUpApplication,
  };

  return (
    <CoreFacadeContext.Provider value={operationsAllowed}>
      {props.children}
    </CoreFacadeContext.Provider>
  );
};

export const useCoreFacade = () => {
  return useContext(CoreFacadeContext);
};
