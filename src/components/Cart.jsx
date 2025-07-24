import React, { useState } from 'react'
import { Link } from 'react-router'
import { RxCross2 } from "react-icons/rx";
import product from '../assets/img/product.png'

const Cart = ({closeCart}) => {
   
  return (
    <>
    <section>

      <div onClick={closeCart} className='w-full h-screen bg-[#00000072] fixed top-0 left-0 z-10'></div>  //black-shadow

        <div className='w-[400px] h-screen bg-white ml-auto p-3 fixed top-0 right-0 z-20 duration-400'>
            <div className="cartHead flex justify-between items-center">
                <h2 className='text-3xl font-poppins font-bold text-second'>Cart</h2>
                <RxCross2 onClick={closeCart} className='text-[30px] font-bold cursor-pointer'/>
            </div>

            <div className="AllProduct mt-5 h-[650px]  overflow-y-scroll">

                <div className='flex justify-between items-center mb-[10px]'>
                      <div className='productImg_Name flex items-center gap-4'>
                         <div className="img w-[60px] h-[60px] bg-[#969090] rounded-2xl overflow-hidden">
                            <img src={product} alt='img'></img>
                         </div>
                         <p className='text-[#000] font-poppins font-normal text-[20px]'>Watch</p>
                      </div>

                      <p className='text-[18px] font-medium font-poppins'>20$</p>
                </div>

                <div className='flex justify-between items-center mb-[10px]'>
                      <div className='productImg_Name flex items-center gap-4'>
                         <div className="img w-[60px] h-[60px] bg-[#969090] rounded-2xl overflow-hidden">
                            <img src={product} alt='img'></img>
                         </div>
                         <p className='text-[#000] font-poppins font-normal text-[20px]'>Watch</p>
                      </div>

                      <p className='text-[18px] font-medium font-poppins'>20$</p>
                </div>

                <div className='flex justify-between items-center mb-[10px]'>
                      <div className='productImg_Name flex items-center gap-4'>
                         <div className="img w-[60px] h-[60px] bg-[#969090] rounded-2xl overflow-hidden">
                            <img src={product} alt='img'></img>
                         </div>
                         <p className='text-[#000] font-poppins font-normal text-[20px]'>Watch</p>
                      </div>

                      <p className='text-[18px] font-medium font-poppins'>20$</p>
                </div>

                <div className='flex justify-between items-center mb-[10px]'>
                      <div className='productImg_Name flex items-center gap-4'>
                         <div className="img w-[60px] h-[60px] bg-[#969090] rounded-2xl overflow-hidden">
                            <img src={product} alt='img'></img>
                         </div>
                         <p className='text-[#000] font-poppins font-normal text-[20px]'>Watch</p>
                      </div>

                      <p className='text-[18px] font-medium font-poppins'>20$</p>
                </div>

                <div className='flex justify-between items-center mb-[10px]'>
                      <div className='productImg_Name flex items-center gap-4'>
                         <div className="img w-[60px] h-[60px] bg-[#969090] rounded-2xl overflow-hidden">
                            <img src={product} alt='img'></img>
                         </div>
                         <p className='text-[#000] font-poppins font-normal text-[20px]'>Watch</p>
                      </div>

                      <p className='text-[18px] font-medium font-poppins'>20$</p>
                </div>

                <div className='flex justify-between items-center mb-[10px]'>
                      <div className='productImg_Name flex items-center gap-4'>
                         <div className="img w-[60px] h-[60px] bg-[#969090] rounded-2xl overflow-hidden">
                            <img src={product} alt='img'></img>
                         </div>
                         <p className='text-[#000] font-poppins font-normal text-[20px]'>Watch</p>
                      </div>

                      <p className='text-[18px] font-medium font-poppins'>20$</p>
                </div>

                <div className='flex justify-between items-center mb-[10px]'>
                      <div className='productImg_Name flex items-center gap-4'>
                         <div className="img w-[60px] h-[60px] bg-[#969090] rounded-2xl overflow-hidden">
                            <img src={product} alt='img'></img>
                         </div>
                         <p className='text-[#000] font-poppins font-normal text-[20px]'>Watch</p>
                      </div>

                      <p className='text-[18px] font-medium font-poppins'>20$</p>
                </div>

                <div className='flex justify-between items-center mb-[10px]'>
                      <div className='productImg_Name flex items-center gap-4'>
                         <div className="img w-[60px] h-[60px] bg-[#969090] rounded-2xl overflow-hidden">
                            <img src={product} alt='img'></img>
                         </div>
                         <p className='text-[#000] font-poppins font-normal text-[20px]'>Watch</p>
                      </div>

                      <p className='text-[18px] font-medium font-poppins'>20$</p>
                </div>

                <div className='flex justify-between items-center mb-[10px]'>
                      <div className='productImg_Name flex items-center gap-4'>
                         <div className="img w-[60px] h-[60px] bg-[#969090] rounded-2xl overflow-hidden">
                            <img src={product} alt='img'></img>
                         </div>
                         <p className='text-[#000] font-poppins font-normal text-[20px]'>Watch</p>
                      </div>

                      <p className='text-[18px] font-medium font-poppins'>20$</p>
                </div>

                <div className='flex justify-between items-center mb-[10px]'>
                      <div className='productImg_Name flex items-center gap-4'>
                         <div className="img w-[60px] h-[60px] bg-[#969090] rounded-2xl overflow-hidden">
                            <img src={product} alt='img'></img>
                         </div>
                         <p className='text-[#000] font-poppins font-normal text-[20px]'>Watch</p>
                      </div>

                      <p className='text-[18px] font-medium font-poppins'>20$</p>
                </div>
                
            </div>

            <Link to={'/checkout'} className='w-full bg-second py-3 px-5 text-[18px] font-medium font-poppins text-white inline-block rounded-2xl text-center'>Checkout</Link>


        </div>

    </section>
    </>
  )
}

export default Cart