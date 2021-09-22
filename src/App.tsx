import React from "react";
import "./App.less";
import { AppRoutes } from "./AppRoutes";
import { useCoreFacade } from "./modules/core/facades/Core.facade";

const App = () => {
  // set up akita store and crypto
  const coreFacade: any = useCoreFacade();
  coreFacade.setUpApplication();

  return (
    <div className="App font-inter text-[16px] leading-[24px]">
      <AppRoutes></AppRoutes>
    </div>
  );
};

export default App;
