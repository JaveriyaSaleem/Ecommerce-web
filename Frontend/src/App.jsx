import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";



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
import Cart from './Pages/Cart.jsx';
import Checkout from './Pages/Checkout.jsx';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true,     // only animate once per scroll
    });
  }, []);
  return (
   


  <ErrorBoundary>
   <Router>
        <Routes>
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/shopAll" element={<ViewAllShop />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/checkout" element={<Checkout/>} />
        </Routes>
      </Router>
      </ErrorBoundary>

     

     

    
  )
}

export default App
