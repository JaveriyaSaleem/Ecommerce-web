import React, { useState, useEffect } from "react";
import { Button } from "../Button.jsx";
import axios from "axios";
import { Link } from "react-router-dom";
const CartComp = () => {
  const [filteredItems, setfilteredItems] = useState([]);
  const [ total, setTotal ] = useState(0);
  const cartItems = async () => {
    try {
      // products from db
      const gettingProducts = await axios("http://localhost:3000/products");
      // cart of user from db
      const gettingCart = await axios.get("http://localhost:3000/cart");
      // checking if user exists
      const userChecking = gettingCart.data.find(
        (user) => user.userId === localStorage.getItem("token")
      );
      // if yes compare the products with cart and come with filtered products
      if (userChecking) {
        const filterProducts = gettingProducts.data.filter((product) => {
          return userChecking.products.some(
            (cartItem) => cartItem === product._id
          );
        });
        console.log(filterProducts);
        // set the filtered products to state
        setfilteredItems(filterProducts);

        console.log(userChecking);
      }
    } catch (e) {
      console.log(e);
    }
  };


    // useEffect to get the cart items when the component mounts
  useEffect(() => {
    cartItems();

  }, []);
  useEffect(() => {
      const total = filteredItems.reduce((acc, item) => acc + item.Price * 1, 0);
  console.log(total);
    const totalPrice =async()=>{
const response = await axios.put(`http://localhost:3000/cart`, {
        totalPrice: total,
        userId: localStorage.getItem("token"),
      });
      console.log(response.data);
      setTotal(total);
      localStorage.setItem("totalPrice", total);
      localStorage.setItem("products", JSON.stringify(filteredItems));
    }
totalPrice()

  }, [filteredItems])
  


  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
        {/* FILTERED ITEMS  */}
        {filteredItems.length > 0 ? (
          <div className="space-y-4">
            {filteredItems.map((item) => (
              <div
                key={item._id}
                className="flex items-center gap-4 border-b pb-4"
              >
                <img
                  src={item.Image}
                  alt={item.ProductName}
                  className="w-24 h-24 object-cover rounded-xl"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-medium">{item.ProductName}</h3>
                  <p className="text-gray-500">
                    {/* if more than 1 item then show the price for now I have 1 cuz I haven't applied function of adding same product more than once */}
                    ${(item.Price * 1).toFixed(2)}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-semibold">
                    ${(item.Price * 1).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
            {/* Total Price  */}
            <div className="flex justify-between items-center pt-6 border-t mt-4">
              <p className="text-xl font-bold">Total:</p>
              <p className="text-xl font-bold">${total.toFixed(2)}</p>
            </div>
            <div className="text-right mt-6">
              {/* Link to checkout page  */}
              <Link to="/checkout">
                <Button className="px-6 py-3 text-lg rounded-2xl shadow">
                  Proceed to Checkout
                </Button>
              </Link>
            </div>
          </div>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default CartComp;
