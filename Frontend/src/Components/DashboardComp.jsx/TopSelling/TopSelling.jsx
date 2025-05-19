// Dashboard below brand names
import React, { useEffect, useState } from "react";
import Products from "./Products";
import { ToastContainer, Bounce, toast } from "react-toastify";
import { Link } from "react-router";
import axios from "axios";
import { useContext } from "react";
import { MyContext } from "../../../Context/MyContext.jsx";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const TopSelling = () => {
  const navigate = useNavigate();
  const { setProductId } = useContext(MyContext); //context to get the productId
  const [topSelling, settopSelling] = useState([]);
  const [updatedCart, setupdatedCart] = useState([])
  // function for getting products and sorting them to get random four products
  const functionForGettingProducts = async () => {
    const response = await axios.get("http://localhost:3000/products");
    const allProducts = response.data;
    console.log(response.data);
    const getRandomProducts = (allProducts, count) => {
      const shuffled = [...allProducts].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, count);
    };
    const randomProducts = getRandomProducts(allProducts, 4);
    settopSelling(randomProducts);
  };
  // useEffect to get the products when the component mounts
  useEffect(() => {
    functionForGettingProducts();
  }, []);
  // function for adding the product to the cart
  const CartFunction = async (myproductId) => {
    if (!localStorage.getItem("token")) {
      Swal.fire({
        text: "Please Login to Add the Product in the Cart",
      });
      navigate("/login");
    } else {
      const response = await axios.put(`http://localhost:3000/cart`, {
        productId: myproductId,
        userId: localStorage.getItem("token"),
      });
      console.log(response.data);
      setupdatedCart(response.data);
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
  // function for getting the productId and navigating to the product page
  const viewFunction = (productId) => {
    console.log(productId);
    setProductId(productId);
    localStorage.setItem("productId", productId);
    setTimeout(() => {
      navigate("/product");
    }, 2000);
  };
  useEffect(() => {
    
  }, [updatedCart])
  

  return (
    <div className="py-10">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
      <h1 className="text-[35px] font-black boldFont text-center">
        TOP SELLING
      </h1>

      <div className="flex items-center justify-between pt-2 pb-10">
        {topSelling.map((product) => (
          <Products
            functionForCart={() => CartFunction(product._id)}
            key={product._id}
            img={product.Image}
            name={product.ProductName}
            price={`$${product.Price}`}
            onClick={() => viewFunction(product._id)}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <Link
          className="cursor-pointer border py-2 px-10 rounded-full"
          to="/shopAll"
        >
          View All{" "}
        </Link>
      </div>
    </div>
  );
};

export default TopSelling;
