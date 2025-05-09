import React from 'react'
import HeroImg from '../../assets/Images/HeroImg.png'

const Hero = () => {
  return (
    <main className='-mx-10 px-10 bg-[#f0f0f0] flex flex-col-reverse md:grid md:grid-cols-2 items-center justify-center  text-center md:text-left gap-5 py-10'>
    <div className='flex flex-col gap-2 '>
      
      <h1 className='text-[44px] font-black boldFont md:w-5/6'>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
      <p className='md:w-4/5 pb-6'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
      <div className=''>
        <button className='hover:cursor-pointer px-10 py-3 bg-black text-white rounded-full text-[14px]'>Shop Now </button>
        </div>
        <div className='flex justify-between'>
            <div>
                <h1 className='text-[40px] font-bold'>200+</h1>
                <p>International Brands</p>
            </div>
            <div>
                <h1 className='text-[40px] font-bold'>2,000+</h1>
                <p>High-Quality Products</p>
            </div>
            <div>
                <h1 className='text-[40px] font-bold'>30,000+</h1>
                <p>Happy Customers</p>
            </div>
        </div>
    </div>
    <div className='flex justify-center md:justify-end '>
<img src={HeroImg} alt="Guy" className='w-[400px] md:w-[600px]'/>
    </div>
    </main>
  )
}

export default Hero