import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { addToStoredReadList, getStoredReadList } from '../utility/addToDb';
import Bookcard from '../Component/HomePage/Bookcard';
import { getWishlist } from '../Component/BookDetails/wishlist';

const ListedBooks = () => {
  const [readList,setReadList]=useState([])
  const allBooks=useLoaderData()
  useEffect(()=>{
  const storedList=getStoredReadList()
  const storedreadListint=storedList.map(id=>parseInt(id))
  const readbookList=allBooks.filter(book=>storedreadListint.includes(book.bookId))
  setReadList(readbookList)
  },[])
  const [wishList,setWishList]=useState([])
  useEffect(()=>{
const wishList=getWishlist()
const wishListInt=wishList.map(id=>parseInt(id))
const Wishbooklist=allBooks.filter(book=>wishListInt.includes(book.bookId))
setWishList(Wishbooklist)
  },[])
    return (
        <div>
            <h2 className='my-8'>listed book</h2>
            <Tabs>
    <TabList>
      <Tab>Read Books</Tab>
      <Tab>Wishlist Books</Tab>
    </TabList>

    <TabPanel>
      <h2>Book i read :{readList.length}</h2>
     <div className='grid lg:grid-cols-3 grid-cols-1'>
     {
        readList.map(book=><Bookcard book={book}></Bookcard>)
      }
     </div>
    </TabPanel>
    <TabPanel>
    <h2>Wish list :{wishList.length}</h2>
     <div className='grid lg:grid-cols-3 grid-cols-1'>
     {
        wishList.map(book=><Bookcard book={book}></Bookcard>)
      }
     </div>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default ListedBooks;
