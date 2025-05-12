import React from 'react'


import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import SignupForm from './Components/Signup & Login/Signup.jsx'
import Login from './Components/Signup & Login/Login.jsx';
import Dashboard from './Pages/Dashboard.jsx';
import Profile from './Pages/Profile.jsx';
import ViewAllShop from './Pages/ViewAllShop.jsx';
import ProductPage from './Pages/ProductPage.jsx';
import ErrorBoundary from './ErrorBoundary.jsx';

const App = () => {
  
  return (
   


  <ErrorBoundary>
   <Router>
        <Routes>
          <Route path="/" element={<SignupForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/shopAll" element={<ViewAllShop />} />
          <Route path="/product" element={<ProductPage />} />
        </Routes>
      </Router>
      </ErrorBoundary>

     

     

    
  )
}

export default App
