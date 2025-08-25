import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import Logo from "../assets/img/logo.png";
import { RiSearch2Line } from "react-icons/ri";
import { RiUserLine } from "react-icons/ri";
import { PiShoppingCartSimple } from "react-icons/pi";
import Cart from "./Cart";
import axios from "axios";
import SearchBG from '../assets/img/SearchBG.jpg'
import { useDispatch, useSelector } from "react-redux";
import { incrementByAmount } from "../SrcSlice";

const Navbar = () => {
  const [ShowNav, setShowNav] = useState(false);
  const[srcInput,setSrcInput] = useState('')
  const[srcResult,setSrcResult] = useState()
  const navigate = useNavigate()
  const dispatch =useDispatch()

  // const localProduct = JSON.parse(localStorage.getItem('Name'))
  const localProduct = useSelector((state)=>state.redu.cartItems)
  console.log(localProduct)

   const [Product, setProduct] = useState([]);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products`)
      .then((res) => {
        setProduct(res.data);
      })

      .catch((err) => {console.log("error")});
  }, []);

 const handleSrc = ()=>{
  
  // if(!srcInput) return alert('Enter a product !')

    const filterProduct = Product.filter((item)=>item.title.toLowerCase().includes(srcInput.toLowerCase()) )
    
    setSrcResult(filterProduct)
  }

  const handleProduct = (productName)=>{
    navigate('/allreco')
    setSrcResult(null)
    dispatch(incrementByAmount(productName))
  }



  return (
    <>
      <nav id="navbar" className="py-[27px] hidden lg:block">
        <div className="container">
          <div className="navRow flex justify-between">
            <div className="navLogo w-[119px]">
              <Link to={"/"}>
                <img src={Logo} alt="Logo" />
              </Link>
            </div>

            <div className="navSrc w-[400px] h-[52px] bg-[#F8F8F8] rounded-full flex items-center pl-[24px] dark:bg-black">
              <RiSearch2Line className="w-[20px] h-[20px] text-primary" />
              <input onChange={(e)=> {setSrcInput(e.target.value),handleSrc()}}
                className="w-full ml-[10px] text-[14px] font-poppins text-primary font-normal border-none outline-0 dark:text-white"
                type="text"
                placeholder="Search in products..."
              />
            </div>

            <div className="navButton flex items-center">
              {/* <button className="w-[24px] h-[24px] text-[24px]">
                <RiUserLine />
              </button> */}
              <Link className="w-[24px] h-[24px]" to={'/registration'}><RiUserLine className="text-[24px]"/></Link>
              <button onClick={() => setShowNav(!ShowNav)} className={`relative w-[24px] h-[24px] text-[24px] ml-[22px]`}>
                <PiShoppingCartSimple />
                <span className="w-[20px] h-[20px] rounded-full bg-[#0EA5E9] flex justify-center items-center text-[12px] font-medium font-poppins text-[#fff] absolute top-[-5px] right-[-10px]">
                  {localProduct ? localProduct.length : 0}
                </span>
              </button>
            </div>

            {/* add to cart */}
            {
              ShowNav&&
                <Cart closeCart={()=>setShowNav(!ShowNav)}/>
            }
            
            
          </div>
        </div>
      </nav>

      <div style={{background : `url(${SearchBG})`}} className="w-full absolute top-[100px] z-20 rounded-[5px]  py-0 px-10">
        
        {
          srcResult?.length==0 ?
          <h2 className="text-xl font-poppins text-center">Product Not Found.</h2>
          :
          srcResult?.map((item)=>(
            <h2 onClick={()=>handleProduct(item.title)} key={item.id} className="text-xl font-poppins text-center cursor-pointer">{item.title}</h2>
          ))
        }
      </div>
    </>
  );
};

export default Navbar;
