import * as React from "react";
import SideMenuBar from "../../presentations/SideMenuBar";
import { HomeConstants } from "../../models/constants/home.constants";

type SideMenuBarContainerProps = {
  onToggle: Function;
};

const SideMenuBarContainer: React.FC<SideMenuBarContainerProps> = (
  props: SideMenuBarContainerProps
) => {
  const { onToggle } = props;
  const menuItems = HomeConstants.SideMenuBarItems;

  const onToggleFunction = () => {
    onToggle();
  };

  return (
    <SideMenuBar
      onToggle={onToggleFunction}
      menuItems={menuItems}
    ></SideMenuBar>
  );
};

export default SideMenuBarContainer;
