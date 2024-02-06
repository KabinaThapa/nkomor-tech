import React from 'react'
import bima from '../assets/images/bima.svg'
import acacia from '../assets/images/acacia.svg'
import alica from '../assets/images/alica.svg'
import hollard from '../assets/images/hollard.svg'
import hospitalimg from '../assets/images/hospitalimage.svg'
import pin from '../assets/images/pin.svg'
import schedule from '../assets/images/schedule.svg'
import vector from '../assets/images/Vector.png'


const facilities = () => {
    const facilities=[
        {id:1,
             name:'Greater Accra Regional Hospital', 
             insurance:{img1:bima, img2:acacia, img3:alica, img4:hollard},
            address:'Castle Rd, Accra, Ghana',
        openHours:'MON-SUN 10:00AM-11.59PM',
    image:{hospitalimg}},
    {id:2,
        name:'Greater Accra Regional Hospital', 
        insurance:{img1:bima, img2:acacia, img3:alica, img4:hollard},
       address:'Castle Rd, Accra, Ghana',
   openHours:'MON-SUN 10:00AM-11.59PM',
image:{hospitalimg}},
{id:3,
    name:'Greater Accra Regional Hospital', 
    insurance:{img1:bima, img2:acacia, img3:alica, img4:hollard},
   address:'Castle Rd, Accra, Ghana',
openHours:'MON-SUN 10:00AM-11.59PM',
image:{hospitalimg}},
{id:4,
    name:'Greater Accra Regional Hospital', 
    insurance:{img1:bima, img2:acacia, img3:alica, img4:hollard},
   address:'Castle Rd, Accra, Ghana',
openHours:'MON-SUN 10:00AM-11.59PM',
image:{hospitalimg}},
{id:5,
    name:'Greater Accra Regional Hospital', 
    insurance:{img1:bima, img2:acacia, img3:alica, img4:hollard},
   address:'Castle Rd, Accra, Ghana',
openHours:'MON-SUN 10:00AM-11.59PM',
image:{hospitalimg}},
    ]

  return (
   <>
   <div className='flex flex-col justify-center items-center w-full border '>
{
    facilities.map((item)=>(
        <div className='facilities  w-[1022px] h-[329px] p-8 border border-red-500 flex items-center justify-between gap-6 mb-8  rounded-[20px]'>
            <div className='flex  border w-[185px] h-[186px]  '>
                <img className='w-full h-full rounded-[8px]  ' src={hospitalimg}/>
            </div>
            <div className='flex flex-col w-full  border border-red-600'>
                <div className='flex items-center gap-4'>
                <p className='text-[32px] font-[600] leading-[40px]'>{item.name}</p>
                <p className='flex items-center gap-1 font-inter font-[500] text-[16px] leading-[32px]'>Verified for booking <img className='w-[20px] h-[20px]' src={vector}/> </p>
                </div>
               
            <div className='flex gap-[54px] items-center border  mt-[28px] mb-[28px]'>
    
    <img className='w-[82.3px] h-[26.6px]' src={item.insurance.img1}/>
    <img className='w-[82.3px] h-[26.6px]' src={item.insurance.img2}/>
    <img className='w-[82.3px] h-[26.6px]' src={item.insurance.img3}/>
    <img className='w-[82.3px] h-[26.6px]' src={item.insurance.img4}/>
</div>
<div className='text-[16px] font-[500] leading-[24px]'>

<p className='flex items-center' > <img src={pin}/>{item.address}</p>
<p className='flex items-center'> <img src={schedule}/>{item.openHours}</p>

</div>

            </div>

           
        </div>
    ))
}
</div>
   </>
  )
}

export default facilities