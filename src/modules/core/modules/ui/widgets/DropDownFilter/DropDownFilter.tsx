import { Dropdown, Menu } from "antd";
import SubMenu from "antd/lib/menu/SubMenu";
import * as React from "react";
import Chevron from "./../../../../../../assets/images/png/Chevron.png";
import "./DropDownFilter.less";

type DropDownProps = {
  label: string;
};

const DropDown: React.FC<DropDownProps> = (props: DropDownProps) => {
  const { label } = props;

  const menu = (
    <Menu>
      <Menu.Item key="m1">
        <span>Status</span>
      </Menu.Item>
      <SubMenu title="Mission Type" key="1">
        <Menu.Item key="m2">Fence Geo</Menu.Item>
        <Menu.Item key="m3">Perimeter 1 </Menu.Item>
        <Menu.Item key="m4">Fence North</Menu.Item>
        <Menu.Item key="m5">Animal check</Menu.Item>
        <Menu.Item key="m6">North East</Menu.Item>
        <Menu.Item key="m7">Perimeter 2</Menu.Item>
      </SubMenu>
      <SubMenu title="Pilot" key="2">
        <Menu.Item key="m8">Fence Geo</Menu.Item>
        <Menu.Item key="m9">Perimeter 1 </Menu.Item>
        <Menu.Item key="m10">Fence North</Menu.Item>
        <Menu.Item key="m11">Animal check</Menu.Item>
        <Menu.Item key="m12">North East</Menu.Item>
        <Menu.Item key="m13">Perimeter 2</Menu.Item>
      </SubMenu>
      <Menu.Item key="m14">
        <span>UAV</span>
      </Menu.Item>
    </Menu>
  );
  return (
    <div className="text-blue-500 border-[1px] border-blue-500 py-[5px] px-[10px]">
      <Dropdown overlay={menu} placement="bottomLeft" trigger={["click"]}>
        <span className="ant-dropdown-link font-normal text-[14px] leading-[21px] cursor-pointer">
          {label}
          <img
            src={Chevron}
            alt="arrow"
            className="inline-block relative pl-[6px] top-[-1px] "
          ></img>
        </span>
      </Dropdown>
    </div>
  );
};

export default DropDown;
