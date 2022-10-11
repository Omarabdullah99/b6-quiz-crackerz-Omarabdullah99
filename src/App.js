import React from 'react'
import {  RouterProvider } from 'react-router-dom'
import { ToastProvider } from "react-toast-notifications"


import router from './Routes'

function App() {
  
  return (
    <div>
    <ToastProvider autoDismiss
    autoDismissTimeout={2000}
    placement="top-center">
    <RouterProvider router={router}></RouterProvider>
    </ToastProvider>
    </div>
  )
}

export default App
