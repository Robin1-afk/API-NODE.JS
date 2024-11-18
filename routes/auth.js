const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController');

//Resgistro usuario para la prueba
router.post('/register', AuthController.register);
//Login de usuario para la prueba
router.post('/login', AuthController.login);

module.exports = router;
