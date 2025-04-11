const clientController = require('../controllers/clientController');
const express = require('express');
const Router= express.Router();
const auth = require('../middleware/auth');
const appointment = require('../controllers/appointment');
const viewappointment = require('../controllers/viewappointment');


Router.get('/getprofile',auth,clientController.getClientprofile);
Router.get('/getlawyers',auth,clientController.getLawyerprofiles);
Router.post('/appointmentbook/:lawyerId',auth,appointment.newapp);
Router.get('/profile/:lawyerId',auth,clientController.getprofile);
Router.get('/status',auth,viewappointment.clientview);

module.exports= Router;