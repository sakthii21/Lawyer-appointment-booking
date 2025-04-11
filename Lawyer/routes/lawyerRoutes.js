const lawyerController = require('../controllers/lawyerController');
const lawyerprofileController = require('../controllers/lawyerprofilecontroller');
const viewappointment = require('../controllers/viewappointment');
const authlawyer = require('../middleware/lawyerauth')
const acceptappointment = require('../controllers/acceptappointment');
const express = require('express');

const  Router = express.Router();

Router.post('/registerlawyer', lawyerController.registerLawyer);
Router.post('/loginlawyer',lawyerController.loginLawyer);

Router.post('/postprofile',authlawyer ,lawyerprofileController.createprofile);
Router.put('/update', authlawyer,lawyerprofileController.updateprofile);
Router.get('/get',authlawyer,lawyerprofileController.getprofile)
Router.get('/view',authlawyer,viewappointment.view);
Router.patch('/accept/:appointmentId',authlawyer,acceptappointment.accept);

module.exports = Router;