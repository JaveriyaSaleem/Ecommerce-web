import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const CheckoutComp = () => {
   const navigate = useNavigate();
   const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async(data)=>{
    console.log(data)
    try{
      // 1. Fetch users
      const responseUser = await axios.get('http://localhost:3000/auth');
      const saveUser = responseUser.data;

      // 2. Find current user by token
      const findingUser = saveUser.find(
        (user) => user.token === localStorage.getItem('token')
      );
      console.log("userFound Comp Page", findingUser);
const respone = await axios.post("http://localhost:3000/order",{...data,emailRegistered:findingUser.email,totalPrice: localStorage.getItem("totalPrice"),userId:localStorage.getItem("token"), products:JSON.parse(localStorage.getItem("products"))})
    console.log(respone.data,"data submitted")
    Swal.fire({
        icon: 'success',
        title: 'Thanks for the Shopping',
        text: 'Your order has been placed!💖',
      }).then(()=>{
        navigate("/");
      });
const userId = localStorage.getItem("token")
      const Deleting = await axios.delete(`http://localhost:3000/cart/${userId}`)
      console.log(Deleting.data,"deleted")
    localStorage.removeItem("products")
    localStorage.removeItem("totalPrice")
    // localStorage.removeItem("token")
    localStorage.removeItem("productId")
    //  navigate("/dashboard");
    }catch(e){
console.log(e)
    }
    
   }
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-20">
      <div className="w-full mx-2 sm:max-w-lg bg-white shadow-lg rounded-2xl p-6 space-y-6">
        <h2 className="text-2xl font-semibold text-center">Checkout</h2>
        <form  className="space-y-4" action="#" onSubmit={handleSubmit(onSubmit)}>

          <input
            type="text"
            placeholder="Full Name"
            className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
             {...register("userName", {
                      required: { value: true, message: "This field is required" },
                      minLength: { value: 3, message: "Min length is 3" },
                    })}
                    
          />
          {errors.userName && <div className='text-red-700'>{errors.userName.message}</div>}
          
                    <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            {...register("email", {
                      required: { value: true, message: "This field is required" },
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid email address"
                      },
                      minLength: { value: 5, message: "Min length is 5" },
                      maxLength: { value: 50, message: "Max length is 50" }
                    })}
                    
          />
                          {errors.email && <div className='text-red-700'>{errors.email.message}</div>}
          <input
            type="text"
            placeholder="Shipping Address"
            className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
            {...register("address", {
                      required: { value: true, message: "This field is required" }
                    })}
          />
                          {errors.address && <div className='text-red-700'>{errors.address.message}</div>}

          <select className="w-full border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400" 
          {...register("paymentMethod", {
    required: { value: true, message: "Please select a payment method" }
  })}>
            <option value=""> Choose Payment Method</option>
            <option value="Cash on Delivery">Cash on Delivery</option>
            {/* <option>Credit/Debit Card</option>
            <option>PayPal</option> */}
  
          </select>
                    {errors.paymentMethod && <div className='text-red-700'>{errors.paymentMethod.message}</div>}

        <div className="flex justify-between items-center pt-4 border-t">
          <p className="text-lg font-medium">Total:</p>
          <p className="text-lg font-semibold text-blue-600">${localStorage.getItem("totalPrice")}</p>
        </div>

        <button type="submit" className="w-full bg-black hover:scale-105  text-white font-medium py-3 rounded-xl transition hover:cursor-pointer">
          Place Order 💖
        </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutComp;
