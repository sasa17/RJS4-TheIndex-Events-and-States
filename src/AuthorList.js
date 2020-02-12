import React from "react";
import SearchBar from "./SearchBar";

// Components
import AuthorCard from "./AuthorCard";

const AuthorList = props => {
  const authorCards = props.authors.map(author => (
    <AuthorCard
      selectAuthor={props.selectAuthor}
      key={author.first_name + author.last_name}
      author={author}
    />
  ));

  return (
    <div className="authors">
      <SearchBar />
      <h3>Authors</h3>
      <div className="row">{authorCards}</div>
    </div>
  );
};

export default AuthorList;
