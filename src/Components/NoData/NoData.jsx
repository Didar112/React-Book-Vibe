import React from 'react';

const NoData = () => {
    return (
        <div className='flex flex-col items/center justify-center py-20 text-center'>
            <img 
                src="https://cdn-icons-png.flaticon.com/512/6598/6598519.png" 
                alt="No data found" 
                className='w-32 mx-auto mb-4 opacity-40'
            />
            <h2 className='text-2xl font-semibold text-gray-500'>No Data Found</h2>
            <p className='text-gray-400 mt-2'>Your list is empty.</p>
        </div>
    );
};

export default NoData;