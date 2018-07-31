import React, { Component } from "react";
import axios from "axios";

// Components
import Sidebar from "./Sidebar";
import Loading from "./Loading";
import AuthorList from "./AuthorList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authors: [],
      loading: true
    };
  }

  componentDidMount() {
    axios
      .get("https://the-index-api.herokuapp.com/api/authors/")
      .then(res => res.data)
      .then(authors => this.setState({ authors, loading: false }))
      .catch(err => console.error(err));
  }

  getContentView() {
    if (this.state.loading) {
      return <Loading />;
    } else {
      return <AuthorList authors={this.state.authors} />;
    }
  }

  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar />
          </div>
          <div className="content col-10">{this.getContentView()}</div>
        </div>
      </div>
    );
  }
}

export default App;
