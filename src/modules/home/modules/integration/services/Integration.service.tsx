import React, { createContext, useContext } from "react";
import { useIntegrationRepository } from "../repository/Integration.repository";

let operationsAllowed = {};
const IntegrationServiceContext = createContext(operationsAllowed);

export const IntegrationServiceProvider = (props: any) => {
  const integrationRepository: any = useIntegrationRepository();

  const fetchModules = () => {
    return integrationRepository.fetchModules();
  };

  const subscribeNotification = (formData: any) => {
    return integrationRepository.subscribeNotification(formData);
  };

  const generateRefreshAccessToken = () => {
    return integrationRepository.generateRefreshAccessToken();
  };

  operationsAllowed = {
    fetchModules,
    subscribeNotification,
    generateRefreshAccessToken,
  };

  return (
    <IntegrationServiceContext.Provider value={operationsAllowed}>
      {props.children}
    </IntegrationServiceContext.Provider>
  );
};

export const useIntegrationService = () => {
  return useContext(IntegrationServiceContext);
};
