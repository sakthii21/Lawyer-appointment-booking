import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import save from '../assets/save.jpg';

const Lawyerprofile = () => {
  const { lawyerId } = useParams(); // Get the lawyer ID from the URL
  const [lawyer, setLawyer] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLawyer = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get(`http://localhost:3000/client/profile/${lawyerId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setLawyer(res.data);
      } catch (err) {
        console.log('Error fetching lawyer profile', err);
      }
    };

    fetchLawyer();
  }, [lawyerId]);

  if (!lawyer) return <div>Loading...</div>;

  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${save})` }} 
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> 
      
      <div className="relative max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg backdrop-filter backdrop-blur-md bg-opacity-80">
        <div className="flex flex-col md:flex-row items-center">
          
         
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-4xl font-bold text-gray-900">Need Legal Assistance?</h1>
            <p className="text-gray-700 mt-4 text-lg">
              Get the best legal advice and representation from our expert lawyers.
            </p>
            <button
              onClick={() => navigate(`/appointment/${lawyerId}`)}
              className="mt-6 px-8 py-4 bg-red-600 text-white rounded-lg shadow-lg hover:bg-red-700 transition-colors"
            >
              Book an Appointment
            </button>
          </div>

         
          <div className="md:w-1/2 flex flex-col items-center md:items-start md:ml-10">
            <img
              src={lawyer.profilepicture || '/default-profile.png'}
              alt={lawyer.name || 'Lawyer'}
              className="w-35 h-40 object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105"
              onError={(e) => { e.target.src = '/default-profile.png'; }}
            />
            
            <div className="mt-6 text-center md:text-left">
              <h2 className="text-3xl font-bold text-gray-900">{lawyer.name || 'No Name'}</h2>
              <p className="text-gray-700 mt-2">
                <strong>Specialization:</strong> {lawyer.specialization || 'N/A'}
              </p>
              <p className="text-gray-700 mt-2">
                <strong>Experience:</strong> {lawyer.experience || 'N/A'} years
              </p>
              <p className="text-gray-700 mt-2">
                <strong>Mobile:</strong> {lawyer.mobileno || 'N/A'}
              </p>
              <p className="text-gray-700 mt-2">
                <strong>Address:</strong> {`${lawyer.address?.street || 'N/A'}, ${lawyer.address?.city || 'N/A'}, ${lawyer.address?.state || 'N/A'}, ${lawyer.address?.zip || 'N/A'}, ${lawyer.address?.country || 'N/A'}`}
              </p>
              <p className="text-gray-700 mt-2">
                <strong>Availability:</strong> {lawyer.availability || 'N/A'}
              </p>
              <p className="text-gray-700 mt-2">
                <strong>Bio:</strong> {lawyer.bio || 'No bio available'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lawyerprofile;
