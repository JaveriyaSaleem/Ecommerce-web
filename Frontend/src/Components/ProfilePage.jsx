import React, { useEffect,useState } from "react";
import axios from "axios";
import { FaEdit } from "react-icons/fa";
import ModalForm from "./ModalForm";
import { set } from "react-hook-form";
import moment from "moment";
import { useNavigate } from "react-router-dom";



const ProfilePage = () => {
  const navigate = useNavigate();

  const [order, setOrder] = useState([]);
  const [user, setUser] = useState();

useEffect(() => {
  const functionOnMount = async () => {
    try {
      // 1. Fetch users
      const responseUser = await axios.get('http://localhost:3000/auth');
      const saveUser = responseUser.data;

      // 2. Find current user by token
      const findingUser = saveUser.find(
        (user) => user.token === localStorage.getItem('token')
      );
console.log("findingUser", findingUser);
      if (findingUser) {
        console.log("userFound", findingUser);
        setUser(findingUser);

        // 3. Fetch orders
        const response = await axios.get('http://localhost:3000/order');
        const saveData = response.data;

        // 4. Filter order history
        const filteringOrderHistoryOfUser = saveData.filter(
          (item) => item.RegisteredEmail === findingUser.email
        );

        console.log("order History", filteringOrderHistoryOfUser);
        setOrder(filteringOrderHistoryOfUser);
      } else {
        console.log("notfound");
      }
    } catch (error) {
      console.error("Something went wrong fetching user or order data 😢", error);
    }
  };

  functionOnMount();
}, []);
  
useEffect(() => {
console.log("dekh aya ",user)
}, [user])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="p-10 max-w-5xl mx-auto bg-white mb-20">
      <h1 className="text-[25px] font-black py-2">MY ACCOUNT</h1>
      {/* 🧾 Order History */}
      <h2 className="text-[16px] font-bold mb-4">ORDER HISTORY</h2>
      <div className="overflow-x-auto">
  <table className="min-w-full text-xs sm:text-sm text-center border border-gray-200">
    <thead className="bg-gray-100">
      <tr>
        <th className="py-2 px-2 sm:px-4 border">ORDER</th>
        <th className="py-2 px-2 sm:px-4 border">DATE</th>
        <th className="py-2 px-2 sm:px-4 border">PAYMENT</th>
        <th className="py-2 px-2 sm:px-4 border">STATUS</th>
        <th className="py-2 px-2 sm:px-4 border">TOTAL</th>
      </tr>
    </thead>
    <tbody>
      {order.map((order, index) => (
        <tr key={index}>
          <td className="py-2 px-2 sm:px-4 border text-[11px] sm:text-sm">#{order.OrderNumber}</td>
          <td className="py-2 px-2 sm:px-4 border text-[11px] sm:text-sm">{moment(order.Date).format('LL')}</td>
          <td className="py-2 px-2 sm:px-4 border text-[11px] sm:text-sm">{order.PaymentMethod}</td>
          <td className="py-2 px-2 sm:px-4 border text-[11px] sm:text-sm">Fulfilled</td>
          <td className="py-2 px-2 sm:px-4 border text-[11px] sm:text-sm">${order.TotalPrice}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

      {/* 👤 Account Details */}
      <h2 className="text-xl font-bold mt-8 mb-4">ACCOUNT DETAILS</h2>
      {user? <div className="text-gray-700 space-y-1">
      
        <div className="flex items-center gap-2">
                <p className="font-semibold">{user.Username}</p>
        {/* edit profile  */}
        <div>
          <ModalForm/>
        </div></div>
        <p>{user.email}<span className="text-red-600">(you can't change email)</span></p>
        {/* <p>Ghulam Hussain Street, Shama Palace A2, Punjabi Club, Kharadar.</p>
        <p>Karachi</p>
        <p>74000</p>
        <p>Pakistan</p> */}
  
        
      </div> : <p className="text-gray-700">No user found</p>}
     

      {/* 📬 View Address Button */}
      <div className="mt-6 flex items-center" onClick={()=>
        {localStorage.removeItem('token');
          setTimeout(() => {
               navigate('/login');
          }, 2000);
     }}>
        <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md shadow">
         Logout 
        </button>
       
      </div>


      {/* ⬆️ Scroll Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 bg-gray-100 rounded-full shadow-lg flex items-center justify-center text-xl"
      >
        ↑
      </button>
    </div>
  );
};

export default ProfilePage;
