import * as React from "react";
import { shallow } from "enzyme";
import ActionsTemplate from "./ActionsTemplate";

describe("ActionsTemplate", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ActionsTemplate />);
    expect(wrapper).toMatchSnapshot();
  });
});
