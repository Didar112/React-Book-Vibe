import { createBrowserRouter } from "react-router";
import HomePage from '../Pages/Homepage/HomePage';
import Books from '../Pages/Books/Books';
import MainLayout from '../Layout/MainLayout';
import Error from "../ErrorMessage/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      
      {
        index: true,
        element: <HomePage></HomePage>
      },
      {
        path: "/books",
        element: <Books></Books>
      },
    
    
    ],
    errorElement: <Error></Error>
  },
  
]);