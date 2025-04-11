import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const View = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get('http://localhost:3000/lawyer/view', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setAppointments(response.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch appointments');
        setLoading(false);
      }
    };

    fetchAppointments();
  }, [token]);

  const handleAccept = async (appointmentId) => {
    try {
      await axios.patch(`http://localhost:3000/lawyer/accept/${appointmentId}`, {}, {
        headers: { Authorization: `Bearer ${token}` }
      });
      toast.success('Appointment accepted!');
      setAppointments(appointments.map(appointment =>
        appointment._id === appointmentId
          ? { ...appointment, status: 'Accepted' }
          : appointment
      ));
    } catch (err) {
      console.error(err);
      toast.error('Failed to accept appointment.');
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Your Appointments</h2>
      {appointments.length === 0 ? (
        <p className="text-gray-600">No appointments found.</p>
      ) : (
        <ul className="space-y-8"> 
          {appointments.map((appointment) => (
            <li key={appointment._id} className="bg-white p-8 border rounded-lg shadow-sm hover:shadow-md transition-shadow mb-6">
              <p className="text-lg font-semibold mb-4 text-gray-700">
                <strong>Client Name:</strong> {appointment.name}
              </p>
              <p className="text-sm text-gray-600 mb-4">
                <strong>Phone:</strong> {appointment.phone}
              </p>
              <p className="text-sm text-gray-600 mb-4">
                <strong>Email:</strong> {appointment.email}
              </p>
              
             
              <p className="text-sm text-gray-600 mb-4">
                <strong>Address:</strong>
                <span className="inline-block bg-gray-100 px-2 py-1 rounded-lg">
                  {appointment.address?.street && `${appointment.address.street}, `}
                  {appointment.address?.city && `${appointment.address.city}, `}
                  {appointment.address?.state && `${appointment.address.state}, `}
                  {appointment.address?.zip && `${appointment.address.zip}, `}
                  {appointment.address?.country && `${appointment.address.country}`}
                </span>
              </p>
              
              <p className="text-sm text-gray-600 mb-4">
                <strong>Issue Type:</strong> {appointment.issueType}
              </p>
              <p className="text-sm text-gray-600 mb-4">
                <strong>Summary:</strong> {appointment.summary}
              </p>
              <p className="text-sm text-gray-600 mb-4">
                <strong>Urgency Level:</strong> {appointment.urgencyLevel}
              </p>
              <p className="text-sm text-gray-600 mb-4">
                <strong>Preferred Appointment:</strong> 
                {new Date(appointment.preferredAppointment.date).toLocaleDateString()} at {appointment.preferredAppointment.time}
              </p>

              <p className="text-sm font-semibold mb-4">
                <strong>Status:</strong>
                <span className={`inline-block px-3 py-1 rounded-full text-white ${appointment.status === 'Pending' ? 'bg-yellow-500' : 'bg-green-500'}`}>
                  {appointment.status}
                </span>
              </p>
              
              
              {appointment.status === 'Pending' && (
                <button
                  onClick={() => handleAccept(appointment._id)}  
                  className="bg-red-600 text-white px-6 py-3 rounded-lg mt-4 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                >
                  Accept Appointment
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
      <ToastContainer />
    </div>
  );
};

export default View;
