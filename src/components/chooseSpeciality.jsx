import React from 'react'
import { GoCircle } from "react-icons/go";
import EllipseSVG from './ellipseSVG';
import StrokeSVG from './strokeSVG';
import stethoscope from '../assets/images/stethoscope.svg'
import elegance from '../assets/images/elegance.svg'
import fetus from '../assets/images/fetus.svg'
import testtube from '../assets/images/testtube.svg'
import tooth from '../assets/images/tooth.svg'
import eyeglasses from '../assets/images/eyeglasses.svg'


const chooseSpeciality = () => {
  return (
    <div className=''>
    <div className='absolute top-[260px] left-[353px] w-[1023px] h-[598px] border bg-slate-300  z-50 font-poppins'>
        <p className='text-center font-inter text-[35px] font-[600] leading-[70.008px]'>Choose Speciality</p>
        <div className='flex justify-center items-center mx-auto gap-[6.029px] pt-[30.1px] pr-[7.54px] pb-[7.54px] pl-[7.54px] w-[820px] h-auto border'>
            <div className=' border flex flex-col items-center text-center text-green text-[10.551px] font-[400] leading-[15.072px]'>
               <EllipseSVG condition={true} className='w-[18.087px] h-[18.087px]'/>
                <p>Step 1</p>
                <p>Choose symptom</p>

            </div>
            <StrokeSVG condition={true} />
            <div className=' border flex flex-col items-center text-center text-lightgray text-[10.551px] font-[400] leading-[15.072px]'>
               <EllipseSVG condition={false} className='w-[18.087px] h-[18.087px]'/>
                <p>Step 2</p>
                <p>Choose a timeslot</p>

            </div>
            <StrokeSVG condition={false} />
            <div className=' border flex flex-col items-center text-center text-lightgray text-[10.551px] font-[400] leading-[15.072px]'>
               <EllipseSVG condition={false} className='w-[18.087px] h-[18.087px]'/>
                <p>Step 3</p>
                <p>Payment</p>

            </div>
            

        </div>
        <div className='grid grid-cols-3 w-[820px] mx-auto border  gap-2 mt-[33px]'>
            <div className='h-[120px] flex  items-center text-center font-inter text-[16px] font-[700] text-white justify-evenly bg-customgreen border-[1px] border-bordergreen rounded-[8px]'>
           
          
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
    </div>
    </div>
  )
}

export default chooseSpeciality