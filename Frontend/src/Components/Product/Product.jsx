// On ViewItem this page will be shown where complete details of the product will be shown
import Navbar from "../DashboardComp.jsx/Header/Navbar";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "../../Context/MyContext.jsx";
import axios from "axios";
import { useNavigate } from "react-router";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Product = () => {
  const navigate = useNavigate();
  const [myproductId, setMyProductId] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState("");
  // function for cart
  const CartFunction = async () => {
    if (!localStorage.getItem("token")) {
      toast.error("Please Login to Add the Product in the Cart");

      setTimeout(() => {
        navigate("/login");
      }, 3500);
    } else {
      const response = await axios.put(`http://localhost:3000/cart`, {
        productId: myproductId,
        userId: localStorage.getItem("token"),
      });
      console.log(response.data);
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

  const getProduct = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/products`);
      console.log(response.data);
      setProducts(response.data);

      setMyProductId(localStorage.getItem("productId"));
      console.log(localStorage.getItem("productId"));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  useEffect(() => {
    if (products.length !== 0) {
      console.log(products);

      const filteredProduct = products.find(
        (product) => product._id === myproductId
      );
      setFilteredProduct(filteredProduct);
      console.log(filteredProduct);
    }
  }, [products, myproductId]);

  return (
    <div>
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
      <main className="px-2">
        <Navbar />
        {filteredProduct ? (
          <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-8">
            {/* Image Section */}

            <div className="flex justify-center items-center">
              <img
                src={filteredProduct.Image}
                alt="Product"
                className="w-96 h-96 object-contain p-4 bg-gray-50"
              />
            </div>
            {/* Details Section */}
            <div>
              <h1 className="text-3xl font-bold mb-2">
                {filteredProduct.ProductName}
              </h1>
              <p className="text-xl font-semibold text-gray-700 mb-4">{`$${filteredProduct.Price}`}</p>

              <div className="mb-4">
                <label className="text-sm font-medium text-gray-600 block mb-1">
                  Size
                </label>
                <select className="border rounded px-4 py-2 w-40 focus:outline-none focus:ring-2 focus:ring-black">
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </select>
              </div>
              <button
                onClick={CartFunction}
                className="bg-black text-white hover:bg-white border border-black hover:text-black px-6 py-2 rounded mb-6 transition"
              >
                Add to Bag
              </button>
              <p className="text-gray-700 mb-4">
                Discover effortless everyday style with this must-have
                essential, crafted for comfort, versatility, and confidence. A
                staple piece that fits right into your wardrobe.
              </p>
              <h2 className="font-semibold text-lg mb-2">Highlights</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Premium quality fabric for long-lasting wear</li>
                <li>Comfortable fit perfect for daily use</li>
                <li>Minimalist yet trendy design</li>
                <li>Easy to pair with your favorite outfits</li>
                <li>Designed with care, made to stand out</li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center h-screen">
            <p className="text-2xl font-semibold text-gray-700">Loading...</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Product;
