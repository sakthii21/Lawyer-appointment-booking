🧑‍⚖️ Lawyer Appointment Booking Website

A web application that enables users to find, book, and manage appointments with lawyers. Built using the MERN Stack (MongoDB, Express.js, React.js, Node.js), this project features authentication, a user-friendly interface, and a robust backend for managing appointments.

 🚀 Features

- 🔐 User and Lawyer Authentication (JWT-based)
- 🧑‍💼 Role-based Access Control (User / Lawyer / Admin)
- 📅 Appointment Booking System
- ⏰ Appointment Schedule Management (by Lawyers)
- 🗃️ View Past & Upcoming Appointments
- ⚙️ Admin Dashboard (for managing users & lawyers)
- 📱 Fully Responsive UI

 🛠️ Tech Stack

Frontend:
- React.js
- React Router
- Axios
- Tailwind CSS 

Backend:
- Node.js
- Express.js
- MongoDB (with Mongoose)
- JSON Web Token (JWT)
- Bcrypt.js (for password hashing)

 📦 Installation

 1. Clone the repository

git clone https://github.com/yourusername/lawyer-appointment-booking.git
cd lawyer-appointment-booking

2. Backend Setup
cd backend
npm install

Create a .env file in the backend/ directory with the following:
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret

Start the backend server:
npm run dev

3. Frontend Setup
cd ../frontend
npm install

Start the React development server:
npm start

🔐 Authentication Flow
Users can register, login, and book appointments.

Lawyers can manage their availability and view appointments.

Admin can approve/reject lawyer registrations and manage the platform.

📁 Folder Structure

├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── middleware
│   └── config
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── utils
│   │   └── App.js
└── README.md
