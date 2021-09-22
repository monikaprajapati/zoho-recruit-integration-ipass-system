import * as React from "react";
import { shallow } from "enzyme";
import AddTemplate from "./AddTemplate";

describe("AddTemplate", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<AddTemplate />);
    expect(wrapper).toMatchSnapshot();
  });
});
