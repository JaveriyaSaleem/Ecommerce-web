import React from 'react'
import { useRef,useState } from 'react'
import Modal from '../Modal'  // make sure this path is correct
import axios from "axios"
import ImageInput from './ImageInput'
import { useContext } from 'react';
import { ImageContext } from './ImageContext';

const AddProduct = () => {
    const { imageUrl } = useContext(ImageContext);
    console.log("Selected image url is:", imageUrl);
    let productNameRef = useRef()
      let priceRef = useRef()
       const [isModalOpen, setIsModalOpen] = useState(false)
       const productUpload=async()=>{
        console.log("heheh")
        console.log(productNameRef.current,priceRef.current)
            if(productNameRef.current && priceRef.current){
        try{
        
            const userData = {productName:productNameRef.current ,Price:priceRef.current,Image:imageUrl}
            const response = await axios.post("http://localhost:3000/products",userData)
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
    <div>
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
            <input type="number" className="w-full border p-2 rounded text-white" placeholder="$0.00" ref={priceRef} onChange={(e)=>{priceRef.current = e.target.value}}/>
          </div>
          <div><ImageInput/></div>
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

export default AddProduct
