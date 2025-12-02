const getStoredBook = ()=>{
    const storedBooksSTR = localStorage.getItem("readList");

    if(storedBooksSTR){
        const storedBooksData = JSON.parse(storedBooksSTR);
        return storedBooksData;
    }
    else{
        return [];
    }
}

const addToStoreDB = (id) =>{
    const storedBooksData = getStoredBook();

    if(storedBooksData.includes(id)){
        alert("The book already exists");
    }
    else{
        storedBooksData.push(id);
        // console.log(storedBooksData);
        const data = JSON.stringify(storedBooksData);
        localStorage.setItem("readList", data);
    }
}

export {addToStoreDB};