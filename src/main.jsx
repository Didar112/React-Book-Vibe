import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router/dom";
import './index.css'

import { router } from './routes/Routes';
import BookProvider from './Context/BookContext';



createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BookProvider>
     <RouterProvider router={router} />
    </BookProvider>
  </StrictMode>,
)
