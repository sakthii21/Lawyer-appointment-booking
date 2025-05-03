# 🧑‍⚖️ **Lawyer Appointment Booking Website**

A powerful **MERN Stack web application** that enables users to **find, book, and manage appointments with lawyers**. This platform includes **secure authentication**, **role-based access**, and an intuitive interface designed for both clients and lawyers.

---

## 🎥 **Live Demo**

🌐 **Deployed Site**: [https://sakthi-lawyer-appointment.netlify.app/](https://sakthi-lawyer-appointment.netlify.app/)

[![Watch the demo](https://github.com/user-attachments/assets/c462d5e7-fa2d-4153-8e7a-cf41853507a8)](https://drive.google.com/file/d/1PY5-hK2XIt7tMcjG8slX5tdqRNcWWsVX/view?usp=drive_link)

---

## 🚀 **Features**

- 🔐 **JWT-based Authentication** for Users and Lawyers
- 🧑‍💼 **Role-Based Access Control** (User / Lawyer / Admin)
- 📅 **Appointment Booking System**
- ⏰ **Schedule Management** by Lawyers
- 🗃️ View **Past & Upcoming Appointments**
- 📱 **Responsive UI** for mobile & desktop

---

## 🛠️ **Tech Stack**

### 🔹 Frontend:
- React.js
- React Router
- Axios
- Tailwind CSS

### 🔹 Backend:
- Node.js
- Express.js
- MongoDB (Mongoose)
- JSON Web Token (JWT)
- Bcrypt.js (Password Hashing)

---

## 📦 **Installation & Setup**

### 1. **Clone the Repository**
```bash
git clone https://github.com/yourusername/lawyer-appointment-booking.git
cd lawyer-appointment-booking
````

### 2. **Backend Setup**

```bash
cd backend
npm install
```

🔐 Create a `.env` file in the `backend/` directory:

```env
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

Start the backend server:

```bash
npm run dev
```

### 3. **Frontend Setup**

```bash
cd ../frontend
npm install
npm start
```

---

## 🔐 **Authentication Flow**

* **Users** can register, login, and book appointments.
* **Lawyers** can manage their availability and see appointments.
* **Admins** can approve/reject lawyer registrations and manage platform data.

---

## 💡 **Future Enhancements**

* Email notifications for appointment confirmations
* Payment gateway integration
* Calendar view for scheduling
* Profile photo upload

---
