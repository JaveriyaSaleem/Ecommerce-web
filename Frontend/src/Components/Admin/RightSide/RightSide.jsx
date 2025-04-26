import React,{useState,useEffect} from 'react'
import { FiSearch } from 'react-icons/fi'
import ProductCard from './ProductCard'
import AddProduct from './AddProduct'
import axios from "axios"

const RightSide = () => {
  const [productApi, setproductApi] = useState([])
  const [refreshPage, setrefreshPage] = useState(false)
  
 
  const gettingProducts = async()=>{
    try{
      let response = await axios.get("http://localhost:3000/products")
      setproductApi(response.data)

    }
    catch(e){
      console.log(e)
    }
  }
    const deleteProduct = async(id)=>{
      try{
        let idForDeletion = id
        
  
  let response = await axios.delete(`http://localhost:3000/products/${idForDeletion}`)
  console.log("Id Deleted!!!")
  gettingProducts();
      }catch(e){
  
      }
    }
  
 useEffect(() => {
  gettingProducts();
  setTimeout(()=>{
    setrefreshPage(true)
  },2000)
  


 }, [])
 useEffect(()=>{

 },[refreshPage])
 

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
          (refreshPage?productApi.map((product,i)=>(
            <ProductCard onClick={()=>{deleteProduct(product._id)}} id={product._id} key={product._id} image={product.Image}  name={product.ProductName} price={product.Price}/>
          )):
<button type="button" className="flex items-center  py-2 rounded text-white disabled:opacity-50" disabled>
Products Loading..<svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
  </svg>
  
</button>

        )
        }
     

        </div>
      </div>
    </div>
  )
}

export default RightSide
