import { Dropdown, Menu } from "antd";
import * as React from "react";
import threeDots from "./../../../../../../assets/images/png/three-dots.png";

type MissionActionsTemplateProps = {
  action: Function;
  actionTypes: Array<any>;
};

const ActionsTemplate: React.FC<MissionActionsTemplateProps> = (
  props: MissionActionsTemplateProps
) => {
  const { action, actionTypes } = props;

  let menu = (
    <Menu className="w-[150px]">
      {actionTypes.map((item: any, index: number) => {
        return (
          <Menu.Item key={item}>
            <span
              onClick={() => {
                action(item);
              }}
            >
              {item}
            </span>
          </Menu.Item>
        );
      })}
    </Menu>
  );

  return (
    <Dropdown overlay={menu} placement="bottomLeft" trigger={["click"]}>
      <span className="ant-dropdown-link absolute h-[100%] w-[100%] left-0 top-0 flex items-center justify-center">
        <img src={threeDots} alt="mission-action"></img>
      </span>
    </Dropdown>
  );
};

export default ActionsTemplate;
