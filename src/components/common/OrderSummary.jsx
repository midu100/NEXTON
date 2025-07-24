import React from 'react'
import { GrFormSubtract } from "react-icons/gr";
import { MdAdd } from "react-icons/md";

const OrderSummary = () => {
  return (
    <>
        <div className='ORDER-SUMMARY w-[618px]' >
          <div id='SUMMARY'>
              <h2 className='text-[24px] font-semibold font-poppins text-second mb-[20px]'>Order summary</h2>
              <span className='w-full bg-[#E5E7EB] h-[1px] inline-block'></span>
          </div>

          <div className='ITEM flex justify-between mt-[24px]'>
            <div className='flex gap-[24px]'>
                <div className="Img w-[96px] h-[108px] bg-gray-400 rounded-[16px]"></div>
                <div>
                    <h2 className='text-[16px] font-semibold font-poppins text-second '>Black Automatic Watch</h2>
                    <p className='text-[14px] font-normal font-poppins text-[#4B5563] mt-[4px]'>One size</p>

                    <div className="BTN w-[110px] bg-[#E5E7EB] px-[12px] py-[8px] rounded-[20px] flex justify-between mt-[20px]">
                        <button className='w-[24px] h-[24px] bg-white rounded-full flex justify-center items-center'><GrFormSubtract /></button>
                        <p>1</p>
                        <button className='w-[24px] h-[24px] bg-white rounded-full flex justify-center items-center'><MdAdd /></button>
                    </div>
                </div>
            </div>

            <div className='PRICE text-center'>
                <p className='text-[16px] font-semibold font-poppins text-second mt-[31px]'>$169.99</p>
                 <p className='text-[14px] font-normal font-poppins text-second line-through'>$169.99</p>
            </div>
          </div>


          <div className='ITEM flex justify-between mt-[24px]'>
            <div className='flex gap-[24px]'>
                <div className="Img w-[96px] h-[108px] bg-gray-400 rounded-[16px]"></div>
                <div>
                    <h2 className='text-[16px] font-semibold font-poppins text-second '>Black Automatic Watch</h2>
                    <p className='text-[14px] font-normal font-poppins text-[#4B5563] mt-[4px]'>One size</p>

                    <div className="BTN w-[110px] bg-[#E5E7EB] px-[12px] py-[8px] rounded-[20px] flex justify-between mt-[20px]">
                        <button className='w-[24px] h-[24px] bg-white rounded-full flex justify-center items-center'><GrFormSubtract /></button>
                        <p>1</p>
                        <button className='w-[24px] h-[24px] bg-white rounded-full flex justify-center items-center'><MdAdd /></button>
                    </div>
                </div>
            </div>

            <div className='PRICE text-center'>
                <p className='text-[16px] font-semibold font-poppins text-second mt-[31px]'>$169.99</p>
                 <p className='text-[14px] font-normal font-poppins text-second line-through'>$169.99</p>
            </div>
          </div>
          <span className='w-full bg-[#E5E7EB] h-[1px] inline-block mt-[24px]'></span>

          <div className='flex justify-between items-center mt-[24px]'>
            <p className='text-[16px] font-normal font-poppins text-[#4B5563] '>Subtotal</p>
            <p className='text-[16px] font-normal font-poppins text-[#4B5563] '>$169.99</p>
          </div>

          <div className='flex justify-between items-center mt-[8px]'>
            <p className='text-[16px] font-normal font-poppins text-[#4B5563] '>Shipping estimate</p>
            <p className='text-[16px] font-normal font-poppins text-[#4B5563] '>$5.00</p>
          </div>

          <div className='flex justify-between items-center mt-[8px]'>
            <p className='text-[16px] font-normal font-poppins text-[#4B5563] '>Tax estimate</p>
            <p className='text-[16px] font-normal font-poppins text-[#4B5563] '>$24.90</p>
          </div>

          <div className='flex justify-between items-center mt-[24px]'>
            <p className='text-[16px] font-semibold font-poppins text-second '>Order total</p>
            <p className='text-[16px] font-semibold font-poppins text-second '>$199.89</p>
          </div>

          <div className='mt-[24px]'>
            <button className='w-full h-[52px] cursor-pointer bg-second rounded-full text-[16px] text-white font-medium font-poppins'>Confirm order</button>
          </div>

        </div>


    </>
  )
}

export default OrderSummary