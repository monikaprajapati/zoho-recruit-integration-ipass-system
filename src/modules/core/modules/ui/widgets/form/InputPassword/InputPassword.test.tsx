import * as React from "react";
import { shallow } from "enzyme";
import InputPassword from "./InputPassword";

describe("InputPassword", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<InputPassword />);
    expect(wrapper).toMatchSnapshot();
  });
});
