import React, { useRef, useState } from 'react'
import Products from '../TopSelling/Products'
import shirt1 from '../../assets/Images/1st image of top sellin.png'
import shirt2 from '../../assets/Images/2nd image of top selling.png'
import shirt3 from '../../assets/Images/3rd image of top selling.png'
import shirt4 from '../../assets/Images/4th image of top selling.png'
import Modal from './Modal'  // make sure this path is correct
import axios from "axios"

const AdminDashboard = () => {
  let productNameRef = useRef()
  let priceRef = useRef()
  // 1️⃣ create state to control the modal
  const [isModalOpen, setIsModalOpen] = useState(false)
  // function product upload 
  const productUpload=async()=>{
console.log("heheh")
console.log(productNameRef.current,priceRef.current)
    if(productNameRef.current && priceRef.current){
try{

    const userData = {productName:productNameRef.current ,Price:priceRef.current}
    const response = await axios.post("http://localhost:3000/admin",userData)
    alert("sent successfully")
    console.log(response.data)
}catch(e){
    console.log(e)
}
    
    }else{
        alert("please enter the values before proceeding")
    }
    setIsModalOpen(false)
   }

  return (
    <div className="p-4">
      <h1 className="text-[18px]">Admin Dashboard</h1>

      <div className="py-10">
        <h1 className="text-[35px] font-black boldFont text-center">TOP SELLING</h1>
        <div className="flex flex-wrap items-center justify-between py-10 gap-4">
          <Products img={shirt1} name="Vertical Striped Shirt" price="$212" />
          <Products img={shirt2} name="Courage Graphic T-Shirt" price="$145" />
          <Products img={shirt3} name="Loose Fit Bermuda Shorts" price="$80" />
          <Products img={shirt4} name="Faded Skinny Jeans" price="$210" />
        </div>
      </div>

      {/* 2️⃣ button to open the modal */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-black text-white px-6 py-2 rounded-full mb-4"
      >
        Add more product
      </button>

      {/* 3️⃣ the Modal itself */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Add New Product"
      >
        {/* 4️⃣ put any form or content you want inside here */}
        <form className="space-y-4">
          <div>
            <label className="block mb-1">Product Name</label>
            <input type="text" className="w-full border p-2 rounded" placeholder="e.g., Cool T-Shirt" ref={productNameRef} onChange={(e)=>{productNameRef.current = e.target.value}}/>
          </div>
          <div>
            <label className="block mb-1">Price</label>
            <input type="text" className="w-full border p-2 rounded" placeholder="$0.00" ref={priceRef} onChange={(e)=>{priceRef.current = e.target.value}}/>
          </div>
          {/* button for product uploading in backend  */}
          <button
            type="button"
            className="w-full bg-blue-600 text-white py-2 rounded"
            onClick={productUpload}
          >
            Save Product
          </button>
        </form>
      </Modal>
    </div>
  )
}

export default AdminDashboard
