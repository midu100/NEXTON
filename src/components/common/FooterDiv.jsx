import React from 'react'

const FooterDiv = ({Head,line1,line2,line3,line4}) => {
  return (
    <>
        <div>
            <h2 className='text-[16px] font-poppins font-semibold text-second mb-[20px]'>{Head}</h2>
            <p className='text-[16px] font-poppins font-normal text-[#4B5563] mb-[16px]'>{line1}</p>
            <p className='text-[16px] font-poppins font-normal text-[#4B5563] mb-[16px]'>{line2}</p>
            <p className='text-[16px] font-poppins font-normal text-[#4B5563] mb-[16px]'>{line3}</p>
            <p className='text-[16px] font-poppins font-normal text-[#4B5563]'>{line4}</p>
        </div>
    </>
  )
}

export default FooterDiv