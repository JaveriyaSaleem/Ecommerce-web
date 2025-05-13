import React from 'react'
import CartComp from '../Components/Cart/CartComp'
import Navbar from '../Components/DashboardComp.jsx/Header/Navbar'

const Cart = () => {
  return (
    <div className='px-4'>
        <Navbar/>
      <CartComp/>
    </div>
  )
}

export default Cart
