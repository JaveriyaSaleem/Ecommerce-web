import React from 'react'
import Navbar from '../DashboardComp.jsx/Header/Navbar'
import image1 from '../../assets/Images/1st image of top sellin.png'

const Product = () => {
  return (
    <main className='px-2'>
      <Navbar/>
<div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-8">
      {/* Image Section */}
      <div className="flex justify-center items-center">
        <img 
          src={image1} 
          alt="Product" 
          className="w-96 h-96 object-contain p-4 bg-gray-50" 
        />
      </div>

      {/* Details Section */}
      <div>
        <h1 className="text-3xl font-bold mb-2">Happy Jolly Tote Bag Black</h1>
        <p className="text-xl font-semibold text-gray-700 mb-4">$40</p>

<div className="mb-4">
  <label className="text-sm font-medium text-gray-600 block mb-1">Size</label>
  <select 
    className="border rounded px-4 py-2 w-40 focus:outline-none focus:ring-2 focus:ring-black"
  >
    <option value="small">Small</option>
    <option value="medium">Medium</option>
    <option value="large">Large</option>
  </select>
</div>

        <button className="bg-black text-white hover:bg-white border border-black hover:text-black px-6 py-2 rounded mb-6 transition">
          Add to Bag
        </button>

        <p className="text-gray-700 mb-4">Happy Jolly tote bag in black with print on front.</p>

        <h2 className="font-semibold text-lg mb-2">Highlights</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>100% cotton canvas</li>
          <li>Large main compartment</li>
          <li>Printed graphics / 2 carrying straps</li>
          <li>Made in Korea</li>
        </ul>
      </div>
    </div>
    </main>
  )
}

export default Product
