const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const authEstudiantes = require('./routes/estudiantes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/estudiantes', authEstudiantes);

// Sincronizar base de datos y levantar el servidor
(async () => {
    try {
        await sequelize.sync(); // Sincroniza los modelos con la base de datos
        app.listen(PORT, () => {
            console.log(`Servidor corriendo en http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
    }
})();
