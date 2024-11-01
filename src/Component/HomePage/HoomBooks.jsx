import { useEffect, useState } from "react";
import Bookcard from "./Bookcard";


const HoomBooks = () => {
    const [books,setBooks]=useState([])
    useEffect(()=>{
fetch('/booksData.json')
.then(res=>res.json())
.then(data=>setBooks(data))

    },[])
    return (
        <div>
            <h2 className="text-2xl my-8 font-bold">Books :{books.length}</h2>
            <div className="grid lg:grid-cols-3 my-10 grid-cols-1 gap-5">
         {
            books.map(book=><Bookcard key={book.bookId} book={book}></Bookcard>)
         }

            </div>
        </div>
    );
};

export default HoomBooks;