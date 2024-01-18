import React from 'react'
import bima from '../assets/images/bima.svg'
import acacia from '../assets/images/acacia.svg'
import alica from '../assets/images/alica.svg'
import hollard from '../assets/images/hollard.svg'
import hospitalimg from '../assets/images/hospitalimage.svg'


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
    ]

  return (
   <>
{
    facilities.map((item)=>(
        <div className='facilities w-[1029px] h-[329px] border grid grid-cols-3 items-center mx-auto mb-8 gap-4 rounded-[20px]'>
            <div className='flex items-center justify-end border '>
                <img className='w-[185px] h-[186px] rounded-[8px]' src={hospitalimg}/>
            </div>
            <div className='flex flex-col col-span-2 border '>
                <p className='text-[32px] font-[600] leading-[40px]'>{item.name}</p>
            <div className='flex gap-[54px] items-center border  mt-[28px] mb-[28px]'>
    
    <img className='w-[82.3px] h-[26.6px]' src={item.insurance.img1}/>
    <img className='w-[82.3px] h-[26.6px]' src={item.insurance.img2}/>
    <img className='w-[82.3px] h-[26.6px]' src={item.insurance.img3}/>
    <img className='w-[82.3px] h-[26.6px]' src={item.insurance.img4}/>
</div>
<div className='text-[16px] font-[500] leading-[24px]'>
<p >{item.address}</p>
<p>{item.openHours}</p>

</div>

            </div>

           
        </div>
    ))
}
   </>
  )
}

export default facilities