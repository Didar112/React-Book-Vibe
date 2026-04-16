import React, { useContext } from 'react';
import { BookContext } from '../../Context/BookContext';
import BookCart from '../../ui/BookCart';

const ListedReadList = () => {
     const bookContext = useContext(BookContext)
        const { readList, setReadList, handleReadCl, handleWishCl, whishList, setWishList } = bookContext
    
    return (
        
        <div>
          
          <div className='grid grid-cols-3 gap-10 mt-10'> 
        {
             
             readList.map((item, ind)=><BookCart key={ind} item={item}></BookCart>)
        
        }
        </div> 
        </div>
    );
};

export default ListedReadList;