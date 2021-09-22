import * as React from "react";
import { shallow } from "enzyme";
import CSubmitButton from "./CSubmitButton";

describe("CSubmitButton", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CSubmitButton />);
    expect(wrapper).toMatchSnapshot();
  });
});
