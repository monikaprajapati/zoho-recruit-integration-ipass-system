import * as React from "react";

type ErrorFallbackProps = {};

const ErrorFallback: React.FC<ErrorFallbackProps> = (
  props: ErrorFallbackProps
) => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      {/* <pre style={{ color: "red" }}>{error.message}</pre> */}
    </div>
  );
};

export default ErrorFallback;
