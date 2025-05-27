import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const navigate = useNavigate();

  const handleInput = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    if ("email" === name) {
      setEmail(value);
    }
    if ("password" === name) {
      setPassword(value);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    let getDetails = JSON.parse(localStorage.getItem("user")) || [];

    const userFound = getDetails.find(
      (curUser) => curUser.email === email && curUser.password === password
    );

    if (userFound) {
      localStorage.setItem("authToken", "dummyToken");
    
      setIsSuccess(true);
      setMessage("Logged in successfully! Redirecting...");
    
      setTimeout(() => {
        navigate('/dashboard');
      }, 2000);
    } else {
      setIsSuccess(false);
      setMessage("Invalid Email or password");
    }
    
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black px-4 py-8">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-6xl gap-10">

        {/* Left: Simple Light Login Card */}
        <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-xl w-full max-w-md">
          <p className={`mb-4 font-semibold ${isSuccess ? "text-green-600" : "text-red-600"}`}>{message}</p>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <p className="text-3xl font-bold text-center text-gray-800">Login</p>
            </div>
            <div className="space-y-5">

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  required
                  type="email"
                  id="email"
                  name="email"
                  onChange={handleInput}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <input
                  required
                  type="password"
                  id="password"
                  name="password"
                  onChange={handleInput}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
              </div>

              {/* Signup Link */}
              <p className="text-sm text-gray-600 text-center">
                Don't have an account?{' '}
                <Link to="/" className="text-gray-900 font-semibold hover:underline">
                  Create one
                </Link>
              </p>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full bg-gray-800 hover:bg-gray-700 text-white py-3 rounded-md font-semibold transition duration-300 shadow-md"
              >
                Login
              </button>
            </div>
          </form>
        </div>

        {/* Right: Welcome Text */}
        <div className="text-center md:text-left w-full md:w-1/2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mb-4">
            Welcome Back
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-lg mx-auto md:mx-0">
            Dive back into your journey. Let’s continue building something amazing together.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
