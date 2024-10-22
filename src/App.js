import React, { lazy, Suspense, useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Cart from "./components/Cart";
import MenuRestaurant from "./components/MenuRestaurant";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appstore from "./utils/appStore";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Grocery = lazy(()=> import("./components/Grocery"));

const AppLayout = () => {
  const [userName, setUserName] = useState("Vaibhav Thareja");
  return (
    <Provider store={appstore}>
    <UserContext.Provider value={{loggedInUser:userName, setUserName}}> 
    {/* Here in above line, we are overriding the default value of the context */}
    <div>
      <Header />
      <Outlet />
      <ToastContainer/>
    </div>
    </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<About/>
      }, 
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/restaurants/:resId",
        element:<MenuRestaurant/>
      },
      {
        path:"/cart",
        element:<Cart/>
      },
      {
        path:"/grocery",
        element:<Suspense fallback={<Shimmer/>}> <Grocery/> </Suspense>
      }
    ],
    errorElement:<Error/>
  },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRouter} />);
