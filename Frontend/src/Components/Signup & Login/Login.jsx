import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from 'sweetalert2';
import { useState } from "react";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
     const navigate = useNavigate();
     const onSubmit = async (data) => {
    try {
      // Check if user already exists
      const responseGet = await axios.get(`https://backend-of-shopco-git-master-javeriya-saleem.vercel.app/auth`);
      const user = responseGet.data.find(user => user.email === data.email);
      const checkEmail = responseGet.data.find(checkEmail => checkEmail.email === data.email || checkEmail.password ==data.password);
      if (!user) {
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: "User not found please create an account",
        });
        navigate("/signup");
      } 
         else {
          // Both email and password are correct
                 Swal.fire({
                   icon: 'success',
                   title: 'Login Successfully',
                 });
          localStorage.setItem("token", user.token);
          // console.log(user.token);
          
          navigate("/");
        }}


      // }  
     catch (e) {
      if (e.response && e.response.status === 400) {
        alert(e.response.data.message);
        navigate("/login");
      } else {
        console.log(e);
        Swal.fire({
          icon: 'error',
          title: 'Error!',
          text: "Something Went Wrong Please Try Again",
        });
      }
    }
  };
  return (
    <section className=" relative py-6">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
      <div className="">
        <h1 className='text-[32px] font-extrabold boldFont w-40'>SHOP.CO</h1>
        </div>
        <div className="w-full rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-2 md:space-y-2 sm:p-8">
            <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
              Welcome Back!
            </h1>
            <form className="space-y-2 md:space-y-2" action="#" onSubmit={handleSubmit(onSubmit)}>
           
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
                    })}
                />
                 {errors.email && <div className='text-red-700'>{errors.email.message}</div>}
              </div>
              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">
                  Password
                </label>
                <div className="flex justify-between border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 w-full p-2.5 dark:border-gray-600 ">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="text-gray-900 text-sm focus:ring-0 focus:outline-0 block w-full "
                     {...register("password", {
                          required: { value: true, message: "Password is required" },
                        })}
                  />
                                    <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="transform text-gray-600"
                  >
                    {showPassword ? "🙈" : "👁️"}
                  </button>
                </div>
                {errors.password && <div className='text-red-700'>{errors.password.message}</div>}
              </div>
              <div className="flex items-start">


              </div>
              <button
                type="submit"
                className="w-full text-white bg-black hover:bg-black focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Login
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don't have an account? <a onClick={()=>navigate('/signup')} className="hover:font-semibold text-primary-600 hover:underline hover:text-black hover:cursor-pointer">Signup here!</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
