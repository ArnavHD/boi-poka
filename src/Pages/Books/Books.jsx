import React, { Suspense, useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
  const [allBooks, setAllBooks] = useState([]);

  // way-1 of loading data
  // useEffect(()=>{
  //     fetch('booksData.json')
  //     .then(res=>res.json())
  //     .then(data=>{
  //         setAllBooks(data);
  //     })
  // })

  // way-2
  const bookPromise = fetch("./booksData.json").then((res) => res.json());
  console.log(bookPromise);
  return (
    <div className=" text-3xl text-center p-6">
      <h1>This is books</h1>
      <Suspense fallback={<span>Loading</span>}>
        <Book bookPromise={bookPromise}></Book>
      </Suspense>
    </div>
  );
};

export default Books;
