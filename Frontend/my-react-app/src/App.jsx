import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import About from './components/About';
import FindLawyer from './components/FindLawyer';
import Lawyerprofile from './components/Lawyerprofile';
import Appointment from './components/Appointment';
import View from './components/View';
import ProtectedRoute from './components/ProtectedRoute';
import Clientdash from './components/Clientdash';
import Lawyerdash from './components/Lawyerdash';
import AppointmentStatus from './components/AppointmentStatus';
import Signup from './components/Signup';


function App() {
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/findlawyer" element={<FindLawyer />} />
        <Route path="/lawyerprofile/:lawyerId" element={<Lawyerprofile />} />
        <Route path="/appointment/:lawyerId" element={<Appointment />} />
        <Route path="/view" element={<View />} />
<Route path="/appointmentstatus" element={<AppointmentStatus />} />
<Route path="/signup" element={<Signup />} />
        <Route path="/clientdash" element={<ProtectedRoute role="client"><Clientdash /></ProtectedRoute>} />


<Route path="/lawyerdash" element={<ProtectedRoute role="lawyer"><Lawyerdash /></ProtectedRoute>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
