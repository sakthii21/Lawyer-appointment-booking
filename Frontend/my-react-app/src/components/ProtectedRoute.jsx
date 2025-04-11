import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  console.log("Toke:",token);
  console.log('Token:', token); // Debugging statement

  if (!token) {
    console.log('Redirecting to login...'); // Debugging statement
    return <Navigate to="/login" replace />;
  }
console.log("TOKEN found");
  return children;
};

export default ProtectedRoute;