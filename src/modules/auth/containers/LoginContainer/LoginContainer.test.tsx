import * as React from "react";
import { shallow } from "enzyme";
import LoginContainer from "./LoginContainer";

describe("LoginContainer", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<LoginContainer />);
    expect(wrapper).toMatchSnapshot();
  });
});
