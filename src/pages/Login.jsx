import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from "../assets/logo.png"; 

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); 

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError(''); 

    console.log('Login attempt:', { email, password });

    let userRole = null;
    if (email === 'admin@example.com' && password === 'admin') {
      userRole = 'admin';
    } else if (email === 'user@example.com' && password === 'user') {
      userRole = 'user';
    } else {
      setError('Invalid email or password.');
      return;
    }

    localStorage.setItem('userRole', userRole);
    localStorage.setItem('userLoggedIn', 'true'); 

    if (userRole === 'admin') {
      console.log('Login successful! Navigating to /admin/dashboard...');
      navigate('/dashboard');
    } else if (userRole === 'user') {
      console.log('Login successful! Navigating to /user/dashboard...');
      navigate('/user-dashboard');
    } else {
      console.log('Login successful! Navigating to / (default)...');
      navigate('/');
    }
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
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-100 flex items-center justify-center p-4 font-judson">
      <style>
        {`
        @import url('https://fonts.googleapis.com/css2?family=Judson:wght@400;700&display=swap');
        .font-judson { font-family: 'Judson', serif; }
        `}
      </style>

      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        {/* Logo Section */}
        <div className="flex justify-center mb-6">
            <img src={Logo} alt="Company Logo" className="h-20 w-auto" 
                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/80x80/DEA05B/FFFFFF?text=LOGO"; }} 
            />
        </div>

        {/* Header Section */}
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Welcome back!</h1>

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
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#DEA05B] text-gray-800"
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
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#DEA05B] text-gray-800"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <a href="#" className="absolute right-0 top-0 mt-2 mr-2 text-sm text-[#DEA05B] hover:underline" onClick={handleForgotPassword}>
              forgot password
            </a>
          </div>

          {/* Error Message */}
          {error && (
            <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
          )}

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-[#DEA05B] text-white font-bold py-3 rounded-lg shadow-md hover:bg-amber-600 transition-colors duration-300 mb-6">
            Login
          </button>
        </form>

        <div className="flex items-center my-6">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="px-4 text-gray-600">Or</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        {/* Social Login Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          {/* Google Sign In */}
          <button className="flex-1 flex items-center justify-center bg-white border border-gray-300 py-3 px-4 rounded-lg shadow-sm hover:bg-gray-50 transition-colors duration-300 text-gray-700 font-medium"
            onClick={handleGoogleSignIn} >
            <img src="https://www.google.com/favicon.ico" alt="Google logo" className="h-5 w-5 mr-3" />
            Sign in with Google
          </button>

          {/* Apple Sign In */}
          <button className="flex-1 flex items-center justify-center bg-white border border-gray-300 py-3 px-4 rounded-lg shadow-sm hover:bg-gray-50 transition-colors duration-300 text-gray-700 font-medium"
            onClick={handleAppleSignIn} >
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple logo" className="h-5 w-5 mr-3" 
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/20x20/000000/FFFFFF?text=A"; }} />
            Sign in with Apple
          </button>
        </div>

        {/* Don't have an account? */}
        <p className="text-center text-gray-700">
          Don't have an account?{' '}
          <a href="#" className="text-[#DEA05B] hover:underline font-semibold" onClick={handleSignUp}>
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;