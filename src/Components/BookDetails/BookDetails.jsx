import React from "react";
import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const { id } = useParams(); // এই id  আছে string এ। তাই একে int এ convert করতে হবে।
  const bookId = parseInt(id);
  const data = useLoaderData(); // সব data এসে গেল। এবার filter use করে দেখব যে কোন id আসছে, সেই id এর data দেখাব।
  // console.log(data);
  const singleBook = data.find((book) => book.bookId === bookId);
//   console.log(singleBook);
//   console.log(id, data);

const {bookName, image} = singleBook;
  return (
    <div>
      <img className=" w-48" src={image} alt="" />
      <h5>{bookName}</h5>
      <button className="btn btn-active btn-success m-2">Read</button>
      <button className="btn btn-active  btn-info m-2">Wishlist</button>
    </div>
  );
};

export default BookDetails;
