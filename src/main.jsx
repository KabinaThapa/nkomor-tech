import React from 'react'
import ReactDOM from 'react-dom/client'
import HomepageA from './pages/homepageA.jsx'
import AppointmentPage from './pages/appointmentPage.jsx'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
const router=createBrowserRouter([
  {
    path:'/',
    element:<HomepageA/>,
  },
  {
    path:'/Appointmentpage',
    element:<AppointmentPage/>
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
