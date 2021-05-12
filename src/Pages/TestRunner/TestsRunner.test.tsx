import { shallow } from "enzyme";
import React from "react";
import TestRunner from "./TestRunner";
import configureStore from "redux-mock-store";
import { fireEvent, render } from "@testing-library/react";

const mockStore = configureStore([]);
describe("TestRunner", () => {
  let store: any;
  let initialState: any;

  beforeEach(() => {
    initialState = { tests: { data: [], loading: false, errors: undefined } };
    store = mockStore(initialState);
    store.dispatch = jest.fn();
  });

  it("should match snapshot", () => {
    const component = shallow(<TestRunner store={store} />);
    expect(component).toMatchSnapshot();
  });

  it("should dipatch @@tests/FETCH_REQUEST on mount", () => {
    render(<TestRunner store={store} />);
    expect(store.dispatch).toHaveBeenCalledWith({
      type: "@@tests/FETCH_REQUEST",
    });
  });

  it("should dipatch @@tests/RUN_ALL on button click", () => {
    const component = render(<TestRunner store={store} />);
    const btn = component.getByTestId("btn-run-tests");

    fireEvent.click(btn);

    expect(store.dispatch).toHaveBeenCalledWith({
      type: "@@tests/RUN_ALL",
    });
  });
});
