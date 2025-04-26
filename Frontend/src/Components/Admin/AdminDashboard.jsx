import React from 'react'
import "./admin.css"

import LeftSide from './LeftSide'
import RightSide from './RightSide/RightSide.jsx'

const AdminDashboard = () => {


  return (
   
    <main className="grid grid-cols-12 gap-2 py-5 px-5">
      <LeftSide />
     <RightSide/>
      

      
    </main>
  )
}

export default AdminDashboard
