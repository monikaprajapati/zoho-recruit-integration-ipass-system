import * as React from "react";
import { shallow } from "enzyme";
import CSelect from "./CSelect";

describe("CSelect", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CSelect />);
    expect(wrapper).toMatchSnapshot();
  });
});
