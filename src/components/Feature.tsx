const Feature = () => {
  return (
    <div>
      <div className="container mx-auto w-11/12 xl:w-ful flex gap-5 flex-wrap my-14">
       <div className=" grow flex items-center justify-center gap-2 border-2 border-gray-500 w-fit p-6 rounded-lg">
            <img className=" w-14 " src="https://cdn-icons-png.flaticon.com/128/1067/1067566.png" alt="" />
            <div className=" text-2xl">
                 <h1> Call center </h1>
                 <h2> +91 0000000000</h2>
            </div>
       </div>
       <div className=" grow flex items-center gap-2 border-2 border-gray-500  w-fit p-6 rounded-lg">
            <img className=" w-14 " src="https://cdn-icons-png.flaticon.com/128/17865/17865314.png" alt="" />
            <div className=" text-2xl">
                 <h1> Free Delivery </h1>
                 <h2 className=" text-lg"> Free delivery across India on all orders over ₹1000! 🚚✨</h2>
            </div>
       </div>
       <div className=" grow flex items-center gap-2 border-2 border-gray-500  w-fit p-6 rounded-lg">
            <img className=" w-14 " src="https://cdn-icons-png.flaticon.com/128/3837/3837379.png" alt="" />
            <div className=" text-2xl">
                 <h1> Gift Cards </h1>
                 <h2 className=" text-amber-400">Save up to 20%</h2>
            </div>
       </div>
      </div>
    </div>
  );
};

export default Feature;
