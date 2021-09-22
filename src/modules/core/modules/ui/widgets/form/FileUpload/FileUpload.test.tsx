import * as React from "react";
import { shallow } from "enzyme";
import FileUpload from "./FileUpload";

describe("FileUpload", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<FileUpload />);
    expect(wrapper).toMatchSnapshot();
  });
});
