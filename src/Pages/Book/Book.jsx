import React from "react";
import { FaStarHalfStroke } from "react-icons/fa6";
import { Link } from "react-router";

const Book = ({ book }) => {
  //   const data = use(bookPromise);
  //   console.log(data);

  console.log(book);

  const {totalPages ,bookName, bookId, image, rating, category, tags, yearOfPublishing, publisher } =
    book;
  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div className="card bg-base-100 w-full border p-6 shadow">
        <figure className="p-4 bg-gray-100 w-2/3 mx-auto">
          <img className="h-[166px] rounded-sm" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="flex justify-around">
            {tags.map((tag) => (
              <button>{tag}</button>
            ))}
          </div>
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">{yearOfPublishing}</div>
            <div className="badge badge-secondary">Pages: {totalPages}</div>
          </h2>
          <p>Book By : {publisher}</p>
          <div className=" border-t-1 border-dashed"></div>
          <div className="card-actions justify-end">
            <div className="badge ">{category}</div>
            <div className="badge ">
              {rating}
              <FaStarHalfStroke />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
