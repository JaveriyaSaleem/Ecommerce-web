import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

const CardComponent = () => {
  return (
    <div className='border rounded-2xl p-5 flex flex-col gap-3'>
       <p className='flex'><FaStar className='text-[#ffc633]'/> <FaStar className='text-[#ffc633]'/> <FaStar className='text-[#ffc633]'/> <FaStar className='text-[#ffc633]'/> <FaStar className='text-[#ffc633]'/> </p> 
        <h3 className='font-medium flex items-center gap-1'><span className='text-[18px]'>Sara M.</span> <FaCheckCircle className='text-[#01ab31]'/></h3>
        <p className='font-extralight text-[#9f9f9f]'>"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”</p>

      
    </div>
  )
}

export default CardComponent
