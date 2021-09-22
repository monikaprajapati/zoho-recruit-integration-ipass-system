import * as React from "react";
import { shallow } from "enzyme";
import ErrorMessage from "./ErrorMessage";

describe("ErrorMessage", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ErrorMessage />);
    expect(wrapper).toMatchSnapshot();
  });
});
