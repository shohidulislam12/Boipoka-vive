import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Root from './Component/Root/Root.jsx';
import Errorpage from './ErrorPAgr/Errorpage.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './Component/HomePage/HomePage.jsx';
import Dashbord from './Component/Dashbord/Dashbord.jsx';
import Bookdetails from './Component/BookDetails/Bookdetails.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement:<Errorpage></Errorpage>,
    children:[
      {
        path:'/',
        element:<HomePage></HomePage>
      },
      {
        path:'book/:bookId',
        
        element:<Bookdetails></Bookdetails>,
        loader:()=>fetch('booksData.json')
      },
      {
        path:'dashbord',
        element:<Dashbord></Dashbord>
      },
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
