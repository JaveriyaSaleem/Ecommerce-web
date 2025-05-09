import React from 'react'
import { FaTruck,FaShoppingCart } from "react-icons/fa";

const LeftSide = () => {
  return (
    <main className='col-span-2'>
    <div className='fixed flex flex-col gap-5 '>
      <h1 className="text-[18px] font-bold">Admin Dashboard</h1>

            <div className=''>
                <div className='flex gap-2 items-center leading-10 hover:cursor-pointer'> <FaTruck className='text-[20px]'/> <span>Products</span></div>
                <div className='flex gap-2 items-center text-[#b9bbbf] hover:text-white hover:cursor-pointer'> <FaShoppingCart className='text-[20px]'/> <span>Orders</span></div>
            </div>
    </div>
    </main>
  )
}

export default LeftSide
