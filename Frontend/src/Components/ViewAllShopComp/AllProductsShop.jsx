import { useEffect, useState, useContext } from "react";
import Navbar from "../DashboardComp.jsx/Header/Navbar";
import { IoIosArrowForward } from "react-icons/io";
import { HiOutlineAdjustments } from "react-icons/hi";
import Products from "../DashboardComp.jsx/TopSelling/Products";
import axios from "axios";
import { MyContext } from "../../Context/MyContext.jsx";
import ErrorBoundary from "../../ErrorBoundary.jsx";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AllProductsShop = () => {
  const navigate = useNavigate();
  const { setProductId, CartFunction } = useContext(MyContext);

  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [filter, setFilter] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);

  const viewFunction = (productId) => {
    setProductId(productId);
    localStorage.setItem("productId", productId);
    setTimeout(() => {
      navigate("/product");
    }, 2000);
  };

  const filterFunction = (e) => {
    const selectedFilter = e.target.innerText;
    setFilter(selectedFilter);
  };

  const productsData = async () => {
    try {
      const response = await axios.get("https://backend-of-shopco-git-master-javeriya-saleem.vercel.app/products");
      setProducts(response.data);
      setAllProducts(response.data);
    } catch (error) {
      toast.error("Error fetching products");
    }
  };

  useEffect(() => {
    if (filter) {
      const filteredProducts = allProducts.filter(
        (product) => product.type === filter
      );
      setProducts(filteredProducts);
    } else {
      setProducts(allProducts);
    }
  }, [filter]);

  useEffect(() => {
    productsData();
  }, []);

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

      <ErrorBoundary>
        <div className="px-3">
          <Navbar />
          <div className="pb-6">
            <p className="flex items-center ">
              <span className="text-[#888383]">Home</span>{" "}
              <IoIosArrowForward /> Shop All
            </p>
          </div>

          {/* Filter Icon Button for Mobile */}
          <div className="md:hidden flex justify-end mb-4">
            <button
              className="text-black text-xl p-2 border rounded-md"
              onClick={() => setShowFilterModal(true)}
            >
              <HiOutlineAdjustments />
            </button>
          </div>

          <main className="grid grid-cols-1 md:grid-cols-12 sm:gap-10 pt-5">
            {/* Sidebar Filters (Desktop Only) */}
            <div className="hidden md:block col-span-2">
              <div className="border rounded-2xl sticky top-28 w-40 px-2 py-4">
                <h3 className="flex items-center justify-between border-b pb-4">
                  <span>Filters</span>
                  <HiOutlineAdjustments className="text-[#aeaeae] text-[20px]" />
                </h3>
                <div className="flex flex-col text-[#aeaeae] pt-4">
                  {["t-shirts", "shirts", "jeans", "shorts"].map((item) => (
                    <div
                      key={item}
                      onClick={filterFunction}
                      className="flex items-center justify-between cursor-pointer hover:text-black transition"
                    >
                      <button>{item}</button>
                      <IoIosArrowForward />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Filters (Mobile Only) */}
            {showFilterModal && (
              <div className="fixed inset-0 bg-white bg-opacity-50 z-50 flex justify-center items-center">
                <div className="bg-white p-5 rounded-lg w-30 text-start">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-bold">Filters</h3>
                    <button onClick={() => setShowFilterModal(false)} className="text-black">✖</button>
                  </div>
                  <div className="flex flex-col text-[#aeaeae] space-y-3">
                    {["t-shirts", "shirts", "jeans", "shorts"].map((item) => (
                      <button
                        key={item}
                        onClick={(e) => {
                          filterFunction(e);
                          setShowFilterModal(false);
                        }}
                        className="flex justify-between items-center hover:text-black transition"
                      >
                        {item} <IoIosArrowForward />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Product Section */}
            <div className="md:col-span-8 col-span-12">
              <h1 className="text-[32px] font-bold"></h1>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {products.length > 0 ? (
                  products.map((product, id) => (
                    <Products
                      key={id}
                      img={product.Image}
                      name={product.ProductName}
                      price={`$${product.Price}`}
                      functionForCart={() => CartFunction(product._id)}
                      onClick={() => viewFunction(product._id)}
                    />
                  ))
                ) : (
                  <div className="h-[400px]">Loading..</div>
                )}
              </div>
            </div>
          </main>
        </div>
      </ErrorBoundary>
    </div>
  );
};

export default AllProductsShop;
