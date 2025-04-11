import React, { useState } from 'react';
import axios from "axios";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import loginbg from "../assets/loginbg.jpg";
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("client"); 
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const payload = { email, password, role };
  
    try {
      const url = role === 'client'
        ? 'http://localhost:3000/user/login'
        : 'http://localhost:3000/lawyer/loginlawyer';
  
      console.log('Sending request to:', url);
      console.log('Payload:', payload);
      
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
  
      const data = await res.json(); 
      console.log("login=>", data);
  
      if (res.ok) {
       
        localStorage.setItem('token', data.token);
        localStorage.setItem('role', role);
  
        if (role === 'client') {
          navigate('/clientdash');
        } else if (role === 'lawyer') {
          navigate('/lawyerdash');
        }
      } else {
       // const errorData = await res.json();
        throw new Error(errorData.message || 'Login failed');
      }
    } catch (error) {
      console.error("Error:", error); 
      toast.error(error.message || 'Login failed');
    }
  };

  return (
    <section id="login" className="relative h-screen flex items-center justify-center">
      {/* Background Image */}
      <img src={loginbg} alt="Background" className="absolute inset-0 w-full h-full object-cover opacity-70 -z-10" />
      <div className="absolute inset-0 bg-black opacity-20 -z-10"></div>

      <div className="relative z-10 w-full max-w-lg mx-auto px-6 py-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold text-red-500 text-gray-800 mb-8 text-center">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">Email</label>
            <input type="email" value={email} onChange={handleEmailChange} id="email" className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your email" />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2">Password</label>
            <input type="password" value={password} onChange={handlePasswordChange} id="password" className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your password" />
          </div>
          <div className="mb-6">
            <label htmlFor="role" className="block text-gray-700 text-sm font-medium mb-2">Role</label>
            <select id="role" value={role} onChange={handleRoleChange} className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="client">client</option>
              <option value="lawyer">lawyer</option>
            </select>
          </div>
          <button type="submit"  className="bg-red-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-400 transition duration-300">Login</button>
          <h1 className='mt-5'>
            <span>don't</span> have an account?{' '}
            <Link to="/signup" className="text-blue-500 hover:underline">
              Sign Up
            </Link>
          </h1>
        </form>
      </div>
    </section>
  );
};

export default Login;
