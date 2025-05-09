import React, { useState } from "react";

import { IoIosSearch } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="">
      <div className="grid grid-cols-5 w-full py-4">
        {/* Logo */}
        <div className="">
        <h1 className='text-[32px] font-extrabold boldFont w-40'>SHOP.CO</h1>
        </div>

        {/* Hamburger menu for mobile */}
        <div className="md:hidden ">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center justify-between  col-span-4">
          <div className="flex justify-center gap-10">
          <a href="#" className=""><select name="Shop" id="" value="Shop">
          <option value="Shop">Shop</option>
          <option value="Casual">Casual</option>
          <option value="Formal">Formal</option>
          <option value="Party">Party</option>
          <option value="Gym">Gym</option>
          
          </select></a>
          <a href="#" className=" hover: hover:font-bold">On Sale</a>
          <a href="#" className=" hover: hover:font-bold">New Arrivals</a>
          <a href="#" className=" hover: hover:font-bold">Brands</a>
          </div>

           <div className='hidden border rounded-full w-80 items-center justify-items-start py-2 px-2'><IoIosSearch className=''/> <input type="text" placeholder='Search for products..' className='ps-2 outline-0'/></div>
                  <div className='flex w-12 justify-between font-bold'>
                  <FiShoppingCart />
                  <CgProfile />
                  </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex justify-center pb-10 absolute top-20 left-0 w-full bg-white shadow-md space-y-10 py-6 md:hidden">
          <div className="flex flex-col items-center gap-4">
          <a href="#" className=" font-bold">Home</a>
          <a href="#" className=" hover:font-bold">Portfolio</a>
          <a href="#" className=" hover:font-bold">About Me</a>
          <a href="#" className=" hover:font-bold">Testimonials</a>
          <div>
          </div>
          <button className="border border-[#5e3bee] text-[#5e3bee] hover:text-white hover:bg-[#5e3bee] py-2 px-3 rounded-sm">
            Contact Me
          </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;