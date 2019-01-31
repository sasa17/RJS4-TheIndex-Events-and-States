import React, { Component } from "react";

// Components
import Sidebar from "./Sidebar";
import Loading from "./Loading";
import AuthorList from "./AuthorList";
import SearchBar from "./SearchBar";
import AuthorDetail from "./AuthorDetail";

import authors from "./data";

class App extends Component {
  state = {
    currentAuthor: null,
    filteredAuthors: authors
  };

  selectAuthor = author => this.setState({ currentAuthor: author });

  unselectAuthor = author => this.setState({ currentAuthor: null });

  filterAuthors = query => {
    query = query.toLowerCase();
    let filteredAuthors = authors.filter(author => {
      return `${author.first_name} ${author.last_name}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });
    this.setState({ filteredAuthors: filteredAuthors });
  };

  getContentView = () => {
    if (this.state.currentAuthor) {
      return <AuthorDetail author={this.state.currentAuthor} />;
    } else {
      return (
        <AuthorsList
          authors={this.state.filteredAuthors}
          selectAuthor={this.selectAuthor}
          filterAuthors={this.filterAuthors}
        />
      );
    }
  };

  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar unselectAuthor={this.unselectAuthor} />
          </div>
          <div className="content col-10">{this.getContentView()}</div>
        </div>
      </div>
    );
  }
}

export default App;
