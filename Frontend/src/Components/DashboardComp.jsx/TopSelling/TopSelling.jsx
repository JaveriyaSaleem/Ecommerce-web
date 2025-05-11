import React from 'react'
import Products from './Products'
import shirt1 from '../../../assets/Images/1st image of top sellin.png'
import shirt2 from '../../../assets/Images/2nd image of top selling.png'
import shirt3 from '../../../assets/Images/3rd image of top selling.png'
import shirt4 from '../../../assets/Images/4th image of top selling.png'
import { Link } from 'react-router'

const TopSelling = () => {
  return (
    <div className='py-10'>
      <h1 className='text-[35px] font-black boldFont text-center'>TOP SELLING</h1>

      <div className='flex items-center justify-between pt-2 pb-10'>
        <Products img={shirt1} name={'Vertical Striped Shirt'} price={"$212"}/>
        <Products img={shirt2} name={'Courage Graphic T-Shirt'} price={"$145"}/>
        <Products img={shirt3} name={'Loose Fit Bermuda Shorts'} price={"$80"}/>
        <Products img={shirt4} name={'Faded Skinny Jeans'} price={"$210"}/>
      </div>
      <div className='flex justify-center'>
        <Link className='cursor-pointer border py-2 px-10 rounded-full' to='/shopAll' >View All </Link>
      </div>
    </div>
  )
}

export default TopSelling
