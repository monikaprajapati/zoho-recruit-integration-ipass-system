import * as React from "react";
import { shallow } from "enzyme";
import LinkButton from "./LinkButton";

describe("LinkButton", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<LinkButton />);
    expect(wrapper).toMatchSnapshot();
  });
});
