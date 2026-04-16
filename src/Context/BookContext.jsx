
import React, { createContext } from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';


export const BookContext = createContext();


const BookProvider = ({children}) => {

 const [readList, setReadList] = useState([])
 const [whishList, setWishList] = useState([])


    const handleReadCl = (bookObj) => {
        console.log("This is clicked: ",bookObj)

        const isBookHere = readList.find(item=>item.bookId==bookObj.bookId)

        if(isBookHere){
            toast.warning("This book already exists in readlist")
        }
        else {
            setReadList([...readList, bookObj])
           toast.success(`${bookObj.bookName} is added to the list`)
        }
    }


    const handleWishCl = (bookObj) => {

        const isBookinReadList = readList.find(item=>item.bookId==bookObj.bookId)

        if(isBookinReadList){
            toast.warning("This Book is already on Read List")
            return 
        }

        const isBookHere = whishList.find(item=>item.bookId==bookObj.bookId)

        if(isBookHere){
            toast.warning("This book already exists in Wish List")
        }
        else {
            setWishList([...whishList, bookObj])
           toast.success(`${bookObj.bookName} is added to Wish list`)
        }
    }
   

    const data = {
        readList,
        setReadList,
        handleReadCl,

        handleWishCl, 
        setWishList,
        whishList,

    }


    return <BookContext.Provider value={data}> {children} </BookContext.Provider>
    
};

export default BookProvider;