import React from 'react'
import Navbar from '../DashboardComp.jsx/Header/Navbar'
import { IoIosArrowForward } from "react-icons/io";
import { HiOutlineAdjustments } from "react-icons/hi";

const AllProductsShop = () => {
  return (
    <div className='px-3'>
      <Navbar/>
      <p className='flex items-center'>
      <span className='text-[#888383]'>Home</span> <IoIosArrowForward/> Shop All</p>

      <main className='grid grid-cols-12 gap-2 pt-5'>
        {/* left side  */}
        
        <div className='border col-span-2 rounded-2xl px-4 py-4 h-100'>
          <h3 className='flex items-center justify-between border-b pb-4'><span className=''>Filters</span> <HiOutlineAdjustments className='text-[#aeaeae] text-[20px]'/></h3>
          <div className='flex flex-col text-[#aeaeae] pt-4'>
          <div className='flex items-center justify-between cursor-pointer hover:text-black transition'><button>T-shirts </button><IoIosArrowForward/></div>
          <div className='flex items-center justify-between cursor-pointer hover:text-black transition'><button>Shirts </button><IoIosArrowForward/></div>
          <div className='flex items-center justify-between cursor-pointer hover:text-black transition'><button>Jeans </button><IoIosArrowForward/></div>
          <div className='flex items-center justify-between cursor-pointer hover:text-black transition'><button>Shorts</button><IoIosArrowForward/></div>

          </div>
          </div>
          {/* right side  */}
        
        <div className='col-span-7'> 
          <h1 className='text-[32px] font-bold'>Casual</h1>
        </div>
      </main>
    </div>
  )
}

export default AllProductsShop
