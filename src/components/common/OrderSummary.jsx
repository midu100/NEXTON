import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { GrFormSubtract } from "react-icons/gr";
import { MdAdd } from "react-icons/md";

const OrderSummary = () => {
  const localProduct = JSON.parse(localStorage.getItem('Name'))

    const [Product, setProduct] = useState([]);

    useEffect(() => {
    axios.get(`https://fakestoreapi.com/products`)
      .then((res) => {
        const addCartPro =res.data.filter((item)=>{
        return localProduct.includes(item.id)
        })

        const withQty = addCartPro.map((item)=>{
          console.log(item)

          return{...item,qty:1 , unitePrice : item.price }
        })

        setProduct(withQty)
        console.log(withQty)
  
      })

      .catch((err) => {console.log("error")});
  }, []);

  // const addCartPro = Product.filter((item)=>{
  //  return localProduct.includes(item.id)
  // })

  const handleAddQty = (aluId)=>{
    console.log(aluId)
    setProduct((prev)=>(
      prev.map((item)=>{
        if(item.id != aluId) return item
        const UpdatedQty = item.qty+1
        const UpdatedPrice = item.unitePrice * UpdatedQty
        
        return{...item, qty: UpdatedQty , price: UpdatedPrice }
      })
    ))
  }
  const handleMinusQty = (aluId)=>{
    console.log(aluId)
    setProduct((prev)=>(
      prev.map((item)=>{
        if(item.id != aluId) return item
        const UpdatedQty = item.qty-1
         if (UpdatedQty < 1) return item;
        const UpdatedPrice = item.unitePrice * UpdatedQty
        
        return{...item, qty: UpdatedQty , price: UpdatedPrice }
      })
    ))
  }

  const TotalPrice = Product.reduce((sum , total)=>{
   return Math.floor(sum + total.price)
  }, 0)
  return (
    <>
        <div className='ORDER-SUMMARY w-[618px]' >
          <div id='SUMMARY'>
              <h2 className='text-[24px] font-semibold font-poppins text-second mb-[20px]'>Order summary</h2>
              <span className='w-full bg-[#E5E7EB] h-[1px] inline-block'></span>
          </div>

          {
            Product.map((item)=>{
              return(
          <div className='ITEM flex justify-between mt-[24px]'>
            <div className='flex gap-[24px]'>
                <div className="Img w-[96px] h-[108px] bg-gray-400 rounded-[16px]">
                  <img src={item.image} alt='img' />
                </div>
                <div>
                    <h2 className='text-[16px] font-semibold font-poppins text-second '>{item.title}</h2>
                    <p className='text-[14px] font-normal font-poppins text-[#4B5563] mt-[4px]'>One size</p>

                    <div className="BTN w-[110px] bg-[#E5E7EB] px-[12px] py-[8px] rounded-[20px] flex justify-between mt-[20px]">
                        <button onClick={()=>handleMinusQty(item.id)} className='w-[24px] h-[24px] bg-white rounded-full flex justify-center items-center'><GrFormSubtract /></button>
                        <p>{item.qty}</p>
                        <button onClick={()=>handleAddQty(item.id)} className='w-[24px] h-[24px] bg-white rounded-full flex justify-center items-center'><MdAdd /></button>
                    </div>
                </div>
            </div>

            <div className='PRICE text-center'>
                <p className='text-[16px] font-semibold font-poppins text-second mt-[31px]'>${item.price}</p>
                 <p className='text-[14px] font-normal font-poppins text-second line-through'>$169.99</p>
            </div>
          </div>
              )
            })
          }



          <span className='w-full bg-[#E5E7EB] h-[1px] inline-block mt-[24px]'></span>

          <div className='flex justify-between items-center mt-[24px]'>
            <p className='text-[16px] font-normal font-poppins text-[#4B5563] '>Subtotal</p>
            <p className='text-[16px] font-normal font-poppins text-[#4B5563] '>${TotalPrice}</p>
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
            <p className='text-[16px] font-semibold font-poppins text-second '>${TotalPrice + 5 + 24.90}</p>
          </div>

          <div className='mt-[24px]'>
            <button className='w-full h-[52px] cursor-pointer bg-second rounded-full text-[16px] text-white font-medium font-poppins'>Confirm order</button>
          </div>

        </div>


    </>
  )
}

export default OrderSummary