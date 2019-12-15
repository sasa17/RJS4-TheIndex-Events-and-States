//Imports
import React from "react";
import { mount } from "enzyme";

// Component
import App from "../App";

//Data
import authors from "../data";

describe("<App />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<App />);
  });

  it("renders with currentAuthor initially set to null", () => {
    expect(wrapper.state().currentAuthor).toBe(null);
  });

  describe("when a card is clicked", () => {
    beforeEach(() => {
      const card = wrapper.find(".card").at(0);
      card.simulate("click");
    });
    it("changes the currentAuthor state to the correct author", () => {
      expect(wrapper.state().currentAuthor).toBe(authors[0]);
    });

    it("DOESN'T show the AuthorsList component", () => {
      expect(wrapper.find("AuthorsList").exists()).toBe(false);
    });

    it("shows the AuthorDetail component", () => {
      expect(wrapper.find("AuthorDetail").exists()).toBe(true);
    });

    it("shows the correct author's details", () => {
      const authorDetail = wrapper.find("AuthorDetail");
      const books = authorDetail.find("tbody").find("tr");
      expect(authorDetail.text()).toContain(authors[0].first_name);
      expect(authorDetail.text()).toContain(authors[0].last_name);
      expect(authorDetail.find("img").props().src).toBe(authors[0].imageUrl);
      expect(books.length).toBe(authors[0].books.length);
    });
  });

  describe("when 'AUTHORS' in the Sidebar is clicked", () => {
    beforeEach(() => {
      const card = wrapper.find(".card").at(0);
      card.simulate("click");
      const authorsButton = wrapper.find("Sidebar").find("button");
      authorsButton.simulate("click");
    });

    it("changes the currentAuthor state BACK to null", () => {
      expect(wrapper.state().currentAuthor).toBe(null);
    });

    it("shows the AuthorsList component", () => {
      expect(wrapper.find("AuthorsList").exists()).toBe(true);
    });

    it("DOESN'T show the AuthorDetail component", () => {
      expect(wrapper.find("AuthorDetail").exists()).toBe(false);
    });
  });
});
