import React from 'react';
import { useContext } from 'react';
import { BookContext } from '../../Context/BookContext';


const Books = () => {

     const bookContext = useContext(BookContext)
    const {readList, setReadList, handleReadCl} = bookContext

    return (
        <div>
            {
                readList.map(item=><p>{item.bookName}</p>)
                    
                
            }
        </div>
    );
};

export default Books;