import React from 'react'
import CheckoutComp from '../Components/Checkout/CheckoutComp'
import Navbar from '../Components/DashboardComp.jsx/Header/Navbar'
import Footer from '../Components/DashboardComp.jsx/Footer.jsx'
import Email from '../Components/DashboardComp.jsx/Email Comp/email.jsx'

const Checkout = () => {
  return (
    <div className=''>
      <Navbar/>
      <CheckoutComp/>
      <div className='relative'>
        <Email/>
        
            
        <Footer/>
        </div>
    </div>
  )
}

export default Checkout
