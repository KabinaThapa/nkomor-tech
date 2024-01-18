import React from 'react'
import CloseSVG from './closeSVG'
import EllipseSVG from './ellipseSVG'
import StrokeSVG from './strokeSVG'
import calender from '../assets/images/calender.svg'
import arrowleft from '../assets/images/arrowleft.svg'
import arrowright from '../assets/images/arrowright.svg'


const timeSlot = () => {
    const timeSlot=[
        {id:1, time:'9:00AM',status:'available', timeOfDay:'morning'},
        {id:2, time:'10:00AM',status:'available',timeOfDay:'morning'},
        {id:3, time:'11:00AM',status:'available',timeOfDay:'morning'},
        {id:4, time:'12:00AM',status:'available',timeOfDay:'morning'},
        {id:1, time:'9:00AM',status:'available', timeOfDay:'morning'},
        {id:2, time:'10:00AM',status:'available',timeOfDay:'morning'},
        {id:3, time:'11:00AM',status:'available',timeOfDay:'morning'},
        {id:4, time:'12:00AM',status:'available',timeOfDay:'morning'},
        {id:5, time:'1:00PM',status:'available',timeOfDay:'afternoon'},
        {id:6, time:'1:00PM',status:'available',timeOfDay:'afternoon'},
        {id:7, time:'1:00PM',status:'available',timeOfDay:'afternoon'},
        {id:8, time:'1:00PM',status:'available',timeOfDay:'afternoon'},
        {id:5, time:'1:00PM',status:'available',timeOfDay:'afternoon'},
        {id:6, time:'1:00PM',status:'available',timeOfDay:'afternoon'},
        {id:7, time:'1:00PM',status:'available',timeOfDay:'afternoon'},
        {id:8, time:'1:00PM',status:'available',timeOfDay:'afternoon'},
    
    

]
const morningSlot=timeSlot.filter((slot)=>slot.timeOfDay==='morning')
console.log(morningSlot)
const afternonSlot=timeSlot.filter((slot)=>slot.timeOfDay==='afternoon')
console.log(afternonSlot)
  return (
    <div className='w-[1129px] mx-auto border border-red-500 bg-bgopacity bg-opacity-[0.5]  '>
 <div className='mx-auto w-[1023px] h-[598px] border font-poppins bg-white'>
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
        <div className='timeslot w-[834px] h-[313px] border mx-auto rounded-[5.1px] p-4 flex flex-col gap-4'>
            <div className='grid grid-cols-6 items-center border gap-4'>
                <div className='border'>
                <div className='w-[115.8px] h-[30.1px] border-bordergreen border-[0.64px] rounded-[5.12px] flex items-center justify-center gap-2'>
                    <img className='w-[15.35px] h-[15.35px]' src={calender} alt='calender'/>
                    <p className='font-inter text-[12.8px] font-[600] leading-[25.6px] text-customgreen'>November</p>

                </div>
                </div>
                <div className='border flex justify-center'>
                <img   src={arrowleft} alt='arrow left'/>
                </div>
                
                   
                    <div className='flex flex-col items-center  font-inter text-[12.8px] font-[700] leading-[25.6px]'>
                        <p className='text-customgreen  font-[500]  '>Today</p>
                        <p>23 Slots Available</p>
                        <div className='w-[138.2px] h-[2.6px] border bg-line'></div>
                    </div>
                    <div className='flex flex-col items-center  font-inter text-[12.8px] font-[700] leading-[25.6px]'>
                        <p className='text-customgreen  font-[500]  '>Tomorrow</p>
                        <p>20 Slots Available</p>
                        
                    </div>
                    <div className='flex flex-col items-center  font-inter text-[12.8px] font-[700] leading-[25.6px]'>
                        <p className='text-customgreen  font-[500]  '>Sun, Nov 10</p>
                        <p>15 Slots Available</p>
                       
                    </div>
                    <div className='border flex justify-center'>
                <img   src={arrowright} alt='arrow right'/>
                </div>
               

            </div>
            <div className='flex gap-4 justify-between items-center font-inter text-[12.8px] font-[600] leading-[25.6px] text-customgreen'>
                <div className='border flex  justify-center mx-auto'>
                    <p className='text-black text-[19.2px] leading-[38.4px]'>Morning</p>
                </div>
                
                   
                        <div className='border  border-red-200 grid grid-cols-6 col-span-2 gap-2'>
                             {morningSlot.map((timeSlot)=>(
                        <div className=' border-bordergray w-[85px] h-[32px] rounded-[6.4px] border-[0.64px] flex items-center justify-center'>
                         <p className=''>{timeSlot.time}</p>
     
                         </div> 
     
                   

                    ))
                             }
                    </div>
                    </div>
                    <div className='w-[785.5px] h-[1px] border bg-stroke'></div>
                    <div className='flex gap-4 justify-between items-center font-inter text-[12.8px] font-[600] leading-[25.6px] text-customgreen'>
                   
                    <div className='border flex justify-center mx-auto'>
                    <p className='text-black text-[19.2px] leading-[38.4px] flex justify-center'>Afternoon</p>
                </div>

                    <div className='border border-red-200 grid grid-cols-6  gap-2'>
                             {afternonSlot.map((timeSlot)=>(
                        <div className='w-[85px] h-[32px] border-bordergray rounded-[6.4px] border-[0.64px] flex items-center justify-center'>
                         <p className=''>{timeSlot.time}</p>
     
                         </div> 
     
                   

                    ))
                             }
                    </div>
                    
               

            </div>
           

        </div>
        <div className='border w-[834px] flex justify-center gap-8 mx-auto mt-[33px] font-inter font-[500] text-[20px] leading-[40px] '>
        <button className='flex items-center rounded-[8px] border-[1px] pt-[7px] pb-[7px] pl-[32px] pr-[32px] border-bordergreen text-customgreen'>Back</button>
        <button className='flex items-center rounded-[8px] border-[1px] pt-[7px] pb-[7px] pl-[32px] pr-[32px] border-bordergreen text-white bg-customgreen'>Confirm</button>
    </div>
        </div>
        
    </div>
  )
}

export default timeSlot