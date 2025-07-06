import React, { useState } from "react";
import resLogo from "../assets/img/ResLogo.png";
import { Link } from "react-router";
import { RiSearch2Line, RiUserLine } from "react-icons/ri";
import { PiShoppingCartSimple } from "react-icons/pi";

const ResNav = () => {
  // hook or useState
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <nav id="resNav" className="lg:hidden px-[16px] py-[20px]">
        <div className="container">
          <div className="resRow flex justify-between items-center">
            <div className="navLogo">
              <Link to={"/"}>
                <img src={resLogo} alt="logo" />
              </Link>
            </div>

            <div className="navSrc w-[200px] h-[36px] bg-[#F8F8F8] rounded-full flex items-center pl-[16px] dark:bg-black">
              <RiSearch2Line className="w-[20px] h-[20px] text-primary" />
              <input
                className="w-full ml-[6px] text-[14px] font-poppins text-primary font-normal border-none outline-0 dark:text-white"
                type="text"
                placeholder="Search in products..."
              />
            </div>

            <button
              onClick={() => setShowNav(!showNav)}
              className="w-[30px] h-[30px] relative"
            >
              <span
                className={`w-full h-[3px] bg-primary rounded-full absolute left-0 ${
                  showNav ? "rotate-[45deg] top-[14px]" : "rotate-0 top-0"
                } duration-[.4s]`}
              ></span>
              <span
                className={`w-full h-[3px] bg-primary rounded-full absolute top-1/2 translate-y-[-50%] left-0 ${
                  showNav ? "hidden" : "block"
                } duration-[.4s]`}
              ></span>
              <span
                className={`w-full h-[3px] bg-primary rounded-full absolute left-0 ${
                  showNav ? "rotate-[-45deg] top-[50%]" : "rotate-0 top-[90%]"
                } duration-[.4s]`}
              ></span>
            </button>

            <div
              className={`p-[5px] w-[90%] rounded-[20px] bg-primary absolute top-[60px] dark:bg-sky-600 ${
                showNav ? "scale-[1] z-10" : "scale-[0] z-10"
              } duration-[.4s]`}
            >
              <div className="navButton flex justify-center text-white font-bold mt-[10px] mb-[20px]">
                <button className="w-[24px] h-[24px] text-[24px]">
                  <RiUserLine />
                </button>
                <button className="w-[24px] h-[24px] text-[24px] ml-[22px] relative">
                  <PiShoppingCartSimple />
                  <span className="w-[20px] h-[20px] rounded-full bg-[#0EA5E9] flex justify-center items-center text-[12px] font-medium font-poppins text-[#fff] absolute top-[-5px] right-[-10px]">
                    3
                  </span>
                </button>
              </div>

              <ul className="flex flex-col items-center gap-[10px] text-[20px] text-white font-poppins font-semibold">
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/"}>About</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default ResNav;
