import React, { useContext } from 'react';
import Banner from '../../Components/HomePage/Banner';
import AllBooks from '../../Components/HomePage/AllBooks';
import { BookContext } from '../../Context/BookContext';

const HomePage = () => {

    
    


    return (
        <div>
            <Banner></Banner>
            <AllBooks></AllBooks>
        </div>
    );
};

export default HomePage;