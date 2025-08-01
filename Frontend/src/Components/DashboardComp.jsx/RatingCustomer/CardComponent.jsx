import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

const CardComponent = (props) => {
  return (
    <div className='border rounded-2xl p-5 flex flex-col gap-3 sm:h-50'>
       <p className='flex'>
        {props.rating}
         </p> 
        <h3 className='font-medium flex items-center gap-1'><span className='text-[14px] sm:text-[18px]'>{props.customerName}</span> <FaCheckCircle className='text-[#01ab31]'/></h3>
        <p className='font-extralight text-[12px] sm:text-[14px] md:text-[16px] text-[#9f9f9f]'>{props.review}</p>

      
    </div>
  )
}

export default CardComponent
