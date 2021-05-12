import React from "react";
import { TestItem } from "./TestItem";
import { shallow } from "enzyme";
import { Test, TestStatus } from "../../Types/Test";
describe("TestItem", () => {
  it("should render correctly", () => {
    const test: Test = {
      description: "desc",
      run: jest.fn,
      status: TestStatus.Failed,
    };
    const component = shallow(<TestItem test={test} />);
    expect(component).toMatchSnapshot();
  });

  it.each([
    [TestStatus.Failed, "red"],
    [TestStatus.Passed, "green"],
    [TestStatus.Running, "white"],
    [TestStatus.NotStarted, "white"],
  ])("should when status is %s be of color %s ", (status, color) => {
    const test: Test = { description: "desc", run: jest.fn, status };
    const component = shallow(<TestItem test={test} />);
    const text = component.find({ children: status }).get(0);
    expect(text.props.color).toBe(color);
  });
});
