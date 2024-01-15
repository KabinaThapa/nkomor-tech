import React from 'react'
import { GoCircle } from "react-icons/go";
import EllipseSVG from './ellipseSVG';
import StrokeSVG from './strokeSVG';

const chooseSpeciality = () => {
  return (
    <div className=''>
    <div className='absolute top-[260px] left-[353px] w-[1023px] h-[598px] border bg-slate-300  z-50 font-poppins'>
        <p className='text-center font-inter text-[35px] font-[600] leading-[70.008px]'>Choose Speciality</p>
        <div className='flex justify-center items-center mx-auto gap-[6.029px] pt-[30.1px] pr-[7.54px] pb-[7.54px] pl-[7.54px] w-[820px] h-auto border'>
            <div className='w-[96px] h-[52.1px] border flex flex-col items-center  text-[10.551px] font-[400] leading-[15.072px]'>
               <EllipseSVG className='w-[18.087px] h-[18.087px]'/>
                <p>Step 1</p>
                <p>Choose symptom</p>

            </div>
            <StrokeSVG condition={true} />
            <div className='w-[96px] h-[52.1px] border flex flex-col items-center  text-[10.551px] font-[400] leading-[15.072px]'>
               <EllipseSVG className='w-[18.087px] h-[18.087px]'/>
                <p>Step 1</p>
                <p>Choose symptom</p>

            </div>
            <StrokeSVG condition={false} />
            <div className='w-[96px] h-[52.1px] border flex flex-col items-center  text-[10.551px] font-[400] leading-[15.072px]'>
               <EllipseSVG className='w-[18.087px] h-[18.087px]'/>
                <p>Step 1</p>
                <p>Choose symptom</p>

            </div>
            

        </div>
    </div>
    </div>
  )
}

export default chooseSpeciality