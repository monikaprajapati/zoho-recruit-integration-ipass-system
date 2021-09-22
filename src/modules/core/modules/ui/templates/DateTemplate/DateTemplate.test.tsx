import * as React from "react";
import { shallow } from "enzyme";
import DateTemplate from "./DateTemplate";

describe("DateTemplate", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<DateTemplate />);
    expect(wrapper).toMatchSnapshot();
  });
});
