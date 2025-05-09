import React from 'react'
import image from '../../../assets/Images/1st image of top sellin.png'

const Products = (props) => {
  return (
    <div className='flex flex-col gap-3'>
      <figure className='overflow-hidden'><img src={props.img} alt="img of a shirt" className='transition duration-300 ease-in-out hover:scale-[1.04]' /></figure>
      <div className=' text-center flex flex-col gap-2'>
        
        <h3 className='font-bold' >{props.name}</h3>
        <h3>{props.price}</h3>
        <div><button className='border py-2 px-4 rounded-full bg-black text-white hover:scale-[1.07] transition duration-300 ease-in-out'>Add to Cart</button> <button className='border py-2 px-4 rounded-full hover:scale-[1.07] transition duration-300 ease-in-out'>View Item</button>
        </div>
      </div>
    </div>
  )
}

export default Products
