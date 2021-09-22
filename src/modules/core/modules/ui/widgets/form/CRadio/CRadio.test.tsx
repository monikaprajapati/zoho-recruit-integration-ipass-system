import * as React from "react";
import { shallow } from "enzyme";
import CRadio from "./CRadio";

describe("CRadio", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CRadio />);
    expect(wrapper).toMatchSnapshot();
  });
});
