const express = require('express');
const userRoutes = require('./routes/userRoutes')
const lawyerRoutes = require('./routes/lawyerRoutes')
const clientRoutes = require('./routes/clientRoutes')
const cors = require('cors')


const app = express();
app.use(cors());
app.use(express.json());
// app.use(cors({ origin: 'http://localhost:5173' }));
const mongoose = require('mongoose');

const allowedOrigins = ["http://localhost:5173", "http://localhost:5175"];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
}));


mongoose.connect("mongodb+srv://sakthi-user:mernpassword123@recipe.o8rvaih.mongodb.net/consultant?retryWrites=true&w=majority&appName=recipe").then (()=>{
    console.log("mongoDb conncected");
});

app.set('view engine','ejs');

//login register
app.use('/user',userRoutes);
app.use('/lawyer',lawyerRoutes);

//client profiles
app.use('/client',clientRoutes);



app.listen(3000,()=>{
    console.log("server is running on port 3000");
});