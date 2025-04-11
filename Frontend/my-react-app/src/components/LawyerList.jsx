import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LawyerList = () => {
  const [lawyers, setLawyers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchLawyers();
  }, []);

  const fetchLawyers = async () => {
    try {
      const res = await axios.get("http://localhost:3000/lawyer/getall");
      setLawyers(res.data);
    } catch (err) {
      console.log("Error in fetching lawyer profiles", err);
    }
  };

  const handleViewProfile = (lawyerId) => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate(`/lawyerProfile/${lawyerId}`);
    } else {
      navigate('/Login');
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        padding: '20px'
      }}
    >
      {lawyers.map((lawyer) => (
        <div
          key={lawyer.lawyerId}
          style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '15px',
            width: 'calc(33% - 20px)',
            boxSizing: 'border-box',
            backgroundColor: '#fff',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
          }}
        >
          <img
            src={lawyer.profilepicture || 'path/to/default/image.png'}
            alt={lawyer.name || 'Lawyer'}
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '8px'
            }}
            onError={(e) => {
              e.target.src = 'path/to/default/image.png'; // Fallback image
            }}
          />
          <h3
            style={{
              marginTop: '10px',
              marginBottom: '5px',
              fontSize: '18px'
            }}
          >
            {lawyer.name || 'No Name'}
          </h3>
          <p
            style={{
              margin: '5px 0',
              fontSize: '14px',
              color: '#555'
            }}
          >
            <strong>Specialization:</strong> {lawyer.specialization || 'Specialization not available'}
          </p>
          <p
            style={{
              margin: '5px 0',
              fontSize: '14px',
              color: '#555'
            }}
          >
            <strong>Experience:</strong> {lawyer.experience || 'N/A'} years
          </p>
          <p
            style={{
              margin: '5px 0',
              fontSize: '14px',
              color: '#555'
            }}
          >
            <strong>Mobile:</strong> {lawyer.mobileno || 'N/A'}
          </p>
          <p
            style={{
              margin: '5px 0',
              fontSize: '14px',
              color: '#555'
            }}
          >
            <strong>Address:</strong> {lawyer.address?.street || 'N/A'}, {lawyer.address?.city || 'N/A'}, {lawyer.address?.state || 'N/A'}, {lawyer.address?.zip || 'N/A'}, {lawyer.address?.country || 'N/A'}
          </p>
          <p
            style={{
              margin: '5px 0',
              fontSize: '14px',
              color: '#555'
            }}
          >
            <strong>Availability:</strong> {lawyer.availability || 'N/A'}
          </p>
          <p
            style={{
              margin: '5px 0',
              fontSize: '14px',
              color: '#555'
            }}
          >
            <strong>Bio:</strong> {lawyer.bio || 'No bio available'}
          </p>
          <button
            onClick={() => handleViewProfile(lawyer.lawyerId)}
            style={{
              marginTop: '10px',
              padding: '10px 15px',
              border: 'none',
              borderRadius: '4px',
              backgroundColor: '#007bff',
              color: '#fff',
              cursor: 'pointer',
              fontSize: '16px'
            }}
          >
            View Profile
          </button>
        </div>
      ))}
    </div>
  );
};

export default LawyerList;
