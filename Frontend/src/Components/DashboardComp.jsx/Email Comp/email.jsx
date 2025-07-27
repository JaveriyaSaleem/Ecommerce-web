import React from 'react'
import { CiMail } from "react-icons/ci";

const Email = () => {
  return (
    <main className='bg-black grid grid-cols-1 md::grid-cols-12 md:justify-around items-center py-10 px-20 rounded-4xl '>
      {/* left side  */}

      <div className='md:col-span-6 '>
        <h1 className='text-white text-[40px] boldFont '>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
      </div>
      {/* right side  */}

      <div className='md:col-span-5 ps-20'>
        <div className='flex flex-col justify-between gap-5'>
          <div className='bg-white rounded-full flex items-center p-2 gap-2'>
          <CiMail />
            <input type="email" placeholder='Enter your email address' className='w-full outline-0'/>
          </div>
          <button className='bg-white rounded-full p-2 font-semibold hover:cursor-pointer hover:scale-105 transition-all duration-300'>
            Subscribe to Newsletter
          </button>
        </div>
      </div>

      
     
    </main>
  )
}

export default Email
