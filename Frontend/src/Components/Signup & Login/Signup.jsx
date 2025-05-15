import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios"
import Swal from "sweetalert2";



const SignupForm = () => {
   const navigate = useNavigate();
   const { register, handleSubmit, formState: { errors } } = useForm();
   const onSubmit = async(data)=>{
    console.log(data)
    try{
      // Check if user already exists
      const responseGet = await axios.get(`http://localhost:3000/auth`);
      console.log(responseGet.data)
      const user = responseGet.data.find(user => user.email === data.email);

      if (user) {
        Swal.fire({
          text: "User already exists please log in!",
        });
        navigate("/login");
        return;
      }
      // if doesn't then add user 
const respone = await axios.post("http://localhost:3000/auth",data)
    console.log(respone.data,"data submitted")
    Swal.fire({
        icon: 'success',
        title: 'Signup Successfully',
        text: 'Please enter your credentials again at login page! 💖',
      });
     navigate("/login");
    }catch(e){
console.log(e)
    }
    
   }
  
  return (
    <section className=" relative py-6">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
      <div className="">
        <h1 className='text-[32px] font-extrabold boldFont w-40'>SHOP.CO</h1>
        </div>
        <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
          
          <div className="p-6 space-y-2 md:space-y-2 sm:p-8">

          <Link to='/dashboard'>
            <button
                  type="submit"
                  className="cursor-pointer w-full text-white bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Continue as Guest
                </button>
          </Link>
              <h1 className="text-center">OR</h1>
            <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Create an account
            </h1>
            <form className="space-y-2 md:space-y-2" action="#" onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="Name" className="block mb-2 text-sm font-medium text-gray-900 ">
                  Your Name
                </label>
                <input
                  type="text"
                  name="Name"
                  id="Name"
                  className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 "
                  placeholder="Javeriya Saleem"
             
                     {...register("username", {
                      required: { value: true, message: "This field is required" },
                      minLength: { value: 3, message: "Min length is 3" },
                      maxLength: { value: 8, message: "Max length is 8" }
                    })}
                />
                {errors.username && <div className='text-red-700'>{errors.username.message}</div>}
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 "
                  placeholder="name@company.com"
                 
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
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 "
              
                  {...register("password", {
                        required: { value: true, message: "Password is required" },
                        minLength: { value: 8, message: "Password must be at least 8 characters" },
                        pattern: {
                          value: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/,
                          message: "Password must include 1 uppercase, 1 number, and 1 special character"
                        }
                      })}
                />
                {errors.password && <div className='text-red-700'>{errors.password.message}</div>}
              </div>

              <div className="flex items-start">


              </div>
              <button
                type="submit"
                className="cursor-pointer w-full text-white bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign Up!
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Already have an account? <Link to='/login' className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupForm;
