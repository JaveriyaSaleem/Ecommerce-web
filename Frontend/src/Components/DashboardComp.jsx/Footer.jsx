import React from 'react'
import { Link } from 'react-router-dom';
import { FaTwitter,FaFacebookF, FaInstagram,FaGithub   } from "react-icons/fa";
import Payment from '../../assets/Images/pay.png'


const Footer = () => {
  return (
    <main className='bg-[#f0f0f0] pb-10 pt-10'>
      <div className='py-20 pb-10 relative flex justify-around border-b border-[#cecbcb] mx-10'>
         {/* Logo */}
          <main className='flex flex-col justify-around '>
            <Link to='/'>
              <h1 className='text-[32px] font-extrabold boldFont md:w-40 text-center'>SHOP.CO</h1>
            </Link>
            <div className="flex flex-col md:flex-row justify-between py-3 text-center md:text-left">
            <p className='md:w-lg'>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
            </div>
                      <div className='flex justify-start md:justify-start pt-10 md:p-0 md:gap-3'><FaTwitter className='transition duration-150 ease-in-out text-[35px] hover:scale-[1.07] py-2 px-1 border rounded-full bg-black text-white'/> <FaFacebookF className='transition duration-duration-150 ease-in-out text-[35px] hover:scale-[1.07] py-2 px-1 border rounded-full bg-black text-white'/> <FaInstagram className='transition duration-duration-150 ease-in-out text-[35px] hover:scale-[1.07] py-2 px-1 border rounded-full bg-black text-white'/>
                      <FaGithub className='transition duration-duration-150 ease-in-out text-[35px] hover:scale-[1.07] py-2 px-1 border rounded-full bg-black text-white'/></div>
          </main>
      {/* right side  */}
          <main className='grid grid-cols-4 gap-8'>
            <div className='text-base/8'>
              <h3 className='font-bold pb-2'>COMPANY</h3>
              <ul>
                <li>About</li>
                <li>Features</li>
                <li>Works</li>
                <li>Career</li>
              </ul>
            </div>
              <div className='text-base/8'>
              <h3 className='font-bold pb-2'>HELP</h3>
              <ul>
                <li>Customer Support</li>
                <li>Delivery Details</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
            <div className='text-base/8'>
              <h3 className='font-bold pb-2'>FAQ</h3>
              <ul>
                <li>Account</li>
                <li>Manage Deliveries</li>
                <li>Orders</li>
                <li>Payments</li>
              </ul>
            </div>
            <div className='text-base/8'>
              <h3 className='font-bold pb-2'>RESOURCES</h3>
              <ul>
                <li>Free eBooks</li>
                <li>Development Tutorial</li>
                <li>How to Blog</li>
                <li>Youtube Playlist</li>
              </ul>
            </div>
          </main>
      </div>
      <div className='px-12 pt-6 flex justify-between items-center'>
        <p>Made with 💖 by <a href="https://github.com/JaveriyaSaleem" className='font-bold'>Javeriya</a>. All Right Reserved</p>
 <img src={Payment} alt="" />
      </div>
    </main>
  )
}

export default Footer
