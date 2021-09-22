import * as React from "react";
import { shallow } from "enzyme";
import FormLabelTemplate from "./FormLabelTemplate";

describe("FormLabelTemplate", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<FormLabelTemplate />);
    expect(wrapper).toMatchSnapshot();
  });
});
