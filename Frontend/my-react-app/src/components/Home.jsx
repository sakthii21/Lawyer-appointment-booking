// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import bg from '../assets/bg.jpg';
import { BriefcaseIcon, UsersIcon, HomeIcon } from '@heroicons/react/24/outline';


const Home = () => {
    return (
        <div>
            <header className="flex items-center justify-between bg-gray-800 p-4 text-white">
    <div className="flex items-center">
        <h1 className='font-bold text-3xl'> LAWFIRM</h1>
      <img className="w-25 h-20 mr-4" src={logo} alt="logo" />
</div>
                <div className="flex items-center space-x-6">
                    <Link to="/about" className="text-2xl font-bold hover:text-gray-300 transition-colors duration-300">About</Link>
                    {/* <Link to="/findlawyer" className="text-2xl font-bold hover:text-gray-300 transition-colors duration-300">Find a Lawyer</Link> */}
                    <Link to="/login" className="text-2xl font-bold  hover:text-gray-300 transition-colors duration-300"><button className='bg-red-500 px-2 py-1 rounded-lg'>LogIn</button></Link>
                </div>
               
            </header>

            <div className="relative">
                <img src={bg} alt="Background" className="w-full h-[50vh] object-cover opacity-70" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 bg-gradient-to-b from-gray-800 to-transparent">
  <h1 className="text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
    Welcome to Our Law Firm
  </h1>
  <h2 className="text-4xl text-green-300 font-semibold mb-4 drop-shadow-lg">
    Find Your Legal Ally.
  </h2>
  <p className="text-lg text-green-200 max-w-xl mx-4 drop-shadow-lg">
    Connect with experienced lawyers and book your appointment in just a few clicks.
  </p>
</div>

</div>





  <div className="flex flex-col gap-8 items-center justify-center bg-gray-50 py-12 px-6 rounded-lg shadow-lg">
    <div className="text-5xl font-bold text-red-600 mb-6 border-b-4 border-red-600 pb-4">
      Legal Services
    </div>
    <div className="border border-gray-300 rounded-lg p-4 w-full max-w-md text-center flex items-center gap-4">
      <BriefcaseIcon className="h-8 w-8 text-gray-600" />
      <h1 className="text-4xl font-semibold text-gray-800 mb-4">
        Criminal Lawyer
      </h1>
    </div>
    <div className="border border-gray-300 rounded-lg p-4 w-full max-w-md text-center flex items-center gap-4">
      <UsersIcon className="h-8 w-8 text-gray-600" />
      <h1 className="text-4xl font-semibold text-gray-800 mb-4">
        Family Lawyer
      </h1>
    </div>
    <div className="border border-gray-300 rounded-lg p-4 w-full max-w-md text-center flex items-center gap-4">
      <HomeIcon className="h-8 w-8 text-gray-600" />
      <h1 className="text-4xl font-semibold text-gray-800 mb-4">
        Property Lawyer
      </h1>
    </div>
  </div>




            

            <div className="relative z-10 p-8">
               
            </div>
        </div>
    );
}

export default Home;
