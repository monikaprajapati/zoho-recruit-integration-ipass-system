import * as React from "react";
import { shallow } from "enzyme";
import CImageUpload from "./CImageUpload";

describe("CImageUpload", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CImageUpload />);
    expect(wrapper).toMatchSnapshot();
  });
});
