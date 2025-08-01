import React from 'react'
import Product from '../Components/Product/Product'
import Footer from '../Components/DashboardComp.jsx/Footer'
import Email from '../Components/DashboardComp.jsx/Email Comp/email'

const ProductPage = () => {
  return (
    <div>
      <Product/>
      <div className='relative'>
        <Email/>
        
            
        <Footer/>
        </div>
    </div>
  )
}

export default ProductPage
