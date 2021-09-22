import * as React from "react";
import { shallow } from "enzyme";
import DateAndTimeTemplate from "./DateAndTimeTemplate";

describe("DateAndTimeTemplate", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<DateAndTimeTemplate />);
    expect(wrapper).toMatchSnapshot();
  });
});
