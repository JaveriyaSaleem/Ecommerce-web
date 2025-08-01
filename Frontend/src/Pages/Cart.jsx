import React from 'react'
import CartComp from '../Components/Cart/CartComp'
import Navbar from '../Components/DashboardComp.jsx/Header/Navbar'
import Footer from '../Components/DashboardComp.jsx/Footer'
import Email from '../Components/DashboardComp.jsx/Email Comp/email'

const Cart = () => {
  return (
    <div className=''>
        <Navbar/>
      <CartComp/>
      <div className='relative'>
        <Email/>
        
            
        <Footer/>
        </div>
    </div>
  )
}

export default Cart
