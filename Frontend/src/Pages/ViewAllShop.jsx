import React from 'react'
import AllProductsShop from '../Components/ViewAllShopComp/AllProductsShop'
import Footer from '../Components/DashboardComp.jsx/Footer'
import Email from '../Components/DashboardComp.jsx/Email Comp/email'

const ViewAllShop = () => {
  return (
    <div>
      <AllProductsShop/>
     <div className='relative'>
        <Email/>
        
            
        <Footer/>
        </div>
    </div>
  )
}

export default ViewAllShop
