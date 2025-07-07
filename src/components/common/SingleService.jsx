import React from 'react'
import { LiaTruckSolid } from "react-icons/lia";

const SingleService = ({Name,Price,Icon}) => {
  return (
    <>
       
        <div className='flex gap-[8px] lg:gap-[16px] items-center'>
            {Icon}
            <div>
                <h2 className='text-[14px] text-[#4B5563] lg:text-[18px] lg:font-semibold font-poppins lg:text-second'>{Name}</h2>
                <p className='hidden lg:block text-[14px] font-normal font-poppins text-[#4B5563] mt-[2px]'>{Price}</p>
            </div>
        </div>
    </>
  )
}

export default SingleService