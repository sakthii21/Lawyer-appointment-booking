import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AppointmentForm = () => {
  const { lawyerId } = useParams(); // Get lawyerId from URL params
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    issueType: '',
    summary: '',
    urgencyLevel: 'Medium',
    preferredAppointment: {
      date: '',
      time: ''
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // Handle nested fields for preferredAppointment
    if (name.startsWith('preferredAppointment.')) {
      setFormData(prevState => ({
        ...prevState,
        preferredAppointment: {
          ...prevState.preferredAppointment,
          [name.split('.')[1]]: value
        }
      }));
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token'); // Assuming you're using JWT for auth
      await axios.post(`http://localhost:3000/client/appointmentbook/${lawyerId}`, formData, {
        headers: {
          Authorization: `Bearer ${token}` // Include token if required
        }
       
      });
      toast.success('Appointment booking successfully!');
    } catch (err) {
      console.error(err);
     
      toast.error('Appointment booking is not successful');
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url()' }}>
    <div className="p-8  m-8 max-w-lg mx-auto bg-white rounded-lg shadow-lg border border-gray-200">
      <h2 className="text-3xl font-bold mb-6 text-center text-red-500">Book an Appointment</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
      
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border gray-900 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out p-3"
            required
          />
        </div>
        
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border gray-900 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out p-3"
            required
          />
        </div>
       
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border gray-900 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out p-3"
            required
          />
        </div>
       
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            rows="3"
            placeholder="Enter your address (e.g., Street, City, State, ZIP Code, Country)"
            className="w-full border gray-900 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out p-3"
            required
          ></textarea>
        </div>
     
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">Issue Type</label>
          <input
            type="text"
            name="issueType"
            value={formData.issueType}
            onChange={handleChange}
            className="w-full border gray-900 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out p-3"
            required
          />
        </div>
       
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">Summary</label>
          <textarea
            name="summary"
            value={formData.summary}
            onChange={handleChange}
            rows="4"
            className="w-full border gray-900 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out p-3"
            required
          ></textarea>
        </div>
        
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">Urgency Level</label>
          <select
            name="urgencyLevel"
            value={formData.urgencyLevel}
            onChange={handleChange}
            className="w-full border gray-900 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out p-3"
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
       
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">Preferred Appointment Date</label>
          <input
            type="date"
            name="preferredAppointment.date"
            value={formData.preferredAppointment.date}
            onChange={handleChange}
            className="w-full border gray-900 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out p-3"
            required
          />
        </div>
        
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">Preferred Appointment Time</label>
          <input
            type="time"
            name="preferredAppointment.time"
            value={formData.preferredAppointment.time}
            onChange={handleChange}
            className="w-full border gray-900 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out p-3"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-700 transition duration-300 ease-in-out"
        >
          Book Appointment
        </button>
      </form>
      <ToastContainer />
    </div>
    </div>
  );
};

export default AppointmentForm;
