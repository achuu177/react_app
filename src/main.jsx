import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ProductListing from './pages/ProductListing.jsx'
import ProductDetails from './pages/ProductDetails.jsx'
import Todo from './pages/Todo.jsx'
import Root from './routes/root.jsx'
import AdminRoot from './routes/adminRoot.jsx'

import{
createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
          path: "/",
          element: <ProductListing />,
        },
        {
            path: "/product-details/:id",
            element: <ProductDetails />,
          },
      ],
    },
    {
        path: "/admin",
        element: <AdminRoot/>,
      }
  ]);

createRoot(document.getElementById('root')).render(
    <>
       <RouterProvider router={router} />
    </>
     ,    
)

