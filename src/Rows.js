import React from "react";

const Rows = props => {
  const author = props.author;
  const authorName = `${author.first_name} ${author.last_name}`;

  return (
    <tr>
      <td>{props.book.title}</td>
      <td>{authorName}</td>
      <td>
        <button
          className="btn"
          style={{ backgroundColor: `${props.book.color}` }}
        />
      </td>
    </tr>
  );
};

export default Rows;
