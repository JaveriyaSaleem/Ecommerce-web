import React from 'react'
import Navbar from './Header/Navbar.jsx'
import Hero from './Hero.jsx'
import Slider from './Slider.jsx'
const Dashboard = () => {
  return (
    <div className='px-6'>
      <Navbar/>
      <Hero/>
      <Slider/>
    </div>
  )
}

export default Dashboard
