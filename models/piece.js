const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Piece = sequelize.define('Piece', {
    sx: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    sy: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    dx: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    dy: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    width: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    height: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        defaultValue: ''
    },
    status: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    index: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
});

module.exports = Piece;
