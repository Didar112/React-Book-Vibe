import React from 'react';
import { CiStar } from "react-icons/ci";
import { Link } from 'react-router';


const BookCart = ({ item }) => {
    return (

        <Link to={`/bookDetail/${item.bookId}`} className="card p-5 pb-2 bg-base-100 h-120 w-96 shadow-sm mx-auto">
            <figure className='p-6 bg-gray-100'>
                <img className='h-50 rounded-2xl'
                    src={item.image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <div className='flex  gap-2'>
                    {item.tags.map((tag, ind) => (
                        <div key={ind} className="badge badge-success">{tag}</div>
                    ))
                    }


                </div>
                <h2 className="card-title font-bold text-2xl">
                    {item.bookName}
                </h2>
                <p className='font-semibold text-md text-gray-600 mb-1'>By: {item.author}</p>
                <div className="card-actions  border-t border-dashed pt-4 border-gray-300 flex justify-between">
                    <div className="font-semibold">{item.category}</div>
                    <div className="font-semibold flex items-center gap-[5px]">{item.rating} <CiStar />
                    </div>

                </div>
            </div>
        </Link>

    );
};

export default BookCart;