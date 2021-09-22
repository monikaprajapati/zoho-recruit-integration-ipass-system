import * as React from "react";
import { shallow } from "enzyme";
import DashboardPage from "./DashboardPage";

describe("DashboardPage", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<DashboardPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
