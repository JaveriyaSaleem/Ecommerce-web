import ProfilePage from '../Components/ProfilePage'
import Navbar from '../Components/DashboardComp.jsx/Header/Navbar'
import Footer from '../Components/DashboardComp.jsx/Footer'
import { useState } from 'react'
import ModalForm from '../Components/ModalForm'
import Email from '../Components/DashboardComp.jsx/Email Comp/email'

const Profile = () => {

  return (
    <div>
      <Navbar/>
<ProfilePage />

     <div className='relative'>
        <Email/>
        
            
        <Footer/>
        </div>
    </div>
  )
}

export default Profile
