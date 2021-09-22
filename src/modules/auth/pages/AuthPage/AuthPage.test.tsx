import * as React from "react";
import { shallow } from "enzyme";
import AuthPage from "./AuthPage";

describe("AuthPage", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<AuthPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
