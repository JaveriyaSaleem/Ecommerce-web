import React,{useState,useEffect} from 'react'
import { FiSearch } from 'react-icons/fi'
import ProductCard from './ProductCard'
import AddProduct from './AddProduct'
import axios from "axios"

const RightSide = () => {
  const [productApi, setproductApi] = useState([])
 
  const gettingProducts = async()=>{
    try{
      let response = await axios.get("http://localhost:3000/products")
      setproductApi(response.data)

    }
    catch(e){
      console.log(e)
    }
  }
  
 useEffect(() => {
  gettingProducts();


 }, [])
 

  return (
    <div className='col-span-9 '>
   
          <div className="flex items-center bg-white border border-gray-300 rounded-full px-4 py-2 shadow-sm w-full max-w-md">
      <FiSearch className="text-gray-500 text-xl mr-2" />
      <input
        type="text"
        placeholder="Search Product..."
        className="outline-none w-full text-gray-700 placeholder-gray-400 bg-transparent"
      />
    </div>
      <div className=''>
        <h1 className='text-[24px] font-bold py-10'>All Products</h1>
        <AddProduct/>
        <div className='grid grid-cols-4 gap-2'>
        {
          (productApi?productApi.map((product,i)=>{
            return  <ProductCard key={i} image={product.Image}  name={product.ProductName} price={product.Price}/>
          }):"no product to show")
        }
     

        </div>
      </div>
    </div>
  )
}

export default RightSide
