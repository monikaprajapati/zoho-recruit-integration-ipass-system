import * as React from "react";
import Integration from "../../presentations/Integration";
import { useLocation } from "react-router-dom";
import { useIntegrationFacade } from "../../facades/Integration.facade";
import checkEndDateTimeOfAccessToken from "../../../../../core/functions/core.function";

type IntegrationContainerProps = {
  access_token: String;
};

const IntegrationContainer: React.FC<any> = (
  props: IntegrationContainerProps
) => {
  const [showElements, setShowElements] = React.useState(false);
  const [showAlert, setShowAlert] = React.useState("");
  const [modulesData, setModulesData] = React.useState([]);
  const search = useLocation().search;
  const integrationFacade: any = useIntegrationFacade();
  let localStorageItems: string[][] = [];

  React.useEffect(() => {
    let access_token = new URLSearchParams(search).get("access_token");
    let refresh_token = new URLSearchParams(search).get("refresh_token");
    let expires_in = new URLSearchParams(search).get("expires_in");
    let accessTokenLocalStorage = localStorage.getItem("access_token");
    let refreshTokenLocalStorage = localStorage.getItem("refresh_token");
    let expiresInLocalStorage = new URLSearchParams(search).get("expires_in");

    // set access token, refresh token, expires which getting from oauth 2 api
    if (
      access_token &&
      refresh_token &&
      expires_in &&
      !accessTokenLocalStorage &&
      !refreshTokenLocalStorage &&
      expiresInLocalStorage
    ) {
      let endDateTimeOfAccessToken = getEndTimeAccessToken();
      localStorageItems.push(
        ["access_token", access_token],
        ["refresh_token", refresh_token],
        ["expires_in", expires_in],
        ["endDateTimeOfAccessToken", endDateTimeOfAccessToken.toString()]
      );
      setLocalStorageValues(localStorageItems);
      getModules();
    }

    if (accessTokenLocalStorage) {
      let isRequiredCallRefreshToken = checkEndDateTimeOfAccessToken(
        localStorage.getItem("endDateTimeOfAccessToken")
      );
      if (isRequiredCallRefreshToken) {
        integrationFacade.generateRefreshAccessToken().then((response: any) => {
          let newAccessToken = response.data.response.access_token;
          let endDateTimeOfAccessToken = getEndTimeAccessToken();
          localStorageItems.push(
            ["access_token", newAccessToken],
            ["endDateTimeOfAccessToken", endDateTimeOfAccessToken.toString()]
          );
          setLocalStorageValues(localStorageItems);
          getModules();
        });
      } else {
        getModules();
      }
    }
  }, []);

  // get modules from zoho recruit
  const getModules = () => {
    console.log("===== get modules =====");
    integrationFacade.fetchModules().then((response: any) => {
      let zohoRecruitModules = response.data.response;
      const modules = zohoRecruitModules.map((key: any, index: any) => {
        return key.content.replace(/ /g, "_");
      });
      setModulesData(modules);
      setShowElements(true);
    });
  };

  const handleOnSubmit = (data: any) => {
    const formData = new URLSearchParams();
    formData.append("event", data.event);
    formData.append("module", data.module);
    formData.append("url", data.url);

    let isRequiredCallRefreshToken = checkEndDateTimeOfAccessToken(
      localStorage.getItem("endDateTimeOfAccessToken")
    );
    if (isRequiredCallRefreshToken) {
      integrationFacade.generateRefreshAccessToken().then((response: any) => {
        let newAccessToken = response.data.response.access_token;
        let endDateTimeOfAccessToken = getEndTimeAccessToken();
        localStorageItems.push(
          ["access_token", newAccessToken],
          ["endDateTimeOfAccessToken", endDateTimeOfAccessToken.toString()]
        );
        setLocalStorageValues(localStorageItems);
        subscribeNotification(formData);
      });
    } else {
      subscribeNotification(formData);
    }
  };

  // subscribe event for notification
  const subscribeNotification = (formData: any) => {
    integrationFacade.subscribeNotification(formData).then((response: any) => {
      if (response && response.status === 200) {
        setShowAlert(response.data.response.message);
      } else {
        setShowAlert(response.data.response.message);
      }
    });
  };

  const getEndTimeAccessToken = () => {
    var endDateTimeOfAccessToken = new Date();
    endDateTimeOfAccessToken.setHours(endDateTimeOfAccessToken.getHours() + 1);
    return endDateTimeOfAccessToken;
  };

  // set multiple fields and their value in localstorage
  const setLocalStorageValues = (data: string[][]) => {
    data.forEach((values) => {
      let valuesOfObject = Object.values(values);
      localStorage.setItem(valuesOfObject[0], valuesOfObject[1]);
    });
  };

  return (
    <Integration
      showElements={showElements}
      modulesData={modulesData}
      onSubmit={handleOnSubmit}
      alertMessage={showAlert}
    ></Integration>
  );
};

export default IntegrationContainer;
