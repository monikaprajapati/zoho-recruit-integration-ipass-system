import * as React from "react";
import { shallow } from "enzyme";
import CModal from "./CModal";

describe("CModal", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CModal />);
    expect(wrapper).toMatchSnapshot();
  });
});
