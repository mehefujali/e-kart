import { NavLink } from "react-router-dom";
import "./navbar.css";
import { useCart } from "../context/CartProvider";
const Navbar = () => {
      const {cart} = useCart()
  return (
    <div className=" w-full bg-white sticky top-0">
      <div className="container mx-auto  w-11/12 xl:w-full  py-3 flex justify-between items-center ">
        {" "}
        <div className=" flex items-center text-xl font-bold gap-2 ">
          <img
            className=" w-7"
            src="https://cdn-icons-png.flaticon.com/128/726/726496.png"
            alt=""
          />
          E KART
        </div>{" "}
        <div className=" w-fit">
          <ul className="Navlinks flex gap-2 md:gap-6 items-center">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/about"}>About us</NavLink>
            <NavLink to={"/cart"}>
              <div className=" p-3 rounded-full bg-amber-100  relative">
                  <p className=" absolute -top-1 -right-2 p-1 rounded-full bg-white">{cart.length}</p>
                <img
                  className="w-5 "
                  src="https://cdn-icons-png.flaticon.com/128/3916/3916630.png"
                  alt=""
                />
              </div>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
