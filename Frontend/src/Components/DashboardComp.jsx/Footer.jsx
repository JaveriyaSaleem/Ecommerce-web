import React from 'react'
import { FaTwitter,FaFacebookF, FaInstagram  } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='bg-[#f0f0f0] -mx-10 px-10 py-10'>
       {/* Logo */}
        <h1 className='text-[32px] font-extrabold boldFont w-40'>SHOP.CO</h1>
       <div className="flex justify-between py-3">
        <p className='w-lg'>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
        <div className='flex  justify-between gap-3'><FaTwitter className='transition duration-150 ease-in-out text-[35px] hover:scale-[1.07] py-2 px-1 border rounded-full bg-black text-white'/> <FaFacebookF className='transition duration-duration-150 ease-in-out text-[35px] hover:scale-[1.07] py-2 px-1 border rounded-full bg-black text-white'/> <FaInstagram className='transition duration-duration-150 ease-in-out text-[35px] hover:scale-[1.07] py-2 px-1 border rounded-full bg-black text-white'/></div> 
        </div>
    </div>
  )
}

export default Footer
