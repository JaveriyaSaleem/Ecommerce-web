import React from 'react'
import { Link } from 'react-router-dom';
import { FaTwitter,FaFacebookF, FaInstagram  } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='bg-[#f0f0f0] -mx-10 px-14 py-10 relative'>
       {/* Logo */}
        <Link to='/'>
          <h1 className='text-[32px] font-extrabold boldFont md:w-40 text-center'>SHOP.CO</h1>
        </Link>
       <div className="flex flex-col md:flex-row justify-between py-3 text-center md:text-left">
        <p className='md:w-lg'>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
        <div className='flex  justify-around md:justify-between pt-10 md:p-0 md:gap-3'><FaTwitter className='transition duration-150 ease-in-out text-[35px] hover:scale-[1.07] py-2 px-1 border rounded-full bg-black text-white'/> <FaFacebookF className='transition duration-duration-150 ease-in-out text-[35px] hover:scale-[1.07] py-2 px-1 border rounded-full bg-black text-white'/> <FaInstagram className='transition duration-duration-150 ease-in-out text-[35px] hover:scale-[1.07] py-2 px-1 border rounded-full bg-black text-white'/></div> 
        </div>
        <div className='text-center'>
         <p>Made with 💖 by <a href='https://github.com/JaveriyaSaleem' className='font-bold'>@JaveriyaSaleem </a></p>
        </div>
    </div>
  )
}

export default Footer
