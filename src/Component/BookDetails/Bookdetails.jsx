import { CgLaptop } from "react-icons/cg";
import { useLoaderData, useParams } from "react-router-dom";


const Bookdetails = () => {
    const data =useLoaderData()
  
    const {bookId}=useParams()



    const book=data.find(bok=>bok.bookId==bookId)
    const {bookName,author,image,review,category,rating,tags,totalPages,publisher,yearOfPublishing}=book;
  
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={image}
      className="max-w-sm rounded-lg shadow-2xl" />
    <div className="text-left ">
      <h1 className="text-4xl font-bold">{bookName}</h1>
      <p className="py-6">
       by:{author}
      </p>
      <p>{category}</p>
      <p ><span className="font-bold">review:</span>{review}</p>
      <p className="flex items-center">tag:
      <div className="flex justify-around items-center gap-2 ">
             {
                tags.map((tag,index)=><button key={index} className="btn text-green-500 btn-xs">{tag}</button>)
             }
            </div>
      </p>
      <div className="my-9">
        <p className="flex gap-5"><span>Number of Pages:</span> <span>{totalPages}</span></p>
        <p className="flex gap-5"><span>Rating:</span> <span>{rating}</span></p>
        <p className="flex gap-5"><span>Year of Publishing:</span> <span>{yearOfPublishing}</span></p>
      </div>
      <button className="btn ">Read</button>
      <button className="btn text-white bg-[#50B1C9]">Wishlist</button>
    </div>
  </div>
</div>
    );
};

export default Bookdetails;