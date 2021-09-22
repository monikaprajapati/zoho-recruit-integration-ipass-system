import * as React from "react";
import { shallow } from "enzyme";
import SideMenuBar from "./SideMenuBar";

describe("SideMenuBar", () => {
  test("matches snapshot", () => {
    const onToggleFunction = () => {
    };
    const menuItems: Array<any> = [];
    expect(wrapper).toMatchSnapshot();
  });
});
