import React from 'react'
import { Link } from 'react-router-dom';
import { FaTwitter,FaFacebookF, FaInstagram,FaGithub   } from "react-icons/fa";
import Payment from '../../assets/Images/pay.png'


const Footer = () => {
  return (
    <main className='bg-[#f0f0f0] pb-10 pt-10'>
      <div className='py-20 pb-10 relative flex flex-col lg:flex-row justify-around border-b border-[#cecbcb] sm:mx-10 mx-2'>
         {/* Logo */}
          <main className='flex flex-col justify-around pb-3'>
            <Link to='/'>
              <h1 className='text-[32px] font-extrabold boldFont md:w-40'>SHOP.CO</h1>
            </Link>
            <div className="flex flex-col md:flex-row justify-between py-3 ">
            <p className='md:w-lg text-[14px] sm:text-[16px]'>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
            </div>
                      <div className='flex justify-start pb-5 md:pt-10 gap-3'><FaTwitter className='transition duration-150 ease-in-out text-[35px] hover:scale-[1.07] py-2 px-1 border rounded-full bg-black text-white'/> <FaFacebookF className='transition duration-duration-150 ease-in-out text-[35px] hover:scale-[1.07] py-2 px-1 border rounded-full bg-black text-white'/> <FaInstagram className='transition duration-duration-150 ease-in-out text-[35px] hover:scale-[1.07] py-2 px-1 border rounded-full bg-black text-white'/>
                      <FaGithub className='transition duration-duration-150 ease-in-out text-[35px] hover:scale-[1.07] py-2 px-1 border rounded-full bg-black text-white'/></div>
          </main>
      {/* right side  */}
          <main className='grid grid-cols-2 md:grid-cols-4 gap-8'>
            <div className='text-base/6 sm:text-base/8'>
              <h3 className='font-bold pb-2 text-[14px] sm:text-[16px]'>COMPANY</h3>
              <ul className='text-[12px] sm:text-[14px] md:text-[16px] '>
                <li>About</li>
                <li>Features</li>
                <li>Works</li>
                <li>Career</li>
              </ul>
            </div >
              <div className='text-base/6 sm:text-base/8'>
              <h3 className='font-bold pb-2 text-[14px] sm:text-[16px]'>HELP</h3>
              <ul className='text-[12px] sm:text-[14px] md:text-[16px]'>
                <li>Customer Support</li>
                <li>Delivery Details</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div className=' text-base/6 sm:text-base/8'>
              <h3 className='font-bold pb-2 text-[14px] sm:text-[16px]'>FAQ</h3>
              <ul className='text-[12px] sm:text-[14px] md:text-[16px]'>
                <li>Account</li>
                <li>Manage Deliveries</li>
                <li>Orders</li>
                <li>Payments</li>
              </ul>
            </div>
            <div className='text-base/6 sm:text-base/8'>
              <h3 className='font-bold pb-2 text-[14px] sm:text-[16px]'>RESOURCES</h3>
              <ul className='text-[12px] sm:text-[14px] md:text-[16px]'>
                <li>Free eBooks</li>
                <li>Development Tutorial</li>
                <li>How to Blog</li>
                <li>Youtube Playlist</li>
              </ul>
            </div>
          </main>
      </div>
      <div className='px-2 sm:px-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-2'>
        <p className='text-[12px] sm:text-[14px] md:text-[16px]'>Made with 💖 by <a href="https://github.com/JaveriyaSaleem" className='font-bold'>Javeriya</a>. All Right Reserved</p>
 <img src={Payment} alt="paymentimg" />
      </div>
    </main>
  )
}

export default Footer
