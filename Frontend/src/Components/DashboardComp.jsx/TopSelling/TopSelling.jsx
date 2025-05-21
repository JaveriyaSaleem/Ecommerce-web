// Dashboard below brand names
import React, { useEffect, useState } from "react";
import Products from "./Products";
import { ToastContainer, Bounce, toast } from "react-toastify";
import { Link } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { MyContext } from "../../../Context/MyContext.jsx";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const TopSelling = () => {
  const navigate = useNavigate();
  const { setProductId,CartFunction,updatedCart, setupdatedCart } = useContext(MyContext); //context to get the productId[[]]
  const [topSelling, settopSelling] = useState([]);
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

  // function for getting the productId and navigating to the product page
  const viewFunction = (productId) => {
    console.log(productId);
    setProductId(productId);
    localStorage.setItem("productId", productId);
    setTimeout(() => {
      navigate("/product");
    }, 2000);
  };


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
