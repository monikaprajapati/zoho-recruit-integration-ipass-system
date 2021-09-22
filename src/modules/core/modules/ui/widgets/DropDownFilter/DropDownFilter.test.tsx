import * as React from "react";
import { shallow } from "enzyme";
import DropDownFilter from "./DropDownFilter";

describe("DropDownFilter", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<DropDownFilter />);
    expect(wrapper).toMatchSnapshot();
  });
});
