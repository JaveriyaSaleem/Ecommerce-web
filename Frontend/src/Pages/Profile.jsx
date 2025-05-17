import ProfilePage from '../Components/ProfilePage'
import Navbar from '../Components/DashboardComp.jsx/Header/Navbar'
import Footer from '../Components/DashboardComp.jsx/Footer'
import { useState } from 'react'
import ModalForm from '../Components/ModalForm'

const Profile = () => {

  return (
    <div>
      <Navbar/>
<ProfilePage />

     <Footer/>
    </div>
  )
}

export default Profile
