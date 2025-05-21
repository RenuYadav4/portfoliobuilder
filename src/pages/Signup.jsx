import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const userDetail = {
    name: '',
    email: '',
    password: '',
  }
  const [data, setData] = useState(userDetail);

const navigate = useNavigate();

  const handleInput = (e) => {
    // console.log(e.target.name);   kis field me input kr rahe ho
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();    //not refresh

    if (data.name == "" || data.email == "" || data.password == "") {
      alert("Please Enter Detail!")
    } else {
      // get data from localStorage
      // Logic is below : if there is now user exist in the storage it must return an empty array.
      // store the data inside array.
      const getData = JSON.parse(localStorage.getItem("user") || "[]");  //"user" is the item key we want to get
      let arr = [];
      arr = [...getData];
      arr.push(data);

      // set or store data into localstorage
      localStorage.setItem("user", JSON.stringify(arr));
      alert("Signed up successfully !!");
      navigate("/login");
    }

  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black px-4 py-8">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-6xl gap-10">

        {/* Left: Signup Form */}
        <div className="bg-gray-900 border border-gray-700 p-8 sm:p-10 rounded-3xl shadow-2xl w-full max-w-md">
          <form onSubmit={handleSubmit}>
            <div className="mb-8">
              <p className="text-3xl sm:text-4xl font-bold text-center text-white">Sign Up</p>
            </div>
            <div className="space-y-6">

              {/* Name */}
              <div className="relative">
                <input
                  required
                  type="text"
                  id="name"
                  name="name"
                  placeholder=" "
                  onChange={handleInput}
                  className="peer w-full px-4 pt-5 pb-2 border-b-2 border-gray-600 text-white placeholder-transparent focus:outline-none focus:border-gray-300 bg-transparent"
                />
                <label
                  htmlFor="name"
                  className="absolute left-4 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-gray-300"
                >
                  Enter your name
                </label>
              </div>

              {/* Email */}
              <div className="relative">
                <input
                  required
                  type="email"
                  id="email"
                  name="email"
                  placeholder=" "
                  onChange={handleInput}
                  className="peer w-full px-4 pt-5 pb-2 border-b-2 border-gray-600 text-white placeholder-transparent focus:outline-none focus:border-gray-300 bg-transparent"
                />
                <label
                  htmlFor="email"
                  className="absolute left-4 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-gray-300"
                >
                  Enter your email
                </label>
              </div>

              {/* Password */}
              <div className="relative">
                <input
                  required
                  type="password"
                  id="password"
                  name="password"
                  placeholder=" "
                  onChange={handleInput}
                  className="peer w-full px-4 pt-5 pb-2 border-b-2 border-gray-600 text-white placeholder-transparent focus:outline-none focus:border-gray-300 bg-transparent"
                />
                <label
                  htmlFor="password"
                  className="absolute left-4 top-2 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-gray-300"
                >
                  Enter your password
                </label>
              </div>

              {/* Login Link */}
              <p className="text-sm text-gray-400 text-center">
                Already have an account?{' '}
                <Link to={'/login'} className="text-gray-200 font-semibold hover:underline">
                  Login
                </Link>
              </p>

              {/* Submit Button */}
              <button
                className="w-full bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-full font-semibold tracking-wide transition duration-300 shadow-md"
              >
                SignUp
              </button>
            </div>
          </form>
        </div>

        {/* Right: Heading and Slogan */}
        <div className="text-center md:text-left w-full md:w-1/2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mb-4">
            Welcome to Your Journey
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-lg mx-auto md:mx-0">
            Unlock your potential with a vibrant community. Create, explore, and shine with your new digital identity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
