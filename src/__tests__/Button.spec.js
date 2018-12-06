import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Button from "../components/Button/Button";

Enzyme.configure({ adapter: new Adapter() });

describe("<Button />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Button />, div);
  });

  it("renders a button", () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.find("button").length).toBe(1);
  });

  it("executes clickHandler on click", () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<Button clickHandler={mockFn} />);
    wrapper.find("button").simulate("click");
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it("renders name depending on props", () => {
    const wrapper = shallow(<Button name="HelloButton" />);
    const button = wrapper.find("button");
    expect(button.text()).toBe("HelloButton");
  });
});
