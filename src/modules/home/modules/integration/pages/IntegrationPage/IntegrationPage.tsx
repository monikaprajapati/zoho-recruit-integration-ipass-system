import * as React from "react";
import IntegrationContainer from "../../containers/IntegrationContainer";

type IntegrationProps = {
  //
};

const Integration: React.FC<IntegrationProps> = () => {
  return (
    <div className="h-[550px] flex items-center justify-center bg-white mt-[30px] mb-[30px] ">
      <IntegrationContainer />
    </div>
  );
};

export default Integration;
