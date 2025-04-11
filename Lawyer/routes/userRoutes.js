const userController = require('../controllers/userController');
const express = require('express');

const Router = express.Router();

Router.post('/register', userController.register);
Router.post('/login', userController.login);


module.exports = Router;