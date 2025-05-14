import { createContext, useState } from "react";

// Create the context
export const MyContext = createContext();

// Create the provider
export const MyProvider = ({ children }) => {
  const [productId, setProductId] = useState("");
  const [api, setApi] = useState("");


  return (
    <MyContext.Provider value={{ productId, setProductId,api, setApi }}>
      {children}
    </MyContext.Provider>
  );
};