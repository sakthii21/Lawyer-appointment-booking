import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FindLawyer = () => {
  const [lawyers, setLawyers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchLawyers();
  }, []);

  const fetchLawyers = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get('http://localhost:3000/client/getlawyers', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setLawyers(res.data);
    } catch (err) {
      console.log("Error in fetching lawyer profiles", err);
    }
  };

  const handleViewProfile = (lawyerId) => {
    navigate(`/lawyerprofile/${lawyerId}`);
  };
return (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-4 p-4">
  {lawyers.map((lawyer) => (
    <div
      key={lawyer.lawyerId}
      className="border rounded-lg p-4 shadow-lg bg-white text-center flex flex-col justify-between  max-w-xs mx-auto"
    >
      <div className="flex-grow flex flex-col items-center">
        <div className="w-32 h-40 mx-auto overflow-hidden rounded-lg">
          <img
            src={lawyer.profilepicture || '/default-profile.png'}
            alt={lawyer.name || 'Lawyer'}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = '/default-profile.png'; 
            }}
          />
        </div>
        <h3 className="mt-4 text-lg font-semibold">
          {lawyer.name || 'No Name'}
        </h3>
        <p className="text-gray-600 text-sm">
          <strong>Specialization:</strong> {lawyer.specialization || 'N/A'}
        </p>
        <p className="text-gray-600 text-sm">
          <strong>Availability:</strong> {lawyer.availability || 'N/A'}
        </p>
      </div>
      <div className="mt-4">
        <button
          onClick={() => handleViewProfile(lawyer.lawyerId)}
          className="w-full bg-red-500 text-white px-4 py-2 rounded-md text-sm"
        >
          View Profile
        </button>
      </div>
    </div>
  ))}
</div>

)}
export default FindLawyer;
