import React from 'react'

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import SignupForm from './Components/Signup & Login/Signup.jsx'
import Login from './Components/Signup & Login/Login.jsx';
import Dashboard from './Components/Dashboard.jsx';
import AdminDashboard from './Components/Admin/AdminDashboard.jsx';





const App = () => {
  
  return (
   
<>
<AdminDashboard/>
</>
     
/* <Router>
      <Routes>
        <Route path="/" element={<SignupForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router> */
     
    
  )
}

export default App
