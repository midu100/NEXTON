import React, { useState } from 'react'
import product from'../assets/img/product.png'
import { WiStars } from "react-icons/wi";
import { PiStarFill } from "react-icons/pi";
import { RiShoppingBag4Fill } from "react-icons/ri";
import Reco from './Reco';
import SliderImg from './common/SliderImg'

const ProductDetails = () => {
    const keyWord = [
        {
            icon : <WiStars />,
            Name : "men's fashion"
        },
        {
            icon : <WiStars />,
            Name : "winter hat"
        },
        {
            icon : <WiStars />,
            Name : "colorful accessory"
        },
        {
            icon : <WiStars />,
            Name : "warm headwear"
        },
    ]

    const [count,setCount]= useState(1)


  return (
    <>
        <section id='productDetails' className='pt-[40px] pb-[90px]' >
            <div className="container">
                <div className="detailRow flex justify-between">

                    <div className="proDescription w-[804px]">
                        <div className="Img">
                            <SliderImg />
                            {/* <img className='w-[610px]' src={product} alt='product'/> */}
                        </div>



                        <h2 className='mt-[105px] mb-[4px] text-[36px] font-semibold font-poppins text-second'>Black Automatic Watch</h2>
                        <p className='w-[735px] text-[16px] font-normal font-poppins text-[#4B5563]'>The St. Louis Meramec Canoe Company was founded by Alfred Wickett in 1922. Wickett had
                           previously worked for the Old Town Canoe Co from 1900 to 1914. Manufacturing of the classic
                           wooden canoes in Valley Park, Missouri ceased in 1978.
                        </p>

                        <h2 className='mt-[60px] mb-[4px] text-[24px] font-semibold font-poppins text-second'>Fabric + Care</h2>
                        <p className='w-[735px] text-[16px] font-normal font-poppins text-[#4B5563]'>Material: Soft wool blend</p>
                        <p className='w-[735px] text-[16px] font-normal font-poppins text-[#4B5563]'>Color: Various</p>

                        <h2 className='mt-[60px] mb-[4px] text-[24px] font-semibold font-poppins text-second'>Sale performance</h2>
                        <p className='w-[735px] text-[16px] font-normal font-poppins text-[#4B5563]'>Sales: 0</p>
                        <p className='w-[735px] text-[16px] font-normal font-poppins text-[#4B5563]'>Review Count: -</p>
                        <p className='w-[735px] text-[16px] font-normal font-poppins text-[#4B5563]'>Review Average: -</p>

                         <h2 className='mt-[60px] mb-[4px] text-[24px] font-semibold font-poppins text-second'>Keywords</h2>
                         <div className="keyRow flex gap-[8px] items-center">
                            {
                                keyWord.map((item,i)=>{
                                    return(
                                         <div key={i} className='w-fit flex gap-[4px] items-center py-[8px] px-[14px] rounded-full border border-[#E5E7EB]'>
                                             {item.icon}
                                             <p className='text-[12px] font-normal font-poppins text-[#4B5563]'>{item.Name}</p>
                                         </div>
                                    )
                                })
                           
                            }
                         </div>
                    </div>

                    <div className="proSize w-[460px] h-fit border border-[#E5E7EB] rounded-[16px] p-[33px]">
                        <div className='flex justify-between'>
                            <div className='flex gap-[6px] items-center'>
                                <PiStarFill className='text-[#FBBF24]'/>
                                <p className='text-[16px] font-semibold font-poppins text-[#4B5563]'>4.9</p>
                                <p className='text-[16px] font-medium font-poppins text-[#4B5563]'>142 reviews</p>
                            </div>
                            <h2 className='text-[24px] font-poppins font-semibold text-second'>169$</h2>
                        </div>

                        <h2 className='mt-[32px] mb-[12px] text-[16px] font-semibold font-poppins text-second'>Size:S</h2>
                        <div className="sizeRow flex gap-[8px] flex-wrap">
                            <button className='py-[10px] px-[31px] rounded-[12px] border border-[#E5E7EB] text-[16px] font-semibold font-poppins text-[#4B5563] hover:bg-[#0EA5E9] hover:text-white duration-300 cursor-pointer'>S</button>
                            <button className='py-[10px] px-[31px] rounded-[12px] border border-[#E5E7EB] text-[16px] font-semibold font-poppins text-[#4B5563] hover:bg-[#0EA5E9] hover:text-white duration-300 cursor-pointer'>M</button>
                            <button className='py-[10px] px-[31px] rounded-[12px] border border-[#E5E7EB] text-[16px] font-semibold font-poppins text-[#4B5563] hover:bg-[#0EA5E9] hover:text-white duration-300 cursor-pointer'>L</button>
                            <button className='py-[10px] px-[31px] rounded-[12px] border border-[#E5E7EB] text-[16px] font-semibold font-poppins text-[#4B5563] hover:bg-[#0EA5E9] hover:text-white duration-300 cursor-pointer'>XL</button>
                            <button className='py-[10px] px-[31px] rounded-[12px] border border-[#E5E7EB] text-[16px] font-semibold font-poppins text-[#4B5563] hover:bg-[#0EA5E9] hover:text-white duration-300 cursor-pointer'>XXL</button>
                        </div>

                        <div className='mt-[38px] flex justify-between'>
                            <div className="count flex gap-[16px] items-center bg-[#E5E7EB] rounded-full w-fit py-[8px] px-[12px]">
                                <button onClick={()=>setCount(count - 1)} className=' px-[12px] py-[5px] text-second rounded-full bg-white text-[18px] font-bold'>-</button>
                                <h2 className='text-[16px] font-medium font-poppins text-[#4B5563]'>{count}</h2>
                                <button onClick={()=>setCount(count + 1)} className=' px-[12px] py-[5px] text-second rounded-full bg-white text-[18px] font-bold'>+</button>
                            </div>

                            <div className='w-fit bg-second py-[14px] px-[32px] rounded-full flex gap-[8px] items-center'>
                                <RiShoppingBag4Fill className='text-white' />
                                <button className='text-[16px] font-medium font-poppins text-white'>Add to cart</button>
                            </div>

                        </div>
                            <div className='flex justify-between mt-[32px]'>
                                <p className='text-[16px] font-normal font-poppins text-[#4B5563]'>$169.99 x 1</p>
                                <p className='text-[16px] font-normal font-poppins text-[#4B5563]'>$169.99</p>
                            </div>
                            <div className='flex justify-between mt-[10px]'>
                                <p className='text-[16px] font-normal font-poppins text-[#4B5563]'>Tax estimate</p>
                                <p className='text-[16px] font-normal font-poppins text-[#4B5563]'>$0</p>
                            </div>
                            <span className='w-full h-[2px] bg-[#4B5563] inline-block'></span>

                            <div className='flex justify-between mt-[16px]'>
                                <h2 className='text-[16px] font-semibold font-poppins text-second'>Total</h2>
                                <h2 className='text-[16px] font-semibold font-poppins text-second'>$169.99</h2>
                            </div>
                    </div>

                </div>

                <Reco />
            </div>
        </section>
    </>
  )
}

export default ProductDetails