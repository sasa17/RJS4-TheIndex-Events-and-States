import React, { Component } from "react";

class BookRow extends Component {
  render() {
    let book = this.props.book;
    let author = this.props.author;
    return (
      <tr>
        <td>{book.title}</td>
        <td>
          {author.first_name} {author.last_name}
        </td>
        <td>
          <button className="btn" style={{ backgroundColor: book.color }} />
        </td>
      </tr>
    );
  }
}

export default BookRow;
