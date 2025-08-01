// Component for Product in list of products
import { useNavigate } from "react-router";
import Swal from 'sweetalert2';


const Products = (props) => {
  const navigate = useNavigate();
    
  return (
    <div className='flex flex-col justify-center items-center gap-3 mb-10 w-70 rounded-2xl mx-auto'>
      <figure className='overflow-hidden h-[270px] w-[300px]'><img src={props.img} alt="img of a shirt" className='transition duration-300 ease-in-out hover:scale-[1.04] rounded-4xl h-full w-full' /></figure>
      <div className='flex flex-col gap-2 text-center '>
        
        <h3 className='font-bold text-[14px] sm:text-[16px]'>{props.name}</h3>
        <h3 className=" text-[14px] sm:text-[16px]">{props.price}</h3>
        <div><button className='cursor-pointer border py-2 px-4 rounded-full bg-black text-white hover:scale-[1.07] transition duration-300 ease-in-out text-[12px] sm:text-[14px] md:text-[16px]' onClick={props.functionForCart}>Add to Cart</button> <button className='cursor-pointer border py-2 px-4 rounded-full hover:scale-[1.07] transition duration-300 ease-in-out text-[12px] sm:text-[14px] md:text-[16px]' onClick={props.onClick}>View Item</button>
        </div>
      </div>
    </div>
  )
}

export default Products
