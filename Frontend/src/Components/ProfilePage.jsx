import React, { useEffect,useState } from "react";
import axios from "axios";


const ProfilePage = () => {
  const orderHistory = [
    { id: "#1371288", date: "March 25, 2024", payment: "Paid", fulfillment: "Fulfilled", total: "Rs.1,065" },
    { id: "#1121062", date: "November 13, 2023", payment: "Voided", fulfillment: "Fulfilled", total: "Rs.1,013" },
    { id: "#900529", date: "July 06, 2023", payment: "Paid", fulfillment: "Fulfilled", total: "Rs.1,837" },
  ];
  const [order, setOrder] = useState([]);

  useEffect(() => {
    const functionOnMount=async()=>{

// finding user in database to fetch user order history
const responseUser = await axios.get('http://localhost:3000/auth')
const saveUser = responseUser.data
const findingUser = saveUser.find((user)=>{if(user.token === localStorage.getItem('token')){return user}
else{
  console.log("notfound")
}})
console.log("userFound",findingUser)
// once found fetch order history
const response = await axios.get('http://localhost:3000/order')
const saveData = response.data
const filteringOrderHistoryOfUser = saveData.filter((item)=>{if(item.Email===findingUser.email){
  return item
}else{
  console.log("not found")
}})
console.log("order History",filteringOrderHistoryOfUser)
setOrder(filteringOrderHistoryOfUser)

    }
functionOnMount()



  }, [])
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="p-10 max-w-5xl mx-auto bg-white mb-20">
      <h1 className="text-[25px] font-black py-2">MY ACCOUNT</h1>
      {/* 🧾 Order History */}
      <h2 className="text-[16px] font-bold mb-4">ORDER HISTORY</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-center border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-2 px-4 border">ORDER</th>
              <th className="py-2 px-4 border">DATE</th>
              <th className="py-2 px-4 border">PAYMENT STATUS</th>
              <th className="py-2 px-4 border">FULFILLMENT STATUS</th>
              <th className="py-2 px-4 border">TOTAL</th>
            </tr>
          </thead>
          <tbody>
            {order.map((order, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border">#{order.
OrderNumber}</td>
                <td className="py-2 px-4 border">{order.Date}</td>
                <td className="py-2 px-4 border">{order.PaymentMethod}</td>
                <td className="py-2 px-4 border">Fulfilled</td>
                <td className="py-2 px-4 border">${order.TotalPrice
}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 👤 Account Details */}
      <h2 className="text-xl font-bold mt-8 mb-4">ACCOUNT DETAILS</h2>
      <div className="text-gray-700 space-y-1">
        <p className="font-semibold">Javeriya Saleem</p>
        <p>Ghulam Hussain Street, Shama Palace A2, Punjabi Club, Kharadar.</p>
        <p>Karachi</p>
        <p>74000</p>
        <p>Pakistan</p>
        <p>0310 2914909</p>
      </div>

      {/* 📬 View Address Button */}
      <div className="mt-6">
        <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md shadow">
          VIEW ADDRESSES (2)
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
