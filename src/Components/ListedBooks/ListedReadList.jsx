import React, { useContext } from 'react';
import { BookContext } from '../../Context/BookContext';
import BookCart from '../../ui/BookCart';
import NoData from '../NoData/NoData';

const ListedReadList = ({ sortType }) => {
    const bookContext = useContext(BookContext)
     const { readList } = bookContext
    let filteredReadList = readList;


    if(sortType)
    {
        if(sortType==="Pages"){
            const sortedData = [...readList].sort((a, b)=>a.totalPages - b.totalPages);
            filteredReadList = sortedData
        } else if(sortType==="Ratings")
        {
            const sortedData = [...readList].sort((a, b)=>a.rating - b.rating);
            filteredReadList = sortedData
        }
    }


     if (filteredReadList.length === 0) {
        return <NoData></NoData>
    }

   

    return (

        <div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10'>
                {

                    filteredReadList.map((item, ind) => <BookCart key={ind} item={item}></BookCart>)

                }
            </div>
        </div>
    );
};

export default ListedReadList;