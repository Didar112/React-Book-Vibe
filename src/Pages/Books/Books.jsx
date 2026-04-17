import React, { useState } from 'react';
// import { useContext } from 'react';
import { BookContext } from '../../Context/BookContext';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedReadList from '../../Components/ListedBooks/ListedReadList';
import ListedWishList from '../../Components/ListedBooks/ListedWishList';


const Books = () => {

    // const bookContext = useContext(BookContext)
    // const { readList, setReadList, handleReadCl, handleWishCl, whishList, setWishList } = bookContext

    //state for sorting
    const [sortType, setSortState] = useState("")

    // console.log(sortState)
    
    return (
        <div>
            <div className='flex justify-center mt-10'>
            <div className="dropdown dropdown-start">
                <div tabIndex={0} role="button" className="btn m-1">Sort by ⬇️</div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li onClick={()=>setSortState("Pages")}><a>Pages</a></li>
                    <li onClick={()=>setSortState("Ratings")}><a>Ratings</a></li>
                </ul>
            </div>
            </div>

            <Tabs className="container mx-auto mt-20">
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>

                    <ListedReadList sortType={sortType}></ListedReadList>

                </TabPanel>
                <TabPanel>
                    <ListedWishList sortType={sortType}></ListedWishList>

                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Books;