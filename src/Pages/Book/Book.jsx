import React from "react";

const Book = ({ book }) => {
  //   const data = use(bookPromise);
  //   console.log(data);

  console.log(book);

  const { bookName, author, image , } = book;
  return (
    <div className="card bg-base-100  shadow-sm">
      <figure className="px-18 py-10">
        <img
          src={image}
          alt="Shoes"
          className="rounded-xl w-2/3 h-2/3"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">Card Title</h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Book;
