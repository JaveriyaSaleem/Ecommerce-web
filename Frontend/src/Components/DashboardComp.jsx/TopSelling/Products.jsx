import { useNavigate } from "react-router";
import Swal from 'sweetalert2';


const Products = (props) => {
  const navigate = useNavigate();
    const CartFunction = () => {
    if (!localStorage.getItem("token")) {
      Swal.fire({
          text: "Please Login to Add the Product in the Cart",
        });
      navigate("/login")}
      else{
        console.log("Product added to cart");
      }

    }
  return (
    <div className='flex flex-col gap-3 mb-10'>
      <figure className='overflow-hidden'><img src={props.img} alt="img of a shirt" className='transition duration-300 ease-in-out hover:scale-[1.04] rounded-2xl' /></figure>
      <div className=' text-center flex flex-col gap-2'>
        
        <h3 className='font-bold' >{props.name}</h3>
        <h3>{props.price}</h3>
        <div><button className='cursor-pointer border py-2 px-4 rounded-full bg-black text-white hover:scale-[1.07] transition duration-300 ease-in-out' onClick={CartFunction}>Add to Cart</button> <button className='cursor-pointer border py-2 px-4 rounded-full hover:scale-[1.07] transition duration-300 ease-in-out' onClick={props.onClick}>View Item</button>
        </div>
      </div>
    </div>
  )
}

export default Products
