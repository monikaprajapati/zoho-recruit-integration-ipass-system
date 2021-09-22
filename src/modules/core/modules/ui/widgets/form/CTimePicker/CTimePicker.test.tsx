import * as React from "react";
import { shallow } from "enzyme";
import CTimePicker from "./CTimePicker";

describe("CTimePicker", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CTimePicker />);
    expect(wrapper).toMatchSnapshot();
  });
});
