import * as React from "react";
import { shallow } from "enzyme";
import PageNotFound from "./PageNotFound";

describe("PageNotFound", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<PageNotFound />);
    expect(wrapper).toMatchSnapshot();
  });
});
