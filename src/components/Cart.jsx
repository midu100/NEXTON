import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { RxCross2 } from "react-icons/rx";
import product from '../assets/img/product.png'
import axios from 'axios';

const Cart = ({closeCart}) => {
   const localProduct = JSON.parse(localStorage.getItem('Name'))

   const [Product, setProduct] = useState([]);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products`)
      .then((res) => {
        setProduct(res.data);
      })

      .catch((err) => {console.log("error")});
  }, []);
  console.log(Product)

  const addCartPro = Product.filter((item)=>{
   return localProduct.includes(item.id)
  })

  const totalPrice = addCartPro.reduce((initial,item)=>{
   return Math.floor(initial + item.price)
  },0)
   
  return (
    <>
    <section>

      <div onClick={closeCart} className='w-full h-screen bg-[#00000072] fixed top-0 left-0 z-10'></div>  //black-shadow

        <div className='w-[400px] h-screen bg-white ml-auto p-3  fixed top-0 right-0 z-20 duration-400'>
            <div className="cartHead flex justify-between items-center">
                <h2 className='text-3xl font-poppins font-bold text-second'>Cart</h2>
                <RxCross2 onClick={closeCart} className='text-[30px] font-bold cursor-pointer'/>
            </div>

            <div className="AllProduct mt-5 h-[640px]  overflow-y-scroll">

                {
                  addCartPro.map((item,i)=>{
                     return(
                        <div key={i} className='flex justify-between items-center mb-[10px]'>
                              <div className='productImg_Name flex items-center gap-4'>
                                 <div className="img w-[60px] h-[60px] bg-[#969090] rounded-2xl overflow-hidden">
                                    <img src={item.image} alt='img'></img>
                                 </div>
                                 <p className='text-[#000] font-poppins font-normal text-[20px] truncate w-[150px]'>{item.title}</p>
                              </div>

                              <p className='text-[18px] font-medium font-poppins'>{item.price} $</p>
                        </div>

                     )
                  })
                }

                
                
            </div>

            <div className='flex justify-between items-center '>
               <p className='text-[20px] font-poppins font-medium text-second'>Total</p>
               <p className='text-[20px] font-poppins font-medium text-second'>{totalPrice}$</p>
            </div>

            <Link to={'/checkout'} className='w-full bg-second py-3 px-5 text-[18px] font-medium font-poppins text-white inline-block rounded-2xl text-center'>Checkout</Link>


        </div>

    </section>
    </>
  )
}

export default Cart