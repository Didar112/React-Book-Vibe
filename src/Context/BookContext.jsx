
import React, { createContext } from 'react';
import { useState } from 'react';


export const BookContext = createContext();


const BookProvider = ({children}) => {

 const [readList, setReadList] = useState([])

    const handleReadCl = (bookObj) => {
        console.log("This is clicked: ",bookObj)

        const isBookHere = readList.find(item=>item.bookId==bookObj.bookId)

        if(isBookHere){
            alert("The book already exists in read list")
        }
        else {
            setReadList([...readList, bookObj])
            alert(`${bookObj.bookName} is added to the list`)
        }
    }
   

    const data = {
        readList,
        setReadList,
        handleReadCl,

    }


    return <BookContext.Provider value={data}> {children} </BookContext.Provider>
    
};

export default BookProvider;