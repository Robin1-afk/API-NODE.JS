const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Estudiante = sequelize.define(
    'Estudiante',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        apellido: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        grado: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        tableName: 'estudiantes', // Asegúrate de usar el nombre correcto de tu tabla
        timestamps: false, // Desactiva createdAt y updatedAt
    }
);

module.exports = Estudiante;
