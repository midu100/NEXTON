import React from 'react'

const CommonHead = ({commonH,commonS}) => {
  return (
    <div>
        <h2 className='text-[36px] font-poppins font-semibold mb-[40px] hidden lg:block'>{commonH}<span className='text-[#4B5563CC]'>{commonS}</span></h2>
        <h2 className='text-[24px] px-[24px] font-poppins font-semibold mb-[40px] lg:hidden'>{commonH}</h2>
    </div>
  )
}

export default CommonHead