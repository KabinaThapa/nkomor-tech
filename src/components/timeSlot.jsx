import React from 'react'
import CloseSVG from './closeSVG'
import EllipseSVG from './ellipseSVG'
import StrokeSVG from './strokeSVG'

const timeSlot = () => {
  return (
    <div className=''>
 <div className='mx-auto w-[1023px] h-[598px] border   z-50 font-poppins'>
        <div  className='flex items-center pl-[21px] pt-[21px]'>
            <CloseSVG />
            <div className='border mx-auto'>
            <p className='text-center font-inter text-[35px] font-[600] leading-[70.008px]'>
            Time Slot
            </p>
            </div>
       
        </div>
      
        <div className='flex justify-center items-center mx-auto gap-[6.029px] pt-[30.1px] pr-[7.54px] pb-[7.54px] pl-[7.54px] w-[820px] h-auto border'>
            <div className=' border flex flex-col items-center text-center text-green text-[10.551px] font-[400] leading-[15.072px]'>
               <EllipseSVG color='#004343' className='w-[18.087px] h-[18.087px]'/>
                <p>Step 1</p>
                <p>Choose symptom</p>

            </div>
            <StrokeSVG condition={true} />
            <div className=' border flex flex-col items-center text-center text-lightgray text-[10.551px] font-[400] leading-[15.072px]'>
               <EllipseSVG color='#B3B3B3' className='w-[18.087px] h-[18.087px]'/>
                <p>Step 2</p>
                <p>Choose a timeslot</p>

            </div>
            <StrokeSVG condition={false} />
            <div className=' border flex flex-col items-center text-center text-lightgray text-[10.551px] font-[400] leading-[15.072px]'>
               <EllipseSVG color='#B3B3B3' className='w-[18.087px] h-[18.087px]'/>
                <p>Step 3</p>
                <p>Payment</p>

            </div>
            

        </div>
        </div>
        
    </div>
  )
}

export default timeSlot