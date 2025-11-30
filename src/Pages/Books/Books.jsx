import React, { useEffect, useState } from 'react';

const Books = () => {
    const [allBooks, setAllBooks] = useState([]);

    // way-1 of loading data
    useEffect(()=>{
        fetch('booksData.json')
        .then(res=>res.json())
        .then(data=>{
            setAllBooks(data);
        })
    })
    return (
        <div>
            <h1>This is books</h1>
        </div>
    );
};

export default Books;