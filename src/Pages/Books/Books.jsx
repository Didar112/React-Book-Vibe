import React from 'react';
import { useContext } from 'react';
import { BookContext } from '../../Context/BookContext';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedReadList from '../../Components/ListedBooks/ListedReadList';
import ListedWishList from '../../Components/ListedBooks/ListedWishList';


const Books = () => {

    const bookContext = useContext(BookContext)
    const { readList, setReadList, handleReadCl, handleWishCl, whishList, setWishList } = bookContext

    return (
        <div>
            
            <Tabs className="container mx-auto mt-20">
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    
                    <ListedReadList></ListedReadList>
                    
                </TabPanel>
                <TabPanel>
                    <ListedWishList></ListedWishList>
                    
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Books;