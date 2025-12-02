import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../utility/addToDB";
import Book from "../Book/Book";

const ReadList = () => {
const [readList, setReadList] = useState([]);
const [sort, setSort] = useState("")
  const data = useLoaderData(); 
  console.log(data);

  useEffect(() => {
    const storedBookData = getStoredBook(); // array টা তে সব আছে string হিসেবে। তাই int এ convert করে নিতে হবে।
    const convertedStoredBooks = storedBookData.map((id) => parseInt(id));
    // console.log(convertedStoredBooks); // এখন সব int হয়ে গেছে।
    const myReadList = data.filter(book=> convertedStoredBooks.includes(book.bookId));
    // console.log(myReadList);// পেলাম object আকারে array এর মদ্ধে। [{...},{...}]
    setReadList(myReadList);
  }, []);

  const handleSort = (type)=>{
    setSort(type);

    if(type === "pages"){
        const sortByPages = [...readList].sort(
          (a, b) => a.totalPages - b.totalPages);
          setReadList(sortByPages); 
    }
    if(type === "ratings"){
        const sortByRatings = [...readList].sort((a, b) => a.rating - b.rating);
        setReadList(sortByRatings);
    }
  }



  return (
    <div>
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn m-1">
          Sort by: {sort? sort:""}
        </div>
        <ul
          tabIndex="-1"
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          <li onClick={() => handleSort("pages")}>
            <a>Pages</a>
          </li>
          <li onClick={() => handleSort("ratings")}>
            <a>Ratings</a>
          </li>
        </ul>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read Book List </Tab>
          <Tab>Wishlist</Tab>
        </TabList>

        <TabPanel>
          <h2>Book I read {readList.length}</h2>
          {readList.map((b) => (
            <Book key={b.bookId} book={b}></Book>
          ))}
        </TabPanel>
        <TabPanel>
          <h2>Wishlist</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
