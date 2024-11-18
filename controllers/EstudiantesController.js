const Estudiante = require('../models/Estudiantes');

const EstudiantesController = {
    // Obtener todos los estudiantes
    getAllEstudiantes: async (req, res) => {
        try {
            const estudiantes = await Estudiante.findAll();
            res.status(200).json(estudiantes);
        } catch (error) {
            console.error('Error al obtener estudiantes:', error);
            res.status(500).json({ error: 'Error al obtener estudiantes' });
        }
    },

    // Insertar un nuevo estudiante
    createEstudiante: async (req, res) => {
        const { nombre, apellido, grado } = req.body;

        // Validar datos de entrada
        if (!nombre || !apellido || !grado) {
            return res.status(400).json({ error: 'Todos los campos son obligatorios' });
        }

        try {
            const nuevoEstudiante = await Estudiante.create({ nombre, apellido, grado });
            res.status(201).json(nuevoEstudiante);
        } catch (error) {
            console.error('Error al crear estudiante:', error);
            res.status(500).json({ error: 'Error al crear estudiante' });
        }
    },
};

module.exports = EstudiantesController;
