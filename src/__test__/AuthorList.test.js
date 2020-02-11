//Imports
import React from "react";
import { mount } from "enzyme";

// Component
import AuthorList from "../AuthorList";

// Utils
import { type, fakeAuthor } from "../testUtils";

describe("<AuthorList />", () => {
  let wrapper;
  const authors = [
    fakeAuthor({ first_name: "potato" }),
    fakeAuthor({ last_name: "tomato" }),
    fakeAuthor({ first_name: "humba", last_name: "butamba" })
  ];
  beforeEach(() => {
    wrapper = mount(<AuthorList authors={authors} />);
  });

  it("shows all the authors", () =>
    expect(wrapper.find(".card").length).toBe(3));

  it("has a searchbar", () =>
    expect(wrapper.find("SearchBar").exists()).toBe(true));

  describe("when text is entered in the search bar", () => {
    it("filters by first_name", () => {
      type(wrapper, "search", "potato");
      expect(wrapper.find(".card").length).toBe(1);
    });

    it("filters by last_name", () => {
      type(wrapper, "search", "tomato");
      expect(wrapper.find(".card").length).toBe(1);
    });

    it("filters by both", () => {
      type(wrapper, "search", "ato");
      expect(wrapper.find(".card").length).toBe(2);
    });

    it("is case-insensitive when filtering", () => {
      type(wrapper, "search", "AtO");
      expect(wrapper.find(".card").length).toBe(2);
    });

    it("returns nothing if it finds nothing", () => {
      type(wrapper, "search", "kale");
      expect(wrapper.find(".card").length).toBe(0);
    });

    it("shows the whole list when the SearchBar is empty", () => {
      type(wrapper, "search", "kale");
      type(wrapper, "search", "");
      expect(wrapper.find(".card").length).toBe(3);
    });
  });
});
