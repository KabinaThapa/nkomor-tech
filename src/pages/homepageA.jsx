import React, { useState } from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Sidenav from '../components/sidenav'
import Button from '../components/button'
import ChooseSpeciality from '../components/chooseSpeciality'
const homepageA = () => {
  const[open, setOpen]=useState(false)
  const openSpeciality=()=>{
  setOpen(!open)
  }
  return (
    
        <>
        <div className='z-10 relative  w-[1440px]'>
       <Navbar/>
       <div className='appointment absolute mt-[164px]  ml-[373px]  w-[1024px] h-[200px]'>
        <div className='absolute w-[796px] h-[32px] top-[32px] left-[39px]'>
        <p className='font-poppins font-[500] text-[24px] leading-[32px]'>
            Upcoming Appointments
        </p>

        </div>
        <div className='absolute w-[162px] h-[24px] top-[76px] left-[431px]'>
        <p className='font-poppins font-[500] text-[16px] leading-[24px] text-hexgray'>
            No appointment yet
        </p>

        </div>
        <Button onClick={openSpeciality} className=' absolute bg-primarygreen font-[500] text-[16px] leading-[20px] flex items-center justify-center w-[380px] h-[40px] top-[120px] left-[322px] rounded-[8px] text-white'>
            Schedule an appopintment</Button>

</div>
{open?

(
  <ChooseSpeciality/>
):('')}
       <Sidenav/>
     <Footer/>
       </div>
       </>
  )
}

export default homepageA