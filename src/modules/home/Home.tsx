import { Layout } from "antd";
import React from "react";
import { useHistory } from "react-router";
import { useAuthFacade } from "../auth/facades/Auth.facade";
import SideMenuBarContainer from "./containers/SideMenuBarContainer";
import { HomeRoutes } from "./HomeRoutes";
const { Sider, Content } = Layout;

export const Home = () => {
  const authFacade: any = useAuthFacade();
  let history = useHistory();

  if (!authFacade.isLoggedIn()) {
    history.push("/auth");
  }
  const [collapsed, setcollapsed] = React.useState(false);

  const onCollapse = () => {
    setcollapsed(!collapsed);
  };

  return (
    <Layout className="ant-layout-has-sider">
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
        className="h-screen bg-indigo-900 w-[220px] flex-initial text-white font-semibold"
      >
        <SideMenuBarContainer onToggle={onCollapse}></SideMenuBarContainer>
      </Sider>

      <Layout>
        <Content className="bg-gray-200 px-[40px] h-screen overflow-y-auto">
          <HomeRoutes></HomeRoutes>
        </Content>
      </Layout>
    </Layout>
  );
};
