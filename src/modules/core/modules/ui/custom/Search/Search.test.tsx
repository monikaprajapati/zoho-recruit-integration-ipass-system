import * as React from "react";
import { shallow } from "enzyme";
import Search from "./Search";

describe("Search", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Search />);
    expect(wrapper).toMatchSnapshot();
  });
});
