import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../utility/addToDB";
import Book from "../Book/Book";

const ReadList = () => {
const [readList, setReadList] = useState([]);
  const data = useLoaderData();
  console.log(data);

  useEffect(() => {
    const storedBookData = getStoredBook(); // array তা তে সব আছে string হিসেবে। তাই int এ convert করে নিতে হবে।
    const convertedStoredBooks = storedBookData.map((id) => parseInt(id));
    // console.log(convertedStoredBooks); // এখন সব int হয়ে গেছে।
    const myReadList = data.filter(book=> convertedStoredBooks.includes(book.bookId));
    // console.log(myReadList);// পেলাম object আকারে array এর মদ্ধে। [{...},{...}]
    setReadList(myReadList);
  }, []);
  return (
    <div>
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
