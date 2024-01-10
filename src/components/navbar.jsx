import React from 'react'
import brandlogo from '../assets/images/brandlogo.png'
import { IoIosArrowDown } from "react-icons/io";
const navbar = () => {
  return (
    <div className='[1440px] border-2 bg-slate-300 h-[120px] '>
<div className='relative w-full h-[88px] border mt-8 bg-customgreen flex'>
    <div className='w-[169px] h-[50px] mt-[20px] ml-[38px] border '>
        <img src={brandlogo} alt='brandlogo' className='object-fit w-full h-full text-black '/>
    </div>
    <div className='absolute w-[48px] h-[48px] mt-[20px] ml-[1152px] border rounded-full'>
NP
    </div>
<div className='absolute w-[122px] h-[24px] mt-[33px] ml-[1213px] '>
    <p className='text-[20px]'>Noah Parker</p>
</div>
<div className='absolute w-[24px] h-[24px] top-[33px] ml-[1351px] border'>
<IoIosArrowDown className='w-full h-full' />
</div>

</div>
    </div>
  )
}

export default navbar