import React, { Component } from "react";
import SearchBar from "./SearchBar";

// Components
import AuthorCard from "./AuthorCard";

class AuthorList extends Component {
  state = {
    authors: this.props.authors
  };

  filterAuthors = query => {
    const filteredAuthors = this.props.authors.filter(author =>
      `${author.first_name} ${author.last_name}`
        .toLowerCase()
        .includes(query.toLowerCase())
    );
    this.setState({ authors: filteredAuthors });
  };

  render() {
    const authorCards = this.state.authors.map(author => (
      <AuthorCard
        selectAuthor={this.props.selectAuthor}
        key={author.first_name + author.last_name}
        author={author}
      />
    ));
    return (
      <div className="authors">
        <SearchBar filterAuthors={this.filterAuthors} />
        <h3>Authors</h3>
        <div className="row">{authorCards}</div>
      </div>
    );
  }
}

export default AuthorList;
