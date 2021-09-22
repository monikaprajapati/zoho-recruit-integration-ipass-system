import * as React from "react";
import { shallow } from "enzyme";
import DatePickerFilter from "./DatePickerFilter";

describe("DatePickerFilter", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<DatePickerFilter />);
    expect(wrapper).toMatchSnapshot();
  });
});
