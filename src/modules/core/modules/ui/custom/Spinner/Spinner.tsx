import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import * as React from "react";
import "./Spinner.less";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const Spinner: React.FC<any> = () => {
  return <Spin indicator={antIcon} />;
};

export default Spinner;
