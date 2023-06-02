import React from 'react';
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import Routs from "./routs/Routs.jsx"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={Routs} />
  </React.StrictMode>,
)