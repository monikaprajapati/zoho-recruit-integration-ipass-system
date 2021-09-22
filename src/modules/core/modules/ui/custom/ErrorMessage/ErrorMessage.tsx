import * as React from "react";

type ErrorMessageProps = {
  message: string;
};

const ErrorMessage: React.FC<ErrorMessageProps> = (
  props: ErrorMessageProps
) => {
  const { message } = props;
  return (
    <p className="text-red-500 text-[14px] mt-[20px] text-center">{message}</p>
  );
};

export default ErrorMessage;
