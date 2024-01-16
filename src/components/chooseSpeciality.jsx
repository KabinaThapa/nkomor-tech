import React from 'react'
import { useState } from 'react';
import EllipseSVG from './ellipseSVG';
import StrokeSVG from './strokeSVG';
import stethoscope from '../assets/images/stethoscope.svg'
import elegance from '../assets/images/elegance.svg'
import fetus from '../assets/images/fetus.svg'
import testtube from '../assets/images/testtube.svg'
import tooth from '../assets/images/tooth.svg'
import eyeglasses from '../assets/images/eyeglasses.svg'
import CloseSVG from './closeSVG';


const chooseSpeciality = () => {
    const[close, setClose]=useState(false)
    const handleClose=()=>{
        setClose(!close)
    }
  return (
    <>
    {close ? (''):(
    <div className=''>
    <div className='mx-auto w-[1023px] h-[598px] border   z-50 font-poppins'>
        <div onClick={handleClose} className='flex items-center pl-[21px] pt-[21px]'>
            <CloseSVG />
            <div className='border mx-auto'>
            <p className='text-center font-inter text-[35px] font-[600] leading-[70.008px]'>
            Choose Speciality
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
        <div className='grid grid-cols-3 w-[820px] mx-auto border  gap-2 mt-[33px]'>
            <div className='relative h-[120px] flex  items-center justify-evenly text-center font-inter text-[16px] font-[700] text-white  bg-customgreen border-[1px] border-bordergreen rounded-[8px]'>
           <div className='absolute top-1 right-[12px]'> 
           <EllipseSVG  color='white'/>
           </div>
         
           <img className='w-[52px] h-[52px]' src={stethoscope} alt='stethoscope' />
             
            <p >General Medicine & Practitioner</p>
           


            </div>
 <div className='h-[120px] flex items-center justify-evenly text-center font-inter text-[16px] font-[700] text-primarygreen  border-[1px] border-bordergreen rounded-[8px]'>
            <img className='w-[52px] h-[52px]' src={elegance} alt='elegance'/>
            <p>Paediatrics-Dermatology</p>
           


            </div>
 <div className='h-[120px] flex items-center justify-evenly text-center font-inter text-[16px] font-[700] text-primarygreen  border-[1px] border-bordergreen rounded-[8px]'>
            <img className='w-[52px] h-[52px]' src={fetus} alt='fetus'/>
            <p>Obs And Gynae</p>


            </div>
 <div className='h-[120px] flex items-center justify-evenly text-center font-inter text-[16px] font-[700] text-primarygreen  border-[1px] border-bordergreen rounded-[8px]'>
             <img className='w-[52px] h-[52px]' src={tooth} alt='tooth'/>
            <p>Dentist</p>


            </div>
            <div className='h-[120px] flex items-center justify-evenly text-center font-inter text-[16px] font-[700] text-primarygreen  border-[1px] border-bordergreen rounded-[8px]'>
            <img className='w-[52px] h-[52px]' src={eyeglasses} alt='eyeglasses'/>
            <p>Optician</p>


            </div>
            <div className='h-[120px] flex items-center justify-evenly text-center font-inter text-[16px] font-[700] text-primarygreen  border-[1px] border-bordergreen rounded-[8px]'>
            <img className='w-[52px] h-[52px]' src={testtube} alt='testtube'/>
            <p>COVID-19 Testing</p>


            </div>
 
        </div>
        <div className='border w-[820px] flex justify-center gap-8 mx-auto mt-[33px] font-inter font-[500] text-[20px] leading-[40px] '>
        <button className='flex items-center rounded-[8px] border-[1px] pt-[7px] pb-[7px] pl-[32px] pr-[32px] border-bordergreen text-customgreen'>Back</button>
        <button className='flex items-center rounded-[8px] border-[1px] pt-[7px] pb-[7px] pl-[32px] pr-[32px] border-bordergreen text-white bg-customgreen'>Confirm</button>
    </div>
    
    </div>
   
    </div>
    )}
    </>
  )
}

export default chooseSpeciality