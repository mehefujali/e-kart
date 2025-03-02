import { NavLink } from "react-router-dom";
import './navbar.css'
const Navbar = () => {
  return (
    <div className=" w-full bg-white sticky top-0">
      <div className="container mx-auto  py-3 flex justify-between items-center ">
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
             <ul className="Navlinks flex gap-6 items-center">
                  <NavLink to={"/"} >Home</NavLink>
                  <NavLink to={"/cart"} >Cart</NavLink>
                  <NavLink to={"/about"} >About us</NavLink>
             </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
