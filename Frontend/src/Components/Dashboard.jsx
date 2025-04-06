import React from 'react'
import Navbar from './Header/Navbar.jsx'
import Hero from './Hero.jsx'
import Slider from './Slider.jsx'
import TopSelling from './TopSelling/TopSelling.jsx'
import Footer from './Footer.jsx'
const Dashboard = () => {
  return (
    <div className='px-6'>
      <Navbar/>
      <Hero/>
      <Slider/>
      <TopSelling/>
      <Footer/>

    </div>
  )
}

export default Dashboard
