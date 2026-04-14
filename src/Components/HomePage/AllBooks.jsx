import React from 'react';
import { use } from 'react';
import { CiStar } from "react-icons/ci";
import BookCart from '../../ui/BookCart';


const bookPromise = fetch('/BookData.json').then((res)=>res.json())

const AllBooks = () => {

    const booksArray= use(bookPromise)

    return (
        <div className='container mx-auto my-10'>
            <h3 className='font-bold text-center text-5xl'>Books</h3>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 1fr gap-20 pt-20 mx-auto'>
            {
                booksArray.map((item, index)=>(
                    
                    
                        <BookCart item={item} key={index}></BookCart>


                )
                )
            }
            </div>
        </div>
        
    );
};

export default AllBooks;