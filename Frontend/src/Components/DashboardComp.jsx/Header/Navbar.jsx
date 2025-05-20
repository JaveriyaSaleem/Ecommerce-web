import React, { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import CartIcon from "./CartIcon";
import axios from "axios";
import { useContext } from "react";
import { MyContext } from "../../../Context/MyContext.jsx"
import DropdownMenu from "./Dropdown.jsx";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartIconItems,setCartIconItems]= useState([])
  const {cartItems} = useContext(MyContext);
  const [showLogin, setShowLogin] = useState(false);
  const cart=async()=>{
    try{
      const response = await axios.get(`http://localhost:3000/cart`);
      // const cart = response.data;
      const filterCart = response.data.filter((item)=>item.userId===localStorage.getItem("token"))
      console.log("data found",filterCart);
      setCartIconItems(filterCart);
    }catch(e){
      console.log(e)
    }
  }
  useEffect(() => { 
    cart()
if(localStorage.getItem("token")){
  setShowLogin(true)}
  
  else{
    setShowLogin(false)
  }},[])

useEffect(() => {
cart()
}, [cartItems])
  
  return (
    <nav className="px-4">
      <div className="grid grid-cols-5 w-full py-4">
        {/* Logo */}
        <div className="">
        <h1 className='text-[32px] font-extrabold boldFont w-40'>SHOP.CO</h1>
        </div>

        {/* Hamburger menu for mobile */}
        <div className="md:hidden ">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center justify-between  col-span-4">
          <div className="flex justify-center gap-10">
          <a href="#" className=""><select name="Shop" id="" value="Shop">
          <option value="Shop">Shop</option>
          <option value="Casual">Casual</option>
          <option value="Formal">Formal</option>
          <option value="Party">Party</option>
          <option value="Gym">Gym</option>
          
          </select></a>
          <a href="#" className=" hover: hover:font-bold">On Sale</a>
          <a href="#" className=" hover: hover:font-bold">New Arrivals</a>
          <a href="#" className=" hover: hover:font-bold">Brands</a>
          </div>

           <div className='hidden border rounded-full w-80 items-center justify-items-start py-2 px-2'><IoIosSearch className=''/> <input type="text" placeholder='Search for products..' className='ps-2 outline-0'/></div>
                  <div className='flex justify-between font-bold items-center gap-3 '>
<CartIcon itemCount={cartIconItems[0]?.products?.length || 0} />

                  
                  
                  <div>
                  {showLogin? 
  <DropdownMenu/>
                  :<button className="font-light border px-3 py-1 rounded-full hover:cursor-pointer hover:text-white hover:bg-black transition  text-[14px]">Login/Register</button>}
                  </div>
                 
                  </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex justify-center pb-10 absolute top-20 left-0 w-full bg-white shadow-md space-y-10 py-6 md:hidden">
          <div className="flex flex-col items-center gap-4">
          <a href="#" className=" font-bold">Home</a>
          <a href="#" className=" hover:font-bold">Portfolio</a>
          <a href="#" className=" hover:font-bold">About Me</a>
          <a href="#" className=" hover:font-bold">Testimonials</a>
          <div>
          </div>
          <button className="border border-[#5e3bee] text-[#5e3bee] hover:text-white hover:bg-[#5e3bee] py-2 px-3 rounded-sm">
            Contact Me
          </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;