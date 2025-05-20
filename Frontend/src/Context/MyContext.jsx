import { createContext, useState } from "react";

// Create the context
export const MyContext = createContext();

// Create the provider
export const MyProvider = ({ children }) => {
  const [productId, setProductId] = useState("");
  const [api, setApi] = useState("");
  const [cartItems, setCartItems] = useState([]);


  return (
    <MyContext.Provider value={{ productId, setProductId,api, setApi,cartItems, setCartItems }}>
      {children}
    </MyContext.Provider>
  );
};