import { Link } from "react-router-dom";
import Button from "../Shaired/Button";

const Hero = () => {
  return (
    <div>
      <div className=" container mx-auto flex items-center justify-between flex-col-reverse w-11/12 xl:w-full md:flex-row">
        <div className=" space-y-4">
          <h1 className=" text-2xl font-bold md:text-3xl lg:text-4xl flex gap-2 items-center ">
            {" "}
            <img
              className=" w-6 md:w-9 lg:w-14"
              src="https://cdn-icons-png.flaticon.com/256/7360/7360313.png"
              alt=""
            />{" "}
            Your One-Stop Shop for Everything!
          </h1>
          <p className=" md:text-lg">
            Find the best deals on fashion, electronics, and more—all at
            unbeatable prices! Call to Action (CTA):
          </p>
          <div  className=" flex gap-2 items-center">
            <Link to={'/cart'}><Button>Shop Now</Button></Link>
            <Button outline>Explore Deals</Button>
          </div>
        </div>
        <div><img className=" w-full" src="https://i.imgur.com/2DjWbaP.png" alt="" /></div>
      </div>
    </div>
  );
};

export default Hero;
