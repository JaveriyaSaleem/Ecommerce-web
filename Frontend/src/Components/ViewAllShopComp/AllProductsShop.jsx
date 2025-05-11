import React,{useEffect, useState,useRef} from 'react'
import Navbar from '../DashboardComp.jsx/Header/Navbar'
import { IoIosArrowForward } from "react-icons/io";
import { HiOutlineAdjustments } from "react-icons/hi";
import Products from '../DashboardComp.jsx/TopSelling/Products';
import axios from 'axios';

const AllProductsShop = () => {
  
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
   const [filter, setFilter] = useState(false);
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
      {products.map((product) => (
        <Products key={product.id} img={product.Image} name={product.ProductName
} price={`$${product.Price}`}/>
      ))}
    </div>
        </div>
      </main>
    </div>
  )
}

export default AllProductsShop
