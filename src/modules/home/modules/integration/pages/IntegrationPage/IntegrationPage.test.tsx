import * as React from "react";
import { shallow } from "enzyme";
import Integration from "./IntegrationPage";

describe("Integration", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Integration />);
    expect(wrapper).toMatchSnapshot();
  });
});
