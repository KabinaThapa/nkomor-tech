import React from 'react'
import brandlogo from '../assets/images/brandlogo.png'
import { IoIosArrowDown } from "react-icons/io";
const navbar = () => {
  return (
    <div className=' w-full flex flex-col '>
        <div className='w-full h-[32px] pr-8'>
        <p className='font-poppins font-[500] text-[16px] leading-[24px]  pt-[4px] pb-[4px] text-right'>Contact Us</p>

        </div>
   
           
     
           
          
        
<div className=' w-full  bg-customgreen flex justify-between pt-4 pb-4 pl-8 pr-8'>
    <div className='w-[169px] h-[50px] '>
        <img src={brandlogo} alt='brandlogo' className='object-fit w-full h-full text-black '/>
    </div>
    <div className=' flex gap-4 items-center'>
    <div className=' w-[48px] h-[48px]  rounded-full bg-green flex items-center justify-center'>
<p className=' text-[20px] leading-[24px] font-[400] font-poppins text-white '>
    NP
</p>
    </div>
    <div className=' w-[122px] h-[24px]  '>
    <p className='text-[20px] font-poppins !important font-[400] leading-[24px] text-white'>Noah Parker</p>
</div>
<div className=' w-[24px] h-[24px] top-[33px]  flex justify-center items-center text-white'>
<IoIosArrowDown className='object-fit w-full h-full ' />
</div>
    </div>
   


</div>
    </div>
  )
}

export default navbar