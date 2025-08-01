import React, { useState, useEffect } from "react";
import { Button } from "../Button.jsx";
import axios from "axios";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
const CartComp = () => {
  const [filteredItems, setfilteredItems] = useState([]);
  const [ totalPriceCart, setTotalPriceCart ] = useState(0);
  const [isLoading, setisLoading] = useState(true)
  const cartItems = async () => {
    setisLoading(true);
    try {
      // products from db
      const gettingProducts = await axios("https://backend-of-shopco-git-master-javeriya-saleem.vercel.app/products");
      // cart of user from db
      const gettingCart = await axios.get("https://backend-of-shopco-git-master-javeriya-saleem.vercel.app/cart");
      // checking if user exists
      const userChecking = gettingCart.data.find(
        (user) => user.userId === localStorage.getItem("token")
      );
      console.log("user",userChecking)
      // if yes compare the products with cart and come with filtered products
      if (userChecking) {
const filterProducts = gettingProducts.data
  .filter((product) =>
    userChecking.products.some((cartItem) => cartItem.id === product._id)
  )
  .map((product) => {
    const cartItem = userChecking.products.find(
      (item) => item.id === product._id
    );
    return {
      ...product,
      quantity: cartItem?.quantity || 1, // default 1 if not found
    };
  });
        console.log("product Found to show on cart",filterProducts);
        // set the filtered products to state
        setfilteredItems(filterProducts);

        console.log("userChecking",userChecking.products);
      }
    } catch (e) {
      console.log(e);
    }
    finally {
    setisLoading(false); 
  }
  };
  // remove item 
const deleteItem = async (productId)=>{
  console.log("delete item",productId);
  console.log(filteredItems,"itemsss")
  try{
const response = await axios.put(`https://backend-of-shopco-git-master-javeriya-saleem.vercel.app/cart/removeProduct`, {
        productId: productId,
        userId: localStorage.getItem("token"),
      });
      console.log(response.data,"deleted item");
      // filter the deleted item from the state
      const updatedItems = filteredItems.filter(item => item._id !== productId);
      setfilteredItems(updatedItems);

  }catch(e){
    console.log(e)
  }

}

    // useEffect to get the cart items when the component mounts
  useEffect(() => {
    cartItems();

  }, []);
  useEffect(() => {
      const total = filteredItems.reduce((acc, item) => acc + item.Price * item.quantity, 0);
  console.log(total);
  setTotalPriceCart(total);
    const totalPrice =async()=>{
const response = await axios.put(`https://backend-of-shopco-git-master-javeriya-saleem.vercel.app/cart/priceUpdate`, {
        totalPrice: total,
        userId: localStorage.getItem("token"),
      });
      console.log(response.data);
      setTotalPriceCart(total);
      localStorage.setItem("totalPrice", total);
      localStorage.setItem("products", JSON.stringify(filteredItems));
    }
totalPrice()

  }, [filteredItems])
  


  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-6">
        <h2 className="sm:text-2xl font-semibold mb-4 text-center sm:text-start text-[16px]">Your Cart</h2>
        {/* FILTERED ITEMS  */}
        {isLoading?(
            <div className="text-center text-gray-500 text-lg">Loading your cart please wait...</div>
        )
        :(filteredItems.length > 0 ? (
          <div className="space-y-4 ">
           {console.log(filteredItems? filteredItems: "no items found")}
            {filteredItems.map((item) => (
              <div
                key={item._id}
                className="flex flex-col sm:flex-row  items-center gap-4 border-b pb-4"
              >
                <img
                  src={item.Image}
                  alt={item.ProductName}
                  className="w-24 h-24 object-cover rounded-xl"
                />
                <div className="flex-1 items-center">
                  <div className="flex items-center gap-2">
                  <h3 className="text-[12px] sm:text-lg font-medium">{item.ProductName}</h3>
                  <div onClick={()=>{deleteItem(item._id)}}>
                    <MdDelete />
                  </div>
                  </div>
                  <p className="text-gray-500 text-[12px] sm:text-[16px] text-center sm:text-start">
                    {/* if more than 1 item then show the price for now I have 1 cuz I haven't applied function of adding same product more than once */}
                    ${(item.Price * 1).toFixed(2)} x {item.quantity}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-[12px] sm:text-xl font-semibold">
                    ${(item.Price * item.quantity).toFixed(2)}
                  </p>
                </div>
          
              </div>
            ))}
            {/* Total Price  */}
            <div className="flex justify-between items-center pt-6 mt-4">
              <p className="text-[16px] sm:text-xl font-bold">Total:</p>
              <p className="text-[16px] sm:text-xl font-bold">${totalPriceCart.toFixed(2)}</p>
            </div>
            <div className="text-right mt-6">
              {/* Link to checkout page  */}
              <Link to="/checkout">
                <Button className="sm:px-6 sm:py-3 text-[12px] sm:text-lg rounded-2xl shadow">
                  Proceed to Checkout
                </Button>
              </Link>
            </div>
          </div>
        ) : (
          <p>Your cart is empty.</p>
        ))}
      </div>
    </div>
  );
};

export default CartComp;
