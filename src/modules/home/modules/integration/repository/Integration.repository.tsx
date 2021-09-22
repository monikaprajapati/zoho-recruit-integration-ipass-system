import React, { createContext, useContext } from "react";
import { API_URLS } from "../../../../core/models/enums/core.enums";
import { useAPIService } from "../../../../core/services/API.service";

let operationsAllowed = {};
const IntegrationRepositoryContext = createContext(operationsAllowed);

export const IntegrationRepositoryProvider = (props: any) => {
  const APIService: any = useAPIService();

  const fetchModules = () => {
    const access_token = localStorage.getItem("access_token");
    return APIService.get(
      `${API_URLS.INTEGRATION}/getModules?access_token=${access_token}`
    );
  };

  const subscribeNotification = (formData: any) => {
    const access_token = localStorage.getItem("access_token");
    return APIService.integration(
      `${API_URLS.INTEGRATION}/setNotificationWatch?access_token=${access_token}`,
      formData
    );
  };

  const generateRefreshAccessToken = () => {
    const token = localStorage.getItem("refresh_token");
    return APIService.get(
      `${API_URLS.INTEGRATION}/refreshToken?token=${token}`
    );
  };

  operationsAllowed = {
    fetchModules,
    subscribeNotification,
    generateRefreshAccessToken,
  };

  return (
    <IntegrationRepositoryContext.Provider value={operationsAllowed}>
      {props.children}
    </IntegrationRepositoryContext.Provider>
  );
};

export const useIntegrationRepository = () => {
  return useContext(IntegrationRepositoryContext);
};
