import React from 'react'
import { Link } from 'react-router'
import { IoIosArrowRoundForward } from "react-icons/io";

const SingleCategory = ({Cname,Cprice}) => {
  return (
    <>
        <div className='py-[40px] px-[24px]  lg:p-[40px] border border-[#E5E7EB] rounded-[16px] w-full lg:w-[460px] flex gap-[112px]  items-center'>
            <div>
                <h2 className='text-[17px] lg:text-[24px] font-poppins font-semibold text-second'>{Cname}</h2>
                <p className='text-[8px] lg:text-[14px] font-normal font-poppins text-primary'>{Cprice}</p>
            </div>

            <div className=''>
                <Link className='text-[10px] lg:text-[14px] text-primary font-poppins font-medium flex gap-[8px] items-center' to={'#'}>Shop Now <IoIosArrowRoundForward className='text-[26px]' /> </Link>
            </div>
        </div>
    </>
  )
}

export default SingleCategory