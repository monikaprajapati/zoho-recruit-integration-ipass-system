import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./i18n";
import { CoreServiceProvider } from "./modules/core/services/Core.service";
import { CoreFacadeProvider } from "./modules/core/facades/Core.facade";
import { APIServiceProvider } from "./modules/core/services/API.service";
import { AuthRepositoryProvider } from "./modules/auth/repository/Auth.repository";
import { AuthServiceProvider } from "./modules/auth/services/Auth.service";
import { AuthFacadeProvider } from "./modules/auth/facades/Auth.facade";
import { IntegrationFacadeProvider } from "./modules/home/modules/integration/facades/Integration.facade";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback="loading">
        <APIServiceProvider>
          <AuthRepositoryProvider>
            <AuthServiceProvider>
              <AuthFacadeProvider>
                <CoreServiceProvider>
                  <CoreFacadeProvider>
                    <App />
                  </CoreFacadeProvider>
                </CoreServiceProvider>
              </AuthFacadeProvider>
            </AuthServiceProvider>
          </AuthRepositoryProvider>
        </APIServiceProvider>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);