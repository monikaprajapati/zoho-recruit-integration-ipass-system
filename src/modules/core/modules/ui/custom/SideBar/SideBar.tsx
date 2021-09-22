import * as React from "react";
import Sider from "antd/lib/layout/Sider";
import closeSideBar from "./../../../../../../assets/images/png/close-sidebar.png";
import { SideBarOperations } from "../../../../models/enums/core.enums";

type SideBarProps = {
  onToggle: Function;
  isSidebarOpened: boolean;
  title?: any;
  operationType?: any;
};

const SideBar: React.FC<SideBarProps> = (props: any) => {
  const { onToggle, isSidebarOpened, title, operationType } = props;

  const onClose = () => {
    onToggle(true);
  };

  let headerClass;
  let titleClass;

  switch (operationType) {
    case SideBarOperations.DETAIL:
      headerClass =
        "bg-gray-50 py-[20px] px-[30px] flex items-center justify-between fixed w-[400px] z-10";
      titleClass =
        "text-[20px] text-indigo-600 leading-[30px] cursor-pointer font-normal";
      break;
    default:
      headerClass =
        "bg-indigo-600 py-[20px] px-[30px] flex items-center justify-between fixed w-[400px] z-10";
      titleClass =
        "text-[20px] text-white leading-[30px] cursor-pointer font-normal non-italic tracking-[0.01em]";
  }

  return (
    <Sider
      collapsedWidth={0}
      trigger={null}
      collapsible
      collapsed={!isSidebarOpened}
      onCollapse={onClose}
      width={400}
      className="h-screen overflow-y-auto shadow-shadowSideBar bg-white flex-initial absolute top-0 right-0 z-10"
    >
      <div className={headerClass}>
        <p className={titleClass}>{title}</p>
        <span className="cursor-pointer" onClick={onClose}>
          <img src={closeSideBar} alt="cross-icon"></img>
        </span>
      </div>
      {props.children}
    </Sider>
  );
};

export default SideBar;
