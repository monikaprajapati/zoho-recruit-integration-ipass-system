import * as React from "react";
import { shallow } from "enzyme";
import CButton from "./CButton";

describe("CButton", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CButton />);
    expect(wrapper).toMatchSnapshot();
  });
});
