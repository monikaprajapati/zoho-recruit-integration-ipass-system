import * as React from "react";
import { useLocation, useHistory } from "react-router-dom";
import LoginContainer from "../../containers/LoginContainer";
import { useAuthFacade } from "../../facades/Auth.facade";
import "./AuthPage.less";
import 'antd/dist/antd.css'

const AuthPage: React.FC<any> = () => {
  let history = useHistory();
  const authFacade: any = useAuthFacade();
  const [screen, setScreen] = React.useState(authFacade.getCurrentAuthScreen());

  const handleLoginSuccess = (response: any) => {
    console.log(" === handle login success === ");
    const { username, password } = response.data;
    authFacade.setSession(username, password);
    history.push("/home/dashboard");
  };

  switch (screen) {
    default:
      return <LoginContainer onLoginSuccessful={handleLoginSuccess} />;
  }
};

export default AuthPage;
