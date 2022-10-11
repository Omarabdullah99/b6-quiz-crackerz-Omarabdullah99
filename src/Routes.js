import Root from "./Root"
import { createBrowserRouter } from "react-router-dom"

import ErrorPage from "./components/ErrorPage"
import Home from "./components/Topic"
import Statistics from "./components/Statistics"
import Blog from "./components/Blog"
import StartPractice from "./components/StartPractice"


const router=createBrowserRouter([
    {
      path:'/',
      element:<Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          path:'/',
          element:<Home></Home>,
          loader:()=>fetch('https://openapi.programming-hero.com/api/quiz')
        },
        {
          path:'/home',
          element:<Home></Home>,
          loader:()=>fetch('https://openapi.programming-hero.com/api/quiz')
          
        },
        {
          path:'/statistics',
          element:<Statistics></Statistics>
        },
        {
          path:'/blog',
          element:<Blog></Blog>,
          
        },
        {
          path:'SingleTopic/:id',
          element:<StartPractice></StartPractice>,
          loader:({params})=>fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
        }
       

      ]

    },
   
  ])
  export default router