import React, { useContext } from 'react';
import { BookContext } from '../../Context/BookContext';
import BookCart from '../../ui/BookCart';
import NoData from '../NoData/NoData';

const ListedWishList = () => {
    const bookContext = useContext(BookContext)
    const { readList, setReadList, handleReadCl, handleWishCl, whishList, setWishList } = bookContext

    if(whishList.length===0){
        return <NoData></NoData>
    }
    
    return (
        
        <div>
          
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10'> 
        {
             
             whishList.map((item, ind)=><BookCart key={ind} item={item}></BookCart>)
        
        }
        </div> 
        </div>
    );
};

export default ListedWishList;