import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoreDB } from "../../utility/addToDB";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);
  import { ToastContainer, toast } from "react-toastify";

const BookDetails = () => {
  const { id } = useParams(); // এই id  আছে string এ। তাই একে int এ convert করতে হবে।
  const bookId = parseInt(id);
  const data = useLoaderData(); // সব data এসে গেল। এবার filter use করে দেখব যে কোন id আসছে, সেই id এর data দেখাব।
  // console.log(data);
  const singleBook = data.find((book) => book.bookId === bookId);
  //   console.log(singleBook);
  //   console.log(id, data);

  const handleMarkAsRead = (id) => {
    // store with id
    //where to store
    // array or collection আকারে রাখব।
    // if book already exists then show an alert
    // if book doesn't exists then push in the collection array
    MySwal.fire({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success",
    });

    toast("Wow so easy!");
    addToStoreDB(id);
  };

  const { bookName, image } = singleBook;
  return (
    <div>
      <img className=" w-48" src={image} alt="" />
      <h5>{bookName}</h5>
      <ToastContainer />
      <button
        onClick={() => handleMarkAsRead(id)}
        className="btn btn-active btn-success m-2"
      >
        Mark as Read
      </button>

      <button className="btn btn-active  btn-info m-2">Wishlist</button>
    </div>
  );
};

export default BookDetails;
