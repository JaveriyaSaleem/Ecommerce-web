import { createContext, useContext, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { toast, Bounce } from "react-toastify";

// Create the context
export const MyContext = createContext();

// Create the provider
export const MyProvider = ({ children }) => {
  const [productId, setProductId] = useState("");
  const [api, setApi] = useState("");
  const [cartItems, setCartItems] = useState([]);
  // function for adding the product to the cart
    const [updatedCart, setupdatedCart] = useState([]);
  const CartFunction = async (myproductId) => {
    if (!localStorage.getItem("token")) {
      Swal.fire({
        text: "Please Login to Add the Product in the Cart",
      });
      navigate("/login");
    } else {
      const cart = await axios.get(`http://localhost:3000/cart`);
      const filterCart = cart.data.filter(
        (cart) => cart.userId === localStorage.getItem("token")
      );
      console.log("cart data", filterCart);
      let getProduct;
      if(filterCart.length >0 ) {
getProduct = filterCart[0].products.find(
  (product) => product.id === myproductId
  
);}
console.log("product found", getProduct);
      
if (getProduct) {
      
      const response = await axios.put(`http://localhost:3000/cart`, {
        productId: {
          id: myproductId,
          quantity: getProduct.quantity + 1,
        },
        userId: localStorage.getItem("token"),
      });
      setupdatedCart(response.data);
      setCartItems(response.data);
    } else {
        const response = await axios.put(`http://localhost:3000/cart`, {
          productId: {
            id: myproductId,
            quantity: 1,
          },
          userId: localStorage.getItem("token"),
        });
        console.log("updated data", response.data);
        setupdatedCart(response.data);
        setCartItems(response.data);
      }

      // toast for success
      toast.success("Product added to cart!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    }
  };


  return (
    <MyContext.Provider value={{ productId, setProductId,api, setApi,cartItems, setCartItems,CartFunction,updatedCart, setupdatedCart }}>
      {children}
    </MyContext.Provider>
  );
};