import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import plantsImage from "../images/plants.png";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const SignIn = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSignIn = (event) => {
    event.preventDefault();
    navigate("/");
  };

  const handleForgotPassword = () => {
    navigate("/reset-password");
  };

  const handleSignUp = () => {
    navigate("/sign-up");
  };

  return (
    <div className="min-h-screen flex">
      <div className="flex-1 bg-customBlue4 flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-5xl font-bold text-customBlue2">AirSeat</h1>
          <p className="text-2xl text-customBlue2 mt-4">
            Your Traveling Partner
          </p>
        </div>
        <div className="absolute bottom-0 mb-20">
          <img src={plantsImage} alt="Decoration" />
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center items-center">
        <div className="w-full max-w-md px-8">
          <h2 className="text-2xl font-bold mb-4">Sign In</h2>
          <form onSubmit={handleSignIn}>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold">
                Email or Phone
              </label>
              <input
                type="email"
                placeholder="Email/Phone"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-customBlue2"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold">Password</label>
              <div className="relative">
                <input
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Password"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-customBlue2"
                />
                <div
                  className="absolute inset-y-0 right-0 pr-3 mt-1 flex items-center cursor-pointer text-gray-500"
                  onClick={togglePasswordVisibility}
                  style={{ top: "50%", transform: "translateY(-50%)" }}
                >
                  {passwordVisible ? (
                    <AiFillEyeInvisible size={24} />
                  ) : (
                    <AiFillEye size={24} />
                  )}
                </div>
              </div>
              <span
                className="text-sm text-customBlue2 hover:text-customBlue1 font-bold float-right mb-10 mt-3 cursor-pointer"
                onClick={handleForgotPassword}
              >
                Forgot Password?
              </span>
            </div>
            <button
              type="submit"
              className="w-full bg-customBlue2 text-white py-2 rounded-md flex items-center justify-center hover:bg-customBlue1"
            >
              Sign In
            </button>
          </form>
          <p className="mt-4 text-center">
            Don't have an account?{" "}
            <span
              className="text-customBlue2 hover:text-customBlue1 ml-2 font-bold cursor-pointer"
              onClick={handleSignUp}
            >
              Sign Up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
