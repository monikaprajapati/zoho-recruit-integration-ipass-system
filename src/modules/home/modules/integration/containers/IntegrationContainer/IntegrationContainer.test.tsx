import * as React from "react";
import { shallow } from "enzyme";
import IntegrationContainer from "./IntegrationContainer";

describe("IntegrationContainer", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<IntegrationContainer />);
    expect(wrapper).toMatchSnapshot();
  });
});
