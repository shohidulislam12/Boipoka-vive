import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { addToStoredReadList, getStoredReadList } from '../utility/addToDb';
import Bookcard from '../Component/HomePage/Bookcard';
import { getWishlist } from '../Component/BookDetails/wishlist';

const ListedBooks = () => {
  const [readList,setReadList]=useState([])
  const [sort,setSort]=useState('')
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
  const handleSort=sorttype=>{
    setSort(sorttype)
    
    if(sorttype==="numberOfpage"){
      const sortedList=[...readList].sort((a,b)=>a.totalPages-b.totalPages)
      setReadList(sortedList)
    }
    
    if(sorttype==="ratings"){
      const sortedList=[...readList].sort((b,a)=>a.rating-b.rating)
      setReadList(sortedList)
    }
  }
    return (
        <div>
            <h2 className='my-8'>listed book</h2>
            <div className="dropdown">
  <div tabIndex={0} role="button" className="btn m-1">{
  sort?`sort by ${sort}`:"Sort By"
  }</div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
    <li onClick={()=>handleSort("ratings")}><a>Rating</a></li>
    <li onClick={()=>handleSort("numberOfpage")}><a>Number of pages</a></li>
    <li><a>Publisher year</a></li>
  </ul>
</div>
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
