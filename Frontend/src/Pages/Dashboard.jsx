import React from 'react'
import Navbar from '../Components/DashboardComp.jsx/Header/Navbar.jsx'
import Hero from '../Components/DashboardComp.jsx/Hero.jsx'
import Slider from '../Components/DashboardComp.jsx/Slider.jsx'
import TopSelling from '../Components/DashboardComp.jsx/TopSelling/TopSelling.jsx'
import Footer from '../Components/DashboardComp.jsx/Footer.jsx'
import RatingsCustomer from '../Components/DashboardComp.jsx/RatingCustomer/RatingsCustomer.jsx'
import Email from '../Components/DashboardComp.jsx/Email Comp/email.jsx'
const Dashboard = () => {
  return (
      <div className=' '>
        <Navbar/>
            <div className='px-6'>
        <Hero/>
        <Slider/>
        <TopSelling/>
        <RatingsCustomer/>
        </div>
        <div className='relative'>
        <Email/>
        
            
        <Footer/>
        </div>
      </div>
  )
}

export default Dashboard
