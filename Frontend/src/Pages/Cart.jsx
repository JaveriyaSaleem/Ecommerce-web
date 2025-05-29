import React from 'react'
import CartComp from '../Components/Cart/CartComp'
import Navbar from '../Components/DashboardComp.jsx/Header/Navbar'
import Footer from '../Components/DashboardComp.jsx/Footer'

const Cart = () => {
  return (
    <div className='px-4'>
        <Navbar/>
      <CartComp/>
      <Footer/>
    </div>
  )
}

export default Cart
