import React from 'react'
import footerLogo from '../assets/img/footerLogo.png'
import { FaFacebookF } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import FooterDiv from './common/FooterDiv';

const Footer = () => {
  return (
    <>
        <section id='footer' className='py-[60px]'>
            <div className="container">
                <div className="ROW flex justify-between">
                    <div>
                        <div className="IMG w-[119px]">
                            <img src={footerLogo} alt='logo' />
                        </div>
                        <div className='flex gap-[8px] items-center mt-[20px]'>
                            <FaFacebookF className='w-[30px] h-[30px] p-[5px] rounded-full bg-blue-700 text-white'/>
                            <p className='text-[16px] text-[#4B5563] font-poppins font-normal'>Facebook</p>
                        </div>

                        <div className='flex gap-[8px] items-center mt-[12px]'>
                            <FaYoutube className='w-[30px] h-[30px] p-[5px] rounded-full bg-red-700 text-white'/>
                            <p className='text-[16px] text-[#4B5563] font-poppins font-normal'>Youtube</p>
                        </div>

                        <div className='flex gap-[8px] items-center mt-[12px]'>
                            <FaTelegramPlane className='w-[30px] h-[30px] p-[5px] rounded-full bg-[#1D93D2] text-white'/>
                            <p className='text-[16px] text-[#4B5563] font-poppins font-normal'>Telegram</p>
                        </div>

                        <div className='flex gap-[8px] items-center mt-[12px]'>
                            <FaTwitter className='w-[30px] h-[30px] p-[5px] rounded-full bg-[#1D93D2] text-white'/>
                            <p className='text-[16px] text-[#4B5563] font-poppins font-normal'>Twitter</p>
                        </div>
                    </div>

                    <FooterDiv Head={'Getting started'} line1={'Release Notes'} line2={'Upgrade Guide'} line3={'Browser Support'} line4={'Dark Mode'}/>

                    <FooterDiv Head={'Explore'} line1={'Prototyping'} line2={'Design systems'} line3={'Pricing'} line4={'Security'}/>

                    <FooterDiv Head={'Community'} line1={'Discussion Forums'} line2={'Code of Conduct'} line3={'Contributing'} line4={'API Reference'}/>
                </div>
            </div>
        </section>
    </>
  )
}

export default Footer