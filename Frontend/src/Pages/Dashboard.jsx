import React from 'react'
import Navbar from '../Components/DashboardComp.jsx/Header/Navbar.jsx'
import Hero from '../Components/DashboardComp.jsx/Hero.jsx'
import Slider from '../Components/DashboardComp.jsx/Slider.jsx'
import TopSelling from '../Components/DashboardComp.jsx/TopSelling/TopSelling.jsx'
import Footer from '../Components/DashboardComp.jsx/Footer.jsx'
const Dashboard = () => {
  return (
      <div>
        <Navbar/>
            <div className='px-6'>
        <Hero/>
        <Slider/>
        <TopSelling/>
        
            </div>
        <Footer/>
      </div>
  )
}

export default Dashboard
