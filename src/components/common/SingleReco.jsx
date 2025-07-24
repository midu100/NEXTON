import React from 'react'
import product from '../../assets/img/product.png'
import { FaStar } from "react-icons/fa6";
import { Link } from 'react-router';
import { PiShoppingCartSimpleThin } from "react-icons/pi";

const SingleReco = ({proName,proPrice,proDis,proRat,proImg,proTotal,showDetails,cartClick}) => {


  return (

   <div className='w-[309px] h-[458px] relative'>
    <button onClick={cartClick} className='w-[40px] h-[40px] bg-orange-400 rounded-full flex justify-center items-center text-2xl text-white font-bold absolute right-[10px] top-[10px] cursor-pointer hover:bg-primary duration-300'><PiShoppingCartSimpleThin /></button>

    <div onClick={showDetails} className='p-[10px] w-[309px] h-[458px]  rounded-[16px] mt-[0px] mb-[30px]  hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] duration-[.4s]'>
        <div className="product-img w-full h-[347px] bg-[#F8F8F8] rounded-[16px] overflow-hidden">
            <img src={proImg} alt='Product' />
        </div>

        <div className='flex justify-between items-center mt-[20px] px-[10px]'>
            <h2 className='text-[16px] font-poppins font-semibold text-second truncate w-[180px]'>{proName}</h2>
            <p className='text-[16px] font-poppins font-semibold text-second'>$ {proPrice}</p>
        </div>

        {/* <div className='flex justify-between items-center px-[10px]'>
            <h2 className='text-[16px] font-poppins font-semibold text-second'>Accessories</h2>
            <p className='text-[16px] font-poppins font-semibold text-second line-through'>{proDis}</p>
        </div> */}

        <div className='flex gap-[4px] items-center mt-[5px] px-[10px]'>
            <FaStar className='text-[20px] text-[#FBBF24]'/>
            <p className='text-[14px] font-poppins font-normal text-[#4B5563] '>{proRat}<span>({proTotal})</span></p>
        </div>

        <div className='flex justify-center'>
            <Link to={'/productdetails'}>Details</Link>
        </div>

    </div>
   </div> 
  )
}

export default SingleReco