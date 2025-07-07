import React from 'react'
import SingleService from './common/SingleService'
import { LiaTruckSolid } from 'react-icons/lia'
import { RiExchange2Line } from "react-icons/ri";
import { TbWorld } from "react-icons/tb";
import { GrMoney } from "react-icons/gr";

const Service = () => {
  return (
    <div>
        <section id='service' className='pt-[52px] pb-[32px]'>
            <div className="container">

                 <h1 className='lg:hidden px-[24px] mb-6 text-[16px] font-bold text-second'>Nexton® always with you</h1>
                <div className="serviceRow flex justify-between flex-wrap gap-[24px]  lg:border border-[#E5E7EB] py-[24px] px-[24px] lg:px-[40px] rounded-[16px]">
                    
                    <SingleService Name={'Free shipping'} Price={'On orders over $50.00'} Icon={<LiaTruckSolid className='text-[24px]' />}/>
                    <span className=' lg:h-[50px] lg:w-[1px] bg-[#E5E7EB] inline-block'></span>

                    <SingleService Name={'Very easy to return'} Price={'Just phone number'} Icon={<RiExchange2Line className='text-[24px]' />} />
                    <span className=' lg:h-[50px] lg:w-[1px] bg-[#E5E7EB] inline-block'></span>

                    <SingleService Name={'Worldwide delivery'} Price={'Fast delivery worldwide'} Icon={<TbWorld className='text-[24px]' />} />
                    <span className=' lg:h-[50px] lg:w-[1px] bg-[#E5E7EB] inline-block'></span>

                    <SingleService Name={'Refunds policy'} Price={'60 days return for any reason'} Icon={<GrMoney className='text-[24px]' />} />
                
                </div>
            </div>
        </section>
    </div>
  )
}

export default Service