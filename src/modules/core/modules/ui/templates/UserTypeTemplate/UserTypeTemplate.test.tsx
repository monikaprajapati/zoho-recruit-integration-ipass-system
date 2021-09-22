import * as React from "react";
import { shallow } from "enzyme";
import UserTypeTemplate from "./UserTypeTemplate";

describe("UserTypeTemplate", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<UserTypeTemplate />);
    expect(wrapper).toMatchSnapshot();
  });
});
