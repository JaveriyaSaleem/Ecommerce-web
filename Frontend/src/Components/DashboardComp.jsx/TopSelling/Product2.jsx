// Component for Product in list of products
import { useNavigate } from "react-router";
import Swal from 'sweetalert2';


const Product2 = (props) => {
  const navigate = useNavigate();
    
  return (
    <div className='flex flex-col items-center gap-3 mb-10 rounded-2xl w-full max-w-[270px] mx-auto'>
      <figure className='overflow-hidden w-full aspect-[3/4] sm:h-auto sm:w-full rounded-4xl'><img src={props.img} alt="img of a shirt" className='transition duration-300 ease-in-out hover:scale-[1.04] rounded-4xl h-full w-full object-contain' /></figure>
      <div className='flex flex-col gap-2 text-center '>
        
        <div className="h-[50px]">
          <h3 className='font-bold text-[10px] sm:text-[16px]'>{props.name}</h3>
          <h3 className=" text-[12px] sm:text-[16px]">{props.price}</h3>
        </div>
        <div><button className='cursor-pointer border py-1 px-1 sm:py-2 sm:px-4 rounded-full bg-black text-white hover:scale-[1.07] transition duration-300 ease-in-out text-[8px] sm:text-[14px] md:text-[16px]' onClick={props.functionForCart}>Add to Cart</button> <button className='cursor-pointer border py-1 px-1 sm:py-2 sm:px-4 rounded-full hover:scale-[1.07] transition duration-300 ease-in-out text-[8px] sm:text-[14px] md:text-[16px]' onClick={props.onClick}>View Item</button>
        </div>
      </div>
    </div>
  )
}

export default Product2
