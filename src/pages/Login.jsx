import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

function Login() { 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); 
    console.log('Login attempt:', { email, password, rememberMe });
    console.log('Login button clicked! Navigating to /dashboard...');
    navigate('/dashboard'); 
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    console.log('Forgot password clicked!');
  };

  const handleGoogleSignIn = () => {
    console.log('Sign in with Google clicked!');
  };

  const handleAppleSignIn = () => {
    console.log('Sign in with Apple clicked!');
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log('Sign Up clicked!');
  };

  return (
    <div className="min-h-screen bg-stone-100 flex items-center justify-center p-4 font-sans">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        {/* Header Section */}
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Welcome back!</h1>
        <p className="text-gray-600 mb-8">
          Enter your Credentials to access your account
        </p>

        {/* Login Form */}
        <form onSubmit={handleLogin}>
          {/* Email Input */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-800 text-lg font-medium mb-2">
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-gray-800"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-6 relative">
            <label htmlFor="password" className="block text-gray-800 text-lg font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 text-gray-800"
              placeholder="Name" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <a
              href="#"
              className="absolute right-0 top-0 mt-2 mr-2 text-sm text-blue-600 hover:underline"
              onClick={handleForgotPassword}
            >
              forgot password
            </a>
          </div>


          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-amber-700 text-white font-bold py-3 rounded-lg shadow-md hover:bg-amber-800 transition-colors duration-300 mb-6"
          >
            Login
          </button>
        </form>

        {/* OR Separator */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="px-4 text-gray-600">Or</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        {/* Social Login Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          {/* Google Sign In */}
          <button
            className="flex-1 flex items-center justify-center bg-white border border-gray-300 py-3 px-4 rounded-lg shadow-sm hover:bg-gray-50 transition-colors duration-300 text-gray-700 font-medium"
            onClick={handleGoogleSignIn}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png"
              alt="Google logo"
              className="h-6 w-6 mr-3"
            />
            Sign in with Google
          </button>

          {/* Apple Sign In */}
          <button
            className="flex-1 flex items-center justify-center bg-white border border-gray-300 py-3 px-4 rounded-lg shadow-sm hover:bg-gray-50 transition-colors duration-300 text-gray-700 font-medium"
            onClick={handleAppleSignIn}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
              alt="Apple logo"
              className="h-6 w-6 mr-3"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/24x24/000000/FFFFFF?text=A"; }}
            />
            Sign in with Apple
          </button>
        </div>

        {/* Don't have an account? */}
        <p className="text-center text-gray-700">
          Don't have an account?{' '}
          <a
            href="#"
            className="text-blue-600 hover:underline font-semibold"
            onClick={handleSignUp}
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login; 