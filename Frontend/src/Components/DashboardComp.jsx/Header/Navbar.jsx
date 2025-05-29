import React, { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import CartIcon from "./CartIcon";
import axios from "axios";
import { useContext } from "react";
import { MyContext } from "../../../Context/MyContext.jsx";
import DropdownMenu from "./Dropdown.jsx";
const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [cartIconItems, setCartIconItems] = useState([]);
  const { cartItems } = useContext(MyContext);
  const [showLogin, setShowLogin] = useState(false);
  const cart = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/cart`);
      // const cart = response.data;
      const filterCart = response.data.filter(
        (item) => item.userId === localStorage.getItem("token")
      );
      console.log("data found", filterCart);
      setCartIconItems(filterCart);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    cart();
    if (localStorage.getItem("token")) {
      setShowLogin(true);
    } else {
      setShowLogin(false);
    }
  }, []);

  useEffect(() => {
    cart();
  }, [cartItems]);

  return (
    <nav className="px-4">
      <div className="flex justify-between items-center md:grid md:grid-cols-5 w-full py-4">
        {/* Logo */}
        <Link to="/">
          <h1 className="text-[32px] font-extrabold boldFont w-40">SHOP.CO</h1>
        </Link>

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
            <Link to="/shopAll">
              <a className="">Shop</a>
            </Link>
            <Link to="/shopAll">
              <a className=" hover: hover:font-bold">On Sale</a>
            </Link>
            <Link to="/shopAll">
              <a className=" hover: hover:font-bold">New Arrivals</a>
            </Link>
            <Link to="/shopAll">
              <a className=" hover: hover:font-bold">Brands</a>
            </Link>
          </div>

          <div className="hidden border rounded-full w-80 items-center justify-items-start py-2 px-2">
            <IoIosSearch className="" />{" "}
            <input
              type="text"
              placeholder="Search for products.."
              className="ps-2 outline-0"
            />
          </div>
          <div className="flex justify-between font-bold items-center gap-3 ">
            <CartIcon itemCount={cartIconItems[0]?.products?.length || 0} />

            <div>
              {showLogin ? (
                <DropdownMenu />
              ) : (
                <button
                  className="font-light border px-3 py-1 rounded-full hover:cursor-pointer hover:text-white hover:bg-black transition  text-[14px]"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Login/Register
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="flex justify-center pb-10 absolute top-20 left-0 w-full bg-white shadow-md space-y-10 py-6 md:hidden">
          <div className="flex flex-col items-center gap-4">
            <Link to="/">
              <a className=" font-bold">
                Home
              </a>
            </Link>
            <Link to="/shopAll">
              <a href="" className=" hover:font-bold">
                Shop
              </a>
            </Link>
            {showLogin?(<Link to="/profile">
              <a  className=" hover:font-bold">
                Profile
              </a>
            </Link>):navigate('/login')}
            

            {/* <a href="#" className=" hover:font-bold"></a> */}
            <div></div>
            <div>
              {showLogin ? (
                
                <button
                  className="font-light border px-3 py-1 rounded-full hover:cursor-pointer hover:text-white hover:bg-black transition  text-[14px]"
                  onClick={() => {
                    localStorage.removeItem("token");
                    setTimeout(() => {
                      navigate("/login");
                    }, 1000);
                  }}
                >
                  Logout
                </button>
              ) : (
                <button
                  className="font-light border px-3 py-1 rounded-full hover:cursor-pointer hover:text-white hover:bg-black transition  text-[14px]"
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Login/Register
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
