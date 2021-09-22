import React from "react";
import { IntegrationFacadeProvider } from "./facades/Integration.facade";
import { IntegrationRoutes } from "./IntegrationRoutes";
import { IntegrationRepositoryProvider } from "./repository/Integration.repository";
import { IntegrationServiceProvider } from "./services/Integration.service";

export const Integration = () => {
  return (
    <IntegrationRepositoryProvider>
      <IntegrationServiceProvider>
        <IntegrationFacadeProvider>
          <IntegrationRoutes></IntegrationRoutes>
        </IntegrationFacadeProvider>
      </IntegrationServiceProvider>
    </IntegrationRepositoryProvider>
  );
};
