import React, { useEffect, useState } from 'react'
import SingleReco from './common/SingleReco'
import axios from 'axios'
import AllProducts from './AllProducts'
import BreadCrumb from './BreadCrumb'

const AllReco = () => {
    const allReco = [
        {
            cate : "Men's"
        },
        {
            cate : "Women’s fashion"
        },
        {
            cate : "Kids & Toys"
        },
        {
            cate : "Accessories"
        },
        {
            cate : "Cosmetics"
        },
        {
            cate : "Shoes"
        },
        {
            cate : "Sports"
        }
    ]

    const Sort = [
        {
            Name : "Most Popular"
        },
        {
            Name : "Best Rating"
        },
        {
            Name : "Newest"
        },
        {
            Name : "Price Low - Hight"
        },
        {
            Name : "Price Hight - Low"
        },
    ]

    
     

  return (
    <>
        <div id='allreco' className='bg-[#e5e7eb49] pt-[40px] py-[16px]'>
            <div className="container">

                <BreadCrumb breadLink={'/allreco'} breadName={'All Product'} />

                <div className="allRow flex gap-[20px] ">

                    <div id='sideMenu' className='w-[309px] p-[5px]'>

                        <div id='category' className='pb-[40px] border-b-2 border-[#94A3B8]'>
                            <h2 className='text-[18px] font-semibold font-poppins text-second mb-[8px]'>Categories</h2>
                            {
                                allReco.map((item,i)=>{
                                    return(
                                        <div key={i} className='flex gap-[12px] items-center mt-[16px]'>
                                           <input className="w-[20px] h-[20px]  accent-[#ca5d15] cursor-pointer hover:scale-110 duration-[.4s] cursor-pointer" type='checkbox'></input>
                                           <p className='text-[14px] font-normal font-poppins text-[#4B5563]'>{item.cate}</p>
                                       </div>
                                    )
                                })
                            }
                            
            
                        </div>

                        <div id='range' className='py-[40px] border-b border-[#4B5563]'>
                            <h2 className='text-[18px] font-semibold font-poppins text-second mb-[24px]'>Price range</h2>
                            <input className='w-[285px] h-[14px] accent-amber-800 rounded-xl hover:accent-red-700' type='range' />
                        
                        
                            <div className='mt-[20px] w-[285px] flex justify-between items-center'>
                                <div className=''>
                                    <p className='text-[16px] font-normal text-[#4B5563] font-poppins'>Min price</p>
                                    <div className='mt-[4px] flex justify-between w-[131px] border border-red-600 px-[16px] py-[8px] rounded-full text-[14px] font-medium font-poppins text-[#4B5563]'><input className='w-[60px] border-0 outline-0 text-[14px] font-medium font-poppins text-[#4B5563]' type='number'/><p>$</p></div>
                                </div>

                                <div className=''>
                                    <p className='text-[16px] font-normal text-[#4B5563] font-poppins'>Max price</p>
                                    <div className='mt-[4px] flex justify-between w-[131px] border border-red-600 px-[16px] py-[8px] rounded-full text-[14px] font-medium font-poppins text-[#4B5563]'><input className='w-[60px] border-0 outline-0 text-[14px] font-medium font-poppins text-[#4B5563]' type='number'/><p>$</p></div>
                                </div>
                            </div>


                        </div>


                        <div id='sort' className='mt-[32px]'>
                            <h2 className='text-[18px] font-semibold font-poppins text-second mb-[24px]'>Sort order</h2>

                            {
                                Sort.map((item,s)=>{
                                    return(
                                        <div key={s} className='flex gap-[12px] items-center mt-[16px] '>
                                            <input name='radi' type='radio' className='w-[20px] h-[20px] accent-red-600 hover:accent-sky-600 hover:scale-[1.1] duration-300'></input>
                                            <p className='text-[14px] font-normal font-poppins text-[#4B5563]'>{item.Name}</p>
                                       </div>
                                    )
                                })
                            }

                            
                        </div>


                    </div>

                   {/* Right */}
                    <AllProducts />

                </div>
            </div>
        </div>
    </>
  )
}

export default AllReco