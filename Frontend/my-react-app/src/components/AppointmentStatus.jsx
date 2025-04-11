

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AppointmentStatus = () => {
  const [appointments, setAppointments] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get('http://localhost:3000/client/status', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setAppointments(response.data);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };

    fetchAppointments();
  }, [token]);

  return (
   
      
        <div className="p-8 max-w-5xl mx-auto bg-gray-50 rounded-xl shadow-2xl">
          <h2 className="text-4xl font-extrabold mb-8 text-red-500">Your Appointments</h2>
          {appointments.length === 0 ? (
            <p className="text-gray-700 text-lg">No appointments found.</p>
          ) : (
            <ul className="space-y-8">
              {appointments.map((appointment) => (
                <li
                  key={appointment._id}
                  className="bg-white p-6 border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex flex-col space-y-4">
                    <div className="flex justify-between items-center">
                      <p className="text-lg font-semibold text-gray-800">
                        <strong>Name:</strong> {appointment.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {new Date(appointment.date).toLocaleDateString()}
                      </p>
                    </div>
                    <p className="text-lg text-gray-700">
                      <strong>Time:</strong> {appointment.time}
                    </p>
                    <p
                      className={`text-lg font-medium ${
                        appointment.status === 'Confirmed' ? 'text-green-600' : 'text-red-600'
                      }`}
                    >
                      <strong>Status:</strong> {appointment.status}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      );
    };
    
    export default AppointmentStatus;
    


