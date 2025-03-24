import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  return (
    <header >
{/* first line of header  */}
      <div className='bg-black text-white text-center py-2'><span className=''>Sign up and get 20% off to your first order.</span> <span className='underline font-[700]'>Sign Up Now</span></div>
      {/* secondline  */}
      <nav className='flex justify-around items-center w-full'>
        <h1 className='text-[32px] font-extrabold'>SHOP.CO</h1>
        <ul className='flex justify-between w-96'>
          <li><select name="Shop" id="" value="Shop">
          <option value="Shop">Shop</option>
          <option value="Casual">Casual</option>
          <option value="Formal">Formal</option>
          <option value="Party">Party</option>
          <option value="Gym">Gym</option>
          
          </select></li>
        <li>On Sale</li>
        <li>New Arrivals</li>
        <li>Brands</li>
        </ul>
        <div className='border rounded-full w-80 flex items-center justify-items-start py-2 px-2'><IoIosSearch className=''/> <input type="text" placeholder='Search for products..' className='ps-2 outline-0'/></div>
        <div className='flex w-12 justify-between font-bold'>
        <FiShoppingCart />
        <CgProfile />
        </div>
        
      </nav>

    </header>
    
    
  )
}

export default Header 
