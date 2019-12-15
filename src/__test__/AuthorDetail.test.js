//Imports
import React from "react";
import { shallow } from "enzyme";

// Component
import AuthorDetail from "../AuthorDetail";

//Mocks
import { fakeAuthor } from "../testUtils";

describe("<AuthorDetail />", () => {
  const author = fakeAuthor();
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<AuthorDetail author={author} />);
  });
  it("renders correctly", () => {
    const authorDiv = wrapper.find(".author");
    const header = wrapper.find("h3");
    const image = wrapper.find("img");
    const table = wrapper.find("table");
    expect(authorDiv.exists()).toBe(true);
    expect(header.exists()).toBe(true);
    expect(image.exists()).toBe(true);
    expect(table.exists()).toBe(true);
  });

  it("renders the correct author", () => {
    const authorName = wrapper.find("h3");
    const image = wrapper.find("img");
    expect(image.props().src).toBe(author.imageUrl);
    expect(authorName.text()).toContain(
      `${author.first_name} ${author.last_name}`
    );
    const books = wrapper.find("tbody").find("tr");
    expect(books.length).toBe(author.books.length);
  });

  it("renders the correct books for the author", () => {
    const table = wrapper.find("table");
    author.books.forEach(book => expect(table.text()).toContain(book.title));
  });
});
