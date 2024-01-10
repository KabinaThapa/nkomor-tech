import React from 'react'
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const footer = () => {
  return (
    <div className='absolute w-full h-[48px] top-[1032px] bg-customgreen flex justify-center items-center'>
<p className='flex items-center gap-1'>Copyright <AiOutlineCopyrightCircle />  Nkomorcare Technologies Inc. All rights reserved.</p>
    </div>
  )
}

export default footer