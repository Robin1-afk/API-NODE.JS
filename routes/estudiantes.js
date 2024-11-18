const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middlewares/auth');
const EstudiantesController = require('../controllers/EstudiantesController');

// Rutas protegidas con 'verifyToken'
router.get('/', verifyToken, EstudiantesController.getAllEstudiantes); // Obtener todos los estudiantes
router.post('/register', verifyToken, EstudiantesController.createEstudiante); // Insertar un nuevo estudiante

module.exports = router;
