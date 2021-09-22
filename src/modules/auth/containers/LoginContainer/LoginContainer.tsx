import * as React from "react";
import { useAuthFacade } from "../../facades/Auth.facade";
import Login from "../../presentations/Login";

type LoginContainerProps = {
  onLoginSuccessful: Function;
};

const LoginContainer: React.FC<LoginContainerProps> = (
  props: LoginContainerProps
) => {
  const { onLoginSuccessful } = props;
  const [error, setError] = React.useState(false);
  const authFacade: any = useAuthFacade();

  const handleOnSubmit = (data: any) => {
    setError(false);
    // pass data in form data format
    const formData = new URLSearchParams();
    formData.append("username", data.username);
    formData.append("password", data.password);

    authFacade.logIn(formData).then((response: any) => {
      if (response && response.status === 200) {
        onLoginSuccessful(response);
      } else {
        setError(true);
      }
    });
  };

  return <Login onSubmit={handleOnSubmit} error={error}></Login>;
};

export default LoginContainer;
