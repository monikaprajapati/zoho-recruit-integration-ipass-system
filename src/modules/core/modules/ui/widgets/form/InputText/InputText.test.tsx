import * as React from "react";
import { shallow } from "enzyme";
import InputText from "./InputText";

describe("InputText", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<InputText />);
    expect(wrapper).toMatchSnapshot();
  });
});
