import React from 'react'
import CheckoutComp from '../Components/Checkout/CheckoutComp'
import Navbar from '../Components/DashboardComp.jsx/Header/Navbar'
import Footer from '../Components/DashboardComp.jsx/Footer.jsx'

const Checkout = () => {
  return (
    <div className=''>
      <Navbar/>
      <CheckoutComp/>
      <Footer/>
    </div>
  )
}

export default Checkout
