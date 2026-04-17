import React, { useContext } from 'react';
import { BookContext } from '../../Context/BookContext';
import BookCart from '../../ui/BookCart';
import NoData from '../NoData/NoData';

const ListedWishList = ({sortType}) => {
    const bookContext = useContext(BookContext)
    const { whishList } = bookContext

    let filteredWishList  = whishList

    if(sortType){
        if(sortType==="Pages"){
            const sortedData = [...whishList].sort((a, b)=>a.totalPage - b.totalPage)
            filteredWishList = sortedData;
        }
        else if(sortType==="Ratings"){
            const sortedData = [...whishList].sort((a, b)=>a.rating - b.rating)
            filteredWishList = sortedData
        }
    }

    if(whishList.length===0){
        return <NoData></NoData>
    }
    
    return (
        
        <div>
          
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10'> 
        {
             
             filteredWishList.map((item, ind)=><BookCart key={ind} item={item}></BookCart>)
        
        }
        </div> 
        </div>
    );
};

export default ListedWishList;