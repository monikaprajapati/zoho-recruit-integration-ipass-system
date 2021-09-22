import * as React from "react";
import { Menu } from "antd";
import { Link, useHistory, useLocation } from "react-router-dom";
import arrow from "../../../../assets/images/png/arrow-sidebar.png";
import { useTranslation } from "react-i18next";
import "./SideMenuBar.less";

type SideMenuBarProps = {
  onToggle: Function;
  menuItems: Array<any>;
};

const SideMenuBar: React.FC<SideMenuBarProps> = (props: SideMenuBarProps) => {
  const { onToggle, menuItems } = props;
  let menu;
  let currentSelection = 0;
  let location = useLocation();
  const history = useHistory();
  const { t } = useTranslation();

  const getImage = (image: any) => {
    return require("../../../../assets/images/png/" + image).default;
  };

  const onToggleFunction = () => {
    onToggle();
  };

  if (menuItems instanceof Array) {
    currentSelection = menuItems.findIndex(
      (e) => e.routeUrl === "/" + location.pathname.split("/")[2]
    );
    menu = menuItems.map((item: any, index: number) => {
      return (
        <Menu.Item
          key={index}
          icon={<img src={getImage(item.icon)} alt="menu-items"></img>}
          className="py-[16px] px-[12px] h-[48px] mb-0 rounded-[4px]"
        >
          <Link to={"/home" + item.routeUrl} />
          {t(item.labelKey)}
        </Menu.Item>
      );
    });
  }

  return (
    <React.Fragment>
      <div className="h-[65px]">
        <h3 className="full-logo cursor-pointer pl-[16px] py-[24px] logo pointer-events-none">
          {" "}
          MINT Zoho Recruit{" "}
        </h3>
        &nbsp;
        <img
          src={arrow}
          alt="arrow"
          className="arrow absolute top-[30px] right-[13px] cursor-pointer"
          onClick={onToggleFunction}
        ></img>
      </div>

      <Menu
        theme="dark"
        defaultSelectedKeys={[currentSelection.toString()]}
        mode="inline"
        className="p-[16px] bg-indigo-900"
      >
        {menu}
      </Menu>
    </React.Fragment>
  );
};

export default SideMenuBar;
