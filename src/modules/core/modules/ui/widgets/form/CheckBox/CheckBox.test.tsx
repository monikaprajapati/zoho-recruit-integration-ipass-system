import * as React from "react";
import { shallow } from "enzyme";
import CheckBox from "./CheckBox";

describe("CheckBox", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CheckBox />);
    expect(wrapper).toMatchSnapshot();
  });
});
