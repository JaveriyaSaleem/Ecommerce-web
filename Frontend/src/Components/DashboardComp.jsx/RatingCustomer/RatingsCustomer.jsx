import React from 'react'
import CardComponent from './CardComponent'

const RatingsCustomer = () => {
  return (
    <div>
      <h1 className='text-[35px] font-black boldFont text-center'>OUR HAPPY CUSTOMERS</h1>
      <div className='flex gap-7 p-10'>
      <CardComponent/>
      <CardComponent/>
      <CardComponent/>
      </div>
      

    </div>
  )
}

export default RatingsCustomer
