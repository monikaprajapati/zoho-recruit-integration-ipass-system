import * as React from "react";
import { shallow } from "enzyme";
import SideMenuBarContainer from "./SideMenuBarContainer";

describe("SideMenuBarContainer", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<SideMenuBarContainer />);
    expect(wrapper).toMatchSnapshot();
  });
});
