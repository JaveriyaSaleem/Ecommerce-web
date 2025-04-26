import { createContext, useState } from "react";

// Create the context
export const ImageContext = createContext();

// Create the provider
export const ImageProvider = ({ children }) => {
  const [imageUrl, setImageUrl] = useState("");

  return (
    <ImageContext.Provider value={{ imageUrl, setImageUrl }}>
      {children}
    </ImageContext.Provider>
  );
};