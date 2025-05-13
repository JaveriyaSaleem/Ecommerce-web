import React from "react";

const Checkout = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-2xl p-6 space-y-6">
        <h2 className="text-2xl font-semibold text-center">Checkout</h2>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="number"
            placeholder="Phone Number"
            className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
                    <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            placeholder="Shipping Address"
            className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <select className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400">
            <option>Choose Payment Method</option>
            <option>Cash on Delivery</option>
            {/* <option>Credit/Debit Card</option>
            <option>PayPal</option> */}
          </select>
        </div>

        <div className="flex justify-between items-center pt-4 border-t">
          <p className="text-lg font-medium">Total:</p>
          <p className="text-lg font-semibold text-blue-600">$129.99</p>
        </div>

        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-xl transition">
          Place Order 💖
        </button>
      </div>
    </div>
  );
};

export default Checkout;
