import * as React from "react";
import { shallow } from "enzyme";
import UserImageTemplate from "./UserImageTemplate";

describe("UserImageTemplate", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<UserImageTemplate />);
    expect(wrapper).toMatchSnapshot();
  });
});
