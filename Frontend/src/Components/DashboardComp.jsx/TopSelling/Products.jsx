// Component for Product in list of products
import { useNavigate } from "react-router";
import Swal from 'sweetalert2';


const Products = (props) => {
  const navigate = useNavigate();
    
  return (
    <div className='flex flex-col gap-3 mb-10 w-70'>
      <figure className='overflow-hidden rounded-2xl'><img src={props.img} alt="img of a shirt" className='w-70 object-contain p-4 transition duration-300 ease-in-out hover:scale-[1.04] rounded-2xl' /></figure>
      <div className='flex flex-col gap-2 text-center'>
        
        <h3 className='font-bold ' >{props.name}</h3>
        <h3 className="">{props.price}</h3>
        <div><button className='cursor-pointer border py-2 px-4 rounded-full bg-black text-white hover:scale-[1.07] transition duration-300 ease-in-out' onClick={props.functionForCart}>Add to Cart</button> <button className='cursor-pointer border py-2 px-4 rounded-full hover:scale-[1.07] transition duration-300 ease-in-out' onClick={props.onClick}>View Item</button>
        </div>
      </div>
    </div>
  )
}

export default Products
