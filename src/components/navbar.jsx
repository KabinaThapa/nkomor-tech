import React from 'react'
import brandlogo from '../assets/images/brandlogo.png'
import { IoIosArrowDown } from "react-icons/io";
const navbar = () => {
  return (
    <div className='absolute w-[1440px] border-2  h-[120px] '>
        <div className='w-full h-[32px] pl-[1279px] pt-[4px] pb-[4px] border'>
           
            <p className='font-poppins font-[500] text-[16px] leading-[24px]'>Contact Us</p>
           
          
        </div>
<div className='relative w-full h-[88px] border  bg-customgreen flex'>
    <div className='w-[169px] h-[50px] mt-[20px] ml-[38px]  '>
        <img src={brandlogo} alt='brandlogo' className='object-fit w-full h-full text-black '/>
    </div>
    <div className='absolute w-[48px] h-[48px] mt-[20px] ml-[1152px]  rounded-full bg-green flex items-center justify-center'>
<p className='absolute text-[20px] leading-[24px] font-[400] font-poppins text-white '>
    NP
</p>
    </div>
<div className='absolute w-[122px] h-[24px] mt-[33px] ml-[1213px]  '>
    <p className='text-[20px] font-poppins !important font-[400] leading-[24px] text-white'>Noah Parker</p>
</div>
<div className='absolute w-[24px] h-[24px] top-[33px] ml-[1351px] flex justify-center items-center text-white'>
<IoIosArrowDown className='object-fit w-full h-full ' />
</div>

</div>
    </div>
  )
}

export default navbar