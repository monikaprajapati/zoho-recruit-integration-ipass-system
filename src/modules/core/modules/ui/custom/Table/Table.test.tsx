import * as React from "react";
import { shallow } from "enzyme";
import Table from "./Table";

describe("Table", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Table />);
    expect(wrapper).toMatchSnapshot();
  });
});
