import React, { createContext, useContext } from "react";
import { useIntegrationService } from "../services/Integration.service";

let operationsAllowed = {};
const IntegrationFacadeContext = createContext(operationsAllowed);

export const IntegrationFacadeProvider = (props: any) => {
  const integrationService: any = useIntegrationService();

  const fetchModules = () => {
    return integrationService.fetchModules();
  };

  const subscribeNotification = (formData: any) => {
    return integrationService.subscribeNotification(formData);
  };

  const generateRefreshAccessToken = () => {
    return integrationService.generateRefreshAccessToken();
  };

  operationsAllowed = {
    fetchModules,
    subscribeNotification,
    generateRefreshAccessToken,
  };

  return (
    <IntegrationFacadeContext.Provider value={operationsAllowed}>
      {props.children}
    </IntegrationFacadeContext.Provider>
  );
};

export const useIntegrationFacade = () => {
  return useContext(IntegrationFacadeContext);
};
