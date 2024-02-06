import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import arrowdown from '../assets/images/arrowdown.png'

const searchbar = () => {
  return (
    <div className='w-full h-[85px] border-[1px]  flex justify-evenly items-center p-2 mx-auto border-borderoutline font-poppins font-[500] text-[16px] '>
       <div className='flex gap-2'>
       <div className='flex gap-2 items-center justify-center  w-[131px] h-[40px] rounded-[5px] border-[1px] border-bordersearch'>
            <p>Location</p>
            <img className='' src={arrowdown}/>

        </div>
        <div className='w-[550px] h-[40px] flex items-center rounded-[5px] border-[1px] border-bordersearch pl-2 pr-2'>
            <input className='w-full outline-none' type='text' placeholder='Type in the hospitals, clinics, doctors, services, etc'/>
            <AiOutlineSearch size={24}/>
        </div>
       </div>
       
        <div className='w-[212px] flex items-center  gap-2 '>
            <p>Sort by</p>
            <div className='w-[139px] h-[40px] flex gap-2 items-center justify-center rounded-[5px] border-[1px] border-bordersearch '>
               <p>Distance</p> 
               <img className='' src={arrowdown}/>
            </div>
        </div>


    </div>
  )
}

export default searchbar