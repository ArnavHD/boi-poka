import React, { Suspense } from "react";
import Book from "../Book/Book";

const Books = ({ data }) => {
//   const [allBooks, setAllBooks] = useState([]);

  // way-1 of loading data
  // useEffect(()=>{
  //     fetch('booksData.json')
  //     .then(res=>res.json())
  //     .then(data=>{
  //         setAllBooks(data);
  //     })
  // })

  // way-2
  //   const bookPromise = fetch("./booksData.json").then((res) => res.json());
  //   console.log(bookPromise);

  return (
    <div className=" text-3xl text-center p-6">
      <h1>This is books</h1>
      <Suspense fallback={<span>Loading</span>}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((book) => (
            <Book key={book.bookId} book={book}></Book>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Books;
