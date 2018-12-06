import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Display from "../components/Display/Display";

Enzyme.configure({ adapter: new Adapter() });

describe("<Display />", () => {
  it("renders without crashing", () => {
    shallow(<Display />);
  });

  it("renders a div called display", () => {
    const wrapper = shallow(<Display />);
    expect(wrapper.find("div.display").length).toBe(1);
  });

  it("takes in a string value prop", () => {
    const wrapper = shallow(<Display />);
    expect(typeof wrapper.find("div.display").text()).toBe("string");
  });

  it("renders a passed value prop", () => {
    const wrapper = shallow(<Display value="5" />);
    const display = wrapper.find("div.display");
    expect(display.text()).toBe("5");
  });
});
