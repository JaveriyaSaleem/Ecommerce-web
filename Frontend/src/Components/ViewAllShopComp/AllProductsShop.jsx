import React,{useEffect, useState,useRef, use} from 'react'
import Navbar from '../DashboardComp.jsx/Header/Navbar'
import { IoIosArrowForward } from "react-icons/io";
import { HiOutlineAdjustments } from "react-icons/hi";
import Products from '../DashboardComp.jsx/TopSelling/Products';
import axios from 'axios';
import { useContext } from 'react';
import { MyContext } from "../../Context/MyContext.jsx";
import ErrorBoundary from '../../ErrorBoundary.jsx';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AllProductsShop = () => {
  const navigate = useNavigate();
  const { setProductId,setapi } = useContext(MyContext); //context to get the productId
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
   const [filter, setFilter] = useState(false);
  const viewFunction = (productId)=>{
        console.log(productId)
        setProductId(productId)
          localStorage.setItem("productId", productId);
        setTimeout(() => {
          navigate('/product')
        }, 2000);
      }
      const CartFunction =async (myproductId) => {
    if (!localStorage.getItem("token")) {
      Swal.fire({
          text: "Please Login to Add the Product in the Cart",
        });
      navigate("/login")}
      else{
        const response = await axios.put(`http://localhost:3000/cart`, {
      productId: myproductId,
      userId: localStorage.getItem("token"),
    });
    console.log(response.data)
toast.success('Product added to cart!', {
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

    }
   const filterFunction = (e) => {
console.log(e.target.innerText)
setFilter(e.target.innerText)
      }
   let productsData = async()=>{
    let response = await axios.get('http://localhost:3000/products')
    console.log(response.data)
setProducts(response.data)
setAllProducts(response.data)

   }
   useEffect(()=>{
    if(filter){
      let filteredProducts = allProducts.filter((product) => product.type === filter);
      console.log(filteredProducts)
     
      setProducts(filteredProducts);
    }
    else{
      setProducts(allProducts)
    }
   },[filter],[allProducts])
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
        <div className='px-3'>
          <Navbar/>
          <div className=' pb-6'>
          <p className='flex items-center fixed'>
          <span className='text-[#888383]'>Home</span> <IoIosArrowForward/> Shop All</p>
          </div>
          <main className='grid grid-cols-12 gap-10 pt-5'>
            {/* left side  */}
            <div className='col-span-2'>
            <div className='border  rounded-2xl  h-100 fixed w-40 px-2 py-4'>
              <h3 className='flex items-center justify-between border-b pb-4'><span className=''>Filters</span> <HiOutlineAdjustments className='text-[#aeaeae] text-[20px]'/></h3>
              <div className='flex flex-col text-[#aeaeae] pt-4'>
                {/* t-shirt  */}
              <div  onClick={filterFunction}  className='flex items-center justify-between cursor-pointer hover:text-black transition'><button>t-shirts </button><IoIosArrowForward/></div>
              {/* shirts  */}
              <div onClick={filterFunction}  className='flex items-center justify-between cursor-pointer hover:text-black transition'><button>shirts </button><IoIosArrowForward/></div>
              {/* jeans  */}
              <div onClick={filterFunction}  className='flex items-center justify-between cursor-pointer hover:text-black transition'><button>jeans </button><IoIosArrowForward/></div>
              {/* shorts  */}
              <div onClick={filterFunction}  className='flex items-center justify-between cursor-pointer hover:text-black transition'><button>shorts</button><IoIosArrowForward/></div>
              </div>
              </div>
              </div>
              {/* right side  */}
      
            <div className='col-span-8'>
              <h1 className='text-[32px] font-bold'></h1>
        <div className='grid grid-cols-3 gap-3'>
          {products.map((product,id) => (
            <Products key={id} img={product.Image} name={product.ProductName
        } price={`$${product.Price}`} functionForCart={()=>CartFunction(product._id)} onClick={()=>viewFunction(product._id)}/>
          ))}
        </div>
            </div>
          </main>
        </div>
      </ErrorBoundary>
    </div>
  )
}

export default AllProductsShop
