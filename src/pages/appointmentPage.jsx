import React from 'react'
import Facilities from '../components/facilities'
import Navbar from '../components/navbar'
import Sidenav from '../components/sidenav'

const appointmentPage = () => {
  return (
    <>
    <Navbar/>
    <div className='flex'>
    <Sidenav/>
   
    <Facilities/>
    </div>
    
    
   
    </>
   
  )
}

export default appointmentPage