import axios from "axios";
import { createContext, useContext } from "react";
import { authQuery, authStore } from "./../../auth/states/auth";
import { Screen } from "./../../auth/models/enums/auth.enums";
import { Redirect } from "react-router";

let operationsAllowed = {};
const APIServiceContext = createContext(operationsAllowed);

export const APIServiceProvider = (props: any) => {
  axios.interceptors.request.use(function (config) {
    console.log("api service -- request use");
    const session = authQuery.getValue().session;
    config.headers["x-client"] = "mobile";
    if (session.username) {
      config.headers["x-auth-ident"] = session.username;
    }
    return config;
  });

  axios.interceptors.response.use(
    (response) => {
      console.log("api service -- request use success");
      return response;
    },
    (error) => {
      const status = error.response ? error.response.status : null;
      console.log("api service");
      console.log(status);
      if (status === 401) {
        authStore.update({ screen: Screen.LOGIN });
        authStore.update({
          session: { username: "", password: "" },
        });

        <Redirect
          to={{
            pathname: "/auth",
          }}
        />;
      } else {
        return Promise.reject(error);
      }
    }
  );

  const logIn = (url: string, body: any) => {
    return axios
      .post(url, body)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        return error;
      });
  };

  const integration = (url: string, body: any) => {
    return axios
      .post(url, body)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        return error;
      });
  };

  const get = (url: string) => {
    return axios
      .get(url)
      .then(function (response: any) {
        return response;
      })
      .catch(function (error) {
        return error;
      });
  };

  const post = (url: string, body: any) => {
    return axios
      .post(url, body)
      .then(function (response) {
        return Promise.resolve("Created");
      })
      .catch(function (error) {
        return error;
      });
  };

  const put = (url: string, body: any) => {
    return axios
      .put(url, body)
      .then(function (response) {
        return Promise.resolve("updated");
      })
      .catch(function (error) {
        return error;
      });
  };

  const remove = (url: string) => {
    return axios
      .delete(url)
      .then(function (response) {
        return Promise.resolve("deleted");
      })
      .catch(function (error) {
        return error;
      });
  };

  const postFormData = (url: string, body: any) => {
    return axios
      .post(url, body)
      .then(function (response) {
        return Promise.resolve("Created");
      })
      .catch(function (error) {
        return error;
      });
  };

  const putFormData = (url: string, body: any) => {
    return axios
      .put(url, body)
      .then(function (response) {
        return Promise.resolve("updated");
      })
      .catch(function (error) {
        return error;
      });
  };

  operationsAllowed = {
    logIn,
    get,
    post,
    put,
    remove,
    postFormData,
    putFormData,
    integration
  };

  return (
    <APIServiceContext.Provider value={operationsAllowed}>
      {props.children}
    </APIServiceContext.Provider>
  );
};

export const useAPIService = () => {
  return useContext(APIServiceContext);
};
