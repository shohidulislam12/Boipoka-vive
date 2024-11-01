import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";


const Bookcard = ({book}) => {
    const {bookName,bookId,author,image,review,category,totalPages,rating,tags}=book;
    return (
<Link to={`/book/${bookId}`}>
<div className="card bg-base-100 border border-gray-300">
        <figure className="p-4 bg-gray-300 rounded-xl">
          <img
            src={image}
            alt={bookName}
            className="rounded-xl shadow-xl p-2 w-auto h-40" />
        </figure>
        <div className="card-body items-center text-left">
        <div className="flex justify-around items-center gap-2 ">
             {
                tags.map((tag,index)=><button key={index} className="btn text-green-500 btn-xs">{tag}</button>)
             }
            </div>
          <h2 className="card-title">{bookName}</h2>
          <p >by {author}</p>
       
         
        </div>
        <div style={{ borderTop: '2px dotted black' }} className="flex justify-between">
          <p>{category}</p>
          <p className="flex gap-2 items-center">{rating} <CiStar /> </p>
          <p>page: {totalPages}</p>
          </div>
      </div>
</Link>
    );
};

export default Bookcard;