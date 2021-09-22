import * as React from "react";
import { shallow } from "enzyme";
import DurationTemplate from "./DurationTemplate";

describe("DurationTemplate", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<DurationTemplate />);
    expect(wrapper).toMatchSnapshot();
  });
});
