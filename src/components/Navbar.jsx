import React, { useState } from "react";
import { Link } from "react-router";
import Logo from "../assets/img/logo.png";
import { RiSearch2Line } from "react-icons/ri";
import { RiUserLine } from "react-icons/ri";
import { PiShoppingCartSimple } from "react-icons/pi";
import { ImCross } from "react-icons/im";
import Cart from "./Cart";

const Navbar = () => {
  const [ShowNav, setShowNav] = useState(false);

  const localProduct = JSON.parse(localStorage.getItem('Name'))
  // console.log(localProduct)


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
              <input
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
    </>
  );
};

export default Navbar;
