import React, { useContext } from 'react';
import { BookContext } from '../../Context/BookContext';
import BookCart from '../../ui/BookCart';

const ListedWishList = () => {
    const bookContext = useContext(BookContext)
    const { readList, setReadList, handleReadCl, handleWishCl, whishList, setWishList } = bookContext
    
    return (
        
        <div>
          
          <div className='grid grid-cols-3 gap-10 mt-10'> 
        {
             
             whishList.map((item, ind)=><BookCart key={ind} item={item}></BookCart>)
        
        }
        </div> 
        </div>
    );
};

export default ListedWishList;