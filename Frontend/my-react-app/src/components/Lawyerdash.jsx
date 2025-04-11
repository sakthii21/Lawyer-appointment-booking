import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/imagess.jpg'; 

const Lawyerdash = () => {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center">
    
      <img 
        src={backgroundImage} 
        alt="Background" 
        className="absolute inset-0 h-full w-full object-cover"
      />
      
      
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
     
      <div className="relative z-10 p-10 bg-white bg-opacity-90 rounded-2xl shadow-2xl max-w-md mx-auto text-center transform hover:scale-105 transition-transform duration-500">
        <h1 className="text-5xl font-bold mb-8">Lawyer Dashboard</h1>
        <nav className="space-y-6">
          <ul className="flex flex-col items-center space-y-4">
            <li>
              <div className="p-6 bg-blue-100 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                <Link to="/view" className="text-2xl font-semibold text-teal-500 hover:text-teal-700">
                  My Appointments
                </Link>
              </div>
            </li>
          
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Lawyerdash;
