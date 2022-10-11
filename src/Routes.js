import Root from "./Root"
import { createBrowserRouter } from "react-router-dom"

import ErrorPage from "./components/ErrorPage"
import Home from "./components/Topic"
import Statistics from "./components/Statistics"
import Blog from "./components/Blog"


const router=createBrowserRouter([
    {
      path:'/',
      element:<Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/home',
          element:<Home></Home>
        },
        {
          path:'/statistics',
          element:<Statistics></Statistics>
        },
        {
          path:'/blog',
          element:<Blog></Blog>,
          
        },
       

      ]

    },
   
  ])
  export default router