import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div>
        <img
          className="absolute"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/d8a0fd20-b34b-405e-860f-53499c2517b7/US-en-20240108-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <form className="absolute p-12 bg-black  w-3/12 h- my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-85">
        <h1 className="font-bold text-3xl py-3">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-600"
        />
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Enter Your Name"
            className="p-4 my-4 w-full bg-gray-600"
          />
        )}
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-600"
        />
        {!isSignInForm && (
          <input
            type="text"
            placeholder="PhoneNumber"
            className="p-4 my-4 w-full bg-gray-600"
          />
        )}{" "}
        <button type="submit" className="p-4 my-6 bg-red-600 w-full">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up"
            : "Already Have an Account? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
