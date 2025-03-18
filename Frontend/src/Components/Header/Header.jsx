import { CiLocationOn } from "react-icons/ci";
import React from 'react'

const Header = () => {
  return (
    <div>
        <div className="flex justify-between py-4 px-4 items-center text-[#808080FF] text-[14px] font-extralight">
          <p className="flex items-center">
      <CiLocationOn className="" /> <span className="font-light"> Store Location: Karachi,Pakistan</span></p>
      <p>
      <button className="hover:cursor-pointer">Sign In/ Sign Up</button></p>
      </div>
    </div>
  )
}

export default Header
