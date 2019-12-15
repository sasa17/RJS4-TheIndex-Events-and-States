//Imports
import React from "react";
import { mount } from "enzyme";

// Component
import SearchBar from "../SearchBar";

// Utils
import { type } from "../testUtils";

// Mocks
const filterFn = jest.fn();

describe("<SearchBar />", () => {
  it("calls the passed in filter function when the input changes", () => {
    const wrapper = mount(<SearchBar filter={filterFn} />);
    type(wrapper, "search", "lol");
    expect(filterFn).toHaveBeenCalled();
    expect(filterFn).toHaveBeenCalledWith("lol");
  });
});
