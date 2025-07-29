import React, { useState } from 'react'
import { Form, Link } from 'react-router'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import axios from 'axios';
import { HashLoader, PropagateLoader } from 'react-spinners';
import { Bounce, toast } from 'react-toastify';


const Registration = () => {
    const [emailError,setEmailError] = useState('')
    const[email,setEmail] = useState('')

    const [pass,setPass] =useState ('')
    const[passError,setPassError]=useState('')

    const [passAgain,setPassAgain]=useState('')
    const [againError,setAgainError] = useState('')

    const[showPass, setShowPass] = useState(false)

    const[againShowPass,setAgainShowPass] = useState(false)

    const[loading,setLoading]=useState(false)

    const handleSubmit = (behave)=>{
        behave.preventDefault()
        //----------------------------EMAIL VALIDATION
        if(!email){
            setEmailError('Email must be filled-in')
        }
        else if(!pass){
            setPassError('Please enter your password')
        }
        // else{
        //     const upperCase = /[A-Z]/.test(pass)
        //     const lowerCase =/[a-z]/.test(pass)
        //     const digit     =/[0-9]/.test(pass)
        //     const Length = pass.length>=8
        //     if(!upperCase){
        //         setPassError('Password must contain at least one uppercase letter')
        //     }
        //     else if(!lowerCase){
        //         setPassError('Password must contain at least one lowercase letter')
        //     }
        //     else if(!digit){
        //         setPassError('Password must contain at least one digit 0-9')
        //     }
        //     else if(!Length){
        //         setPassError('Password must be at least 8 characters')
        //     }
        // }
       else if(passAgain != pass){
            setAgainError('Enter password again')
        }

        else{

            setLoading(!loading)


            axios.post('https://api.escuelajs.co/api/v1/users/',{
                "name": "Nicolas",
                "email": email,
                "password": pass,
                "avatar": "https://picsum.photos/800"
            })
            .then((res)=>{console.log(res) ; setLoading(false); 

                toast.success('Registration Success !', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
              });
            })
            .catch((err)=>{console.log(err); setLoading(false)})


        }
    }


    //---------------------------- PASSWORD VALIDATION 




  return (
    <div>
            <section id='Register_Box' className='mt-[40px] mb-[72px] flex items-center justify-center'>
            <Form onSubmit={handleSubmit} className='w-[440px]'>
                {/* -------Header-------- */}
                <div><h2 className='text-[36px] font-semibold text-second text-center mb-[60px]'>Register</h2></div>

                {/* -------Input Box-------- */}
                <div className='flex flex-col gap-[24px]'>
                    {/* -----Email  */}
                    <div>
                        <p className='text-base font-semibold text-second'>Email</p>
                        <p className='text-red-600 font-poppins'>{emailError}</p>
                        <input onChange={(e)=>{setEmail(e.target.value),setEmailError('')}} className='w-full border border-BorderCol rounded-[12px] h-[43px] px-5 outline-none mt-2' placeholder='example@example.com' type="email" />
                    </div>
                    {/* -----Password  */}
                    <div className='relative'>
                        <p className='text-base font-semibold text-second'>Password</p>
                        <p className='text-red-600 font-poppins'>{passError}</p>
                        <input onChange={(e)=>{setPass(e.target.value),setPassError('')}} type={showPass ? 'text' : 'password'} className='w-full border border-BorderCol rounded-[12px] h-[43px] px-5 outline-none mt-2'  />
                        {
                            showPass ? 
                            <FaEyeSlash onClick={()=>setShowPass(!showPass)} className='absolute top-[45px] right-[20px]'/>
                            
                            :
                            
                            <FaEye onClick={()=>setShowPass(!showPass)} className='absolute top-[45px] right-[20px]'/>

                        }
                    </div>
                    {/* -----Password again */}
                    <div className='relative'>
                        <p className='text-base font-semibold text-second'>Password (Again)</p>
                        <p className='text-red-600 font-poppins'>{againError}</p>
                        <input onChange={(e)=>{setPassAgain(e.target.value),setAgainError('')}} type={againShowPass ? "text" : "password"} className='w-full border border-BorderCol rounded-[12px] h-[43px] px-5 outline-none mt-2' />
                        {
                            againShowPass ?
                            <FaEyeSlash onClick={()=>setAgainShowPass(!againShowPass)} className='absolute top-[45px] right-[20px]'/>

                            :

                            <FaEye onClick={()=>setAgainShowPass(!againShowPass)} className='absolute top-[45px] right-[20px]'/>

                        }
                    </div>
                </div>

                {/* ------Submit Button------ */}
                <div className='mt-[24px] flex flex-col gap-[24px]'>
                    {
                        loading?
                        <button type='submit' className='w-full h-[52px] bg-second rounded-full text-white py-[14px] cursor-pointer flex justify-center items-center'><PropagateLoader color="#e1e7e2" /></button>
                        :
                        <button type='submit' className='w-full bg-second rounded-full text-white py-[14px] cursor-pointer'>Continue</button>

                    }
                    <p className='text-Primary font-medium text-[14px] text-center'>OR</p>
                    <div>
                        <p className='text-Primary text-base font-normal text-center'>Already a member? <Link className='text-[#0EA5E9]' to={'/login'}>Login</Link></p>
                    </div>
                </div>
            </Form>
        </section>
    </div>
  )
}

export default Registration