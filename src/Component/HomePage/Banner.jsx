

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen  p-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img className="w-1/3 mx-auto rounded-xl"
            src="https://i.postimg.cc/J04w6mxg/books.webp" />
          <div className="text-left ">
            <h1 className="text-4xl w-3/4 my-8  text-left font-bold">Books to freshen up your bookshelf</h1>
           
            <button className="btn bg-[#23BE0A]">View The List</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;