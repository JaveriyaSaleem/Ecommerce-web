import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ModalForm = () => {
  const [user, setUser] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const toggleModal = () => setIsOpen(!isOpen);

  const closeModal = () => setIsOpen(false);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3000/auth");
      const data = response.data;
      const gettingUser = data.find((user) => {
        if (user.token === localStorage.getItem("token")) return user;
      });
      console.log("userFoundModal", gettingUser);
      setUser(gettingUser);
    };
    fetchData();
    console.log(user);
  }, []);

  const onSubmit = async (data) => {
    const response = await axios.put(
      `http://localhost:3000/auth/${user._id}`,
      data
    );
    console.log("user", user);
    console.log("response", response.data);
    console.log(data);
    closeModal()
          toast.success("Account Details Updated!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
       setTimeout(() => {
    window.location.reload();
  }, 1000);

  };


  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
      {/* Modal Toggle Button */}
      <button onClick={toggleModal} type="button">
        <FaEdit className="text-[15px] hover:transform hover:-translate-y-0.5 transition" />
      </button>

      {/* Main Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-center items-center backdrop-blur-[2px] ">
          <div className="relative p-4 w-full max-w-md max-h-full">
            {/* Modal content */}
            <div className="relative  rounded-lg shadow-sm bg-black">
              {/* Modal header */}
              <div className="flex items-center justify-between p-4 md:p-5 border-b border-gray-200 dark:border-gray-600 rounded-t">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Edit Profile
                </h3>
                <button
                  onClick={closeModal}
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg
                    className="w-3 h-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7L1 13"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>

              {/* Modal body */}
              <div className="p-4 md:p-5">
                <form
                  className="space-y-4"
                  action="#"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div>
                    <label
                      htmlFor="username"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="username"
                      placeholder="name@company.com"
                      defaultValue={user?.username}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      {...register("username", {
                        minLength: { value: 3, message: "Min length is 3" },
                        maxLength: { value: 8, message: "Max length is 8" },
                      })}
                    />
                    {errors.username && (
                      <div className="text-red-700">
                        {errors.username.message}
                      </div>
                    )}
                  </div>
                  {/* <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="name@company.com"
                      defaultValue={user?.email}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      {...register("email", {
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Enter a valid email address",
                        },
                        minLength: { value: 5, message: "Min length is 5" },
                        maxLength: { value: 50, message: "Max length is 50" },
                      })}
                    />
                    {errors.email && (
                      <div className="text-red-700">{errors.email.message}</div>
                    )}
                  </div> */}
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      New Password
                    </label>
                    <div className="flex justify-between bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        placeholder="••••••••"
                        defaultValue={user?.Password}
                        {...register("password", {
                          minLength: {
                            value: 8,
                            message: "Password must be at least 8 characters",
                          },
                          pattern: {
                            value: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/,
                            message:
                              "Password must include 1 uppercase, 1 number, and 1 special character",
                          },
                        })}
                        className=""
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="transform text-gray-600"
                      >
                        {showPassword ? "🙈" : "👁️"}
                      </button>
                    </div>

                    {errors.password && (
                      <div className="text-red-700">
                        {errors.password.message}
                      </div>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full text-black bg-white hover:bg-[#f0f0ef] focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm  py-2.5 text-center "
                  >
                    DONE
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalForm;
