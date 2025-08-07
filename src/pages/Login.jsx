import React, { useState } from 'react'
import { Link } from 'react-router'
import { Bounce, Slide, toast } from 'react-toastify'

const Login = () => {
    const[formData,setFormData]= useState({email:'', emailError:'',Password:'',errorPassword:''})

    const handleLogin = ()=>{
        if(!formData.email){
            setFormData((prev)=>({...prev,emailError:'Enter your email'}))
        }
        else if(!formData.Password){
            setFormData((prev)=>({...prev,errorPassword:'Enter your Password'}))
        }
        else{
            toast.success('🦄 Login Successful  !', {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
transition: Slide,
});
        }
    }

    // console.log(formData)
  return (
    <div>
        <section id='Register_Box' className='mt-[40px] mb-[72px] flex items-center justify-center'>
            <div className='w-[440px]'>
                {/* -------Header-------- */}
                <div><h2 className='text-[36px] font-semibold text-second text-center mb-[60px]'>Login</h2></div>

                {/* -------Input Box-------- */}
                <div className='flex flex-col gap-[24px]'>
                    {/* -----Email  */}
                    <div>
                        <p className='text-base font-semibold text-second'>Email</p>
                        <p className='text-[12px] font-light font-poppins text-red-600'>{formData.emailError}</p>
                        <input onChange={(e)=>setFormData((prev)=>({...prev,email:e.target.value}))} className='w-full border border-BorderCol rounded-[12px] h-[43px] px-5 outline-none mt-2' placeholder='example@example.com' type="email" />
                    </div>
                    {/* -----Password  */}
                    <div>
                        <p className='text-base font-semibold text-second'>Password</p>
                        <p className='text-[12px] font-light font-poppins text-red-600'>{formData.errorPassword}</p>
                        <input onChange={(e)=>setFormData((prev)=>({...prev,Password:e.target.value}))} className='w-full border border-BorderCol rounded-[12px] h-[43px] px-5 outline-none mt-2' type="password" />
                    </div>
                    
                </div>

                {/* ------Submit Button------ */}
                <div className='mt-[24px] flex flex-col gap-[24px]'>
                    <button onClick={handleLogin} className='w-full bg-second rounded-full text-white py-[14px] cursor-pointer'>Continue</button>
                    
                </div>
            </div>
        </section>
    </div>
  )
}

export default Login