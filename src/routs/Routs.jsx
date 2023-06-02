import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Stadium from "../pages/Stadium/Stadium";



const Routs = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/stadium",
    element: <Stadium />,
  },
]);


export default Routs