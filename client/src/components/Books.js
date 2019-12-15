import React from "react";
import "../styles/Books.css";

const Books = ({ books, totalBooks }) => {
  return (
    <section className="wrapper">
      <h1>Books availables {totalBooks}</h1>
      <div className="row">
        {books.map(book => (
          <article key={book.id} className="col-1-2" data-testid="book-item">
            {typeof book.volumeInfo.imageLinks !== "undefined" && (
              <img src={book.volumeInfo.imageLinks.thumbnail} alt="" />
            )}
            <h3>{book.volumeInfo.title}</h3>
            <h5>{book.volumeInfo.authors}</h5>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Books;
