import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { BookContext } from '../../Context/BookContext';





const BookDetail = () => {

    
    const { bookId: bookIdparams } = useParams()
    const bookData = useLoaderData()
    console.log(bookData)

    const clickedBook = bookData.find(book => book.bookId == bookIdparams)
    console.log(clickedBook)


    const { bookId, bookName, author, image, review, totalPages, rating, category, tags, yearOfPublishing, publisher } = clickedBook

    
    //adding clicked data to read list 
    const bookContext = useContext(BookContext)
       const {readList, setReadList, handleReadCl} = bookContext





    return (
        <div className='container mx-auto mt-10'>
            <div className="card lg:card-side bg-base-100 shadow-sm">
                <figure className='flex w-full p-10 bg-gray-200'>
                    <img className='w-full'
                        src={image}
                        alt={bookName} />
                </figure>
                <div className="card flex flex-col m-[20px]">
                    <h2 className="card-title text-5xl mb-[30px]">{bookName}</h2>
                    <p className='text-2xl mb-[30px]'>By: {author}</p>
                    <p className='py-2 border-y mb-[30px]'>{category}</p>
                    <p>{review}</p>

                    <div className='flex gap-2 mt-10 border-b pb-5'>
                        {
                            tags.map((item, index) => (
                                <div key={index} className="badge badge-success">{item}</div>
                            ))
                        }
                    </div>
                    <div className="">
                        <div className=' flex flex-col justify-between space-y-2'>
                            <div className='flex justify-between items-center'>
                                <span>Number of pages: </span><span>{totalPages}</span>
                            </div>
                            <div className='flex justify-between items-center'>
                                <span>Publisher: </span><span>{publisher}</span>
                            </div>
                            <div className='flex justify-between items-center'>
                                <span>Publish Year: </span><span>{yearOfPublishing}</span>
                            </div>
                            <div className='flex justify-between items-center'>
                                <span>Number of pages: </span><span>{totalPages}</span>
                            </div>
                        </div>
                        <div className='flex gap-5 mt-3 '>
                            <button  className="btn" onClick={()=>handleReadCl(clickedBook)} >Mark as Read</button>
                            <button className="btn btn-primary">Add to Wishlist</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;