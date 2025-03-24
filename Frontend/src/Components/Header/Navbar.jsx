import React, { useState } from "react";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="py-6 relative">
      <div className="px-4 flex items-center justify-between h-16 w-full">
        {/* Logo */}
        <div>
        <h1 className='text-[32px] font-extrabold'>SHOP.CO</h1>
        </div>

        {/* Hamburger menu for mobile */}
        <div className="md:hidden">
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
        <div className="hidden md:flex items-center justify-between space-x-6 w-full">
          <div className="flex justify-center gap-10 w-5/6">
          <a href="#" className=" text-[#5e3bee] font-bold">Home</a>
          <a href="#" className=" hover:text-[#5e3bee] hover:font-bold">Portfolio</a>
          <a href="#" className=" hover:text-[#5e3bee] hover:font-bold">About Me</a>
          <a href="#" className=" hover:text-[#5e3bee] hover:font-bold">Testimonials</a>
          </div>
          <div className="w-1/6 text-end">
          <button className=" border border-[#5e3bee] text-[#5e3bee] hover:text-white hover:bg-[#5e3bee] py-2 px-3 rounded-sm">
            Contact Me
          </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex justify-center pb-10 absolute top-20 left-0 w-full bg-white shadow-md space-y-10 py-6 md:hidden">
          <div className="flex flex-col items-center gap-4">
          <a href="#" className="text-[#5e3bee] font-bold">Home</a>
          <a href="#" className="hover:text-[#5e3bee] hover:font-bold">Portfolio</a>
          <a href="#" className="hover:text-[#5e3bee] hover:font-bold">About Me</a>
          <a href="#" className="hover:text-[#5e3bee] hover:font-bold">Testimonials</a>
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