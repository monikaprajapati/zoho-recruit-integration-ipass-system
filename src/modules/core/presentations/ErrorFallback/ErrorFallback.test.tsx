import * as React from "react";
import { shallow } from "enzyme";
import ErrorFallback from "./ErrorFallback";

describe("ErrorFallback", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ErrorFallback />);
    expect(wrapper).toMatchSnapshot();
  });
});
