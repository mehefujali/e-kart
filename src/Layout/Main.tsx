import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Main = () => {
      return (
            <div className=" bg-gray-100  min-h-screen">
                  <Navbar/>
                  <div>
                        <Outlet/>
                  </div>
                  <footer>
                        <Footer/>
                  </footer>
            </div>
      );
};

export default Main;