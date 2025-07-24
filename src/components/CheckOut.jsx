import React from 'react'
import BreadCrumb from './BreadCrumb'
import { FaRegCircleUser } from "react-icons/fa6";
import { LiaShippingFastSolid } from "react-icons/lia";
import { CiCreditCard2 } from "react-icons/ci";
import OrderSummary from './common/OrderSummary';

const CheckOut = () => {
  return (
    <>
         <section id='checkOut' className='pt-[40px] pb-[72px]'>
            <div className="container">
                <h2 className='text-[36px] font-semibold font-poppins text-second mb-[12px]'>Checkout</h2>
                <BreadCrumb breadName={'Checkout'}/>

                <div className="checkRow mt-[52px] flex justify-between">
                    <div className="INFO w-[638px]">

                        <div className="CONTACT border border-[#E5E7EB] rounded-[16px]">

                           <div className='flex gap-[12px] items-center border-b border-[#E5E7EB] p-[24px]'>
                               <FaRegCircleUser className='text-[24px] text-[#334155]'/>
                               <p className='text-[16px] text-[#4B5563] font-medium font-poppins'>CONTACT INFO</p>
                           </div>
                            <div className="phnEmail flex gap-[24px] items-center">
                                <div className='w-[283px] p-[24px]'>
                                    <p className='text-[16px] text-second font-medium font-poppins'>Your phone number</p>
                                    <input type='number' className='outline-0 text-[18px] font-poppins text-gray-500 pl-[10PX] border border-[#E5E7EB] h-[43px] w-full rounded-[12px] mt-[8px]'></input>
                                </div>

                                <div className='w-[283px] p-[24px]'>
                                    <p className='text-[16px] text-second font-medium font-poppins'>Email address</p>
                                    <input type='email' className='outline-0 text-[18px] font-poppins text-gray-500 pl-[10PX] border border-[#E5E7EB] h-[43px] w-full rounded-[12px] mt-[8px]'></input>
                                    </div>
                            </div>

                        </div>

                        <div className="SHIPPING border border-[#E5E7EB] rounded-[16px] mt-[40px]">
                            <div className='flex gap-[12px] items-center border-b border-[#E5E7EB] p-[24px]'>
                                <LiaShippingFastSolid className='text-[24px] text-[#334155]'/>
                                <p className='text-[16px] text-[#4B5563] font-medium font-poppins'>SHIPPING ADDRESS</p>
                            </div>
                            <div className="ADDRESS flex justify-between">
                                <div className='w-[283px] p-[24px]'>
                                    <p className='text-[16px] text-[#111827] font-medium font-poppins'>Frist Name</p>
                                    <input type='text' className='outline-0 text-[18px] font-poppins text-gray-500 pl-[10PX] border border-[#E5E7EB] h-[43px] w-full rounded-[12px] mt-[8px]'></input>
                                </div>

                                <div className='w-[283px] p-[24px]'>
                                    <p className='text-[16px] text-[#111827] font-medium font-poppins'>Last Name</p>
                                    <input type='text' className='outline-0 text-[18px] font-poppins text-gray-500 pl-[10PX] border border-[#E5E7EB] h-[43px] w-full rounded-[12px] mt-[8px]'></input>
                                </div>
                            </div>
                               <div className='flex gap-[24px] p-[24px]'>
                                   <diV className='w-[384px]'>
                                      <p className='text-[16px] text-second font-medium font-poppins'>Address line 1</p>
                                      <input type='text' className='outline-0 text-[18px] font-poppins text-gray-500 pl-[10PX] border border-[#E5E7EB] h-[43px] w-full rounded-[12px] mt-[8px]'></input>
                                  </diV>
                                  <diV className='w-[180px]'>
                                      <p className='text-[16px] text-second font-medium font-poppins'>Apt, Suite</p>
                                      <input type='text' className='outline-0 text-[18px] font-poppins text-gray-500 pl-[10PX] border border-[#E5E7EB] h-[43px] w-full rounded-[12px] mt-[8px]'></input>
                                  </diV>
                              </div>

                              <div className="LINE2 p-[24px]">
                                <p className='text-[16px] text-second font-medium font-poppins'>Address line 2</p>
                                <input type='text' className='outline-0 text-[18px] font-poppins text-gray-500 pl-[10PX] border border-[#E5E7EB] h-[43px] w-full rounded-[12px] mt-[8px]'></input>
                              </div>

                              <div className="CITY flex justify-between">
                                <div className='w-[283px] p-[24px]'>
                                    <p className='text-[16px] text-[#111827] font-medium font-poppins'>City</p>
                                    <input type='text' className='outline-0 text-[18px] font-poppins text-gray-500 pl-[10PX] border border-[#E5E7EB] h-[43px] w-full rounded-[12px] mt-[8px]'></input>
                                </div>

                                <div className='w-[283px] p-[24px]'>
                                    <p className='text-[16px] text-[#111827] font-medium font-poppins'>Country</p>
                                    <input type='text' className='outline-0 text-[18px] font-poppins text-gray-500 pl-[10PX] border border-[#E5E7EB] h-[43px] w-full rounded-[12px] mt-[8px]'></input>
                                </div>
                            </div>

                            <div className="ADDRESS flex justify-between">
                                <div className='w-[283px] p-[24px]'>
                                    <p className='text-[16px] text-[#111827] font-medium font-poppins'>State/Province</p>
                                    <input type='text' className='outline-0 text-[18px] font-poppins text-gray-500 pl-[10PX] border border-[#E5E7EB] h-[43px] w-full rounded-[12px] mt-[8px]'></input>
                                </div>

                                <div className='w-[283px] p-[24px]'>
                                    <p className='text-[16px] text-[#111827] font-medium font-poppins'>Postal code</p>
                                    <input type='text' className='outline-0 text-[18px] font-poppins text-gray-500 pl-[10PX] border border-[#E5E7EB] h-[43px] w-full rounded-[12px] mt-[8px]'></input>
                                </div>
                            </div>
                        </div>

                        <div className="PAYMENT mt-[41px] border border-[#E5E7EB] rounded-[16px]">
                            <div className="head flex gap-[12px] items-center p-[12px] border-b border-[#E5E7EB]">
                                <CiCreditCard2 className='text-[24px] text-[#334155]'/>
                                <p className='text-[16px] text-[#4B5563] font-medium font-poppins'>PAYMENT</p>
                            </div>

                            <div className='p-[24px]'>
                                <p className='text-[16px] text-[#111827] font-medium font-poppins'>Card number</p>
                                <input type='number' className='outline-0 text-[18px] font-poppins text-gray-500 pl-[10PX] border border-[#E5E7EB] h-[43px] w-full rounded-[12px] mt-[8px]'></input>
                            </div>

                            <div className='p-[24px]'>
                                <p className='text-[16px] text-[#111827] font-medium font-poppins'>Name on the card</p>
                                <input type='text' className='outline-0 text-[18px] font-poppins text-gray-500 pl-[10PX] border border-[#E5E7EB] h-[43px] w-full rounded-[12px] mt-[8px]'></input>
                            </div>

                               <div className='flex gap-[24px] p-[24px]'>
                                    <div className='w-[386px]'>
                                      <p className='text-[16px] text-[#111827] font-medium font-poppins'>Expiration date (MM/YY)</p>
                                      <input type='text' className='outline-0 text-[18px] font-poppins text-gray-500 pl-[10PX] border border-[#E5E7EB] h-[43px] w-full rounded-[12px] mt-[8px]'></input>
                                  </div>

                                  <div className='w-[180px]'>
                                      <p className='text-[16px] text-[#111827] font-medium font-poppins'>CVC</p>
                                      <input type='text' className='outline-0 text-[18px] font-poppins text-gray-500 pl-[10PX] border border-[#E5E7EB] h-[43px] w-full rounded-[12px] mt-[8px]'></input>
                                  </div>
                               </div>
                        </div>

                    </div>

                    {/* Order summery */}
                    <OrderSummary />


                </div>

            </div>
         </section>
    </>
  )
}

export default CheckOut