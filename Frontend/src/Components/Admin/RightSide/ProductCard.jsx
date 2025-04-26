import React from 'react'
import { useReducer } from "react";
import firstImage from '../../../assets/Images/1st image of top sellin.png'
import { MdDelete,MdEdit  } from "react-icons/md";
import productReducer from './ProductReducer';

const ProductCard = (props) => {
  const [products, dispatch] = useReducer(productReducer, "")
  return (
    <div className='border flex flex-col rounded-xl gap-5 p-3' >
      <figure className=''><img src={props.image} alt="" className='h-40 w-50 overflow-hidden'/></figure>
      <div>
        <h3 className='font-bold'>{props.name}</h3>
        <h3 className='text-[#b899fc] font-bold'>${props.price}</h3>
        <p className='text-[#99999A] font-light'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>

        <div className='flex gap-3'>
          <button onClick={()=>dispatch({type:"delete"})} className='p-2 text-[14px] border rounded-lg cursor-pointer hover:text-[#707275]'>          <MdEdit />        </button>
          <button className='p-2 text-[14px] border rounded-lg cursor-pointer hover:text-[#707275]'>        <MdDelete />         </button>
        </div>
        <div></div>
        </div>
    </div>
  )
}

export default ProductCard
