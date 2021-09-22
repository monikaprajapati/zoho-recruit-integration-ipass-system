import * as React from "react";
import { shallow } from "enzyme";
import CDatePicker from "./CDatePicker";

describe("CDatePicker", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CDatePicker />);
    expect(wrapper).toMatchSnapshot();
  });
});
