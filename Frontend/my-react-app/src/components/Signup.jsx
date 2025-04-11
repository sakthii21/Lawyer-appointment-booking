import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import img from "../assets/img.jpg";
import { Link } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: ''
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email) errors.email = 'Email is required';
    if (!formData.password) errors.password = 'Password is required';
    if (!formData.role) errors.role = 'Role is required';
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const endpoint = formData.role === "client"? '/user/register': '/lawyer/registerlawyer'
        const res = await axios.post(`http://localhost:3000${endpoint}`, formData);
        console.log("signup=>", res);
        toast.success('Signup successful!');
        navigate('/login'); // Redirect to login page after successful signup
      } catch (error) {
        console.error('Error:', error);
        toast.error(error.response?.data?.message || 'Signup failed');
      }
    }
  };

  return (
    <section id="signup" className="relative h-screen flex items-center">
     
      <div className="absolute inset-0 w-full h-full">
        <img src={img} alt="Background" className="w-full h-full object-cover opacity-70" />
      </div>

      
      <div className="absolute inset-0 bg-black opacity-10"></div>

      
      <div className="relative z-10 w-1/2 h-full flex items-center justify-center m-60 pl-12">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-4xl text-red-500 font-bold text-gray-800 mb-8 text-center">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your name"
              />
              {errors.name && <p className="text-red-500 text-xs italic">{errors.name}</p>}
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your email"
              />
              {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your password"
              />
              {errors.password && <p className="text-red-500 text-xs italic">{errors.password}</p>}
            </div>
            <div className="mb-6">
              <label htmlFor="role" className="block text-gray-700 text-sm font-medium mb-2">Role</label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select role</option>
                <option value="client">Client</option>
                <option value="lawyer">Lawyer</option>
              </select>
              {errors.role && <p className="text-red-500 text-xs italic">{errors.role}</p>}
            </div>
            <button type="submit" className="bg-red-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">Sign Up</button>
          </form>
          <h1 className='mt-5 text-center'>
            Already have an account?{' '}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Signup;
