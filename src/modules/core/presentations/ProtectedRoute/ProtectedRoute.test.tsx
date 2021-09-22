import * as React from "react";
import { shallow } from "enzyme";
import ProtectedRoute from "./ProtectedRoute";

describe("ProtectedRoute", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<ProtectedRoute />);
    expect(wrapper).toMatchSnapshot();
  });
});
