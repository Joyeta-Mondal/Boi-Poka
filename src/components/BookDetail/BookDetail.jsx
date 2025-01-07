import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList } from "../../Utility/addToDB";
const BookDetail = () => {
  const { bookId } = useParams();
  const data = useLoaderData();
  const id = parseInt(bookId);

  const book = data.find((book) => book.bookId === id);
  const { bookId: currentBookId, image, author } = book;

  const handleMarkAsRead = (id) => {
    addToStoredReadList(id);
  };

  return (
    <div className="my-12">
      <h2>Book details {bookId}</h2>
      <img className="w-36" src={image} alt="" />
      <br />
      <button
        onClick={() => handleMarkAsRead(bookId)}
        className="btn btn-outline mr-5 btn-primary"
      >
        Mark As Read
      </button>
      <button className="btn btn-outline btn-accent">Add To Wishlist</button>
    </div>
  );
};

export default BookDetail;
