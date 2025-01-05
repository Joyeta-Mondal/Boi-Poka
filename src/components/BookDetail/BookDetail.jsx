import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const BookDetail = () => {
  const { bookId } = useParams();
  const data = useLoaderData();
  const id = parseInt(bookId);
  const book = data.find((book) => book.bookId === id);
  console.log(book);
  return (
    <div>
      <h2>Book details</h2>
    </div>
  );
};

export default BookDetail;
