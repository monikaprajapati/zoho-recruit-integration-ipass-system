import * as React from "react";
import { shallow } from "enzyme";
import ValueTemplate from "./ValueTemplate";

describe("ValueTemplate", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ValueTemplate />);
    expect(wrapper).toMatchSnapshot();
  });
});
