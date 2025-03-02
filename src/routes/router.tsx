import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../Layout/Main";
import Cart from "../pages/Cart/Cart";
import About from "../pages/About/About";

const router = createBrowserRouter([
      {
            path: '/',
            element: <Main/>,
            children:[
                  {
                        path:'/',
                        element:<Home/>
                  },
                  {
                        path:'/cart',
                        element: <Cart/>
                  },
                  {
                        path:'/about',
                        element:<About/>
                  }
            ]
      }
])

export default router